function autocomplete(input, dictionary){
    let suggestions = []
    if (input.match(/[a-zA-Z\ ]/g)){
        str = input.match(/[a-zA-Z\ ]/g).join('')
        const length = str.length
        if (length !== 0 ){
            dictionary.forEach(x => {
                if (suggestions.length <5 ) {
                    if ( x.toLowerCase().substring(0, length) === str) suggestions.push(x)
                }
                return suggestions
            })
        }
    }
        return suggestions
}




console.log(autocomplete('$%^', ['airplane','Airport','apple','ball']))