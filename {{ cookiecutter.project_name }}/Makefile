SHELL := /bin/bash

pull_request:
	npm install
	npm run lint
	npm run test

pre_package:
	npm install --production
	rm -rf ./code/tests # remove tests directory for production package
	# cp -R node_modules ./code/

post_package:

pre_deploy:

post_deploy:
