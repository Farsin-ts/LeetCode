function twoSum(nums, target) {
    const numMap = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (numMap.hasOwnProperty(complement)) {
            return [numMap[complement], i];
        }
        
        numMap[nums[i]] = i;
    }
}

const nums1 = [2, 7, 11, 15];
const target1 = 9;
console.log(twoSum(nums1, target1));  

const nums2 = [3, 2, 4];
const target2 = 6;
console.log(twoSum(nums2, target2));  
const nums3 = [3, 3];
const target3 = 6;
console.log(twoSum(nums3, target3));  
