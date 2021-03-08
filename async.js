// callback
function foo(cb, cb2) {
	cb();
	cb2();
}

// callback hell when you have to many callback functions || callback parameters
foo(
	() => {
		console.log('hello world');
	},
	() => {
		console.log('goodbye world');
	}
);

// Promise syntax

// Promises have two states, resolve & reject
// resolve: everything went well and the promise was kept
// reject: something went wrong and the promise was broken
// is only can be called resolve or reject, resolve & reject methods work like the return keyword where the promise callback is short circuited when it is called so nothing below it gets executed

// const myPromise = new Promise(function (resolve, reject) {

// })

const myPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve();
	}, 5000);
});

// consume promise
// then => resolve callback function as a parameter
// catch => reject callback function as a parameter
myPromise
	.then(() => {
		console.log('promise kept');
	})
	.catch(() => {
		console.log('promise broken');
	});

function myPromise2() {
	return new Promise((resolve, reject) => {
		const data = 'chuck norris joke';
		resolve({ data, str: 'hello world' });
		// reject('there was an error');
	});
}

myPromise2()
	.then(({ data, str }) => {
		console.log(data);
		console.log(str);
	})
	.catch(err => {
		console.log(err);
	});

function myPromise3() {
	return new Promise((resolve, reject) => {
		resolve('chuck norris joke');
	});
}

function myPromise4() {
	return new Promise((resolve, reject) => {
		// resolve('chuck norris image');
		reject(`couldn't get any images`);
	});
}

// const promiseArr = [myPromise3(), myPromise4()];
// console.log(promiseArr);

Promise.all([myPromise3(), myPromise4()])
	.then(data => {
		for (const datum of data) {
			console.log(datum);
		}
	})
	.catch(err => {
		console.log(err);
	});

function myPromise5() {
	return new Promise((resolve, reject) => {
		resolve();
	});
}

myPromise5()
	.then(() => {
		return new Promise((resolve, reject) => {
			resolve('double promise');
		});
	})
	.then(data => {
		console.log(data);
	})
	.catch(err => {
		console.log(err);
	});

// Async & Await
// just another way to consume promise, creating them still happens the same way.
// await allows your program to pause execution of the function until the promise is resolved or rejected
// await keyword can only be used inside of an async function
console.clear();

function myPromise6() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('some data');
		}, 3000);
	});
}

async function asyncOps() {
	const data = await myPromise6();
	console.log(data);
}

// const arrowFunc = async () => {
// 	console.log('hello world');
// };

asyncOps();

// express code snippet
// app.get('/', async (req, res) => {
//      // response handler
// })
