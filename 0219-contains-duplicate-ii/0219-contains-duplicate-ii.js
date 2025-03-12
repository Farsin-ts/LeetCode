function containsNearbyDuplicate(nums, k) {
    const numIndexMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (numIndexMap.has(nums[i])) {
            // Check if the difference between the indices is <= k
            if (i - numIndexMap.get(nums[i]) <= k) {
                return true;
            }
        }
        // Update the map with the latest index of the number
        numIndexMap.set(nums[i], i);
    }

    return false;
}
