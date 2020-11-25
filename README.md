# api

This project is built in NodeJS and TypeScript

## Getting Started

Then, install dependencies:

```bash
$ npm i
```

## Workflow

Config

Set Bearer token in AUTH_TOKEN const in config.ts file, for prod it should come from something like AWS Secrets Manager

Start a local server:

```bash
$ npm start
```

Run unit tests:

```bash
$ npm test
```


## Notes
1. Unit tests are written for twitterApiGateway. If I had more time would have covered app.ts as well.
