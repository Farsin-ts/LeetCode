arrayRankTransform/**
 * @param {number[]} arr
 * @return {number[]}
 */
function arrayRankTransform(arr) {
    const array = [...arr];
    let sorted = [...new Set([...arr])].sort((a,b) => a - b); 
    let newArr = {}
    
    for(let i=0;i<arr.length;i++) {
        newArr[sorted[i]] = i + 1;
    }
    
    let result = arr.map(num => newArr[num])
    
    return result
};