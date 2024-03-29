# Overview

Code Challenge for Lottoland

Project running with: 
  - Typescript / React
  - Semantic-ui components
  - Stylized with styled-components
  - Static module bundler with Webpack
  - Babel for transpiler code
  - Storybook for preview render modules
  - Atomic Design for methodology of design sytem
  - Testing with Jest
  - Formatter with prettier and lint
  - Heroku proxy added to avoid cors issues

# Setup

Clone project

<code>git clone https://github.com/javigonz/lottoland-app.git</code>

Install dependencies (node v10.x is minimum requirement)

<code>npm install</code>

# Run locally

<code>npm run start</code>

Run in http://localhost:8080

# Coverage

<code>npm run test:coverage</code>

Report docs ready to have a look into test folder

# Lint & Prettier

It checks code with eslint and prettier

<code>npm run lint</code>

<code>npm run prettier</code>

# Storybook

<code>npm run storybook</code>

Run in http://localhost:6006

# Deploy

<code>npm run build</code>

Core code ready to use in dist folder

# Github Workflow

Added automatic workflow in each push action (Steps => lint, test:coverage and build)

# Serverless / AWS deploy

Added serverless depoly into AWS, with Cloudfront and S3 bucket configuration

Deploy in --> https://my-serverless-lottoland-app.s3.amazonaws.com/index.html


