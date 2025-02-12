/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let b = s.trim().split(/\s+/)

    let c = b.reverse('').join(' ')

    return c;
};