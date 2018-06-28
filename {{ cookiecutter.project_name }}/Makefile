SHELL := /bin/bash

build:
	npm install --prefix ./code ./code

pull_request: build
	npm run lint --prefix ./code
	npm run test --prefix ./code

pre_package:
	rm -rf ./code/tests # remove tests directory for production package
	npm install --production --prefix ./code ./code

post_package:

pre_deploy:

post_deploy:

start_local:
	sam local start-api --template cloudformation.yaml

dev_package:
	aws cloudformation package \
	    --template-file cloudformation.yaml \
	    --output-template-file packaged.yaml \
	    --s3-bucket {{ cookiecutter.dev_bucket }} \
	    --profile development

dev_deploy:
	aws cloudformation deploy \
	    --template-file packaged.yaml \
	    --stack-name {{ cookiecutter.project_name.lower().replace(' ', '-') }} \
	    --capabilities CAPABILITY_IAM \
	    --profile development
