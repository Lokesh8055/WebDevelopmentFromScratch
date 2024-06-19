const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title:
      'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

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

// Do the rest
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
const entries = [];

for (let goodRead of Object.keys(firstBook.thirdParty.goodreads)) {
  entries.push(goodRead);
}

console.log(entries);

const entriesTwo = [];

for (let value of Object.values(firstBook.thirdParty.goodreads)) {
  entriesTwo.push(value);
}

console.log(entriesTwo);

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
const allKeywords = [];

for (const book of books) {
  allKeywords.push(...book.keywords);
}

const uniqueKeywords = new Set(allKeywords);
uniqueKeywords.add('coding');
uniqueKeywords.add('science');
uniqueKeywords.delete('business');
const uniqueKeywordsArr = [...uniqueKeywords];
console.log(uniqueKeywordsArr);
uniqueKeywords.clear();
console.log(uniqueKeywords);

// MAPS
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

console.log(bookMap);

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
const ratingMap = new Map([
  ['question', 'type a number to get ratings?'],
  ['correct', '6'],
  [true, 'Correct'],
  [false, 'try again'],
]);

console.log(ratingMap);

const firstBookMap = new Map(Object.entries(firstBook));

for (const [index, value] of firstBookMap) {
  if (typeof value === 'number') {
    console.log(index);
  }
}

// Working with strings

const checkMiddleSeat = (seat) => {
  return seat.slice(-1) === 'B' || seat.slice(-1) === 'E';
};

console.log(checkMiddleSeat('11B'));
console.log(checkMiddleSeat('23E'));

console.log(ISBN[6]);
console.log(ISBN[4]);
console.log(ISBN[9]);
console.log(ISBN[8]);

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

console.log(fixCapitialization(thirdBook.format));
