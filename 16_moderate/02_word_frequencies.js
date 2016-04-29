/*
 * Word Frequencies: Design a method to find the frequency of occurences of any given word in a book.
 * What if we were running this algorithm multiple times?
 */
let BOOK_INDEX = {};

function frequency(word, book) {
  word = word.trim().toLowerCase();
  let count = 0;
  let words = book.split('\n').join(' ').replace(/[\.|\?]/g, '').split(' ').map((w) => w.toLowerCase().trim());
  words.forEach((w) => {
    if (w == word) { count++; }
  });
  return count;
};

function indexBook(book){
  let words = book.replace(/\\n/g, ' ').replace(/[\.|\?]/g, '').split(' ').map((w) => w.toLowerCase().trim());
  words.forEach((w) => {
    if (BOOK_INDEX[w]){ BOOK_INDEX[w]++; }
    else {
      BOOK_INDEX[w] = 1;
    }
  });
}


let BOOK = "The quick fox quick fox jumped over over the lazy lazy dog dog. Dog dog?";

console.log(frequency('dog', BOOK));

indexBook(BOOK);
console.log(BOOK_INDEX);
