/* Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true */


function validParentheses(parens) {
    let answer = false
    if (parens.length === 0) {
        return true
    }
    else if (parens.length % 2 === 0 && parens.length > 1) {
        for (let i = 0; i < parens.length; i++) {
            if (parens[i] === ")") {
                answer = validParentheses(parens.slice(1, i) + parens.slice(i + 1))
                break
            }
        }
    }
    return answer
}

// a MUCH simpler solution
function validParentheses2(parens){
    var n = 0;
    for (var i = 0; i < parens.length; i++) {
      if (parens[i] == '(') n++;
      if (parens[i] == ')') n--;
      if (n < 0) return false;
    }
    
    return n == 0;
  }

let parens = ""

console.log(validParentheses(parens))
