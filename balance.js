/* Description:
Each exclamation mark weight is 2; Each question mark weight is 3. Put two string left and right to the balance, Are they balanced?

If the left side is more heavy, return "Left"; If the right side is more heavy, return "Right"; If they are balanced, return "Balance".

Examples
balance("!!","??") === "Right"
balance("!??","?!!") === "Left"
balance("!?!!","?!?") === "Left"
balance("!!???!????","??!!?!!!!!!!") === "Balance" */
function balance(left, right) {

  function sum(str) {
    let total = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '?') total += 3;
      else total += 2;
    }
    return total;
  }

  let sumL = sum(left);
  let sumR = sum(right);
  if (sumL > sumR) return 'Left';
  else if (sumL < sumR) return 'Right';
  return 'Balance';
}

console.log(balance("!?!!","?!?"));
