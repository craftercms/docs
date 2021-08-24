'use strict';

import plugins       from 'gulp-load-plugins';
import yargs         from 'yargs';
import browser       from 'browser-sync';
import gulp          from 'gulp';
import panini        from 'panini';
import rimraf        from 'rimraf';
import yaml          from 'js-yaml';
import fs            from 'fs';
import webpackStream from 'webpack-stream';
import webpack2      from 'webpack';
import named         from 'vinyl-named';

var sass = require('gulp-sass')(require('sass'));

// Load all Gulp plugins into one variable
const $ = plugins();
const uglify = require('gulp-uglify-es').default;

// Check for --production flag
const PRODUCTION = !!(yargs.argv.production);

// Check for --!!(yargs.argv.production); flag
const SPHINXBLD = !!(yargs.argv.sphinx);

// Load settings from settings.yml
const { COMPATIBILITY, PORT, UNCSS_OPTIONS, PATHS } = loadConfig();

function loadConfig() {
  console.log('Is production', PRODUCTION, SPHINXBLD);
  let ymlFile = fs.readFileSync(SPHINXBLD ? 'crafter.yml' : 'config.yml', 'utf8');
  return yaml.load(ymlFile);
}

// Build the "dist" folder by running all of the below tasks
gulp.task('build:custom',
 gulp.series(clean, gulp.parallel(sphinx, sassCompile, javascript, images, copy), rmDistSCSS));

gulp.task('build:update-css', sassCompile);

gulp.task('build', gulp.series(
  clean,
  gulp.parallel(pages, sassCompile, javascript, images, copy),
  rmDistSCSS));

// Build the site, run the server, and watch for file changes
gulp.task('default',
  gulp.series('build', server, watch));

// Delete the "dist" folder
// This happens every time a build starts
function clean(done) {
  rimraf(PATHS.dist, done);
}

function rmDistSCSS(done) {
  rimraf(PATHS.dist + '/static/scss', done);
}

// Copy files out of the assets folder
// This task skips over the "img", "js", and "scss" folders, which are parsed separately
function copy() {
  return gulp.src(PATHS.assets)
    .pipe(gulp.dest(PATHS.dist + '/static'));
}

// Copy page templates into finished HTML files
function pages() {
  return gulp.src('src/pages/**/*.{html,hbs,handlebars}')
    .pipe(panini({
      root: 'src/pages/',
      layouts: 'src/layouts/',
      partials: 'src/partials/',
      data: 'src/data/',
      helpers: 'src/helpers/'
    }))
    .pipe(gulp.dest(PATHS.dist));
}

function sphinx() {
    return gulp.src('src/sphinx/**/*.*')
        .pipe(gulp.dest(PATHS.dist));
}

// Load updated HTML templates and partials into Panini
function resetPages(done) {
  panini.refresh();
  done();
}

// Compile Sass into CSS
// In production, the CSS is compressed
function sassCompile() {
  return gulp.src('src/static/scss/app.scss')
    .pipe($.sourcemaps.init())
    .pipe(sass({
      includePaths: PATHS.sass
    })
      .on('error', sass.logError))
    .pipe($.autoprefixer({
      BROWSERSLIST: COMPATIBILITY
    }))
    //.pipe($.if(PRODUCTION, $.uncss(UNCSS_OPTIONS))) // <-- Uncomment to run UnCSS in production
    .pipe($.if(PRODUCTION, $.cleanCss({ compatibility: 'ie9' })))
    .pipe($.if(!PRODUCTION, $.sourcemaps.write()))
    .pipe(gulp.dest(PATHS.dist + '/static/css'))
    .pipe(browser.reload({ stream: true }));
}

let webpackConfig = {
  module: {
    rules: [
      {
        test: /.js$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  mode: 'production'
}
// Combine JavaScript into one file
// In production, the file is minified
function javascript() {
  return gulp.src(PATHS.entries)
    .pipe(named())
    .pipe($.sourcemaps.init())
    .pipe(webpackStream(webpackConfig, webpack2))
    .pipe($.if(PRODUCTION, uglify()
      .on('error', e => { console.log(e); })
    ))
    .pipe($.if(!PRODUCTION, $.sourcemaps.write()))
    .pipe(gulp.dest(PATHS.dist + '/static/js'));
}

// Copy images to the "dist" folder
// In production, the images are compressed
function images() {
  return gulp.src('src/static/img/**/*')
    .pipe($.if(PRODUCTION, $.imagemin({
      progressive: true
    })))
    .pipe(gulp.dest(PATHS.dist + '/static/img'));
}

// Start a server with BrowserSync to preview the site in
function server(done) {
  browser.init({
    server: PATHS.dist, port: PORT
  });
  done();
}

// Reload the browser with BrowserSync
function reload(done) {
  browser.reload();
  done();
}

// Watch for changes to static assets, pages, Sass, and JavaScript
function watch() {
  gulp.watch(PATHS.assets, copy);
  gulp.watch('src/pages/**/*.html').on('all', gulp.series(pages, browser.reload));
  gulp.watch('src/{layouts,partials}/**/*.html').on('all', gulp.series(resetPages, pages, browser.reload));
  gulp.watch('src/static/scss/**/*.scss').on('all', sassCompile);
  gulp.watch('src/static/js/**/*.js').on('all', gulp.series(javascript, browser.reload));
  gulp.watch('src/static/img/**/*').on('all', gulp.series(images, browser.reload));
}
