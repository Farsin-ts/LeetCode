function reverseOnlyLetters(s) {
    const isLetter = (char) => /[a-zA-Z]/.test(char); 
    const chars = s.split(''); 
    let left = 0, right = s.length - 1;

    while (left < right) {
        if (!isLetter(chars[left])) {
            left++;
        } else if (!isLetter(chars[right])) {
            right--; 
        } else {
            
            [chars[left], chars[right]] = [chars[right], chars[left]];
            left++;
            right--;
        }
    }

    return chars.join(''); 
}