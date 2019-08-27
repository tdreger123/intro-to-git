// let person = {
//     firstName: "elie",
//     sayHi: function() {
//         return 'Hi ' + this.firstName;
//     }, 
//     determineContext: function() {
//         return this === person;
//     }
// }


// console.log(person.sayHi());
// console.log(person.determineContext());



// let colt = {
//     firstName: "colt",
//     sayHi: function() {
//         return 'Hi ' + this.firstName;
//     },
//     addNum: function (a,b,c,d) {
//         return this.firstName + " just calculated " + (a+b+c+d);
//     }
// }

// let elie = {
//     firstName: "elie"
// }


// console.log(colt.sayHi());
// console.log(colt.sayHi.apply(elie));

// console.log(colt.addNum.apply(elie, [1,2,3,4]));

// let colt = {
//     firstName: "colt",
//     sayHi: function() {
//         setTimeout(function() {
//             console.log("Hi " + this.firstName);
//         }.bind(this), 1000)
//     }
// }

// console.log(colt.sayHi());


// function House(bedrooms, bathrooms, numSqft) {
//     this.bedrooms = bedrooms;
//     this.bathrooms = bathrooms;
//     this.numSqft = numSqft;
// }

// let firstHouse = new House(2,2,1000);

// console.log(firstHouse);

// function Dog(name, age) {
//     this.name = name;
//     this.age = age;
//     this.bark = function() {
//         console.log(this.name + " just barked!");
//     }
// }

// let rusty = new Dog("Rusty", 3);
// let fido = new Dog("Fido", 1);

// console.log(rusty);
// console.log(fido);

// console.log(rusty.bark());


function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.numWheels = 4;
}

function Motorcycle (make, model, year) {
    Car.call(this, make, model, year)
    this.numWheels = 2;
}

let moto = new Motorcycle ("nissan", "350z", 2003)
console.log(moto);