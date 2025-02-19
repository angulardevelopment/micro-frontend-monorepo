Storybook for Angular is a tool for developing and testing Angular UI components in isolation from the app’s business logic and context.

Benefits of Using Storybook for Angular

Component Isolation
Centralized Visual Documentation
Reusable Components
Quicker UI development
Customizable UI
Addon Ecosystem
Seamless Integration with third-party tools

npm install -g nx
npm install -g @nrwl/cli
npx create-nx-workspace

npx storybook init  - For normal project use this command

nx g @nx/angular:storybook-configuration - For nx monorepo projects
nx g @nx/angular:storybook-configuration project-name

nx g @nrwl/angular:storybook-configuration - For nrwl monorepo projects

nx run storybook

After adding this It will automatically update angular.json if it is a monorepo it will update project.json and all see thus
@storybook/angular:start-storybook, @storybook/angular:build-storybook

Storybook runs alongside your app in development mode. It helps you build UI components isolated from the business logic and context of your app

Mainly we add in monorepos (nx)
