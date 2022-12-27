let arr = ["a", "b", "c", "d", "e"];

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-1));
console.log(arr.slice(-2));
console.log(arr.slice(1, -2));

console.log(arr.slice());

console.log([...arr]);

// SPLICE
console.log(arr.splice(2));
console.log(arr);
arr = ["a", "b", "c", "d", "e"];
arr.splice(-1);
console.log(arr);

arr = ["a", "b", "c", "d", "e"];
arr.splice(1, 2);
console.log(arr);

// REVERSE

arr = ["a", "b", "c", "d", "e"];
console.log(arr.reverse());
console.log(arr);

// CONCAT
let arr1 = ["a", "b", "c", "d", "e"];
let arr2 = ["j", "i", "h", "g", "f"];

let letters = arr1.concat(arr2.reverse());
console.log(letters);

letters = [...arr1, ...arr2];
console.log(letters);

// JOIN

arr = ["a", "b", "c", "d", "e"];
console.log(arr.join(" - "));
console.log(arr);

// Loop

const movements = [1200, -340, 234, -60, -767, 880];

// For of Loop
for (const [i, mov] of movements.entries()) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
}

console.log("-------For-Each-------");
// For Each Loop
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

// For-Each with Map
const currencies = new Map([
  ["USD", "Dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// For-Each with Sets
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "GBP", "EUR"]);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, val, set) {
  console.log(`${val}, ${value} `);
});

console.clear();
