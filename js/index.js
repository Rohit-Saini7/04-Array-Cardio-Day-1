// !
console.warn("Data in inventors array: ");
const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];
console.table(inventors);

// !
console.warn(
  "1. Filter the list of inventors for those who were born in the 1500's.",
  "{hint: Array.prototype.filter()}"
);

let inventorsBefore1500s = inventors.filter(
  (inventor) => inventor.year < 1600 && 1500 < inventor.year
);
console.table(inventorsBefore1500s);

// !
console.warn(
  "2. Give us an array of the inventors first and last names.",
  "{hint: Array.prototype.map()}"
);

let mappingAllInventorsNames = inventors.map(
  (inventor) => inventor.first + " " + inventor.last
);
console.log(mappingAllInventorsNames);

// !
console.warn(
  "3. Sort the inventors by birthdate, oldest to youngest.",
  "{hint: Array.prototype.sort()}"
);

let inventorsByBirthDate = inventors.sort((a, b) => a.year - b.year);
console.table(inventorsByBirthDate);

// !
console.warn(
  "4. How many years did all the inventors live all together?",
  "{hint: Array.prototype.reduce()}"
);

let initialValue = 0;
let ageOfAllInventorsCombined = inventors.reduce(
  (prev, current) => prev + current.passed - current.year,
  initialValue
);
console.log(ageOfAllInventorsCombined);

// !
console.warn(
  "5. Sort the inventors by years lived",
  "{hint: Array.prototype.sort()}"
);

let inventorsByYearLived = inventors.sort((a, b) => {
  let yearLivedByA = a.passed - a.year;
  let yearLivedByB = b.passed - b.year;
  return yearLivedByA - yearLivedByB;
});
inventorsByYearLived = inventorsByYearLived.reverse();
console.table(inventorsByYearLived);

// !
const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];
console.warn("data in people array: ");
console.table(people);

// !
console.warn("6. Sort the people alphabetically by last name");

let peopleSortedByLastName = people.sort((a, b) => {
  let arrayOfNameOfA = a.split(", ");
  let arrayOfNameOfB = b.split(", ");
  let lastNameOfA = arrayOfNameOfA[1];
  let lastNameOfB = arrayOfNameOfB[1];
  return lastNameOfA > lastNameOfB ? 1 : -1;
});
console.log(peopleSortedByLastName);

// !
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];
console.warn("data in trasportation array: ");
console.table(data);

// !
console.warn("7. Sum up the instances of each of transportation.");

let wayOfTransoprtation = data.reduce((object, item) => {
  if (!object[item]) {
    object[item] = 0;
  }
  object[item]++;
  return object;
}, {});
console.log(wayOfTransoprtation);
