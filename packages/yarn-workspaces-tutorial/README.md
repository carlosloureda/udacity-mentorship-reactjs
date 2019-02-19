#Yarn workspaces test project for typescript project

Project name: @aceituna.

## Basic structure to hold 2 packages in the same project.

(First commit)

Create a folder for the project `yarn-workspaces-tutorial`, add a private package.json and 2
workspaces (common and server), init them with `yarn init -y`

Create a function on common/index.js and export it, try to import it from server as
it where a npm module. To work we need to add 'common' as a dependency in the server
package.json and run yarn install. Now we can use that module.

They are synced so a changed move ammong the modules. We can set better naming.
Instead of name "common", tell it "@aceituna/common" (the project name is aceituna, spanish fruits names)

In root package.json I had this:

```
"workspaces": [
    "common",
    "server"
]
```

But if we move the packages to a folder named packages, we can tell yarn where are all our packges easier:

```
"workspaces": [
    "packages/*",
]
```

If we add an external module on server module, you will see that the node_modules is not inside that fodler,
instead a big node_module on the root folder.

## React & React Native on the same repo

The medium articles I followed for this part can be found [here](https://medium.com/viewstools/how-to-use-yarn-workspaces-with-create-react-app-and-create-react-native-app-expo-to-share-common-ea27bc4bad62)

### Web

Create a `create-react-app` folder `web` and a `create-react-native-app` `app` on
packages. For the web we need this dependencies:

react-app-rewire-yarn-workspaces
react-app-rewired

We change the react-scripts to react-app-rewired inside the package.json scripts in
web/package.json

Create the file `config-overrides.js`. Modifies the react webpack configuration and makes it work with yarn workspaces
From the previous code I update common to have a function so we can call it from react web and react native the function is add.

### App

<!-- TODO: Not working .... :( -->

For the React Native part, we need to change the contents of app.json for expo with this new content:

```json
{
  "expo": {
    "name": "@aceituna React app",
    "sdkVersion": "32.0.0",
    "ignoreNodeModulesValidation": true,
    "packagerOpts": {
      "config": "rn-cli.config.js",
      "projectRoots": ""
    }
  }
}
```

Install some dependencies:

```
yarn add --dev metro-bundler-config-yarn-workspaces crna-make-symlinks-for-yarn-workspaces
```

Create the `rn-cli.config.js` file with the contents from the medium article (with path changes)

Add `"prestart": "node link-workspaces.js"` to the scripts section of the package.json. This creates
some node_modules symlicks

Thanks to Ben Awad for his YouTube tutorials
