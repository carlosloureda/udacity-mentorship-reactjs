Step 1: - Draw pages (2)
--> pages: 2 - The main view with the books - The searh view .. - think of components (2)
--> Create a BOOK component
--> Create a BOOKSHELF component

Step 2: Get Book API info

This is the book data:

{
allowAnonLogging: true,
authors: ["William E. Shotts, Jr."],
averageRating: 4,
canonicalVolumeLink: "https://market.android.com/details?id=book-nggnmAEACAAJ",
categories: ["COMPUTERS"],
contentVersion: "1.2.2.0.preview.2",
description: "You've experienced the shiny, point-and-click surface of your Linux computer—now dive below and explore its depths with the power of the command line. The Linux Command Line takes you from your very first terminal keystrokes to writing full programs in Bash, the most popular Linux shell. Along the way you'll learn the timeless skills handed down by generations of gray-bearded, mouse-shunning gurus: file navigation, environment configuration, command chaining, pattern matching with regular expressions, and more. In addition to that practical knowledge, author William Shotts reveals the philosophy behind these tools and the rich heritage that your desktop Linux machine has inherited from Unix supercomputers of yore. As you make your way through the book's short, easily-digestible chapters, you'll learn how to: _ Create and delete files, directories, and symlinks _ Administer your system, including networking, package installation, and process management _ Use standard input and output, redirection, and pipelines _ Edit files with Vi, the world’s most popular text editor _ Write shell scripts to automate common or boring tasks _ Slice and dice text files with cut, paste, grep, patch, and sed Once you overcome your initial "shell shock," you'll find that the command line is a natural and expressive way to communicate with your computer. Just don't be surprised if your mouse starts to gather dust. A featured resource in the Linux Foundation's "Evolution of a SysAdmin"",
id: "nggnmAEACAAJ",
imageLinks: {smallThumbnail: "http://books.google.com/books/content?id=nggnmAEAC…J&printsec=frontcover&img=1&zoom=5&source=gbs_api", thumbnail: "http://books.google.com/books/content?id=nggnmAEAC…J&printsec=frontcover&img=1&zoom=1&source=gbs_api"},
industryIdentifiers: [
{type: "ISBN_13", identifier: "12345645465"}
],
infoLink: "https://play.google.com/store/books/details?id=nggnmAEACAAJ&source=gbs_api",
language: "en",
maturityRating: "NOT_MATURE",
pageCount: 480,
panelizationSummary: {containsEpubBubbles: false, containsImageBubbles: false},
previewLink: "http://books.google.com/books?id=nggnmAEACAAJ&dq=linux&hl=&cd=3&source=gbs_api",
printType: "BOOK",
publishedDate: "2012",
publisher: "No Starch Press",
ratingsCount: 2,
readingModes: {text: true, image: false},
shelf: "currentlyReading",
subtitle: "A Complete Introduction",
title: "The Linux Command Line",
}

Basic:

{
imageLinks: {
smallThumbnail:
"http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
},
shelf: "currentlyReading",
subtitle: "A Complete Introduction",
title: "The Linux Command Line",
ratingsCount: 2,
allowAnonLogging: true,
averageRating: 4,
authors: ["William E. Shotts, Jr."],
categories: ["COMPUTERS"],
language: "en",
pageCount: 480
},

This are the endpoints:

Welcome to the Book Lender API!

    Use an Authorization header to work with your own data:

    fetch(url, { headers: { 'Authorization': 'whatever-you-want' }})

    The following endpoints are available:

    GET /status
    GET /books
    GET /books/:id
    PUT /books/:id { shelf }
    POST /search { query, maxResults }

Step 3:

- Divide starter code into components

Step 4:

- Add Router

Step 5:

- Load books from API

Step 6:

- Move Books from shelf

Step 7: Add search books

> Optimistic UI ...

    https://medium.com/@_erikaybar/optimistic-ui-updates-in-react-9e139ffa2e45

> Transitions
