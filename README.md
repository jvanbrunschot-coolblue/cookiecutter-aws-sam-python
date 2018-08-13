# Cookiecutter SAM for Node JS SAM deployments

This is a [Cookiecutter](https://github.com/audreyr/cookiecutter) template to create a Serverless App based on Serverless Application Model (SAM) and Node JS.

It is important to note that you should not try to `git clone` this project but use `sam` CLI instead as ``{{cookiecutter.project_name}}`` will be rendered based on your input and therefore all variables and files will be rendered properly.

## Requirements

Install `aws-sam-cli` as described [here](https://hosting-and-deployment.cool.blue/#/aws/lambda/README?id=aws-sam-cli)

## Usage

Generate a new SAM based Serverless App: `sam init --location gh:coolblue-development/cookiecutter-nodejs-sam`.

You'll be prompted a few questions to help this cookiecutter template to scaffold this project and after its completed you should see a new folder at your current path with the name of the project you gave as input. This project is contains a **very simple** 'Hello World' application which is able to deploy using the Coolblue default SAM pipelines.

## Options

Option | Description
--- | ---
`project_name` | The name of the project
`project_short_description` | A short description of the project
`project_app_group` | The app_group of this application
