'use strict';

function uniq(a) {
    var prims = {
            "boolean": {},
            "number": {},
            "string": {}
        },
        objs = [];

    return a.filter(function (item) {
        var type = typeof item;
        if (type in prims)
            return prims[type].hasOwnProperty(item) ? false : (prims[type][item] = true);
        else
            return objs.indexOf(item) >= 0 ? false : objs.push(item);
    });
}


module.exports = function asciidocLinkExtractor(asciidocFile) {
    var links = [];

    if (asciidocFile.match(/(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm)) {
        var extractLink = asciidocFile.match(/(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm);
        for (var i = 0; i < extractLink.length; i++) {
            var newLink = extractLink[i];
            links.push(newLink);
        }
    }
    if (links[0] != null) {
        links = uniq(links);
    }

    return links;

};