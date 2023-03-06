#!/bin/bash

if [[ $# -lt 1 ]]; then
        echo "        Usage is:
	$0 <version> [clean] [api]
	Where:
	  'version' is CrafterCMS version, like 4.0.3
	  'clean' is used to clean prior to build the docs
	  'api' is used to generate the OAS API docs"
        exit 1
fi

VERSION=$1

STUDIO=https://raw.githubusercontent.com/craftercms/studio/v$VERSION/src/main/api/2/studio-api-2.yaml
ENGINE=https://raw.githubusercontent.com/craftercms/engine/v$VERSION/src/main/api/1/engine-api.yaml
DEPLOYER=https://raw.githubusercontent.com/craftercms/deployer/v$VERSION/src/main/api/1/deployer-api.yaml


# Clean if required
if [ "$2" = "clean" ] || [ "$3" = "clean" ]; then
	make clean
fi

# Build the basic structure
make html

if [ "$3" = "api" ] || [ "$2" = "api" ]; then

	# Pull down the spec
	curl -s $STUDIO > /tmp/studio.json
	#curl -s $ENGINE > /tmp/engine.json
	#curl -s $DEPLOYER > /tmp/deployer.json
	
	# Build the OAS spec
	mkdir -p build/html/api

	redoc-cli build -o build/html/api/studio.html /tmp/studio.json
	#redoc-cli build -o build/html/api/engine.html /tmp/engine.json
	#redoc-cli build -o build/html/api/deployer.html /tmp/deployer.json
	
	# Remove temporary files
	rm /tmp/studio.json
	#rm /tmp/engine.json
	#rm /tmp/deployer.json
fi
