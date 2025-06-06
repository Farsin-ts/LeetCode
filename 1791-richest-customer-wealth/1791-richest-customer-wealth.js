/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let maxWealth = 0;
    for(let i=0;i<accounts.length;i++) {
        let wealth = accounts[i].reduce((sum, i) => sum + i,0)
        
        if(wealth > maxWealth) {
            maxWealth = wealth;
        }
    }
    return maxWealth;
};