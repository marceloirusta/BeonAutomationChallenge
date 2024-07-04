
# Beon Tech Automation Exercise

## Prerequisites

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)

## About the repo
It includes a API (described below) and UI automation script.
Developed in playwright using typescript, a POM pattern using a page manager to make only one instance of the pages. 

## Installation

After cloning the repo, go to the project directory and install the project with npm

```bash
  npm install
```

## Running the UI automation project

After checking that the previous step has generated the dependencies properly, you should run the test with this command

```bash
npx playwright test --headed 
```

## See the Playwright report
If you want to see the test report just run the following command after the test is completed:
```bash
npx playwright show-report
```

## Running the API automation script
An automation script has been added, it's a postman collection and environment of the following open API http://todo.ly/. The script creates, retreives, updates and deletes a project inside the page (It's like a to do list maker). So you can either import the collection and environment to postman and run them manually or you can proceed by running the following command:

```bash
npx newman run apiTest/script/BeonAPI.postman_collection.json -e apiTest/env/Beon.postman_environment.json
```

