/* Given an array arr of strings complete the function landPerimeter by calculating the total perimeter of all the islands. Each piece of land will be marked with 'X' while the water fields are represented as 'O'. Consider each tile being a perfect 1 x 1piece of land. Some examples for better visualization:


['XOOXO',
  'XOOXO',
  'OOOXO',
  'XXOXO',
  'OXOOO'] 
or


should return: "Total land perimeter: 24",
while



['XOOO',
  'XOXO',
  'XOXO',
  'OOXX',
  'OOOO']


should return: "Total land perimeter: 18"

Good luck! */

const landPerimeter = (arr) => {
    let perimeter = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === 'X') {
                perimeter += 4
                if (i > 0) {
                    if (arr[i - 1][j] === 'X') perimeter -= 1
                }
                if (i < arr.length - 1) {
                    if (arr[i + 1][j] === 'X') perimeter -= 1
                }
                if (j > 0) {
                    if (arr[i][j - 1] === 'X') perimeter -= 1
                }
                if (j < arr[i].length - 1) {
                    if (arr[i][j + 1] === 'X') perimeter -= 1
                }
            }
        }
    }
    return `Total land perimeter: ${perimeter}`
}

let arr = [
    'XOOXO',
    'XOOXO',
    'OOOXO',
    'XXOXO',
    'OXOOO']

console.log(landPerimeter(arr));