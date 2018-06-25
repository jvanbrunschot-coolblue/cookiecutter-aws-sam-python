SHELL := /bin/bash

build:
	cd ./src && npm install

pull_request: build
	cd ./src && npm run lint && npm run test

pre_package:
	cd ./src && npm install --production

post_package:

pre_deploy:

post_deploy:

start_local:
	sam local start-api --template cloudformation.yaml --env-vars local.env.json
