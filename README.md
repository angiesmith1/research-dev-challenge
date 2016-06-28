# research-dev-challenge - a developer challenge for the research team

This challenge is being used by the research team to evaluate candidates.  It is derived from angular-seed 
[https://github.com/angular/angular-seed](https://github.com/angular/angular-seed).

## Getting Started

To get started simply clone the research-dev-challenge repository and install the dependencies:

### Clone research-dev-challenge

```
git clone https://github.com/angiesmith1/research-dev-challenge.git
cd research-dev-challenge
```

### Install Dependencies

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/`.  You will see further instructions on the home page.

## Directory Layout

```
app/                    --> all of the source files for the application
  app.min.css           --> default stylesheet
  integers/                --> the integers view template and logic
    integers.html            --> the partial template
    integers.js              --> the controller logic
    integers_test.js         --> tests of the controller
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
  index-async.html      --> just like index.html, but loads js files asynchronously
karma.conf.js         --> config file for running unit tests with Karma
```

### Running Unit Tests

The unit tests are written in [Jasmine][jasmine], which we run with the [Karma Test Runner][karma]. We provide a
 Karma configuration file to run them.

* the configuration is found at `karma.conf.js`
* the unit tests are found next to the code they are testing and are named as `..._test.js`.

The easiest way to run the unit tests is to use the supplied npm script:

```
npm test
```
