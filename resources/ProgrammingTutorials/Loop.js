function countingletter(word) {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] !== "n" && word[i] !== ' ') {
            count++;
        }
      
        
    }
    return count;
}
const word = "Marian Rivera";
const count = countingletter(word);
alert(`Number of letter without N in word ${word} is ${count}` );