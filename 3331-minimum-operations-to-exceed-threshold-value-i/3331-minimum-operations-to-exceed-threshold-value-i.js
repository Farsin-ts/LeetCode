/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function minOperations(nums, k) {
    let count = 0;
    
    let sorted = nums.sort((a,b) => a - b)
    
        for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] < k) {
            count++;
        } else {
            break; 
        }
    }
    
    return count
}