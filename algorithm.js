function Sentence(sentence) {
    let letterCount = 0;
    let wordCount = 0;
    let vowelCount = 0;
    const vowelsSet = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    
    for (let i = 0; i < sentence.length; i++) {
        let currentChar = sentence[i];
        letterCount++;
        
        if (vowelsSet.has(currentChar)) {
            vowelCount++;
        }

        if (currentChar === ' ' && (i + 1 < sentence.length) && (sentence[i + 1] !== ' ' && sentence[i + 1] !== '.')) {
            wordCount++;
        }
    }
    
    if (letterCount > 1) { 
        wordCount++;
    }
    
    console.log("Length: " + letterCount);
    console.log("Words: " + wordCount);
    console.log("Vowels: " + vowelCount);
}


const sentence = "Aisha is Aisha and Yusuf is Yusuf.";
Sentence(sentence);
