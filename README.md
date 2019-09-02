# historyApiFallback.rewrites issue

## Development server
1) `npm i`
2) `ng serve`
3) go to http://localhost:8095/check/user-management/auth and index.html isn't served.
4) If you delete `rewrites` array from historyApiFallback in node_modules/@angular-devkit/build-angular/src/dev-server/index.js it works.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
