function toCamelCase(str){
    let string = []
    if (str.includes('-')){
        string = str.split('-')
    } else {
        string = str.split('_')
    }
    let camelCase = []
for (let i = 0; i < string.length; i++) {
    if (i === 0 ){
        camelCase.push(string[i])
    } else {
        let upper = string[i][0].toUpperCase()
        let word = upper + string[i].slice(1,)
        camelCase.push(word) 
    }
}
    return camelCase.join('')
}


console.log(toCamelCase('The_Stealth_Warrior'))