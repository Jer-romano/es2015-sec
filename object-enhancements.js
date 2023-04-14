function createInstructor(firstName, lastName) {
    return {firstName, lastName};
}
const createInstructorArrow = (firstName, lastName) => ({firstName, lastName});
console.log(createInstructor("james", "bond"));

/**
 * Computed Property Names (Old)
var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"
 */

let favoriteNumber = 42;
const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
}

/**
var instructor = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi!";
  },
  sayBye: function(){
    return this.firstName + " says bye!";
  }
}
*/
const instructor2 = {
    firstName: "Colt",
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return this.firstName + " says bye!";
    }
}
 
function createAnimal(species, verb, noise) {
    return {
        species,
        [verb]() {
            console.log(noise);
        }
    }
}
const s = createAnimal("sheep", "bleet", "BAAAAaaaa");
s.bleet();