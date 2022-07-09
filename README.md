<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">

## Dependency

```bash
    # dotenv
    $ npm i dotenv

    #typeorm cli
    $ npm install ts-node --save-dev

    #typeorm integration
    $ npm install --save @nestjs/typeorm typeorm pg

```

## Description

Using [Nest](https://github.com/nestjs/nest) framework with Typeorm and PostgreSql creating simple migration project.

add on script:

```json
{
  "typeorm": "node --loader ts-node/esm ./node_modules/.bin/typeorm -d ./src/data-source.ts",
  "migration:generate": "npm run build && npm run typeorm migration:generate ./src/migrations/$npm_config_name",
  "migration:up": "npm run build && npm run typeorm migration:run",
  "migration:down": "npm run typeorm migration:revert && npm run build"
}
```

## Stay in touch

- Author - [Samiul Islam](https://www.linkedin.com/in/samiul-islam-8775b615b/)
