/**
 * @param {string} s
 * @return {number}
 */
function reverseDegree(s) {
    let reversedAlphabetOrder = {};

    for (let i = 0; i < 26; i++) {
        reversedAlphabetOrder[String.fromCharCode(97 + i)] = 26 - i;
        
    }
    
    let sum = 0;
    
    for(i=0;i<s.length;i++) {
        let index = i + 1;
        let alpha = reversedAlphabetOrder[s[i]];
        sum = sum + index * alpha;
    }
    
    return sum;
}