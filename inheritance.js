// we can use extends, to have one class inherit from another. When a class inherits from another class it inherits all of its properties and methods.
// super: allows to call that parent constructor to pass along all of the inherited properties and methods

class Pet {
	constructor(name, owner, home, toys, diet) {
		this.name = name;
		this.owner = owner;
		this.home = home;
		this.toys = toys;
		this.diet = diet;
	}

	eat() {
		console.log(`${this.name} eats ${this.diet}`);
	}
}

class Dog extends Pet {
	constructor(name, owner, home, toys, diet, breed, gender, furColor, furType) {
		super(name, owner, home, toys, diet); // this is calling the pet constructor
		this.breed = breed;
		this.gender = gender;
		this.furColor = furColor;
		this.furType = furType;
	}

	woof() {
		console.log(`${this.name} says woof!`);
		// super.eat();
	}
}

class Bird extends Pet {
	constructor(name, owner, home, toys, diet, breed, gender, featherColor, wingSpan) {
		super(name, owner, home, toys, diet);
		this.breed = breed;
		this.gender = gender;
		this.featherColor = featherColor;
		this.wingSpan = wingSpan;
	}

	squawk() {
		console.log(`${this.name} says squawk!`);
	}
}

const sweetPea = new Dog(
	'sweet pea',
	'harcourt',
	'my house',
	['pull rope', 'chew rabbit', 'tire'],
	'dog food',
	'pit bull',
	'female',
	'black n white',
	'short'
);

// console.log(sweetPea);
sweetPea.eat();
sweetPea.woof();

const jerry = new Bird(
	'jerry',
	'john doe',
	'somewhere',
	['swing', 'chew toys'],
	'bird food',
	'parakeet',
	'male',
	'white/yellow/grey',
	11
);

jerry.eat();
jerry.squawk();

/**
 * Multi level inheritance
 */

class Vehicle {
	constructor(make, model, year) {
		this.make = make;
		this.model = model;
		this.year = year;
	}

	vehicle() {
		console.log('Im a vehicle');
	}
}

class Automobile extends Vehicle {
	constructor(make, model, year, engine, drivetrain, transmission) {
		super(make, model, year);
		this.engine = engine;
		this.drivetrain = drivetrain;
		this.transmission = transmission;
	}

	automobile() {
		console.log('Im a automobile');
	}
}

class Car extends Automobile {
	constructor(make, model, year, engine, drivetrain, transmission, bodyType, trunkSpace) {
		super(make, model, year, engine, drivetrain, transmission);
		this.bodyType = bodyType;
		this.trunkSpace = trunkSpace;
	}

	car() {
		console.log('Im a car');
	}
}

class Truck extends Automobile {
	constructor(make, model, year, engine, drivetrain, transmission, truckType, bedLength) {
		super(make, model, year, engine, drivetrain, transmission);
		this.truckType = truckType;
		this.bedLength = bedLength;
	}

	truck() {
		console.log('Im a truck');
	}
}

const vehicle1 = new Vehicle('sherman', 'tank', 1944); // you can always still use the parent class if you want but in most instances it doesn't make sense

const automobile1 = new Automobile('Ford', 'Model T', 1920, 4.0, '2wd', 'manual');

const car1 = new Car('Toyota', 'Supra', 1994, 3.0, '2wd', 'manual', 'coupe', 30);

const truck1 = new Truck('Toyota', 'Tundra', 2021, 5.7, '4wd', 'automatic', 'Crew Cab', 6);
