
# Todo list with CRA

This project is build with Create React App, Typescript, Redux Toolit Query to manage both the local state and the server TailwindCSS with DaisyUI plugin.
I've built a simple NestJS app to make it the Back-end API for the CRUD operations. Since I want to synchronize both the server state and the app state. I've deployed 2 version to simulate the dev environment and the production environment.

## Tech Stack

**Client:** React, Typescript, Redux-Toolkit, TailwindCSS

**Server:** NestJS deployed to heroku.

## Environment Variables

To run this project from your local machine, you will need to add the following environment variables to your .env file.
Please create an `.env.development.local` file in the root directory.

`REACT_APP_API_ENDPOINT=https://tdl-api-dev.herokuapp.com/`

## Installation

Install this project with yarn

```bash
  yarn start
```

## Demo

Link: <https://to-do-app-olive-kappa.vercel.app>

## Things to do if I have more time

* Setup E2E testing with Cypress.
* Implementing Docker.
* Setup fake auth.
* Setup husky script.
* Implementing twin-macro.
