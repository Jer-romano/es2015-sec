/**
 * Q1: new Set([1,1,2,2,3,4])
 * This returns a Set {1,2,3,4}
 */

const lol = new Set([1,1,2,2,3,4])
//console.log(lol)

/**
 * Q2: [...new Set("referee")].join("")
 * This returns "ref"
 * This is because Sets treat strings as iterables, so it iterates through every character in the string, removing any duplicates
 * The spread operator then converts the set to an array i.e. ['r', 'e', 'f']
 * The array .join method then joins every element of the array together and converts it to a string, thus we are left with "ref"
 */
console.log([...new Set("referee")].join(""));
/**
 * Q3: The map m will look like:
 * { [1,2,3] => true,
 *   [1,2,3] => false }
 */

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
//console.log(m)

function hasDuplicate(arr) {
    return (arr.length !== new Set(arr).size);
}

//console.log(hasDuplicate([1,2,3,"hello",4,"hello"]))

//console.log(vowelCount("jeremyabouue"))

function vowelCount(string) {
    let vCount = new Map();
    let sArray = string.toLowerCase().split("");
    const vowels = 'aeiou';
    sArray.forEach((letter) => { // could've also used a for..of loop to iterate through the chars in the string
        if(vowels.indexOf(letter) != -1) {
            if(vCount.has(letter)) {
                vCount.set(letter, vCount.get(letter)+1);
            }
            else vCount.set(letter, 1);
        }
    });
    return vCount;
}
console.log(vowelCount("jeremy"));