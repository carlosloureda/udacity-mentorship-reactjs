# [Asynchronous Javasript (From Udacity)](https://classroom.udacity.com/nanodegrees/nd019/parts/c5795c43-ebd1-4da9-8af9-db1c95ccf9e4)

Ajax: Maje a request, and don't wait for the results and move to something else.
Now is a conecpt that hasn't got much to do with the original acronysm

## Ajax with XHR

GET Request: A request in internet to fetch some data
Response:The server's response to a request.
Callbacks: Those instructions I leave apart so they are done after the request has a response for the server.

History ==> Complete synchronous --> XMLHTTP (Microsoft) --> XMLHttpRequest --> AJAX (2005, XMLHttpRequest "renamed")

Now responses are more JSON (instead of HTML or XML) so it would be like AJAJ
XHR : Asynchronous request
Where does the data come from, from an API? Application Programming Interface

### The XHR Object

Javascript engine offers things like `document` or in this case `XMLHttpRequest` object.
With this object we create a JS object for creating AJAX requests.

```javascript
const asyncRequestObject = new XMLHttpRequest();
asyncRequestObject.open("GET", "https://unsplash.com");
asyncRequestObject.send();
```

We need to do things with the request, so we need to add handlers for success or failure

```javascript
function handleSuccess() {
  console.log(this.responseText);
  // the HTML of https://unsplash.com/
}

function handleError() {
  console.log("An error occurred 😞");
}

const asyncRequestObject = new XMLHttpRequest();
asyncRequestObject.open("GET", "https://unsplash.com");
asyncRequestObject.onload = handleSuccess;
asyncRequestObject.onerror = handleError;
asyncRequestObject.send();
```

You can launch this code in the browser or if you are using a node server,
install XMLHttpRequest package and require it.

We are going to create an app that connects with unplash and the new york times.
For launching this page run index.html on the browser (see that `1-ajax-with-xhr.js` is loaded at the end of the file and the other scripts commented)

## Ajax with JQuery

For jQuery example, see `2-ajax-with-jquery.js` and on `index.html` source code check
that only script 2 is loaded, comment out the others

```javascript
<!-- <script src="1-ajax-with-xhr.js"></script> -->
<script src="2-ajax-with-jquery.js"></script>
<!-- <script src="3-ajax-with-fetcha-api.js"></script> -->
```

jQuery has come to the rescue in the times where browsers didn't standarize on functionality.
In JQuery we use the `$.ajax()` method. It accepts some arguments or a settings object.

```javascript
$.ajax({
  url: "https://swapi.co/api/people/1/"
});
```

As in XHR we need to handle the responses:

```javascript
function handleResponse(data) {
  console.log("the ajax request has finished!");
  console.log(data);
}
$.ajax({
  url: "https://swapi.co/api/people/1/"
}).done(handleResponse);
```

Now is when the conversion from the old code to the JQuery one gets simpler.

With the jQuery code:

- we do not need to create an XHR object
- instead of specifying that the request is a GET request, it defaults to that and we just provide the URL of the resource we're requesting
- instead of setting onload, we use the .done() method

A cool thing from JQuery is that it detects the response and if it's JSON, it will automatically convert it to JavaScript for us.

Try to inspect the call stack with the chrome DevTools, it provides is the JavaScript Call Stack. This displays the order of function calls that are in progress. The function at the bottom of the stack is the first one to run. It calls the second one on the stack...the second calls the third, the third… you get the idea. A function stays on the stack until the one above it returns.

Once you inspect the callStack you will understand how JQuery uses XHR in its insides.

jQuery has a number of other methods that can be used to make asynchronous calls. These methods are:

- .get()
- .getJSON()
- .getScript()
- .post()
- .load()

## Ajax with Fetch
