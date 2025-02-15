/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let n = nums.length;
    let sorted = [];

    let newSet = new Set([...Array(n).keys()].map(x => x + 1))

    for(let i=0;i<n;i++){
        if(newSet.has(nums[i])){
            newSet.delete(nums[i])
        }
        else {
            sorted.push(nums[i]);
        }
        
    }

    return sorted;


};