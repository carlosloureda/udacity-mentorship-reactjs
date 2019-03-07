
## Part 1: Web Fundations

### HTML & CSS Syntax
Environment: Plain text editors, IDE (integrated development environment)
I will use Visual Studio Code. Browsers at least have Google Chrome and Mozilla installed
Explanantion about trees, like children are childs of a parent, and siblings between each of them, so the HTML will become as a tree (DOM)

The best reference for HTML is [MDN HTML Element Reference page](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

Basic HTML squeleton
--------------------

All of the HTML syntax that you’ve learned in this lesson will help you create the content of the page, which is always contained inside the <body> tags. The <body> is always visible.

The `<head>`, on the other hand, is never visible, but the information in it describes the page and links to other files the browser needs to render the website correctly. For instance, the `<head>` is responsible for:

the document’s title (the text that shows up in browser tabs):
```html
 <title>About Me </title>
```
Associated CSS files (for style):
```html
<link rel="stylesheet" type="text/css" href="style.css">
```

Associated JavaScript files (multipurpose scripts to change rendering and behavior):
```html
<script src="animations.js"></script>
```

The charset being used (the text's encoding):
```html
<meta charset="utf-8">
```
keywords, authors, and descriptions (often useful for SEO):
```html
<meta name="description" content="This is what my website is all about!">
```

At this point, just focus on these two tags:

```html
<title>About Me</title>
<meta charset="utf-8">
```
`<meta charset="utf-8">` is pretty standard, and will allow your website to display any Unicode character. (Read more on how UTF-8 works here.) <title> will define the title of the document and will be displayed in the tab of the browser window when a user visits the page.

Another tool: [HTML Validator](https://validator.w3.org)


### Animal Trading Cards

### Reponsive Design

### Practice with Responsive Design

### Writing READMEs

### Build a Portfolio Site