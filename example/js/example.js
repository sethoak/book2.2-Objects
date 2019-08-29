/*
    Basic object representing my dog Angus.
    - The object itself is labeled with the variable of `dog`
    - The integer of 1 is labeled with the key of `age`
*/
const angus = {
  age: 1
};

// Another object representing my child Tessa
const tessa = {
  age: 1
};

/*
Object characteristics: open and closing curly braces {}, contains keys and values seperated
by a colon, and key/value pairs are separated by a commma
*/

//This is an object. It represents a single food.

const food = {
  type: "Hamburger",
  size: "Small",
  temperature: "Medium rare"
};

/*
This NOT an object. It doesn't represent a singular thing. It has no
curly braces or key/value pairs. It is an array. When using an array to store things
, they have now lost their context.
*/
const food = ["Hamburger", "Small", "Medium rare"];

//An array is a collection of similar things.
//Objects are ways to define details of a single thing.
//Both an array and object can be assigned to a variable/const

/*
Here you define two separate objects. One represents a cat, and the other r
epresents a dog. Each has their own properties (key/value pairs) separated by commas.
*/

//This is an object. It represents a desk and itemizes the properties of it.

const desk = {
  height: 42,
  width: 63,
  depth: 30
};

//Objects are ways to define details of a single thing. Both an array and an object can be assigned to a variable.
//Here you define two separate objects. One represents a cat, and the other represents a dog. Each has their own properties (key/value pairs) separated by commas.

onst whiskers = {
    species: "Cat",
    name: "Whiskers",
    age: 4,
    color: "Black"
}

const dozer = {
    species: "Dog",
    name: "Dozer",
    age: 7,
    color: "Brown"
}

//NEVER describe two things with a single object! NO!
const theAnimals = {
    catName: "Jingles",
    catAge: 4,
    catColor: "Black",
    dogName: "Denver",
    dogAge: 7,
    dogColor: "Brown"
}

//store both animals inside of a single data structure, this is what an array is fo
//storing both of these animals in a single 'thing', which is an array
const animals = [cat, dog]
