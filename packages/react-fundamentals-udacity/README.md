# [React Fundamentals Udacity](https://classroom.udacity.com/nanodegrees/nd019/parts/331aa737-9e87-42e2-8348-f97d51424b1a)

## Why React ?

- Composotional model
- Declarative nature
- How data flows through the component

### What is composition ?

From wikipedia Composition = `to combine simple functions to build more complicated ones`.

We will build functions with another functions, we will change from returning just values, to return some UI with React. So we will be able to begin to built litte independant pieces of code.

See [Composition example](./1-composition-1.js)

We use composiiton to build the `getProfileData` function.
We could have built it providing the data directly. With this composiiton version.
We will be able to reuse the getProfilePic or getProfileLink funcitons in other parts
of the code, and we keep a nice principle called `DOT`: `Do one thing`

In React we will see that we use composition to build complex components:

```jsx
<Page>
  <Article />
  <Sidebar />
</Page>
```

#### Dig deeper on compositions:

- [Compose me That: Function Composition in Javascript](https://www.linkedin.com/pulse/compose-me-function-composition-javascript-kevin-greene/)

. Function composition is a formalized way of thinking about something that is largely considered a good practice is software development, keep your functions short, single purpose and referentially transparent.

. Also is a mathematical conectp. (Pass the result of the function on the right to the left function)
A such that A(3) = 15 and some function B such that B(15) = 22 then some function C that is equal to B compose A (C = B ° A) would be a function that given 3 as argument would return 22 (C(3) = 22).

If you write a function and can't clearly describe what it is doing in a simple, declarative sentence you probably need to refactor that function into multiple functions, or step back and ask what it is you are actually trying to do.

See [example](./2-composition-tutorial/index.js)

- [Functional JavaScript: Function Composition For Every Day Use](https://hackernoon.com/javascript-functional-composition-for-every-day-use-22421ef65a10)
  Remember that fucnction composition is part of the paradigm `functional programming`

If we see the typical online example for `function composition`

```javascript
const add = x => y => x + y;
const multiply = x => y => x * y;
const add2Multiply3 = compose(
  multiply(3),
  add(2)
);
```

This is an ugly example, because, in what ways is this better than: ?

```javascript
const value = (x + 2) * 3;
```

It has its benefits but is very difficult to see that in this example.

`A composable function should have 1 input argument and 1 output value.`

You can turn any function into a composable function by currying the function.

Let's see an example with HTML:

```js
const tag = t => contents => `<${t}>${contents}</${t}>`;
tag("b")("this is bold!") > <b>this is bold!</b>;
```

If you want a bettet example you have it [here](./3-functional-javascript/tag.js).

And the advanced example creating somethig like this:

```html
<ul class="list-group">
  <li class="list-group-item">Cras justo odio</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>
```

can be found [here](./3-functional-javascript/index.js)

But better to see in [codePen](https://codepen.io/joelnet/pen/QdVpwB)

Summary
Function composition requires you to write your functions in a composable way. This means your functions must have 1 input and 1 output. Functions with multiple inputs must be curried.

Composing functions is not only easy but fun too.

You will achieve the highest level of code reuse with function composition.

making our code reusable should always be one of our goals.
My next article will be about composing asynchronous functions. I thought I could fit it all into a single article, but this page got long quickly. So let’s just stop it here. Subscribe so you do not miss out on Part 2!

### Declarative Code

Imperative code from the dictionary means: `expressing a command; commanding`.
When JavaScript code is written imperatively, we tell JavaScript exactly what to do and how to do it.

For example in react, imperative work is a `for ... lop`and a declarative work would be `map` function.

React is declarative because we write the code that we want, and React is in charge of taking our declared code and performing all of the JavaScript/DOM steps to get us to our desired result.

For example, in:

```jsx
<button onClick={activateTeleporter}>Activate Teleporter</button>
```

We don't declare a `.addEventListener()` we just say that we want to run the `activateTeleporter` function to run when the button is clicked.

#### Further research

- [Tyler's Imperative vs Declarative Programming blog post](https://tylermcginnis.com/imperative-vs-declarative-programming/)

- [Difference between declarative and imperative in React.js? from StackOverflow](https://stackoverflow.com/questions/33655534/difference-between-declarative-and-imperative-in-react-js)

## Rendering UI with React

Here we go into the contacts app example so go to the `reactnd-contacts-md-1` branch, and this [README](/packages/reactnd-contacts-app/server/README.md)

## State management

## Rendering UI with External Data

## Managing App Location with React Router

## Project MyReads: A Booking Tracking App

Project is [here](/packages/reactnd-myreads/README.md)

## Webinars content

### Webinar 1: React Dev Tools and lyfecycle events

The code used at the webinar is located [here](/packages/reactnd/lifecycle-events)
The video can be watched at [Youtube](https://www.youtube.com/watch?v=jTDn2UZYx0g&feature=youtu.be)

### Webinar 2: Lifting state

The code used at the webinar is located [here](/packages/reactnd/pagination-filter)
The video can be watched at [Youtube](https://www.youtube.com/watch?v=jTDn2UZYx0g&feature=youtu.be)
