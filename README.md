
ng serve demo  
ng serve admin 
ng s dashboard
 ng s shell    
 
admin - progress bar
demo - zego   https://exquisite-youtiao-816f4d.netlify.app/
gallery - in use
shell - in use
dashboard - three


nx.dev
nx.app
nx.dev/angular
nx.dev/getting-started/intro
nx.dev/react-tutorial/01-create-application
nx.dev/community

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

Run `ng g @nrwl/angular:app my-app` to generate an application.
Run `ng g @nrwl/angular:lib my-lib` to generate a library.

Libraries are shareable across libraries and applications. They can be imported from `@test/mylib`.

ng g c components/canvas-box --project=dashboard
Run `ng g component my-component --project=my-app` to generate a new component.

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.
