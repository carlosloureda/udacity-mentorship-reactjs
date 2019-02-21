# [Client Server Communication](https://classroom.udacity.com/nanodegrees/nd019/parts/a6fb0c7c-5ae4-4c2f-95b3-64052a6b825e)

Teachers:

@DasSurma
@richardkalehoff

# 1. HTTP Requests

Creator of the HTTP protocol: Tim Berners-Lee. He developed the HTML language and designed HTTP to transfer this documents
Hypertext means that can reference multiple documents, this references are called links. Refers to more than texts, files, images ...

The first version of the HTTP was quite simple.

**HTTP Request**

[METHOD][path to document][HTTP version]
_(Headers)_
Host: \* **required**
User-Agent: --
Connection: --
Accept: --
...

**HTTP Response**
[HTTP version][status]
_(Headers)_
Content-length: \* **required**
...
_(The data)_
binary-data

### Getting multiple requests

The browser when retrieves a response from the server, typical index.html with aditional documents to fetch, so here is where we have multiple requests to serve an unique page. [More on converting HTML to the DOM](https://classroom.udacity.com/courses/ud884/lessons/1464158642/concepts/15290985490923), from the **Website Performance Optimization** Course.

### Exercice

Udacity created a bunch of servers to us to use, you need to download them from the **Supporting Materials** section. To check the requests and avoid plugins to interfere or cache, run in incognito mode and disable cache on chrome developer tools.

### POST Request

Forms submition is handle by POST, and they are managed different by proxies or
servers thant GET Requets

### From XHR to Fetch

AJAX lets us ask the server programatically with JavaScript instead of navigating and reloading the whole website. Now we have the Fetch API that simplifies things. Do some exercises with Fetch API. //TODO:

# 2. HTTP Intro

We will see the first version of HTTP. And we will be able to debug server responses and what a RESTful API is.

### Netcat Command

This command is a utility used for sending and receiving messages over a network connection.
`nc google.com 80`
_(Now enter the details of the request)_
`GET / HTTP/1.1`
_(press Enter button twice ...)_

## HTTP Verbs

Every HTTP request begins with a Verb:

- GET
- POST
- PUT
- DELETE
- HEAD: Receives the headers of the response without the data (we can check if we have enough size or some caching)
  Nowadays doing HEAD requests before a request, this would duplicate the number of roundrips
- OPTIONS: Tells us about the methods allowed by the server. Not all the servers have this verb.

## Common Response Headers

`Content-Length` is a header that must be contained in every response and tells the browser the size of the body in the response. This way the browser knows how many bytes it can expect to receive after the header section and can show you a meaningful progress bar when downloading a file.

`Content-Type` is also a non-optional header and tells you what type the document has. This way the browser knows which parsing engine to spin up. If it's an image/jpeg, show the image. It’s text/html? Let’s parse it and fire off the necessary, additional HTTP requests. And so on.

`Last-Modified` is a header that contains the date when the document was last changed. It turned out that the Last-Modified date is not very reliable when trying to figure out if a document has been changed. Sometimes developers will uploaded all files to the server after fixing something, resetting the Last-Modified date on all files even though the contents only changed on a subset. To accommodate this, most servers also send out an ETag. ETag stands for entity tag, and is a unique identifier that changes solely depending on the content of the file. Most servers actually use a hash function like SHA256 to calculate the ETag.

`Cache-Control` is exactly what it sounds like. It allows the server to control how and for how long the client will cache the response it received. Cache-Control is a complex beast and has a lot of built-in features. 99% of the time, you only need the “cacheability“ and the “max-age”.

`If-Modified-Since` permits the server to skip sending the actual content of the document if it hasn’t been changed since the date provided in that header. Is there something similar for ETags? Yes there is! The header is called If-None-Match and does exactly that. If the ETag for the document is still matching the ETag sent in the If-None-Match header, the server won’t send the actual document. Both If-None-Match and If-Modified-Since can be present in the same request, but the ETag takes precedence over the If-Modified-Since, as it is considered more accurate.

There are a lot more headers and a lot to explore. If you want to know more, check out the following information on HTTP headers:

[list of HTTP headers](https://www.google.com/url?q=https://en.wikipedia.org/wiki/List_of_HTTP_header_fields&sa=D&ust=1460140076629000&usg=AFQjCNHMTe05Wkomeyd8bB9GvVrUyuC1Dg)

## REST

**RE**presentational
**S**tate
**T**ransfer

GET /persons/Carlos -> retrieves you Carlos person
PUT /persons/Carlos ->To update the data in the record of Carlos. (updates)
POST /persons/ -> Creates a new record. Usually the response is a redirect
DELETE /persons/Pablo --> Deletes a record.

## Performance Basics

HTTP goes abover for example TCP, above IP, above Ethernet ...
TCP: Allows to have independant streams (ports) in the diferent machines (big impact in permonance)
TCP has the 3-way handshake to begin communications.
IP: Allows to talk to other machines
Ethernet

## Performance Details

(TTFB): Time to First Byte
Head of Line blocking: We need to wait until first request has finished to make a new one. The first person on the
que makes the others wait. Internet browsers let you have 6 parallel connections to the server, this makes things easier,
but still we will see how HTTP/2 solves this things.

To avoid the 3-way-handshake problems, the HTTP/1.1 version added the `Connection: keep-alive` so the server won't close the connection, of course we need to wait until the response is finished. This is why developers put images in sprites and code in bundle.js (jquery.js, angular.js and app.js in one file for example), so we can obtain things in one request.

# 3. HTTPS

It is a way to protect information. As we saw, all the requests in HTML are human readable, so we need to secure things. If we encrypt things we can make things unreadable, but, even with this an `man-in-the-middle` _(MITM)_ attack would also work as he/she can decrypt things and noone will notice, so HTTPS also adds another important method which is _authentication_

We will use a proxy (as a MITM), a proxy helps as by:

- adding additional compression to save bandwidth
- downsampling images
- doing aggresive caching

## TLS and Certificate Authorities

When we talk about HTTPS we talk about HTTP and TSL (Transport Layer Security). TLS can be used by any protocol, it encrypts comunication for 2 hosts, and uses a _chain
of trust_, the server identifies himself by giving some metadata describing itself and a fingerprint of encryption key. This certificates are signed by some certificate authorities, lots of this certificates cost money, so we can use `Let's encrypt` to use TLS for free.
TLS: Encrytion + Hashing

### Cryptograhy Primer

The sender and the receipent need the same key to open things. In this case we have the _encryption key_ and the _decryption key_, the first one is used by any client and the second one is the one that is used by the server, so we have a _public key_ and a _private key_. What a key encrypts is only decrypted by the other key and viceversa.

### TLS: Hashing

Creates a short representation of the orginal text. A hashing process should be impossible to reverse. Also should be unique, not different documents can give the same key. The most used hashed function is SHA (SHA1, SHA256, SHA512)

The browser signs the document and encrypts it, but there are big documents there, so only the hash of the document is encrypted, so if you want to check, you hash the document and compare to the hash you decripted with the public/private key

### The TLS Handshake

The certificate is signed with a Public Key, a Domain by an authority companies. So clients check the 3 fields (the browsers have a list of authority companues.)
To start communications the client after checking the certificate, it generates a random key (for symmetric encrytpion) and encrypts it with the server public key and sends it to the server.
The server will only keep communicating if has the private key to decrypt that public key.

Symmetric encryption benefits:

- faster
- more efficient
- scales better

Certificates have an expiration date, to test browser when there are SSL errors we have `badssl.com`

## Mixed Content

When we open a website that is delivered by HTTPS but uses gets some extra documents from non HTTPS connections. Google recommend to serve everything through HTTPS.

# 4. HTTP 2.0

## HOL: Head of Line Blocking

The problem of HTTP/1 was the Head of Line Blocking _(HOL)_, this is when a request is blocking other requests.
A roundtrip is Request + Response.
Remember that the browser can handle 6 requests in parallel, if a page needs 100 requests to load completely and a round-trip takes 35 ms we can see that the page will load in `(100/6)*35 = 525 ms`, almost have a second of waiting for the page to load. With HTTP 2 we dont have this problem.

## Headers are not compressed

Websites have compressed their documents but the headers are not compressed, in HTTP 1 we can't but in HTTP 2 we are now able

## HTTP/1 Problem: Security

e-commerce and credit cards are now a risk that make us use SSL to make connections secure. HTTP/2 has a lot of improvements

## HTTP/2 Improvements

Now the requests are not in human readable, now they are compressed, we can now use tools like wireshark/dev-tools to read them.
Now we have multiplexing, we have 1 connection instead of the 6 connections from HTTP/1, now this unique connection is used by 'streams' (the old connections), all streams share that common connection and each stream is split up in frames, and are multiplexed to that connectiob. HTTP/2 has also a compressor built for the headers
so the headers like cookies are not sent, they only send the same ' key'.

_multiplexing_: A system or signal involving simultaneous transmission of several messages along a single channel of communication.

## Working with HTTP/2

Now are requests are cheaper, so maybe now creating those big bundles of javasscript will cause more problems, so better to send information splitted so the cache works
more effectively. Also we can reuse the headers, so reaching several servers in our requests will cause us not to reuse those headers. HTTP/2 is backwards compatible.
Check the [Service Workers Course](https://eu.udacity.com/course/offline-web-applications--ud899)

# 5. Security

Besides HTTP/2 adds several security improvements, we need to be aware of some good practices to keep our work safe.


## Origins
origin: schema (http), host(www.udacity.com), port(80)

You can't do fetch request to another requets, well maybe you can but can't read the response :). Also can't see code in iFrames from other origins.
This is the `same origin policy`. Of course there are exceptions to this rules


You can see this in this [example](/example_origins.html)

Of course we want to let people access our site if we are building an API, for this to work we can use a banch of HTML headers called the `CORS` _(Cross Origin Resource Sharing)_. Some old techiques where JSONP (JSON with padding), returns the script data (adds a function for the callback).

## CORS
Allows servers a set of origins allowed to access the resources. This is great with "preflighted" requests, they first send an HTTP request by the OPTIONS method to the resource on the other domain, in order to determine whether the actual request is safe to send. Cross-site requests are preflighted like this since they may have implications to user data.
[More on preflight requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS#Preflighted_requests)

## Security Exploit - CSRF
This security error appears in the form, I don't care what the servers responds, a bad person can set up a website that forges a request of the same URL the form uses and set the parameters so that the money is wired to thar person (in a bank website ...) This kind of attacks is called `Cross-site request forgery` or `CSRF`.

CRSF is token put on the form that is stored on the server and only responds if the tokens match. It is as easy as opening a website to play a game and on button click just throw the request without the user getting to know.

## Security Exploit - XSS
This is related to User's input. Not checking for what the user inserts in the form creates an exploit called `XSS` _(`Cross-site scripting`)_. So we need to validate the user's input always on server side!
