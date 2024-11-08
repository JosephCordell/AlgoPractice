/* You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
Note: there are no special characters used, only letters and spaces

Examples

decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go' */

function decipherThis(str) {
  decipher = [];
  let split = str.split(' ');



  for (let i = 0; i < split.length; i++) {
    let focus = split[i]
    if (/^\d+$/.test(focus.slice(2, 3))) {
        if (focus.length < 4) {
            decipher.push(String.fromCharCode(focus))
        } else if (focus.length < 5) { 
            let charCode = focus.slice(0, 3);
            decipher.push(String.fromCharCode(charCode) + focus.slice(-1))
        }
            else {
            let last = focus.slice(-1);
            let fourth = focus.slice(3, 4);
            let charCode = focus.slice(0, 3);
            
            decipher.push(String.fromCharCode(charCode) + last + focus.slice(4,-1) + fourth);
        }
    } else if (focus.length < 3) {
        decipher.push(String.fromCharCode(focus))
    } else if ( focus.length < 4) {
        let charCode = focus.slice(0, 2);
        decipher.push(String.fromCharCode(charCode) + focus.slice(-1))
    } else {
        let last = focus.slice(-1);
        let third = focus.slice(2, 3);
        let charCode = focus.slice(0, 2);
        decipher.push(String.fromCharCode(charCode) + last + focus.slice(3,-1) + third)
    }}
      return decipher.join(' ')
}


console.log(
  decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o')
);
