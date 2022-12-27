// console.log(Number.parseInt('b30px'));
// console.log(Number.parseInt('3b', 16));

// console.log(Number.parseInt('3.70'));

// console.log(Number.parseFloat('3.70'));

// console.log(Number.isNaN('20px'));
// console.log(Number.isNaN(+'20px'));

// console.log(29 / 0);
// console.log(Number.isNaN(29 / 0));

// console.log(Number.isFinite(20 / 0));
// console.log(Number.isFinite('20'));
// console.log(Number.isFinite(+'20'));
// console.log(Number.isFinite(+'20px'));

// console.log(Number.isInteger(20));

// console.log(Number.isInteger(20.0));
// console.log(Number.isInteger(20.1));

// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));
// console.log(8 ** (1 / 3));
// console.log(Math.max(2, 34, 52, 23, 43));
// console.log(Math.max(2, 34, '52', 23, 43));
// console.log(Math.max(2, 34, '22px', 23, 43));

// console.log(Math.min(2, 34, 52, 23, 43));

// console.log(Math.PI);
// console.log(Math.PI * Number.parseFloat('10px') ** 2);

// trunc -> remove decimal part
// 0 - 1
console.log(Math.random());

// 0 - 5
console.log(Math.trunc(Math.random() * 6));

// 1 - 6
console.log(Math.trunc(Math.random() * 6) + 1);

console.log(Math.trunc(2.3));
console.log(Math.trunc(2.8));
console.log(Math.trunc(-2.3));
console.log(Math.trunc(-2.8));

console.log(Math.round(2.3));
console.log(Math.round(2.8));
console.log(Math.round(2.5));
console.log(Math.round(-2.3));
console.log(Math.round(-2.8));
console.log(Math.round(-2.5));
console.log(Math.round(-2.6));

console.log(Math.ceil(2.3));
console.log(Math.ceil(2.8));
console.log(Math.ceil(2.5));
console.log(Math.ceil(-2.3));
console.log(Math.ceil(-2.8));
console.log(Math.ceil(-2.5));

console.log(Math.floor(2.3));
console.log(Math.floor(2.8));
console.log(Math.floor(2.5));
console.log(Math.floor(-2.3));
console.log(Math.floor(-2.8));
console.log(Math.floor(-2.5));

console.clear();

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) + 1) + min;
};
console.log(randomInt(10, 14));

console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.745).toFixed(2));
