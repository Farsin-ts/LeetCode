function reversePrefix(word, ch) {
    const index = word.indexOf(ch);

    if (index === -1) return word;

    const reversedSegment = word.slice(0, index + 1).split('').reverse().join('');
    const remainingSegment = word.slice(index + 1);
    
    return reversedSegment + remainingSegment;
}
