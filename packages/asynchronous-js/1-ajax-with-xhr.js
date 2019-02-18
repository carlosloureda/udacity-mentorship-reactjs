(function() {
  // load dinamically a secrets file
  var script = document.createElement("script"); // create a script DOM node
  script.src = "./secrets.js"; // set its src to the provided URL
  document.head.appendChild(script); // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)

  const form = document.querySelector("#search-form");
  const searchField = document.querySelector("#search-keyword");
  let searchedForText;
  const responseContainer = document.querySelector("#response-container");

  function addImage() {
    let htmlContent = "";
    const data = JSON.parse(this.responseText);

    if (data && data.results && data.results[0]) {
      const firstImage = data.results[0];
      htmlContent = `<figure>
            <img src="${firstImage.urls.regular}" alt="${searchedForText}">
            <figcaption>${searchedForText} by ${
        firstImage.user.name
      }</figcaption>
        </figure>`;
    } else {
      htmlContent = '<div class="error-no-image">No images available</div>';
    }

    responseContainer.insertAdjacentHTML("afterbegin", htmlContent);
  }

  function addArticles() {
    let htmlContent = "";
    const data = JSON.parse(this.responseText);

    if (data.response && data.response.docs && data.response.docs.length > 1) {
      htmlContent =
        "<ul>" +
        data.response.docs
          .map(
            article => `<li class="article">
                <h2><a href="${article.web_url}">${
              article.headline.main
            }</a></h2>
                <p>${article.snippet}</p>
            </li>`
          )
          .join("") +
        "</ul>";
    } else {
      htmlContent =
        '<div class="error-no-articles">No articles available</div>';
    }

    responseContainer.insertAdjacentHTML("beforeend", htmlContent);
  }

  function requestError(e, part) {
    console.log(e);
    responseContainer.insertAdjacentHTML(
      "beforeend",
      `<p class="network-warning error-${part}">Oh no! There was an error making a request for the ${part}.</p>`
    );
  }

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    responseContainer.innerHTML = "";
    searchedForText = searchField.value;

    const imgRequest = new XMLHttpRequest();
    imgRequest.onload = addImage;
    imgRequest.onerror = function(err) {
      requestError(err, "articles");
    };
    imgRequest.open(
      "GET",
      `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`
    );
    imgRequest.setRequestHeader(
      "Authorization",
      `Client-ID ${secrets.UNSPLASH_KEY}`
    );
    imgRequest.send();

    const articleRequest = new XMLHttpRequest();
    articleRequest.onload = addArticles;
    articleRequest.onerror = function(err) {
      requestError(err, "articles");
    };
    articleRequest.open(
      "GET",
      `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=${
        secrets.NEW_YORK_TIMES_KEY
      }`
    );
    articleRequest.send();
  });
})();
