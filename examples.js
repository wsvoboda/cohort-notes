const phrase = 'Four score and seven years ago';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let counter = 0;

for (let i = 0; i < phrase.length; i++) {
  if (vowels.includes(phrase.charAt(i))) {
    counter++;
  }
}

console.log(counter);
