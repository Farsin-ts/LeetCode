/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    let largest = -1; 
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0 && nums.includes(-nums[i])) {
            largest = Math.max(largest, nums[i]); 
        }
    }

    return largest;

};