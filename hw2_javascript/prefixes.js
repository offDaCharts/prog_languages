function createDiv(str, i, interval) {
    /*Appends the string the the document and increments counter if less
    * than length of string
    * Else stops the inveral call
    */
    if (i <= str.length) {
        $('body').append('<div>' + str.slice(0,i) + '</div>');
        i++;
    } else {
        clearInterval(interval);
    }
    return i;
}

function prefixes(str) {
    /*Adds a prefix of the string as a div to the document every second
    * Starting at the empty string and going up to the full string
    */
    var i = 0;
    var interval = setInterval(function () {
        i = createDiv(str, i, interval);
    }, 1000);     
}