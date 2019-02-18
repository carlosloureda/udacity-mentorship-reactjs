function handleSuccess() {
  const data = JSON.parse(this.responseText); // convert data from JSON to a JavaScript object
  console.log(data);
}

function handleError() {
  console.log("An error occurred 😞");
}

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const asyncRequestObject = new XMLHttpRequest();
asyncRequestObject.open("GET", "https://unsplash.com");
asyncRequestObject.onload = handleSuccess;
asyncRequestObject.onerror = handleError;
asyncRequestObject.send();
