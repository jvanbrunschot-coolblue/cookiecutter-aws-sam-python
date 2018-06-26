SHELL := /bin/bash

build:
	npm install --prefix ./code ./code

pull_request: build
	npm run lint --prefix ./code
	npm run test --prefix ./code

pre_package:
	npm install --production --prefix ./code ./code

post_package:

pre_deploy:

post_deploy:

start_local:
	sam local start-api --template cloudformation.yaml
