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

## Ajax with JQuery

## Ajax with Fetch
