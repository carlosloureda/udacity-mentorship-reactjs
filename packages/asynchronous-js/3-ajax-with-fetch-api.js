const loadScecrets = () => {
  // load dinamically a secrets file
  var script = document.createElement("script"); // create a script DOM node
  script.src = "./secrets.js"; // set its src to the provided URL
  document.head.appendChild(script); // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
  console.log("jquery loaded: ");
};

(function() {
  loadScecrets();
  const form = document.querySelector("#search-form");
  const searchField = document.querySelector("#search-keyword");
  let searchedForText;
  const responseContainer = document.querySelector("#response-container");

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    responseContainer.innerHTML = "";
    searchedForText = searchField.value;

    // Request image from unsplash
    fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`,
      {
        headers: {
          Authorization: `Client-ID ${secrets.UNSPLASH_KEY}`
        }
      }
    )
      .then(response => response.json())
      .then(addImage)
      .catch(err => requestError(err, "image"));

    // Request articles from the New York Times
    fetch(
      `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=${
        secrets.NEW_YORK_TIMES_KEY
      }`
    )
      .then(response => response.json())
      .then(addArticles)
      .catch(err => requestError(err, "articles"));
  });

  /**
   * Adds the image from the response from unplash to the page html
   */
  const addImage = data => {
    let htmlContent = "";
    if (data && data.results && data.results.length > 1) {
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
  };

  /**
   * Adds the articles from The New York Times to the page HTML
   */
  const addArticles = data => {
    let htmlContent = "";
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
  };

  /**
   * Handlers any request error
   */
  const requestError = (e, part) => {
    console.log(e);
    responseContainer.insertAdjacentHTML(
      "beforeend",
      `<p class="network-warning error-${part}">Oh no! There was an error making a request for the ${part}.</p>`
    );
  };
})();
