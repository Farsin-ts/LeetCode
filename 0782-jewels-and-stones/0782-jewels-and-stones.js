function numJewelsInStones(jewels, stones) {
    let count = 0
    
    for(let i=0;i<stones.length;i++) {
        for(let j=0;j<jewels.length;j++) {
            
            if(stones[i].includes(jewels[j])) {
                count++
            }
        }
    }
    return count;
}