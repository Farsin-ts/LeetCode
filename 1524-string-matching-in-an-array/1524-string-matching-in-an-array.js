function stringMatching(words) {
    const result = new Set();

    
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (i !== j && words[j].includes(words[i])) {
                result.add(words[i]); 
            }
        }
    }

    return Array.from(result); 
}