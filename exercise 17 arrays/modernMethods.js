const priceUSD = [10, 23, 45, 12, 35];

// For of
const pricePKR_forof = [];
for (const mov of priceUSD) {
  pricePKR_forof.push(mov * 150);
}
console.log(pricePKR_forof);

// For Each
const pricePKR_foreach = [];
priceUSD.forEach(function (mov) {
  pricePKR_foreach.push(mov * 150);
});
console.log(pricePKR_foreach);

// Map
const pricePKR_map = priceUSD.map(function (mov) {
  return mov * 150;
});
console.log(pricePKR_map);

// Map with Arrow
const pricePKR_map_arrow = priceUSD.map((mov) => mov * 150);
console.log(pricePKR_map_arrow);

const movements = [-200, 3040, 234, 20, -340, -234];

// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });

const movementsMap = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
      mov
    )}`
);
console.log(movementsMap);

const name1 = "Ch Murtaza Tahir";
const username = name1.toLowerCase().split(" ");
console.log(username);
let arr = [];
username.forEach(function (name) {
  arr.push(name[0]);
});
console.log(arr.join(""));

// const createUsername = function (user) {
//   return user
//     .toLowerCase()
//     .split(" ")
//     .map((name) => name[0])
//     .join("");
// };
// console.log(createUsername("Ch Mustafa sadoh NBVVb"));

const createUsername = (user) =>
  user
    .toLowerCase()
    .split(" ")
    .map((name) => name[0])
    .join("");

console.log(createUsername("Ch Mustafa sadoh gh NBVVb"));

const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0;
});

const withdwawals = movements.filter((mov) => mov < 0);

console.log(movements);
console.log(deposits);
console.log(withdwawals);

console.log("For--OF--Loop");
// For of loop
const deposits_for_of = [];
for (const mov of movements) {
  if (mov > 0) {
    deposits_for_of.push(mov);
  }
}
console.log(deposits_for_of);

////////// Reduce method

const balance = movements.reduce(function (acc, mov, i, arr) {
  return acc + mov;
}, 0);
console.log(balance);

const balance1 = movements.reduce((acc, mov) => acc + mov, 0);
console.log(balance1);

let balance2 = 0;
for (const mov of movements) {
  balance2 += mov;
}
console.log(balance2);

console.log(movements);
const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
});
console.log(max);

console.clear();
