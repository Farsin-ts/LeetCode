

function findClosestNumber(nums) {
    nums.sort((a, b) => Math.abs(a) - Math.abs(b) || b - a);
    return nums[0];
}
