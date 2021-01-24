
const word = 'abcajklhcj!';

function findFirstRep(str) {
  // for (let i = 0; i < str.length; i++) {
  //   for (let j = i+1; j < str.length; j++) {
  //     if (str[i] === str[j]) {
  //       return str[i];
  //     }
  //   }
  // }
  let table = {};
  for (const char of str) {
    if (table[char]) {
      return char;
    }
    table[char] = char;
  }
}

console.log(findFirstRep(word));
