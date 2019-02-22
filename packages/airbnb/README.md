#Airbnb Clone

This project starts up with Yarn Workspace, a TypeGraphQL server. They are from Ben Award Youtube series.

## Step 1
[Setting up yarn workspace and typeGraphQL Server](https://www.youtube.com/watch?v=gsaPh7-YA9Q&index=3&list=PLN3n1USn4xlnfJIQBa6bBjjiECnk6zL6s)

The server code boilerplate is in [github](https://github.com/benawad/graphql-ts-server-boilerplate)
[How it was made](https://www.youtube.com/playlist?list=PLN3n1USn4xlky9uj6wOhfsPez7KZOqm2V)

### PostgresSQL
The server needs postgresSQL running, for tips on [Ubuntu 18](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-16-04).

```
sudo apt-get update
sudo apt-get install postgresql postgresql-contrib

sudo -i -u postgres
psql
```

Once in the postgresSQL prompt: createdb

```
create database "graphql-ts-server-boilerplate-test";
create database "graphql-ts-server-boilerplate";
create user airbnb_user with encrypted password '123456';
GRANT ALL PRIVILEGES ON DATABASE "graphql-ts-server-boilerplate-test" to airbnb_user;
GRANT ALL PRIVILEGES ON DATABASE "graphql-ts-server-boilerplate" to airbnb_user;
```

Now try to run tests with `yarn test`, if you see an error like 'error in uid-generate-v4 extension' you need to run the next commands in psql:

```
\connect "graphql-ts-server-boilerplate-test";
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
\connect "graphql-ts-server-boilerplate";
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
```

Once ```yarn test``` works we can move on.

To run tests locally remember to add in the jest config for the server (in this case located at package.json) the following:

```
"testURL": "http://localhost/",
"testEnvironment": "node",
```


### Redis
[Quick installation guide](https://tecadmin.net/install-redis-ubuntu/)
```sudo apt-get install redis-server```

sudo systemctl status redis
Enter the CLI: ```redis-cli```

If we run yarn install and have redis and postgres running we can run the tests to see if things work.


### Website
We could set the website app with `create-react-app-typescript` boilerplate so we can move fast and with the amazing Typescript.
But now create react app works with typescript so one less problem.

```
yarn create react-app web --typescript
cd web
yarn add typescript @types/node @types/react @types/react-dom @types/jest
```

I had some problems with `jest` configuration, as web and server had different versions, I just removed all the `node_modules/` and updated `/server/package.json` to point to a newwe version of jest as right now I don't know how to have 2 versions of the same package inside a yarn workspaces project.

Test the web with `yarn start` to see if it works.


## Step 2 - Adding React Apollo and React Router

We will be using Apollo Client 2.0, which comes with Apollo Boost:
Apollo Boost is a great way to get started with Apollo Client quickly, but there are some advanced features it doesn’t support out of the box. If you’d like to use subscriptions, swap out the Apollo cache, or add an existing Apollo Link to your network stack that isn’t already included, you will have to set Apollo Client up manually.

So for using subscriptions (hell yeah! :)) let’s walk through how to migrate off of Apollo Boost.

So we are going to do the manual installation:
```
yarn add apollo-client apollo-cache-inmemory apollo-link-http apollo-link-error apollo-link
yarn add react-apollo graphql-tag graphql
```

Now we set up apollo in [apollo.ts](/packages/web/src/apollo.ts)

[**WIP**/NOTE]: As we are using create-react-app with typescript and on the tutorial they use other things, here i didn't have either `tsconfig.json` or `tslint.json` and I added them but thing they are not working, so I will need to revisit this when the project continues.
Also I have a tslint.json on the root folder and later on the folders I am extending it so we don't have things duplicated.

Installing the react router but need to install the typescript types

```
yarn add react-router-dom
yarn add -D @types/react-router-dom
```