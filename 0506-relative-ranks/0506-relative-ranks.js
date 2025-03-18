/**
 * @param {number[]} score
 * @return {string[]}
 */
function findRelativeRanks(score) {
    
    const sortedIndices = score
        .map((value, index) => [value, index]) 
        .sort((a, b) => b[0] - a[0]); 

    const result = new Array(score.length);

    
    for (let rank = 0; rank < sortedIndices.length; rank++) {
        const [_, index] = sortedIndices[rank]; 

        if (rank === 0) {
            result[index] = "Gold Medal";
        } else if (rank === 1) {
            result[index] = "Silver Medal";
        } else if (rank === 2) {
            result[index] = "Bronze Medal";
        } else {
            result[index] = (rank + 1).toString();
        }
    }

    return result;
}

