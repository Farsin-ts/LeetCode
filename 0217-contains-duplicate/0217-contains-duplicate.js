/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const seen = new Set();
    for (const num of nums) {
        if (seen.has(num)) {
            return true; // Duplicate found
        }
        seen.add(num); // Add number to the set
    }
    return false;
};