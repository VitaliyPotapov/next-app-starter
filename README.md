# next-app-starter

[![lint](https://github.com/VitaliyPotapov/next-app-starter/actions/workflows/lint.yaml/badge.svg)](https://github.com/VitaliyPotapov/next-app-starter/actions/workflows/lint.yaml)
[![unit-tests](https://github.com/VitaliyPotapov/next-app-starter/actions/workflows/unit-tests.yaml/badge.svg)](https://github.com/VitaliyPotapov/next-app-starter/actions/workflows/unit-tests.yaml)
[![react](https://img.shields.io/badge/react-v17-orange)](https://github.com/VitaliyPotapov/next-app-starter/blob/main/package.json)
[![@takeda/ui](https://img.shields.io/badge/%40takeda%2Fui-v3.4.0-orange)](https://github.com/VitaliyPotapov/next-app-starter/blob/main/package.json)

This is a [Next.js](https://nextjs.org/) app template. It allows to bootstrap new projects with the followings features out-of-box:

- Intergation with [takeda/ui](https://github.com/oneTakeda/takeda-exp-components) package
- Appropriate code-styling with [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/)
- CSS styling with [Tailwind](https://tailwindcss.com/)
- Unit testing with [Vitest](https://vitest.dev/)
- Authentication with [Azure AAD](https://learn.microsoft.com/en-us/azure/active-directory/develop/msal-overview)
- GitHub actions for PR checks and deployment

You can check live demo here: `https://tbd`

## Contents

<!-- toc -->

- [Local Development](#local-development)
- [Branching Model](#branching-model)
- [PRs and Code Review](#prs-and-code-review)
- [Unit Testing](#unit-testing)
- [E2E Testing](#e2e-testing)
- [Deploy Process](#deploy-process)

<!-- tocstop -->

## Local Development

1. Ensure you have [Node.js](https://nodejs.org/) v16 installed
   ```
   node -v
   ```
2. Clone repo
   ```
   git clone https://github.com/VitaliyPotapov/next-app-starter
   ```
3. [Setup private npm registry](https://onetakeda.atlassian.net/wiki/spaces/TWS/pages/3702325393/Setup+.npmrc+for+JFrog+private+registry)
4. Install dependencies
   ```
   npm i
   ```
5. Create a `.env.local` file with local environment variables
   ```
   tbd
   ```
6. Run development server
   ```
   npm run dev
   ```
7. Open http://localhost:3000

## Branching Model

This project uses [trunk-based development](https://trunkbaseddevelopment.com/). There are the following branches:

- `main` - long-lived branch with actual codebase
- `release/x.x` - release branches for pre-production code-freeze, regression testing and deploy
- all other branches are short-lived feature branches named as `prj-xxx-new-feature`

## PRs and Code Review

- Target your pull-requests to `main` branch
- Request code review [using GitHub](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review)
- Get at least 1 approve before merge

## Unit Testing

tbd

## E2E Testing

tbd

## Deploy Process

tbd

## License
