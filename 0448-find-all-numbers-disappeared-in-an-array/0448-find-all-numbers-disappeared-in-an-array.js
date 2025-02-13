/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const n = nums.length;
    const allNums = new Set([...Array(n).keys()].map(x => x + 1));
    
    for (const num of nums) {
        if (allNums.has(num)) {
            allNums.delete(num);
        }
    }
    
    return [...allNums];
};