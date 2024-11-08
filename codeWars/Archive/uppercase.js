const mySentence = "freeCodeCamp is an awesome resource";

const words = mySentence.split(' ')

const wordy = words
    .map(word => word.charAt(0)
    .toUpperCase() + 
    word.slice(1)).join(' ')

// for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].substr(1)
    
// }

console.log(wordy)