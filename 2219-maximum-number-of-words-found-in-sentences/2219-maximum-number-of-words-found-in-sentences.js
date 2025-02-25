/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let maxWords = 0;
    
    for (let i = 0; i < sentences.length; i++) {
        const wordCount = sentences[i].split(" ").length;
        if (wordCount > maxWords) {
            maxWords = wordCount;
        }
    }
    
    return maxWords;
};