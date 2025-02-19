/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const n = nums.length;
    const newArray = new Set([...Array(n + 1).keys()])

    for(let i=0;i<n;i++){
        if(newArray.has(nums[i])) {
            newArray.delete(nums[i])
        }
    }

    return [...newArray][0];
};