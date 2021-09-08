echo ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
echo ">>> Starting app build"
echo ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
echo ""

# Build
gulp build:custom --sphinx --production

echo "Deleting prior build"
rm -rf ../../source/craftercms_sphinx_theme

echo "Copying theme to docs sources"
cp -rf ./craftercms_sphinx_theme ../../source/craftercms_sphinx_theme

git add ../../source/craftercms_sphinx_theme

echo "Delete build output directory"
rm -rf ./craftercms_sphinx_theme

echo ""
echo "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<"
echo "<<< Build completed successfully :)"
echo "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<"
