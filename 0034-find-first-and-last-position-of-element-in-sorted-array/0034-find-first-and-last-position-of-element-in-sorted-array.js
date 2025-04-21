/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let result = [-1,-1];

     result[0] = nums.indexOf(target);
     result[1] = nums.lastIndexOf(target);

     return result;
};