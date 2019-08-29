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
This NOT an objector. It doesn't represent a singular thing. It has no
curly braces or key/value pairs. It is an array. When using an array to store things
, they have now lost their context.
*/
const food = ["Hamburger", "Small", "Medium rare"];
