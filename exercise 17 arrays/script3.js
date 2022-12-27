// const movements = [23, -355, 34, 564, -35, -24];
// // Equality
// console.log(movements.includes(-355));

// // Some: Condition
// console.log(movements.some(mov => mov === -355));
// console.log(movements.some(mov => mov > 5000));

// // Every: Condition
// console.log(movements.every(mov => mov > 0));

// // Separate callback function
// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));

// const arr1 = [[1, 2, 3, 4, 5], [2, 5, 6], 8, 9, 32];
// console.log(arr1.flat());
// const arr2 = [[[1, 2], 3, [4, 5]], [2, [5, 6]], 8, 9, 32];
// console.log(arr2.flat(1));
// console.log(arr2.flat(2));

// // Calculating overall Balance in all Accounts
// console.log(accounts);
// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

// // Using map then flat
// const overallBalance = accounts
//   .map(acc => acc.movements)
//   .flat(1)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

// // using flatMap method
// const overallBalance = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

// const strings = ["Banana", "Apple", "Lemon", "Grapes"];
// console.log(strings.sort());

// let numbers = [13, -35, -24, 25, -99, -64, 95, 36];
// console.log(numbers.sort());

// // return > 0 -> B,A switch order
// // return < 0 -> A,B keep order
// numbers.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   }
//   if (b > a) {
//     return -1;
//   }
// });
// console.log(numbers);

// numbers = [13, -35, -24, 25, -99, -64, 95, 36];
// numbers.sort((a, b) => a - b); // ascending
// console.log(numbers);

// numbers = [13, -35, -24, 25, -99, -64, 95, 36];
// numbers.sort((a, b) => b - a); // descending
// console.log(numbers);

const arr1 = [1, 2, 3, 4, 5, 6];
console.log(arr1);

const arr2 = new Array(1, 2, 3, 4, 5, 6);
console.log(arr2);

const arr3 = new Array(5);
console.log(arr3);

console.log(arr3.map(() => 5));
console.log([1, 1, 1, 1].map(() => 5)); // Doesn't work

arr3.fill(2);
console.log(arr3);

arr3.fill(3, 2);
console.log(arr3);

arr3.fill(3, 2, 4);
console.log(arr3);

console.clear();

// Array.from function

const arrX = Array.from({ length: 5 }, () => 1);
console.log(arrX);

const arrY = Array.from({ length: 5 }, (currElem, i) => i + 1);
console.log(arrY);

const arrZ = Array.from({ length: 5 }, (_, i) => i + 1);
console.log(arrZ);

// Generating 100 random dice rolls
const arr100 = Array.from(
  { length: 100 },
  () => Math.floor(Math.random() * 6) + 1
);
console.log(arr100);
