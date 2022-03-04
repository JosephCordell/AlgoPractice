/* 
    Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

    Examples
    pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
    pigIt('Hello world !');     // elloHay orldway !
*/

const pigIt = (str) => {
    let item = str.split(' ')
    let sentence = ''
    item.map(value => {
        if (value.includes('?') || value.includes('!')) sentence += value
        else {
            let latin = ''
            const first = value[0]
            latin = value.slice(1) + first + "ay"
            sentence += latin + " "
        }
    })
    return sentence.trim()
}

const strong = 'Pig latin is cool !'


console.log(pigIt(strong))
