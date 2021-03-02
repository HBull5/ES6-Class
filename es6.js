/**
 * let & const
 */
// you can declare let & var without assignment
var x;
let y;

// you can assign values
x = 1;
y = 2;

// you can overwrite values
x = 'hello';
y = 'world';

// cannot be overwritten and must be assigned upon declaration
const z = 'string';
// z += ' other thing';

// let & const both are NOT hoisted while var is

// primitive & reference types
// two big reference types to be aware of are Objects & arrays (technically still just an object)

const array = [];
console.log(array);
array.push('hello');
array.push('world');
console.log(array);

const obj = {};
console.log(obj);
obj.property = 'value';
obj.thing = 'something';
console.log(obj);

// let total = 0;
// for (let i = 1; i < 10; i++) {
// 	total += i;
// }

/**
 * template literals
 */

const h = 'hello';
const w = 'world';
console.log(h + ' ' + w); // awful feels real dumb
console.log(`${h} ${w}`);
console.log(`2 + 2 = ${2 + 2}`); // ${} to evaluate expressions

const hobbies = ['skiing', 'skydiving', 'snowboarding', 'race cars', 'potato chips', 'zebra cakes'];
const ul = document.querySelector('ul');

let hobbyStr = '';
console.log(hobbyStr);
for (let i = 0; i < hobbies.length; i++) {
	hobbyStr += `<li>${hobbies[i]}</li>`;
	console.log(hobbyStr);
}

// const li = document.createElement('li');
// console.log(li);
// console.log(hobbyStr);

ul.innerHTML = hobbyStr;

/**
 * Arrow Functions || Lambda Functions
 */

// function definition
function foo() {
	return 'bar';
}

// function expression || calling
foo();

// arrow function definition
const bar = () => {
	return 'foo';
};

// arrow function expression
bar();

const foobar = () => {
	return 'foobar';
};

function zoo() {
	return 'abc123';
}

const btn = document.querySelector('button');

btn.addEventListener('click', function (e) {
	// function body goes here
});

btn.addEventListener('click', e => {
	// arrow function body goes here
});

function myFunction(x) {
	console.log(x);
}

// arrow function parameters:
// No parameters: You must include the parenthesis
// 1 parameter: you can include them or omit them
// More than 1 parameter: you must include the parenthesis
// prettier-ignore
const myArrowFunction = (x, y) => {
	console.log(x + y);
};

// arrow functions are returning values
function returnThings() {
	return 'abc-mouse';
}

// this is totally valid
const arrowReturnThings = () => {
	return 'abc-mouse';
};

// more common syntax, if you omit the curly brackets from the arrow function, you are returning whatever is on the right side of the arrow
const arrowReturnThings2 = () => 'abc-mouse';

// arrow functions do not bind their own this value, while traditional functions bind a this value

/**
 * Rest Operator & Spread
 * rest or spread operator is "..."
 */
console.clear();

// rest operator accepts an infinite number of parameters, and stores them as an array, you must provide a name array, the name is whatever immediately proceeds the "..."
const add = (...params) => {
	// console.log(params);
	let total = 0;
	for (let i = 0; i < params.length; i++) {
		total += params[i];
	}
	console.log(total);
};

add(2);
add(2, 2);
add(2, 2, 2, 2, 2);
add(55, 43, 22, 11, 67, 90, 110);

const concatenate = (str1, str2, ...strs) => {
	let output = `${str1} ${str2}`;
	if (strs.length !== 0) {
		for (let i = 0; i < strs.length; i++) {
			output += ` ${strs[i]}`;
		}
	}
	console.log(output);
};

concatenate('hello', 'world');
concatenate('hello', 'world', 'abc');
concatenate('fire', 'start', 'engine', 'turbo', 'grease');

// spread: mostly useful for preventing additional values being passed into a function which typically leads to undesirable results
// prettier-ignore
const sum = (x, y, z) => {
    console.log(x + y + z);
};

const nums = [1, 2, 3, 4, 5];
nums.pop();

sum(1, 2, 3); // 6
sum(...nums); // returns 6 as well

/**
 * Object Destructuring
 */

const car1 = {
	make: 'ford',
	model: 'mustang',
	year: 1966,
	price: 100000
};

const car2 = {
	make: 'chevy',
	model: 'camaro',
	year: 1971,
	price: 150000
};

const car3 = {
	make: 'toyota',
	model: 'supra',
	year: 1994,
	price: 120000
};

const car4 = {
	make: 'ferrari',
	model: '355',
	year: 1996
};

// we're creating variables for each property we are destructuring.
const getPrice = ({ year, make, model, price }) => {
	console.log(
		`The ${year} ${make} ${model} costs ${typeof price === 'undefined' ? 'more than you can afford pal' : price}.`
	);
};

getPrice(car1);
getPrice(car2);
getPrice(car3);
// well fix the undefined with the ternary operator
getPrice(car4);

/**
 * ternary operator: another means of writing if/else, it is shorthand of if/else also called an inline if/else
 */

if (true) {
	console.log('hooray');
} else {
	console.log('boo');
}

// condition ? true block : false block
false ? console.log('hooray') : console.log('boo');
true ? (true ? 'true' : 'false') : false ? 'true' : 'false'; // NOT RECOMMENDED TO NEST

/**
 * for...of: iterator of arrays
 *
 * for...in: iterator of objects
 */
// for...of
console.clear();
const foods = ['noodles', 'fruit', 'chicken', 'peas', 'carrots'];
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const array2 = ['string', 'string', 'string', 'string', 'string', 'string'];

for (let i = 0; i < foods.length; i++) {
	// console.log(foods[i]);
}

for (let i = 0; i < colors.length; i++) {
	// console.log(colors[i]);
}

for (const food of foods) {
	console.log(food);
}

for (const color of colors) {
	console.log(color);
}

for (const element of array2) {
	console.log(element);
}

// for...in
const car5 = {
	make: 'nissan',
	model: 'GTR',
	year: 2020,
	price: 250000
};

const food = {
	type: 'fruit',
	name: 'orange',
	citrus: true
};

const keys = Object.keys(car5);
for (let i = 0; i < keys.length; i++) {
	console.log(car5[keys[i]]);
}

for (const key in car5) {
	console.log(car5[key]);
}

console.clear();

// fill in the $ with whatever object you are looping through
// for (const key in $) {
// 	console.log($[key]);
// }
