/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function findIntersectionValues(nums1, nums2) {
    let first = 0;
    let second = 0;
    
    let n = nums1.length;
    let m = nums2.length;
    
    for(let i=0;i<n;i++) {
        if(nums2.includes(nums1[i])) {
            first++;
        }
    }
    
    for(let i=0;i<m;i++) {
        if(nums1.includes(nums2[i])) {
            second++;
        }
    }
    return [first,second];
}