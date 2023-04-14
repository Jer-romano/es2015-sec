/**
 * Rest/Spread Operator Exercises
 */

const filterOutOdds = (...args) => {
    return args.filter(num => num % 2 === 0);
}

const findMin = (...args) => {
    return Math.min(...args);
}

//console.log(findMin(4, 7, 2, -1, 0, -5))

function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 }
}
const mergeObjectsArrow = (obj1, obj2) => ({...obj1, ...obj2});
//console.log(mergeObjects({a:1, b:2}, {c:3, d:4}));

const doubleAndReturnArgs = (arr, ...args) => {
    return [...arr, ...args.map(val => val*2)];
}
//console.log(doubleAndReturnArgs([1,2,3],4,4, -1));

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

/** remove a random element in the items array
and return a new array without that item. */
const removeRandom = items => {
    let randomIndex = getRandomInt(items.length);
    return items.filter((currVal, index) => index != randomIndex);
}

//console.log(removeRandom([1, 2, 3, 4, 5, 6, 7]))

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    return [...array1, ...array2];
}
const extendArrow = (array1, array2) => [...array1, ...array2];
//console.log(extend([2,3,4], [7,8,9]));

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
    return {...obj, [key] : val};
}

const addKeyValArrow = (obj, key, val) => {
    return {...obj, [key] : val};
}
//console.log(addKeyVal({a:1, b:2}, "myName", "james"));

/** Return a new object with a key removed. */

function removeKey(obj, key) {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
}
//console.log(removeKey({a:1, b:2, c:3}, "b"))

/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
    return {...obj1, ...obj2};
}
//console.log(combine({a:1, dog: "stacy"}, {b:5, hasDog: true}));

/** Return a new object with a modified key and value. */

function update(obj, key, val) {
    return {...obj, [key]: val};
}
console.log(update({a:1, b:2}, "b", 7));


