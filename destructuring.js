/*
* Object Destructuring Question 1
*/

let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
//let {numPlanets, yearNeptuneDiscovered} = facts;

//console.log(numPlanets); // ? 
//Prints out 8
//console.log(yearNeptuneDiscovered); // ?
//Prints out 1846

/*
* Q2
*/
let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
  let {numPlanets, ...discoveryYears} = planetFacts;
  
  //console.log(discoveryYears); // ?
  // This prints out "{yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}"

  /**
   * Q3
   */
  function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  
  //console.log(getUserData({firstName: "Alejandro", favoriteColor: "purple"})); // ?
  //returns 'Your name is Alejandro and you like purple'
  //console.log(getUserData({firstName: "Melissa"})); // ?
   //returns 'Your name is Melissa and you like green'
  //console.log(getUserData({})); // ?
   //returns 'Your name is undefined and you like green'

/**
* Array Destructuring 1, 2, 3
*/
let [first, second, third] = ["Maya", "Marisa", "Chi"];

//console.log(first); // ? Maya
//console.log(second); // ? Marisa
//console.log(third); // ? Chi

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]
  
  //console.log(raindrops); // ?  "Raindrops on roses"
  //console.log(whiskers); // ? "whiskers on kittens"
  //console.log(aFewOfMyFavoriteThings); // ? [ "Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]

let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

//console.log(numbers) // ? [10, 30, 20];

/**
 * ES2015 Refactoring
 */

//Assigning variables to object properties
var obj = {
    numbers: {
      a: 1,
      b: 2
    },
    arr: [5, 6, 7]
  };

const {numbers: {a, b}} = obj;
const {arr: [c, d]} = obj;
console.log(c);

//Array swap
const arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]];
console.log(arr);

/**
 * Race Results
 */
const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest});

console.log(raceResults(["Jeremy", "Jack", "Emily", "Ben", "Will"]));