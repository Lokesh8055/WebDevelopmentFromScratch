'use strict';

import { books } from './books.js';

const printBookInfo = ({ title, author, year = 'year unknown' }) => {
  return `${title} by ${author}, ${year}`;
};

// Array Destructing
const [
  firstBook,
  secondBook,
  thirdBook,
  fourthBook,
  fifthBook,
  sixthBook,
] = books;

// Object Destructing
const {
  title: bookTitle,
  author: bookAuthor,
  ISBN,
  keywords: tags,
  thirdParty: {
    goodreads: { rating: bookRating },
  },
} = firstBook;

console.log('bookRating', bookRating);

console.log(
  printBookInfo({
    title: bookTitle,
    author: bookAuthor,
    year: '2011',
  })
);

const { language, programmingLanguage = 'unknown' } = sixthBook;

const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];

const [[, rating], [, ratingsCount]] = ratings;
// console.log(ratingsCount);

const ratingStars = [63405, 1808];
const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] =
  ratingStars;
// console.log(threeStarRatings);

// Spread Operator (on the right side of =) (Destructing)
const bookAuthors = [...books[0].author, ...books[1].author];
console.log(bookAuthors);

const spellWord = (string) => console.log(...string);

spellWord('JavaScript');

// Rest Pattern (Destructring)
const [mainKeyword, ...rest] = firstBook.keywords;

const { publisher: bookPublisher, ...restOfTheBook } = secondBook;

const printBookAuthorsCount = (title, ...authors) => {
  return `The book "${title}" has ${authors.length} authors`;
};

console.log(
  printBookAuthorsCount(
    'Algorithms',
    'Robert Sedgewick',
    'Kevin Wayne'
  )
);

// Rest Pattern (function)
const add = (...numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

console.log(add(5, 10, 15, 20, 25));

// Spread Pattern (function)
const x = [25, 20, 75];
console.log(add(...x));

// Short circuting
const hasExamplesInJava = (book) => {
  return book.programmingLanguage === 'Java' || 'no data available';
};

console.log(hasExamplesInJava(sixthBook));

for (let i = 0; i < books.length; i++) {
  books[i].onlineContent &&
    console.log(`${books[i].title} provides online content`);
}

// Nullish Coalescing
for (let i = 0; i < books.length; i++) {
  books[i].onlineContent ??
    console.log(
      `${books[i].title} provides no data about its online content`
    );
}

// LOGICAL ASSIGNMNET OPERATOR
for (let i = 0; i < books.length; i++) {
  books[i].edition ||= 1;
  books[i].highlighted &&=
    !books[i].thirdParty.goodreads.rating < 4.2;
}

console.log(books);

// For of loop
const calculateNumberOfPages = (books) => {
  let pageSum = 0;
  for (const book of books) {
    pageSum += book.pages;
  }
  return pageSum;
};

console.log(calculateNumberOfPages(books));

const getAllAuthors = (books) => {
  const allAuthors = [];
  for (const book of books) {
    if (typeof book.author === 'string') {
      allAuthors.push(book.author);
    } else {
      for (const [index, author] of book.author.entries()) {
        allAuthors.push(author);
      }
    }
  }
  return allAuthors;
};

for (const [index, author] of getAllAuthors(books).entries()) {
  const string = `${index + 1}. ${author}`;
  console.log(string);
}

// Enchanced Object Literals
const bookData = [
  ['title', 'Computer Networking: A Top-Down Approach'],
  ['author', ['James F. Kurose', 'Keith W. Ross']],
  ['publisher', 'Addison Wesley'],
];

const pages = 880;

const [first, second, third] = bookData;

const newBook = {
  [first[0]]: first[1],
  [second[0]]: second[1],
  [third[0]]: third[1],
  pages,
};

console.log(newBook);

// Optional Chaining
const getFirstKeyWord = (book) => {
  return book.keywords?.[0];
};

for (const book of books) {
  console.log(getFirstKeyWord(book));
}

// Looping Over Objects
const ObjectKeys = () => {
  const entries = [];

  for (let goodRead of Object.keys(firstBook.thirdParty.goodreads)) {
    entries.push(goodRead);
  }
  return entries;
};

const ObjectValues = () => {
  const entriesTwo = [];

  for (let value of Object.values(firstBook.thirdParty.goodreads)) {
    entriesTwo.push(value);
  }

  return entriesTwo;
};

const openingHours = {
  thu: {
    open: 20,
    closed: 10,
  },
};

for (const [key, { open, closed }] of Object.entries(openingHours)) {
  console.log(`On ${key} we open at  ${open} and close at ${closed}`);
}

// Sets
const setExamples = () => {
  const allKeywords = [];

  for (const book of books) {
    allKeywords.push(...book.keywords);
  }

  const uniqueKeywords = new Set(allKeywords);
  uniqueKeywords.add('coding');
  uniqueKeywords.add('science');
  uniqueKeywords.delete('business');
  const uniqueKeywordsArr = [...uniqueKeywords];
  uniqueKeywords.clear();
  return uniqueKeywords;
};

// MAPS
const mapsExample = () => {
  const bookMap = new Map([
    ['title', 'Clean Code'],
    ['author', 'Robert C. Martin'],
  ]);

  bookMap.set('pages', 464);
  console.log(`${bookMap.get('title')} by ${bookMap.get('author')}`);
  console.log(bookMap.size);
  console.log(
    bookMap.has('author') && 'The author of the book is known'
  );

  return bookMap;
};

const getRatings = (books) => {
  const ratings = [];
  for (let [index, book] of books.entries()) {
    ratings.push({
      [`${index + 1}`]: book.thirdParty.goodreads.rating,
    });
  }
  return ratings;
};

// Convert Object to Map
const firstBookMap = new Map(Object.entries(firstBook));

for (const [index, value] of firstBookMap) {
  if (typeof value === 'number') {
    console.log(index);
  }
}
