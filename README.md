
# React Next.js Boilerplate and Starter Kit

This starter kit was built to improve the developer experience by enforcing the latest and best code practices. 

It focuses on setting up testing and code tools to help you build high-performant, high-quality, and production-ready web applications.

- Inherits from the [official Create Next App boilerplate](https://nextjs.org/docs/api-reference/create-next-app) with the aim of using the recommended Next.js configuration.
- Minimal boilerplate code, only includes the Next.js example generated by the create-next-app cli
- It encourages you to set performance budgets to keep your application as much performant as possible
- It encourages you to write Unit and E2E tests
- It doesn't include any UI Library, so is up to you configuring the one better fit your needs.
- By default works with the [default Next.js Built-in CSS support](https://nextjs.org/docs/basic-features/built-in-css-support)

### What is included?

- [Next.js](https://nextjs.org/docs/getting-started) for Static-site generation and Server-side rendering
- Performance testing using [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- Bundle Size testing using [size-limit](https://github.com/ai/size-limit). 
> Size Limit is a performance budget tool for JavaScript. It checks every commit on CI, calculates the real cost of your JS for end-users and throws an error if the cost exceeds the limit.
- Type checking using [TypeScript](https://www.typescriptlang.org/)
- Linter using [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) extended from the base [Next.js Eslint Config with Core Web Vitals](https://nextjs.org/docs/basic-features/eslint#core-web-vitals)
- Code Formatter using [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/#/) for Git Hooks
- [Lint-staged](https://github.com/okonet/lint-staged) for running linters on Git staged files
- Lint git commits using [Commitlint](https://github.com/conventional-changelog/commitlint) following the [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0/)
- Unit Testing using [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) with code coverage report
- E2E Testing using [Cypress](https://www.cypress.io/) with code coverage report
- Combine E2E and Unit Testing coverage reports for unified coverage reports

- Absolute Imports using @ prefix
- [Webpack Bundle Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

### Requirements
- Node.js 16.x
- NPM

### Getting started
#### Clone the repository

1. `git clone --depth=1 https://github.com/matthxc/next-react-boilerplate my-project-name`
2. `cd my-project-name`
3. `npm install`

#### Running locally
`npm run dev`

#### Deploy to production
You can see the results locally in production mode with:
1. Build and generate production files inside the .next/ folder: `npm run build`
2. Run a production-mode server: `npm run start`

Please follow the [official Next.js guide for Deployment](https://nextjs.org/docs/deployment)

#### Performance Budgets
1. Bundle Size Limit: You can customize the performance budget for the generated bundles in the file `.size-limit.json` to fit your needs. You can be very specific, creating file size limits for each file, or more general checking for all the files contained within a folder. More details about using size-limit are [here](https://github.com/ai/size-limit)
2. Lighthouse: You can customize the budgets for your Lighthouse Metrics in the file `.lighthouserc.js`. You can set limits for specific metrics like LCP time, or limits for the overall Lighthouse score. I recommend taking a look at the [official Lighthouse CI docs](https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md#assert) on how to use it and all the available options in it.

#### Commands
1. `npm run build:test`: Sets `NODE_ENV=test` and Builds the application with Source Maps especially useful when generating coverage reports.
2. `npm run build:analyze`: Visualize size of webpack output files with an interactive zoomable treemap using [Webpack Bundle Analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer)
3. `npm run export`: [Static HTML Export](https://nextjs.org/docs/advanced-features/static-html-export)
4. `npm run lint`: Run linters for JavaScript, TypeScript, CSS and SASS files
5. `npm run lint:fix`: Fixes linter issues for JavaScript, TypeScript, CSS and SASS files
6. `npm run lint:js`: Runs Eslint for JavaScript and TypeSript files
7. `npm run lint:js:fix`: Fixes Eslint issues for JavaScript and TypeScript files
8. `npm run lint:css`: Runs Stylelint for CSS and SASS files
9. `npm run lint:css:fix`: Fixes Styelint issues for CSS and SASS files
10. `npm run prettier`: Search for code formatting issues using [Prettier](https://prettier.io/)
11. `npm run prettier:fix`: Fixes code formatting issues using [Prettier](https://prettier.io/)
12. `npm run jest`: Runs unit tests using Jest. It generates a coverage report inside the folder `./jest-coverage`
13. `npm run test`: Checks for linter and code formatting issues and then run the unit tests using Jest. It generates a coverage report inside the folder `./jest-coverage`
14. `test:e2e:run:novideo`: Run E2E tests using Cypress without recording the tests
15. `test:e2e:headless`: Run E2E tests using Cypress in headless mode (without opening a chrome window)
16. `test:e2e:open`: Opens the Cypress window to run each scenario manually (Useful when debugging the tests)
17. `test:e2e`: Starts the application, wait for the URL to respond, and then open the Cypress window to run each scenario manually. You should build the application before. It generates a coverage report inside the folder `./cypress-coverage`
18. `test:e2e:run`: Starts the application, wait for the URL to respond, and then Run E2E tests using Cypress in headless mode. You should build the application before. It generates a coverage report inside the folder `./cypress-coverage`. This command is especially helpful for CI/CD pipelines
19. `npm run test:perf`: Runs the Lighthouse performance tests using [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci). The application should be running.
20. `npm run test:perf:run`: Starts the application, wait for the URL to respond, and then Run the Lighthouse performance tests using [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci). You should build the application before. This command is especially helpful for CI/CD pipelines
21. `npm run test:bundlesize`: Builds the application and then checks for each generated bundle and compares it with the performance budget (placed on the `.size-limit.json` file) to see if it exceeds the limit.
22. `npm run cover:report`: Combines the E2E and Unit Tests coverage reports into one and is place it in the `./coverage` folder to check the overall test coverage of all the tests.
