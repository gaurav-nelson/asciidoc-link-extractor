'use strict';

module.exports = function asciidocLinkExtractor(asciidocFile) {
    var links = [];

    if (asciidocFile.match(/(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm)) {
        var extractLink = asciidocFile.match(/(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm);
        for (var i = 0; i < extractLink.length; i++) {
            var newLink = extractLink[i];
            // fix for links with spaces or special characters
            if (newLink.slice(-2) === "++") { 
                newLink = newLink.slice(0, -2)
            }
            // fix end
            links.push(newLink);
        }
    }
    if (links[0] != null) {
        links = Array.from(new Set(links));
    }

    return links;

};