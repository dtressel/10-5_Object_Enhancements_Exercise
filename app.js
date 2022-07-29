//Part 1: re-write the following functions/code examples using ES2015

// #1
// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
// }

function createInstructor(firstName, lastName){
    return {
      firstName,
      lastName
    }
}

// #2
// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"

const favoriteNumber = 42;

const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
}

// #3
// var instructor = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName + " says bye!";
//     }
//   }

const instructor2 = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
}

// #4
// createAnimal function

function createAnimal(species, verb, noise) {
    const obj = {species, [verb]() {console.log(noise)}}
    return obj;
}