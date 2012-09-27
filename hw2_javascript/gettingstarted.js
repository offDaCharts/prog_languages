//File to declare all of the getting started homework functions

function change(cents) {
    /*Function to make change of a given value
    * Accepts a number of cents
    * Returns and array of the number of quarters, dimes, nickels, and pennies 
    */
    var quarters = Math.floor(cents / 25);
    cents = cents % 25;
    var dimes = Math.floor(cents / 10);
    cents = cents % 10;
    var nickels = Math.floor(cents / 5);
    cents = cents % 5;
    var pennies = cents;
    return [quarters, dimes, nickels, pennies];
}

function stripVowels(str) {
    //Function that accepts a string and returns it with all vowels removed
    return str.replace(/[aeiou]/gi, '');
}

function scramble(str) {
    //Function that randomly scrambles a given string and returns it
    return str.split('').sort(function() {return 0.5 - Math.random();}).join().replace(/,/g, '');
}

function powersOfTwo(num, callback) {
    /*Accepts a limit number and a callback function and generates all powers of 2
    * up to that limit and passes them to the callback function
    */
    var power = 1;
    while (power <= num) {
        callback(power)
        power = power << 1;
    }
}

function powers(base, num, callback) {
    /*Accepts a base and a limit number and a callback function and generates all powers of
    * the given base up to the limit and passes them to the callback function
    */
    var power = 1;
    while (power <= num) {
        callback(power)
        power = power * base;
    }
}

function interleave(a, b) {
    /*Accepts 2 arrays and returns a new array composed of alternating values from each array
    * If one arrays is longer than the other, appends the rest of that arrays elements to the
    * end of the returned array
    */
    var result = [];
    var short = a.length < b.length ? a.length : b.length;
    for(var i = 0; i < short; i++) {
        result.push(a[i], b[i]);
    }
    return result.concat(a.slice(short, a.length), b.slice(short, b.length));
}

function stutter(arr) {
    //Accepts an array and returns a new array with every element repeated
    var result = [];
    for(var i = 0; i < arr.length; i++) {
        result.push(arr[i], arr[i]);
    }
    return result;
}

function wordCount(str) {
    /*Accepts a string of words and returns an object that with a field for each unique word in
    * string.  Each field has how many times the string occured in the given string
    */
    var arr = str.toLowerCase().split(/[^a-z'']/);
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != "") { 
            if (obj[arr[i]] == null) {
                obj[arr[i]] = 1;
            } else{
                obj[arr[i]] +=1;
            }
        }
    }
    return obj;
}