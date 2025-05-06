/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArrayByParityII(nums) {
    
    let numbers = [];
    let numbers1 = [];
    
    let final = [];
    
    for(let i=0;i<nums.length;i++) {
        if(nums[i] % 2 === 0) {
            numbers.push(nums[i])
        } else {
            numbers1.push(nums[i])
        }
    }
    
    for(let i=0;i<numbers.length;i++) {
        final.push(numbers[i])
        final.push(numbers1[i])
    }
    
    
    return final;
    
}