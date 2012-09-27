/*
 * Unit tests for the Getting Started functions.
 */
$(function () {

    var anagram = function (s, t) {
        if (s.length != t.length) {
            return false;
        }
        var a = s.split(""), b = t.split("");
        a.sort(), b.sort();
        for (var i = 0, n = a.length; i < n; i++) {
            if (a[i] != b[i]) {
                return false;
            }
        }
        return true;
    };
    
    function getArrayFromPowersOfTwo(limit) {
        var arr = [];
        powersOfTwo(limit, function (p) {arr.push(p);})
        return arr;
    }
    
    function getArrayFromPowers(base, limit) {
        var arr = [];
        powers(base, limit, function (p) {arr.push(p);})
        return arr;
    }

    test("Change Tests", function () {
        deepEqual(change(97), [3, 2, 0, 2]);
        deepEqual(change(8), [0, 0, 1, 3]);
        deepEqual(change(250), [10, 0, 0, 0]);
        deepEqual(change(0), [0, 0, 0, 0]);
        deepEqual(change(49), [1, 2, 0, 4]);
        deepEqual(change(56), [2, 0, 1, 1]);
    });

    test("Strip Vowels Tests", function () {
        deepEqual(stripVowels("Hello, world"), "Hll, wrld");
        deepEqual(stripVowels(""), "");
        deepEqual(stripVowels("ouT"), "T");
        deepEqual(stripVowels("hello world"), "hll wrld");
        deepEqual(stripVowels("aEIoUou"), "");
        deepEqual(stripVowels("strip_VOWELS"), "strp_VWLS");
    });

    test("Scramble Tests", function () {
        var data = ["a", "rat", "JavaScript testing"]
        data.forEach(function (s) {
            ok(anagram(s, scramble(s)));
        });
    });

    // test powersOfTwo here
    test("Powers of Two Test", function () {
        deepEqual(getArrayFromPowersOfTwo(20), [1,2,4,8,16]);
        deepEqual(getArrayFromPowersOfTwo(1111), [1,2,4,8,16,32,64,128,256,512,1024]);
        deepEqual(getArrayFromPowersOfTwo(0), []);
        deepEqual(getArrayFromPowersOfTwo(5), [1,2,4]);
    });

    // test powers here
    test("Powers Test", function () {
        deepEqual(getArrayFromPowers(2,1111), [1,2,4,8,16,32,64,128,256,512,1024]);
        deepEqual(getArrayFromPowers(3,400), [1,3,9,27,81,243]);
        deepEqual(getArrayFromPowers(4,400), [1,4,16,64,256]);
        deepEqual(getArrayFromPowers(5,0), []);
    });

    // test interleave here
    test("Interleave Test", function () {
        deepEqual(interleave([1, 2], [null, 5, 7, 10]), [1, null, 2, 5, 7, 10]);
        deepEqual(interleave([1, 'a', 'hello'], [null, 23]), [1, null, 'a', 23, 'hello']);
        deepEqual(interleave(['a', 'b', 'c', 'd'], ['e', 'f']), ['a', 'e', 'b', 'f', 'c', 'd']);
        deepEqual(interleave([1], [null, null, null, 'q']), [1, null, null, null, 'q']);
        deepEqual(interleave([1, 2, 3, 4, 5], [2, [3, 4]]), [1, 2, 2, [3, 4], 3, 4, 5]);
        deepEqual(interleave([1, 2, 3, 4, 5], []), [1, 2, 3, 4, 5]);
    });

    // test stutter here
    test("Stutter Test", function () {
        deepEqual(stutter([1, 1]), [1, 1, 1, 1]);
        deepEqual(stutter([1, 2, 3, 4]), [1, 1, 2, 2, 3, 3, 4, 4]);
        deepEqual(stutter([1, [2, 3], 'a']), [1, 1, [2, 3], [2, 3],  'a', 'a']);
        deepEqual(stutter([]), []);
        deepEqual(stutter([null]), [null, null]);
        deepEqual(stutter([1, 'a', null, true]), [1, 1, 'a', 'a', null, null, true, true]);
    });

    // test word count here
    test("Word Count Test", function () {
        deepEqual(wordCount("If you dog a dog, you'll\nbe DOG-TIRED."), {"if":1, "you":1, "dog":3, "a":1, "you'll":1, "be":1, "tired":1});
        deepEqual(wordCount("She sells sea shells by the sea shore!"), {"she":1, "sells":1, "sea":2, "shells":1, "by":1, "the":1, "shore":1});
        deepEqual(wordCount("Buffalo buffalo buffalo Buffalo buffalo buffalo Buffalo buffalo"), {"buffalo":8});
    });
});






