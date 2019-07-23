# Sphinx-Doc theme for Crafter CMS

This repo contains the necessary assets to develop and deploy the python package that powers the Crafter CMS 
Sphinx Docs theme.

A Gulp-powered build helps local development without `make html` to view the every change, making it easier 
to work on the front end of the theme. This system as the following features:

- Handlebars HTML templates with Panini
- Sass compilation and prefixing
- JavaScript module bundling with webpack
- Built-in BrowserSync server
- For production builds:
  - CSS compression
  - JavaScript compression
  - Image compression

## Local Theme Development

### Prerequisites

To use this, you need:

- [NodeJS](https://nodejs.org/en/) (0.12 or greater)
- [Git](https://git-scm.com/)
- [Yarn](https://yarnpkg.com/en)
- Python, twine and pip
- Foundation cli: `yarn global add foundation-cli`
- Run `yarn` to initialize the project (FYI. this is the equivalent to `npm install` in the yarn world)

### Running the dev server

Run `foundation watch`

### Development

The above will start the dev server and watch for changes. The important files to get started and 
understanding are `src/layouts/default.html` and `src/pages/index.html`. These two are the markup 
that renders what you see as soon as you run the watch. Index is what contains the test content to 
work on styling.

At `src/assets/*` you'll find the other important parts ([s]css, js, imgs).

As for the sphinx theme itself, see `src/sphinx`.

## Build

- Run `yarn crafter`. This will update the `craftercms_sphinx_theme` directory which is the python
package to be built and published to PyPI

#### Extra credit

https://packaging.python.org/tutorials/distributing-packages
