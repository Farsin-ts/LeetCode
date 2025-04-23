/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count = 0;
    
    for(let i=0;i<grid.length;i++) {
        let one = grid[i]
        for(let j=0;j< one.length;j++) {
            if(one[j] < 0) {
                count++
            }
        }
    }
    return count
};