<h1 align="center"> Rentayl Motorcycles </h1>

<h2 align="left"> Virtual demo site for renting motorcycles. </h2>

![Badge en Desarollo](https://img.shields.io/badge/STATUS-MVP-green)

![GitHub Org's stars](https://img.shields.io/github/stars/EnriqueHernandezM?style=social)

# MVC PROJECT

> This app is development in the framework Nest and React whit typescript.

## Because of this project

The first cause and objetive of this project is inprove my skills in TypeScript, Nest.js, React.js and SQL.
Commiting to create a project clean, efficient, secure and scalable either from server side an client side side.

To facilitate development I decided to join both projects in the same repository with Turborep.

## 🟢 User interface deploy AWS3

- http://rentail-motorcycles.s3-website-us-east-1.amazonaws.com/

## 🟢 Server side

- `For now its only in local 🚧 I'm working in it 🚧`

## 🚀 Api rest side requirements project

- Authentication y authorization with Json Web Token.

- Use swagger for server testing.

- Implamate DTO to encapsulement.

- Use decorators and guards of Nest.js

- Crud to interact with db.

- Implamate a db sql.

- Db implement standarddization principes.

- relationing minimun two tables in sql.

## 🚀 Client side requirements project

- Implamate states and context.

- Use fetch to sereverside comunication

- Use firestore to save images

- Store JSON Web Token and night mode in local storage

- Validate forms

- Validation interactive

- Web hosting in aws s3

- Responsive design

- Use Sass to styles

## ⚠️ For now, it's only possible to test the application locally. I'm working on setting up the hosting server and database !!!

# Ejecutar App en local 🔧

## Requirements

- My sql workbench
- Xamp > 8.0
- Node > 16

---

```sh
In Xamp:

1.- Run apache
2.- Run Mysql
```

## For the backend.

```sh
Enter the folder:

- cd apps/api
```

```sh
Add and config yor file .env check the file .envExample:

- cd apps
```

## For the user interface.

```sh
Enter the folder:

- cd apps/client
```

```sh
⚠️ You need to create your own bucket in Firestore!!

Add and config yor file .env check the file .envExampleFront:
```

## To run

```sh
    Return to apps

 cd ..
```

```sh
Install dependencias:

npm i
```

#### Scripts

```sh

 a) npm run dev
```

## Admin account and functions 🚀

⚠️ To create an Admin account, the `?pinToAdmin=\*\*\*\*` must be shared via query parameter in the post create user. ⚠️

```sh
1.- View all available items
2.- Add items
3.- Modify items
3.- Delete items
4.- Create and conecct acount

```

## Building with 🛠️

Implemented Technologies and Libraries

- [Nest.js](https://docs.nestjs.com/) - framework for building server side apps
- [Node.js](https://nodejs.org/es/docs) - Execution enviroment
- [React.js](https://es.react.dev/) - Interface library
- [TypeScript](https://www.typescriptlang.org/) - TypeScript is JavaScript with syntax for types.
- [Sequelize](https://sequelize.org/) - TypeScript and Node.js ORM for Oracle, Postgres, MySQL, MariaDB, SQLite and SQL Server.
- [Sql2](https://www.npmjs.com/package/mysql2) - Driver for db.
- [Tsx](https://www.npmjs.com/package/tsx) - TypeScript Execute
- [Bcrypt](https://openbase.com/js/bcrypt/documentation) - Password hashing function.
- [Cors](https://www.npmjs.com/package/cors) - CORS (Cross-Origin Resource Sharing).
- [Firestore](https://firebase.google.com/) - cloud database
- [Swagger](https://docs.nestjs.com/openapi/introduction) - build use and test RESTful services
- [Class-validator & class transformer](https://docs.nestjs.com/techniques/validation) - Data validation
- [JWT](https://jwt.io/) - secure transmission of information
- [Turborepo](https://turbo.build/) - incremental bundler and build system optimized
- [Sasss](https://sass-lang.com/) -preprocessor css

## Versionig

```sh
0.8.9
```

## Author

```sh
 Enrique Hernandez Montiel
```
