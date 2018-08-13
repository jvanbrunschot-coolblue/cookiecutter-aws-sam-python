# {{ cookiecutter.project_name }}

{{ cookiecutter.project_short_description }}

## Requirements

* [Docker installed](https://www.docker.com/community-edition)
* [SAM Local installed](https://hosting-and-deployment.cool.blue/#/aws/lambda/README?id=aws-sam-cli)

## Invoking locally

```
echo "1" | sam local invoke -t cloudformation.yaml Function
```

## Content

### Build scripts

The scripts used in the standardized pipelines: `build.sh` & `Makefile` are used together to; for example lint, test and build code.

The `Makefile` contains logic (hooks) used in the build pipelines:

**pull_request**: Used during the pull_request step in TeamCity; run tests, linters here.

**pre_package**: Used during packaging of your application, install dependencies, remove unnecessary files. Try to keep the deployable package as small as possible.

**post_package**: N/A

**pre_deploy**: N/A

**post_deploy**: Can be used for running `acceptance` tests.

### CloudFormation

The `cloudformation.yaml` file contains all resources you need to provision your environment in AWS.
Since everything in AWS is environment driven you need to use parameter files to deploy the CloudFormation.
Place a parameter file per environment in the `cloudformation` directory name `<environment>.parameters.json`.

### Code

Your code lives in the **code** directory. For this cookiecutter, we put ours tests inside the code directory.
The structure we use here is an example, you are able to structure the code to your preference.
