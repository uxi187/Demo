# client-frontend-tests
Cypress BDD test suite 

### Installing

After project is cloned successfully it is needed to run **npm install** to get /node_modules and have installed all dependencies

```sh
$ npm install
```

---

### Running tests

Config files are stored under **cypress/config/** folder. It is possible to specify as many environments file as you want. Selecting config file is mandatory in format  **--env configFile=<config_name>** 

Using command line: 
```sh
$ npx cypress-tags run -e TAGS='@idmngmt' --env configFile=dev 
```

Tags should be used for selecting which tests to run. Currently all features are tagged with @idmngmt tag. 
By default tests are run in Electron browser. To run tests in Chrome use:


```sh
$ npx cypress-tags run -e TAGS='@idmngmt' --env configFile=dev --browser chrome
```

---

### Configuring Circle CI

Circle yaml file should look like: 
```sh
version: 2.1
orbs:
  # "cypress-io/cypress@1" installs the latest published
  # version "1.x.y" of the orb. We recommend you then use
  # the strict explicit version "cypress-io/cypress@1.x.y"
  # to lock the version and prevent unexpected CI changes
  cypress: cypress-io/cypress@1
workflows:
  build:
    jobs:
      - cypress/run:
      	 executor: cypress/browsers-chrome69
         command: npx cypress-tags run -e TAGS='@idmngmt' --env configFile=dev --browser chrome

          
          

```
Reference to configure .yml file:
- https://circleci.com/orbs/registry/orb/cypress-io/cypress
- https://docs.cypress.io/guides/guides/continuous-integration.html#CircleCI
- https://github.com/cypress-io/cypress-example-circleci-orb/blob/master/.circleci/config.yml


---


