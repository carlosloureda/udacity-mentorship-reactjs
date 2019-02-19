#Yarn workspaces test project for typescript project

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

Thatnks to Ben Awad for his YouTube tutorials
