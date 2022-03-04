/* The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate. */

/* Test.assertEquals(duplicateEncode("din"),"(((");
Test.assertEquals(duplicateEncode("recede"),"()()()");
Test.assertEquals(duplicateEncode("Success"),")())())","should ignore case");
Test.assertEquals(duplicateEncode("(( @"),"))(("); */

function duplicateEncode(word){
    const words = word.toLowerCase()
    let unique = ''
    for (let i = 0; i < words.length; i++) {
         if(words.lastIndexOf(words[i]) === words.indexOf(words[i])){
             unique += '('
         } else 
         unique += ')'
    }
    return unique
}

console.log(duplicateEncode('Success'))

function myFunction() {
    var str = "HHello planet earth, you are a great.ello";
    var n = str.indexOf("planet") === str.lastIndexOf('planet')
    console.log(n)
  }

  myFunction()