'use strict';

// // Default Parameters
// const allBookings = [];
// const createBooking = function (
//   flightNo,
//   totalPassengers = 1,
//   price = 299 * totalPassengers
// ) {
//   const currentBooking = {
//     flightNo,
//     totalPassengers,
//     price,
//   };
//   console.log(currentBooking);
//   allBookings.push(currentBooking);
// };
// createBooking('L20');
// createBooking('L20', 34);
// createBooking('L20', undefined, 34);

// // How Passing Arguments Works

// const flight = 'L450';
// const passenger = {
//   name: 'Bilal Faisal',
//   passport: 234567845,
// };

// const checkIn = function (flightNo, passengerInfo) {
//   flightNo = 'L550';
//   passengerInfo.name = 'Mr. ' + passengerInfo.name;
// };

// checkIn(flight, passenger);
// console.log(flight);
// console.log(passenger);

// // Functions accepting Callback functions
// const oneWord = function (str) {
//   return str.replaceAll(' ', '').toLowerCase();
// };
// // console.log(oneWord('VHG ghj gh'));

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
//   // str.slice(0, str.indexOf(' ')).toUpperCase() +
//   // str.slice(str.indexOf(' ')).toLowerCase()
// };
// // console.log(upperFirstWord('CgGnnvbn VBNj gh'));

// const transform = function (str, func) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${func(str)}`);
//   console.log(`Transformed by: ${func.name}`);
// };
// transform('What do you mean!!', oneWord);
// transform('What do you mean!!', upperFirstWord);

// // Functions returning functions
// const greetings = function (greet) {
//   return function (name) {
//     console.log(`${greet} ${name}`);
//   };
// };

// const GreeterHey = greetings('Hey');
// GreeterHey('Bilal');
// GreeterHey('Noor');

// console.log(greetings('Hey'));

// greetings('Hello')('Lesbo');

// // greetings function in arrow way
// const greetingsArrow = (greet) => (name) => console.log(`${greet} ${name}`);
// greetingsArrow('Hi')('Darling');

// ---------
// Call and applymethod

const pia = {
  name: 'Pakistan International Airline',
  code: 'PIA',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.name} flight ${this.code}${flightNum}`
    );
    this.bookings.push({ flight: `${this.code}${flightNum}`, name });
  },
};

pia.book(235, 'Bilal');

const emirates = {
  name: 'Emirates',
  code: 'EM',
  bookings: [],
};

const book = pia.book;

// book(23, 'Talha');   --> ERROR
// this keywords depends on how the function is called
// see that book function is now just a regular function
// so in regular function 'this' keyword is undefined

// We want to tell JS explicitly or manually what 'this'
// keyword should look like (in this case, whether we want
// it for pia or emirates)

// book(23, 'Talha'); --> DOESN'T WORK
book.call(emirates, 23, 'Talha');

book.call(pia, 237, 'Cooper');

const flightData = [237, 'Fatima'];
book.apply(pia, flightData);

book.call(pia, ...flightData);
console.clear();
// bind does not immediately call the function
// Instead it returns a new function where the
// 'this' keyword is bound
const bookPIA = book.bind(pia);
const bookEM = book.bind(emirates);
console.log(bookPIA);
console.log(bookEM);

bookPIA(23, 'Hammad');

//++++++++++++++++++++++++++++++++++++

const bookEM124 = book.bind(emirates, 124);
bookEM124('Emily');
// first argument is now already set
// commonly known as known partial application as some of the
// arguments are already set

console.clear();
emirates.planes = 300;
emirates.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
emirates.buyPlane();

const btn = document.querySelector('.btn');
btn.addEventListener('click', emirates.buyPlane);
// In eventHandler function, the 'this' keyword always points
// to the element on which that handler is attached to.
// In this case, the button element
// But we want 'this' to point to emirates object.
// Soo,

btn.addEventListener('click', emirates.buyPlane.bind(emirates));

console.clear();

const addTax = (rate, value) => value + value * rate;
const addTax23 = addTax.bind(null, 0.23);

console.log(addTax23(200));

const addT1 = (rate) => (value) => value + value * rate;
const addT2 = addT1(0.23);
console.log(addT2(100));

// const addT1 = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

console.clear();

const pia1 = {
  name: 'Pakistan International Airlines',
  code: 'PIA',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.name} flight ${this.code}${flightNum}`
    );
    this.bookings.push({ flight: `${this.code}${flightNum}`, name });
  },
};
pia1.book(23, 'bilal');
pia1.book(23, 'bilal');
console.log(pia1.bookings);
