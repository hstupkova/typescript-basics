// Primitives: number, string, boolean, null, undefined

let age: number; // includes floats
age = 12;

let userName: string;
userName = 'Max';

let isInstructor: boolean;
isInstructor = true;

// More complex types: arrays, objects

let hobbies: string[]; // array of strings
hobbies = ['sports', 'cooking'];

type Person = {
  name: string;
  age: number;
};

let person: Person;
person = {
  name: 'Max',
  age: 32,
};

let people: Person[];
people = [
  {
    name: 'Max',
    age: 32,
  },
  {
    name: 'Quinn',
    age: 15,
  },
];

// Union types
let course: string | number = 'React - The Complete Guide';
course = 12345;

// Function types, parameters
function add(a: number, b: number) {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]

const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');

