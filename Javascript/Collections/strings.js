'use strict';

import { books } from './books.js';
// Array Destructing
const [
  firstBook,
  secondBook,
  thirdBook,
  fourthBook,
  fifthBook,
  sixthBook,
] = books;

// Working with strings
const checkMiddleSeat = (seat) => {
  return seat.slice(-1) === 'B' || seat.slice(-1) === 'E';
};

console.log(checkMiddleSeat('11B'));
console.log(checkMiddleSeat('23E'));

const quote =
  'A computer once beat me at chess, but it was no match for me at kick boxing';

console.log(quote.indexOf('chess'));
console.log(quote.indexOf('boxing'));

const isContributor = (author) => {
  return author.lastIndexOf('(Contributor)') !== -1;
};

console.log(isContributor('Julie Sussman'));

const fixCapitialization = (word) =>
  word[0].toUpperCase() + word.slice(1);

console.log(fixCapitialization(fourthBook.format));

const checkCorrectEmail = (email) =>
  email.toLowerCase().trim() === email;

console.log(checkCorrectEmail('lokesh@gmail.com'));
console.log(checkCorrectEmail(' lokesh  @gmail.com'));

const announcement =
  'All passengers come to boarding door 23. Boarding door';

console.log(secondBook.title.replace('Programs', 'Software'));
console.log(announcement.replaceAll('door', 'gate'));

const normalizeAuthorName = (authorName) => {
  const author = authorName
    .toLowerCase()
    .trim()
    .replace('(contributor)', ' ');
  const firstName = author.slice(0, author.indexOf(' '));
  const lastName = author.slice(author.indexOf(' ') + 1);
  return `${fixCapitialization(firstName)} ${fixCapitialization(
    lastName
  )}`;
};

console.log(normalizeAuthorName('  JuliE sussMan (Contributor)'));

const logBookTheme = (title) => {
  const bookTitle = title.toLowerCase().trim();
  if (bookTitle.startsWith('computer')) {
    return 'This book is about computers';
  }

  if (
    bookTitle.includes('algorithms') &&
    bookTitle.includes('structures')
  ) {
    return 'This book is about algorithms and data structures';
  }
  if (
    bookTitle.endsWith('system') ||
    !bookTitle.includes('operating')
  ) {
    return 'This book is about some systems, but definitely not about operating systems';
  }
};

console.log(logBookTheme('systems values'));

const capitalizeNames = (string) => {
  let newArr = [];
  const value = string.split(' ');
  for (let char of value) {
    newArr.push(char.replace(char[0], char[0].toUpperCase()));
  }
  return newArr.join(' ');
};

console.log(capitalizeNames('lokesh padmanabhan'));

// Exercises
const logBookCategories = () => {
  const bookCategories =
    'science;computing;computer science;algorithms;business;operating systems;networking;electronics';
  const value = bookCategories.split(';');
  for (let str of value) {
    console.log(str);
  }
};

console.log(logBookCategories());

const getKeywordsAsString = (arr) => [...new Set(arr)].join(';');

console.log(getKeywordsAsString(firstBook.keywords));

const logBookChapters = (arr) => {
  for (const [bookName, pageNumber] of arr) {
    console.log(`${bookName.padEnd(20, '_')} ${pageNumber}`);
  }
};

const bookChapters = [
  ['The Basics', 14],
  ['Sorting', 254],
  ['Searching', 372],
  ['Graphs', 526],
  ['Strings', 706],
];

logBookChapters(bookChapters);

const getString = (str) => str.replace(/[^a-z]/gi, '').toUpperCase();
