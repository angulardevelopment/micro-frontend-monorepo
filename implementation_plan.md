# Fix Project Execution and Build Errors

## Background Context
The workspace is an Angular 22 / Nx 23 monorepo containing multiple micro-frontend applications (`admin`, `shell`, `gallery`, `dashboard`, `demo`) and a shared library (`shared-data-store`). When attempting to build or run the project (e.g., via `npm run build`, `npm run build:shared-data-store`, `npm run run:all`, or `nx serve`), multiple failures occur:

1. **Angular 19+ / 22 Standalone Component Defaults (`error NG6008`)**:
   - In modern Angular, components default to `standalone: true`. The monorepo uses NgModule-based architectures (`@NgModule({ declarations: [...] })`).
   - `admin` components already have `standalone: false` specified, but components in `shell`, `gallery`, `dashboard`, and `demo` do not, causing builds to fail with `NG6008: Component <Name> is standalone, and cannot be declared in an NgModule`.

2. **Library Configuration Issue in `libs/shared/data-store`**:
   - `package.json` contains `"build:shared-data-store": "nx build shared-data-store"`, but `libs/shared/data-store/project.json` omitted the `"name"` property, causing Nx to name it `"data-store"` by default, leading to `Cannot find project 'shared-data-store'`.
   - In Nx 23, `"outputs": ["dist/libs/shared/data-store"]` fails schema validation: outputs must start with `{workspaceRoot}/` or `{projectRoot}/`.

3. **Nx Cloud 401 Authentication & Latency**:
   - `nx.json` is configured with `"runner": "@nrwl/nx-cloud"` with an expired accessToken, causing every Nx command to delay on network requests and throw a 401 error (`This workspace is more than three days old and is not connected...`). Changing the runner to `nx/tasks-runners/default` allows fast, offline local caching.

4. **Missing Workspace Definition for Module Federation (`run:all`)**:
   - `npm run run:all` invokes `@angular-architects/module-federation/src/server/mf-dev-server.js`, which checks for `angular.json` or `workspace.json`. Because newer Nx repos only use individual `project.json` files, `npm run run:all` aborts immediately with `This needs to be started in the root of an Angular project!`. Providing `angular.json` enables `run:all` to discover and run all micro-frontends.

---

## Proposed Changes

### 1. Fix Angular Component Declarations (`standalone: false`)

Add `standalone: false` to all components declared in `NgModule` declarations across apps:

#### [MODIFY] [apps/shell/src/app/app.component.ts](file:///c:/demoapps/angulardevelopment/micro-frontend-monorepo/apps/shell/src/app/app.component.ts)
- Add `standalone: false` to `@Component` decorator.

#### [MODIFY] [apps/shell/src/app/home/home.component.ts](file:///c:/demoapps/angulardevelopment/micro-frontend-monorepo/apps/shell/src/app/home/home.component.ts)
- Add `standalone: false` to `@Component` decorator.

#### [MODIFY] [apps/gallery/src/app/app.component.ts](file:///c:/demoapps/angulardevelopment/micro-frontend-monorepo/apps/gallery/src/app/app.component.ts)
- Add `standalone: false` to `@Component` decorator.

#### [MODIFY] [apps/gallery/src/app/entry/entry.component.ts](file:///c:/demoapps/angulardevelopment/micro-frontend-monorepo/apps/gallery/src/app/entry/entry.component.ts)
- Add `standalone: false` to `@Component` decorator.

#### [MODIFY] [apps/dashboard/src/app/app.component.ts](file:///c:/demoapps/angulardevelopment/micro-frontend-monorepo/apps/dashboard/src/app/app.component.ts)
- Add `standalone: false` to `@Component` decorator.

#### [MODIFY] [apps/dashboard/src/app/components/canvas-box/canvas-box.component.ts](file:///c:/demoapps/angulardevelopment/micro-frontend-monorepo/apps/dashboard/src/app/components/canvas-box/canvas-box.component.ts)
- Add `standalone: false` to `@Component` decorator.

#### [MODIFY] [apps/demo/src/app/app.component.ts](file:///c:/demoapps/angulardevelopment/micro-frontend-monorepo/apps/demo/src/app/app.component.ts)
- Add `standalone: false` to `@Component` decorator.

---

### 2. Configure `libs/shared/data-store`

#### [MODIFY] [libs/shared/data-store/project.json](file:///c:/demoapps/angulardevelopment/micro-frontend-monorepo/libs/shared/data-store/project.json)
- Add `"name": "shared-data-store"` so `nx build shared-data-store` finds the project.
- Update `"outputs"` in build target to `["{workspaceRoot}/dist/libs/shared/data-store"]`.
- Update `"outputs"` in test target to `["{workspaceRoot}/coverage/libs/shared/data-store"]`.

---

### 3. Update Nx Runner Configuration

#### [MODIFY] [nx.json](file:///c:/demoapps/angulardevelopment/micro-frontend-monorepo/nx.json)
- Switch `tasksRunnerOptions.default.runner` to `nx/tasks-runners/default` to eliminate the 401 error and network delays.

---

### 4. Create `angular.json` for Module Federation Dev-Server

#### [NEW] [angular.json](file:///c:/demoapps/angulardevelopment/micro-frontend-monorepo/angular.json)
- Define workspace mapping pointing to each app's `project.json` path (`admin`, `dashboard`, `demo`, `gallery`, `shell`) so `npm run run:all` (`mf-dev-server.js`) can discover apps, their ports, and serve them concurrently.

---

## Verification Plan

### Automated Verification
Run build commands across projects to verify they succeed cleanly:
1. `npm run build -- shell` - Verify shell builds without NG6008 errors.
2. `npm run build -- dashboard` - Verify dashboard builds without NG6008 errors.
3. `npm run build -- gallery` - Verify gallery builds without NG6008 errors.
4. `npm run build:shared-data-store` - Verify shared-data-store builds and outputs correctly.
5. `npm run run:all` test check - Verify `mf-dev-server.js` detects the workspace projects properly.






UI components in isolation

npm install -g nx
npm install -g @nrwl/cli
npx create-nx-workspace



nx g @nx/angular:storybook-configuration - For nx monorepo projects
nx g @nx/angular:storybook-configuration project-name

nx g @nrwl/angular:storybook-configuration - For nrwl monorepo projects

