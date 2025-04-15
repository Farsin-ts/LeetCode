/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function(s) {
    let num = 0;
    let maxChairs = 0;

    for(let i=0;i<s.length;i++) {
        if(s[i] ==="E") {
            num++;
            maxChairs = Math.max(maxChairs,num);
        } else if (s[i] === "L"){
            num--
        }
    }
    return maxChairs;
};
