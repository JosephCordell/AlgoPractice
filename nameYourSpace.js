/* Finish the namespace function so that it sets or gets the value at the path specified. The path1 argument should be the root object that the path belongs to. The 2nd argument is the path itself and the 3rd optional argument is the value to set at the path.

If a value is provided then the path will be set to that value. Any objects not present within the path will be created automatically in order for the path to be successfully set.

let stuff = {}
namespace(stuff, 'moreStuff.name', 'the stuff')
// results in {moreStuff: {name: 'the stuff'}}

If no value is provided the the function will return the value at the path given. If the path is not valid/present then undefined will be returned.

namespace(stuff, 'moreStuff.name') // returns 'the stuff'
namesace(stuff, 'otherStuff.id') // returns undefined */


function namespace(root, path, value) {
  const splitPath = path.split('.')
  currentObject = root
  for (let i = 0; i < splitPath.length - 1; i++) {
      if (typeof (currentObject[splitPath[i]]) === Object) {
          currentObject = currentObject[splitPath[i]]
      }
      else {
          if (value) {
              currentObject[splitPath[i]] = {}
              currentObject = currentObject[splitPath[i]]
          }
          else return undefined
      }
  }
  if (value) {
      currentObject[splitPath[splitPath.length - 1]] = value
      return root
  }
  else return currentObject[splitPath[splitPath.length - 1]]
}

let stuff = {}
console.log(namespace(stuff, 'moreStuff.name', 'the stuff'));
console.log(namespace(stuff, 'items.things'));
