function findNumbers(nums) {
    let count = 0;

    for (const num of nums) {
        const digitCount = num.toString().length; 
        if (digitCount % 2 === 0) {
            count++;
        }
    }

    return count;
}
