#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkApplicaitonServerlessStack } from '../lib/cdk-applicaiton-serverless-stack';

const app = new cdk.App();
new CdkApplicaitonServerlessStack(app, 'cdk-application-serverless', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION 
  }
});