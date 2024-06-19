const country = 'India';
const continent = 'Asia';
const population = 1300000000;

console.log('country', country);
console.log('continent', continent);
console.log('population', population);

let isIsland = false;
const language = 'Tamil';
// language = 'English';

console.log('isIsland', typeof isIsland);
console.log('language', typeof language);

let halfPopulation = country / 2;
console.log('halfPopulation', `${population / 2} billion`);

let increasePopulation = population + 1000000;
console.log(
  `The population is increased to ${increasePopulation} million`
);

const finlandCountry = 'Finland';
const finlandPopulation = 6000000;

console.log(population > finlandPopulation);
console.log(population < finlandPopulation);

const description = `${country} is in ${continent}, and its ${population} billion people speak ${language}`;
console.log(description);

// const neighbor = prompt(
//   'How many neighbour countries does your contry have?'
// );

// if (neighbor === 1) {
//   console.log('Only 1 border!');
// } else if (neighbor > 1) {
//   console.log('More than 1 border');
// } else {
//   console.log('No borders');
// }

const countryLivingIn = 'India';
const languageSpoken = 'English';
const populationCurrently = 33.1;
const isIslandLiving = false;

if (
  languageSpoken === 'English' &&
  populationCurrently === 33 &&
  !isIslandLiving
) {
  console.log(`You should live in ${countryLivingIn} :)`);
} else {
  console.log(`${countryLivingIn} does not meet your criteria :)`);
}

const result = populationCurrently > 33 ? 'above' : 'below';
const string = `${countryLivingIn}'s population is ${result} average`;
console.log(string);

function describeCountry(country, population, capitalCity) {
  console.log(
    `${country} has ${population} million people and its capital city is ${capitalCity}`
  );
}

// const finland = describeCountry('Finland', 6, 'Helsinki');
// const india = describeCountry('India', 130, 'Delhi');
// const england = describeCountry('England', 50, 'London');
// console.log(finland);
// console.log(india);
// console.log(england);

// Declaration
// function percentageOfWorld1(population) {
//   return ((population / 7900) * 100).toFixed(2);
// }

// Expression
// const percentageOfWorld2 = function (population) {
//   return ((population / 7900) * 100).toFixed(2);
// };

// Arrow Function
const percentageOfWorld3 = (population) =>
  ((population / 8000) * 100).toFixed(2);

const describePopulation = (country, population) => {
  const result = percentageOfWorld3(population);
  return `${country} has ${population} million people, which is about ${result}% of the world`;
};

const indiaTwo = describePopulation('india', 1417);
const chinaTwo = describePopulation('china', 1441);
const usaTwo = describePopulation('usa', 332.18);

console.log(indiaTwo);
console.log(chinaTwo);
console.log(usaTwo);

// Arrays
// const populations = [1417, 1441, 332.18, 339];

// console.log(populations.length === 4);

// const percentages = [
//   percentageOfWorld3(populations[0]),
//   percentageOfWorld3(populations[1]),
//   percentageOfWorld3(populations[2]),
//   percentageOfWorld3(populations[3]),
// ];

// console.log(percentages);

// Array Methods
const neigbours = ['pakistan', 'srilanka', 'Bangladesh'];
neigbours.push('andaman');
console.log(neigbours);
neigbours.pop();
console.log(neigbours);
if (!neigbours.includes('Germany')) {
  console.log('Probably not a central european country :D');
}

neigbours[neigbours.indexOf('Bangladesh')] = 'Republic of bangladesh';
console.log(neigbours);

// Objects
const myCountry = {
  country: 'India',
  capital: 'delhi',
  language: 'hindi',
  population: 130,
  neigbours: [],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people,${this.neigbours.length} neighbouring countries and a capital called ${this.capital}`
    );
  },
  checkIsIsland: function () {
    this.isIsland = this.neigbours.length === 0 ? true : false;
  },
};

console.log(myCountry.describe());
console.log(myCountry.checkIsIsland());
console.log(myCountry);

// const interestedIn = prompt(
//   'What do you want to know about my country?'
// );

// console.log(myCountry[interestedIn]);

// if (myCountry[interestedIn]) {
//   console.log(myCountry[interestedIn]);
// } else {
//   console.log('does not exist');
// }

// Loops

// For loops
for (let voter = 1; voter <= 50; voter++) {
  console.log(`Voter number ${voter} is currently voting`);
}

const populations = [1417, 1441, 332.18, 339];
const percentages = [];

for (let i = 0; i < populations.length; i++) {
  percentages.push(percentageOfWorld3(populations[i]));
}

console.log(percentages);

const listOfNeighbours = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Russia'],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
  }
}

// While
const percentagesTwo = [];

let i = 0;
while (i < populations.length) {
  percentagesTwo.push(percentageOfWorld3(populations[i]));
  i++;
}

console.log(percentagesTwo);
