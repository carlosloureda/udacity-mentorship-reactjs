# Webinar 4: Redux Dev Tools

- [Official tools git](https://github.com/zalmoxisus/redux-devtools-extension)
  https://github.com/reduxjs/redux-devtools

## Intro

Available for:

- Chrome
- Firefox
- Standalone app
- React Component (on the client app)

Docs: http://extension.remotedev.io/

## how to instal it

From the previous hello world app:

> git checkout -b adding_dev_tools

- From the startup we can see that things don't work. Just add the `window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()` as a last argument to the createStore factory function. For applying with middleware, go to http://extension.remotedev.io/#12-advanced-store-setup

## Examples to run (from the official docs):

- [Counter}(http://zalmoxisus.github.io/examples/counter/)
- [TodoMVC}(http://zalmoxisus.github.io/examples/todomvc/)
- [Redux Form}(http://redux-form.com/6.5.0/examples/simple/)
- [React Tetris}(https://chvin.github.io/react-tetris/?lan=en)
- [Book Collection (Angular ngrx store)}(http://ngrx.github.io/example-app/)

To enable tracing action calls, you should set `trace` option to `true` for Redux DevTools enhancer. Refer to [this page](https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/Features/Trace.md) for more details

<!-- TODO: Learn how to set up this -->

- Articles: https://medium.com/@zalmoxis/improve-your-development-workflow-with-redux-devtools-extension-f0379227ff83

* Hot Reloading with Time Travel

[Abramov video](https://www.youtube.com/watch?v=xsSnOQynTHs)

> Pause button
> Lock changes:

    The other benefit of locking is that we finally have a solution to avoid side effects (we could even auto lock changes while time travelling).

> Como usar dev tools en production (ejemplo tetris) https://medium.com/@zalmoxis/using-redux-devtools-in-production-4c5b56c5600f
> (tienen un paquete ya para usar en produccion, ademas npos permite indicar las caracteristicas que querremos usar en la extensión)

- Cosas interesantes del [autor](https://twitter.com/mdiordiev):

  - Poder acceder a tus propios datos -> https://twitter.com/mdiordiev/status/766967925752279040/photo/1?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E766967925752279040&ref_url=https%3A%2F%2Fmedium.com%2Fmedia%2F766ec378258026b91ca628ed9cccd787%3FpostId%3D4c5b56c5600f

- You shouldn’t store sensitive data inside the states. If so, use actionSanitizer / stateSanitizer options. It’s also useful to strip huge payloads included in the action or state objects (for example, an uploaded image blob).

- Permite acceder en remoto al debug de tus clientes: What if we want the end-users to help the debugging
  To get reports from your end-users in production, use [redux-remotedev](https://github.com/zalmoxisus/redux-remotedev) enhancer. It’s standalone, so your users don’t need to install the extension to provide more details about an issue there.

  What does this tool? Receive logs/reports from production and get them replicated with Redux DevTools extension

## Guides

- https://codeburst.io/redux-devtools-for-dummies-74566c597d7
  <!-- TODO: Add as a resource -->
- https://medium.com/@samueldinesh/setting-up-redux-devtools-a-simple-guide-3b386a6254fa

## Commits

1. Adding without package -> 70e4765
2. Adding with package -->

   yarn add -D redux-devtools-extension

3. Mis notas y los videos de YouTube:
   - https://www.youtube.com/watch?v=Jy-xXB8O12I
   - https://www.youtube.com/watch?v=-XQ2zCdxw0I
