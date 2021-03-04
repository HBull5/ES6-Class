// let orderNum = 0;

// function getOrders() {
// 	orderNum++;
// 	setTimeout(function () {
// 		console.log(`order #${orderNum} received...`);
// 	}, 1000);
// }

// function cookFood() {

// }

function foo(callbackFunction) {
	callbackFunction();
}

function bar() {
	console.log('hello world');
}

// foo(bar);
// foo(function () {
// 	console.log('do other things');
// });

whateverElement.addEventListener('click', bar);
whateverElement.addEventListener('click', function () {
	console.log('do things');
});

// function myFunction(name) {
// 	name();
// }

// myFunction(function () {
// 	console.log('hello there');
// });

// function doThings() {
// 	console.log('things are being done');
// }

// myFunction(doThings);
