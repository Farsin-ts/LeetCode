/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
function findTheDifference(s, t) {
    let charCodeSum = 0;

    for (let char of t) {
        charCodeSum += char.charCodeAt(0);
    }

    for (let char of s) {
        charCodeSum -= char.charCodeAt(0);
    }

    return String.fromCharCode(charCodeSum);
}
