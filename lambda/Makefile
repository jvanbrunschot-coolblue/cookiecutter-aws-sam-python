SHELL := /bin/bash

build:
	npm install

pull_request: build
	npm run lint && npm run test

pre_package:
	npm install --production

post_package:

pre_deploy:

post_deploy:

start_local:
	sam local start-api --template cloudformation.yaml --env-vars local.env.json
