Angular CLI's new build system apart from webpack


ESBuild is a modern JavaScript bundler and minifier written in Go. ESBuild can bundle and minify JavaScript, TypeScript, and JSX files at an incredible speed, making it an excellent choice for optimizing build processes.

This setup is for nodejs project currently

npm install esbuild --save-dev

Transpile ESM to CommonJS using esbuild
create esbuild.config.js

node -v


ES Modules in the browser probably with the help of webpack or a module bundler.


// CJS - CommonJS Modules
const utils = require('../utils')
const funcA = () => {}
const funcB = () => {}
module.exports = { funcA, funcB }
// ESM - or ES6 Modules
import { utilA } from '../utils/index.js'
export const funcA = () => {}
export const funcB = () => {}

Do this:
import something from './something.js'
Don’t do this:
import something from './something'

Do this:

import * as utils from '../utils/index.js'
Don’t do this:

import * as utils from '../utils'

Do this:

export const funcA = () => {}
export const funcB = () => {}
Don’t do this:

const funcA = () => {}
const funcB = () => {}
export default {
  funcA,
  funcB
}

If your codebase or dependencies are ESM, use import rather than require().
Check your Node.js version and consider using "type": "module" in package.json if your project is ESM-based.

    "options": {"forceEsbuild":true}, -> angular.json
 under serve section angular > 16

In Angular v15 esbuild support only
 ng build and ng build --watch

 In v17 we shipped a vite and esbuild-based application builder and enabled it for new projects by default. 

 "build": {
-      "executor": "@angular-builders/custom-webpack:browser",
+      "executor": "@angular-devkit/build-angular:browser-esbuild",
    }

    Performance benchmark -> webpack or esbuild or vite