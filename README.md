# asciidoc-link-extractor

Extracts hyperlinks from asciidoc files.

## Installation

    npm install --save asciidoc-link-extractor

## API

### asciidocLinkExtractor(asciidocFile)

Parameters:

* `asciidocFile` is a string in asciidoc format.

Returns:

* an array containing all hyperlinks from the file.

## Example Usage

```javascript

"use strict";

var fs = require('fs');
var asciidocLinkExtractor = require(asciidoc-links-extractor);

var asciidocFile = fs.readFileSync("./test.adoc").toString();

var links = asciidocLinkExtractor(asciidocFile);

links.forEach(function (link) {
    console.log(link);
});

```