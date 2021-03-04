// go to https://nodejs.org/en/download/ and download node.js runtime for your OS
// after that open terminal in the location of review.js and type in the command `node review`

// function return values

function logAdd(num1, num2) {
	console.log(num1 + num2);
}

function returnAdd(num1, num2) {
	// prettier-ignore
	return (num1 + num2);
}

// var x = logAdd(2, 2); // 4
// var y = returnAdd(2, 4); // nothing
// console.log(x); // undefined
// console.log(y); // 6

var x = logAdd(2, 2); // 4
console.log(x);

var copyOfReturnAdd = returnAdd; // this just makes a copy of returnAdd function and stores it in the NEW function named copyOfReturnAdd
var y = copyOfReturnAdd(2, 2);
console.log(y);
