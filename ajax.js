const btn = document.querySelector('button');
const output = document.querySelector('div');

btn.addEventListener('click', () => {
	let xhr = new XMLHttpRequest();

	xhr.open('GET', 'https://api.chucknorris.io/jokes/random', true);

	xhr.onload = function () {
		output.innerHTML += `<p>${JSON.parse(this.responseText).value}</p>`;
	};

	xhr.send();
});

// instantiate new XML HTTP Request Object
let xhr = new XMLHttpRequest();

// formatting the request with the open method

/**
 * @param {String} httpMethod @example 'GET', 'POST', 'PUT', 'DELETE'
 * @param {String} httpAddress @example 'http://www.google.com'
 * @param {Boolean} asyncBool @example 'true' always use true
 */
xhr.open('GET', 'https://api.chucknorris.io/jokes/random', true);

// OLD SYNTAX
// Ready State Codes
// 0: unsent
// 1: opened
// 2: headers_recieved
// 3: loading
// 4: done (we want to check for this one)

// xhr.onreadystatechange = function () {
// 	if (this.readyState === 4) {
// 		console.log(JSON.parse(this.responseText).value);
// 	}
// };

xhr.onprogress = function () {
	console.log('waiting server to respond');
};

// onload is when we get the response back
xhr.onload = function () {
	console.log(JSON.parse(this.responseText).value);
};

xhr.send(); // this is what actually sends the request, everything before this is just defining where it goes and what it does once a response is received

// let xhr = new XMLHttpRequest()

// xhr.open('HTTP METHOD', 'http://whereyourapiis.com/endpoint', true);

// xhr.onload = function () { this.responseText } this.responseText === API response

// xhr.send();

fetch('https://api.chucknorris.io/jokes/random', {
	method: 'GET'
})
	.then(data => data.json())
	.then(data => {
		console.log(data.value);
	});

async function fetchRequest(url, method) {
	const json = await fetch(url, { method });
	const data = await json.json();
	return data;
}

fetchRequest('https://api.chucknorris.io/jokes/random', 'GET');
