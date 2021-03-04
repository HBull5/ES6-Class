// OOP: Object Oriented Programming
class Book {
	constructor(pages, title, binding, chapters, author, category) {
		this.pages = pages;
		this.title = title;
		this.binding = binding;
		this.chapters = chapters;
		this.author = author;
		this.category = category;
	}

	read() {
		console.log(`reading ${this.title}`);
	}
}

const book1 = new Book(250, 'Harry Potter & the wizard world', 'hardback', 10, 'JK Rowling', 'Fantasy');
console.log(book1);
book1.read();
const book2 = new Book(300, 'Designers Manual', 'hardback', 20, 'Bill Mulison', 'Non-Fiction');
console.log(book2);
book2.read();
// Object literal, i.e. not an object instantiated from a class
const book3 = {
	pages: 300,
	title: 'Designers Manual',
	binding: 'hardback',
	chapters: 20,
	author: 'Bill Mulsion',
	category: 'Non-Fiction'
};
console.log(book3);

let people = 0;

// Classes: blueprints to build objects, should have capitalized first letter
class Person {
	// constructor: a function for the class that is used to create the object
	constructor(name, eyeColor, hairColor, height, weight) {
		this.name = name;
		this.eyeColor = eyeColor;
		this.hairColor = hairColor;
		this.height = height;
		this.weight = weight;
		people++;
	}

	greet() {
		console.log(`hello my name is ${this.name}`);
	}

	// static are methods that do NOT belong to the object instantiated, but instead belong to the class
	static getNumOfInstantiations() {
		console.log(people);
	}
}

// Instantiation: To create an object from a class with the type of that class
Person.getNumOfInstantiations(); // 0
const harcourt = new Person('harcourt', 'blue', 'blonde', '67', '160');
Person.getNumOfInstantiations(); // 1
console.log(harcourt);
harcourt.greet();
console.log(harcourt.greet);
const kevin = new Person('Kevin', 'green', 'brown', '71', '200');
console.log(kevin);
kevin.greet();
console.log(kevin.greet);
const susan = new Person('susan', 'brown', 'brown', '67', '150');
Person.getNumOfInstantiations(); // 3

// use case for classes only made up of static methods, they're typically helper classes
class Math {
	static add(x, y) {
		console.log(x + y);
	}

	static sub(x, y) {
		console.log(x - y);
	}

	static mul(x, y) {
		console.log(x * y);
	}

	static div(x, y) {
		console.log(x / y);
	}
}

Math.add(2, 2);
Math.sub(4, 2);
Math.mul(6, 2);
Math.div(10, 5);
