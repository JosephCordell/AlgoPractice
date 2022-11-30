/* <!-- Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered. --> */

function incrementString(strng) {
  let int = strng.match(/\d+$/g)
  let string
  int?
  string = strng.slice(0,strng.lastIndexOf(int)):
  string = strng
  let filler = ''
  if (int === null) return string + 1
  let intStr = parseInt(int[0]) + 1
  while (filler.length < int[0].length - String(intStr).length) {
    filler += '0'
  }
  return string? string + filler + intStr: filler+intStr
}

str = 'fo99obar99'

console.log(incrementString(str));