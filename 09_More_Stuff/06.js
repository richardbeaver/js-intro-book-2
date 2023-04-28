// Write a function that searches an array of strings for every element that
// matches the regular expression given by its argument. The function should
// return all matching elements in an array.
/* eslint no-use-before-define:"off" */

// Example:
const words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']

//

function allMatches(wordsArray, regex) {
  return wordsArray.filter((word) => regex.test(word));
}
