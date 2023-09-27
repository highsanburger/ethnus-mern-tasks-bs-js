function reverseNumber(num) {
  let numStr = num.toString();
  let revStr = numStr.split('').reverse().join('');
  let revNum = parseInt(revStr, 10);
  return revNum;
}

const x = 32243;
const out = reverseNumber(x);
console.log(out); 
