// try catch
try {
	let foo;
	console.log(foo.bar);
} catch (err) {
	console.log('catch block being executed');
	console.log(err);
}

// let foo;
// console.log(foo.bar);

console.log('other stuff');

function myPromise() {
	return new Promise((resolve, reject) => {
		// resolve('yay');
		reject('there was an error');
	});
}

async function consumePromise() {
	try {
		const text = await myPromise();
		console.log(text);
	} catch (err) {
		console.log(err);
	}
}

consumePromise();
