const runTests = require('../helper/test').runTests;

const test_cases = [
  [['hello this is kranthi'], 'kranthi is this hello'],
  [['hello is kranthi'], 'kranthi is hello'],
  [['kranthi'], 'kranthi']
]

// function reverseWords(string) {
//   const arr = string.split(' ');
//   arr.reverse();
//   return arr.join(' ');
// }

function reverseWords(string) {
  let reversedString = '';
  let wordTemp = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      reversedString = wordTemp + ' ' + reversedString;
      wordTemp = '';
    } else {
      wordTemp += string[i];
    }
  }
  return (wordTemp + ' ' + reversedString).trim();
}

runTests(test_cases, reverseWords);
