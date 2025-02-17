function largestNumber(nums) {
    if (nums.length === 0) return "";

    let numsStr = nums.map(String);

    numsStr.sort((a, b) => (b + a) - (a + b));

    let result = numsStr.join('');

    return result[0] === '0' ? '0' : result;
}
