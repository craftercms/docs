#!/usr/bin/env bash

echo "Running build"
webpack --config webpack.prod.js

echo "Deleting prior build"
rm -rf ../source/_themes/sphinx_rtd_theme

echo "Copying theme build to docs sources"
cp -rf sphinx_rtd_theme ../source/_themes

git add ../source/_themes/sphinx_rtd_theme

echo "Build finished"