/*
 * English Int: Given any integer, print an English phrase that describes the integer
 * (e.g. 'One Thousand, Two Hundred Thirty Four')
 */


const ONES = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  0: 'zero'
};

const TENS = {
  1: 'ten',
  2: 'twenty',
  3: 'thirty',
  4: 'forty',
  5: 'fifty',
  6: 'sixty',
  7: 'seventy',
  8: 'eighty',
  9: 'ninety',
};

const TEENS = {
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
};

const UPPER = {
  1: 'hundred',
  2: 'thousand',
  3: 'million',
  4: 'billion',
  5: 'trillion',
};

function toEng(num, pwd){
  if (pwd == undefined) { pwd = 1 }
  let ending = UPPER[pwd];
  let result = '';
  let digits = `${num}`.split('');
  let len = digits.length;
  let subset = len >= 3 ? digits.slice(len - 3) : digits.slice(0, len);
  digits = digits.slice(0, len - subset.length);
  while (subset.length) {
    let tens = subset[1];
    if (subset.length > 1 && tens == 1){
      result = TEENS[subset.slice(subset.length-2).join('')] + result;
      subset = subset.slice(0, subset.length-2);
    } else if (subset.length > 1 && subset[subset.length - 2 ] == 0){
      if (subset[subset.length -1 ] != 0){
        result = TENS[subset[subset.length-2]] + result;
        subset = subset.slice(0, subset.length-2);
      } else {
        subset = subset.slice(0, 1);
      }
    } else {
      result = ONES[subset.pop()] + result;
      let tens = TENS[subset.pop()];
      if (tens && tens != 'zero'){
        result = tens + ' ' + result;
      }
    }
    if (subset.length && subset[0] != 0){
      let hundred = ONES[subset.pop()];;
      if (hundred == 'zero') { hundred = ''; }
      result = hundred + ' ' + UPPER[1] + ' ' + result;
    } else { subset = []; }
  }
  if (digits.length) {
    result = toEng(digits.join(''), pwd+1) + result;
    if (pwd != 1) { 
      if (pwd > 2) { result += ' ' + ending + ', '; }
      else { result += ' ' + ending + ' '; }
    }
  } else if ( pwd != 1) { 
    result = result + ' ' + ending;
    if (pwd > 2) { result += ', '; } 
    else { result += ' '; }
  }
  return result;
};


let arr = [123, 1234234345456, 1111000, 4, 32, 113, 72435];

arr.forEach((n) => { console.log(toEng(n)); });
