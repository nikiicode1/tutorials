let name ='Mwaniki';
console.log(name);

// Variable names cannot be a reserved keyword (let, if, else, VAR, etc)
// Variable names should be meaningful
// Variable names cannot start with a number (1name)
// Variable names cannot contain a space or hyphen (-)
// Variable names are case-sensitive (name, Name, NAME)
// Variable names should be camelCase (firstName, lastName, etc)
// Variable names should be descriptive (firstName, lastName, etc)

// Primitive Types are strings, numbers, boolean, undefined, null

let firstName = 'Mwaniki'; // String literal
let age = 30; // Number literal
let isApproved = true; // Boolean literal
let lastName = undefined; // Undefined literal
let selectedColor = null; // Null literal
  
console.log(firstName, lastName);

// Constants represent values that never change
// Constants are declared using the const keyword
// Constants cannot be re-assigned
// Constants must be assigned a value
// Constants are block-scoped
// Constants are not hoisted
// Constants are read-only
// Constants are not global

const interestRate = 0.3;

console.log(interestRate);

// Reference Types are objects, arrays, functions
let person = {                                      // Object literal syntax
    name: 'Mwaniki',
    age: 30                                         // Name is a property of the object
}; 

console.log(person);

// Dot Notation
person.name = 'John';
console.log(person.name);

// Bracket Notation
person['name'] = 'Mary';

// Arrays are used to store multiple values in a single variable
let selectedColors = ['red', 'blue'];               // Array literal syntax
console.log(selectedColors.length);

// Functions are used to perform a task or calculate a value

function greet(name, lastName) {      
    console.log('Hello ' + name + ' ' + lastName);
}

greet('John', 'Smith');

// Calculating a value

function square(number) {
    return number * number;

}

let number = square(2);
console.log(number);


