/**
 * object & method review
 */
// function
// function foo() {
// 	console.log('foo');
// }

// window.foo(); // wtf is calling this? window

// const obj1 = {
// 	property: {
// 		key: 'value',
// 		method() {
// 			return true;
// 		}
// 	},
// 	myMethod() {
// 		console.log('my method');
// 	}
// };

// obj1.myMethod(); // obj1 is calling this method

// var arr = [1, 2, 3];
// // window.arr = [1, 2, 3];
// window.arr.pop(); // arr is calling the pop method

// console.log(); // what is the method? log() what is the object? console

// window.alert(); // what is the method? alert what is the object? window

// obj1.property.method(); // what is the method? method what is the object calling the method? property

/**
 * function/method review
 */
function myFunction2() {
	console.log('hello world');
	console.log('hello world');
	console.log('hello world');
	console.log('hello world');
	console.log('hello world');
	console.log('hello world');
	console.log('hello world');
	console.log('hello world');
	console.log('hello world');
}

const myFunction3 = function () {
	console.log('hello world');
};

// myFunction2(); // called the function
// myFunction3();

console.log(myFunction2); // read back the instruction to be executed.
const myFunction4 = myFunction2;
myFunction4();

console.log(myFunction4);

/**
 * this is the object calling the method
 */

// this only works inside of methods and functions

const obj = {
	prop1: 'value',
	prop2: this,

	myMethod() {
		console.log(this);
	}
};

function foo() {
	console.log(this);
}

obj.myMethod();
foo(); // the window
console.log(obj.prop2); // window

// "this" practical example
const harcourt = {
	name: 'harcourt',
	age: 27,
	children: {
		boy: 'vinny',
		girl: 'ellie',
		greetChildren() {
			console.log(`hello ${this.boy} & ${this.girl}`);
		}
	},
	greet() {
		console.log(`${this.name} is ${this.age} years old.`);
	}
};

const jessica = {
	name: 'jessica',
	age: 24,
	greet() {
		console.log(`${this.name} is ${this.age} years old.`);
	}
};

harcourt.children.greetChildren(); // what is the method? greetChildren what is the object? children this === children

harcourt.greet(); // what is the method? greet what is the object? harcourt therefore this === the harcourt object
jessica.greet(); // what is the method? greet what is the object? jessica therefore this === jessica

const mustang = {
	make: 'ford',
	model: 'mustang',
	year: 1966,
	fast: false,
	goFast() {
		// this === mustang
		if (this.fast) {
			console.log(`${this.model} goes real fast`);
		} else {
			console.log(`${this.model} is slow.`);
		}
	}
};

const supra = {
	// this === supra
	make: 'toyota',
	model: 'supra',
	year: 1994,
	fast: true,
	goFast() {
		if (this.fast) {
			console.log(`${this.model} goes real fast`);
		} else {
			console.log(`${this.model} is slow.`);
		}
	}
};

function goFast() {
	if (this.fast) {
		console.log(`${this.model} goes real fast`);
	} else {
		console.log(`${this.model} is slow.`);
	}
}

mustang.goFast(); // what is the object? mustang what is the method? goFast this === mustang
supra.goFast(); // what is the object? supra what is the method? goFast this === supra

window.fast = true;
window.model = 'camaro';

goFast(); // object: window method/function: goFast this === window

const h1 = document.querySelector('h1');

h1.classList.add('green'); // what is the method? add what is the object? classList

/**
 * This edge cases
 */
console.clear();

function mySuperSpecialFunction() {
	console.log(this);
}

const obj2 = {
	property: 'our object',

	myMethod() {
		console.log(this); // obj2
	},

	myMethod2() {
		obj3.myMethod2();
		// mySuperSpecialFunction(); // window
	},

	myMethod3() {
		function myFunction() {
			console.log(this); // window object
		}

		return myFunction(); // this is being called by the window object
	},

	myMethod4() {
		console.log(this); // obj2
		mySuperSpecialFunction(); // window
	}
};

const obj3 = {
	myMethod() {
		// console.log(this); // obj3
		obj2.myMethod(); // obj2
	},

	myMethod2() {
		console.log(this); // obj3
	},

	myMethod3() {
		obj2.myMethod4();
		const otherMethod = obj2.myMethod2;
		otherMethod(); // obj3
	}
};

obj2.myMethod(); // what is the method? myMethod what is the object calling the method? obj2 this === obj2
const test = obj2.myMethod;
test(); // what is the method? test what is object calling the method? window this === window
obj2.myMethod3(); // what is the method? myMethod3() what is the object calling the method? this === window
obj3.myMethod(); // what is the method? myMethod() what is the object calling the method? this === obj2
obj2.myMethod2(); // this === obj3
mySuperSpecialFunction(); // window
obj3.myMethod3(); // window

// this is bound by the object that calls it

/**
 * New keyword
 */
// new ENSURES that the value this is bound to the constraining object
console.clear();

function myNewFunction() {
	return this;
}

const myObj = myNewFunction();
console.log(myObj); // window
const myObj2 = new myNewFunction();
myObj2.bool = true;
console.log(myObj2); // obj2

/**
 * Arrow functions, arrow functions do NOT bind their own this
 */
console.clear();

const arrowObj = {
	myMethod() {
		console.log(this);
	},

	myMethod2: function () {
		console.log(this);
	},

	myArrowMethod: () => {
		console.log(this);
	},

	myMethod3() {
		const myArrowFunc = () => {
			console.log(this);
		};

		myArrowFunc();
	}
};

arrowObj.myMethod(); // arrowObj
arrowObj.myArrowMethod(); // window, b/c arrow function do NOT bind this, therefore the value of this is still window
arrowObj.myMethod3(); // arrowObj
arrowObj.myMethod2(); // arrowObj
