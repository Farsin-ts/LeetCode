function countDigits(num) {
    let numStr = num.toString();
    let count = 0;

    
    for (let digit of numStr) {
        
        let digitNum = parseInt(digit);
        
        
        if (digitNum !== 0 && num % digitNum === 0) {
            count++;
        }
    }

    return count;
}


