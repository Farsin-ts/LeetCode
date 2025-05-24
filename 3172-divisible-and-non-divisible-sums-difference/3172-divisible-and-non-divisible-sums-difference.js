/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
function differenceOfSums(n, m) {
    
    let divisible = []
    let nonDivisible = []
    
    
    for(let i=1;i<= n;i++) {
        if( i % m === 0) {
            divisible.push(i)
        } else {
            nonDivisible.push(i)
        }
    }
    
    let divisibleSum = divisible.reduce((acc, crr) => {
        return acc + crr
    },0)
    
    let nonDivisibleSum = nonDivisible.reduce((acc, crr) => {
        return acc + crr
    },0)
    
    return nonDivisibleSum - divisibleSum
    
}