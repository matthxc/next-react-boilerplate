# React and Next.js Boilerplate and Starter Kit with TypeScript

Clone this project and use it to create your own Next.js project

What is included?

- [Next.js](https://nextjs.org/docs/getting-started) for Static-site generation and Server-side rendering
- Type checking using [TypeScript](https://www.typescriptlang.org/)
- Linter using [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) extended from the base [Next.js Eslint Config with Core Web Vitals](https://nextjs.org/docs/basic-features/eslint#core-web-vitals)
- Code Formatter using [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/#/) for Git Hooks
- [Lint-staged](https://github.com/okonet/lint-staged) for running linters on Git staged files
- Lint git commits using [Commitlint](https://github.com/conventional-changelog/commitlint) following the [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0/)
- Unit Testing using [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) with code coverage report
- E2E Testing using [Cypress](https://www.cypress.io/) with code coverage report
- Combine E2E and Unit Testing coverage reports for unified coverage reports
- Bundle Size Test using [size-limit](https://github.com/ai/size-limit). 

> Size Limit is a performance budget tool for JavaScript. It checks every commit on CI, calculates the real cost of your JS for end-users and throws an error if the cost exceeds the limit.

- Absolute Imports using @ prefix
- [Webpack Bundle Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- Performance test using [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)

### Requirements
- Node.js 16.x
- NPM

### Getting started
#### Clone the repository

1. `git clone --depth=1 https://github.com/ixartz/Next-js-Boilerplate.git my-project-name`
2. `cd my-project-name`
3. `npm install`

#### Running locally
`npm run dev`

#### Deploy to production
You can see the results locally in production mode with:
1. Build and generate production files inside the .next/ folder: `npm run build`
2. Run a production-mode server: `npm run start`

Please follow the [official Next.js guide for Deployment](https://nextjs.org/docs/deployment)
