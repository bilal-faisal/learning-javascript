// const menu1 = ['Pizza', 'Pasta', 'Burger'];
// const menu2 = ['Icecream', 'Milkshake'];

// const [item1, , item2, ...others] = [...menu1, ...menu2];
// console.log(item1, item2, others);

// const obj = { a: 23, b: 34, c: 24, d: 66 };
// const { c, b, ...rest } = obj;
// console.log(rest);

// const add = function (...numbers) {
//   console.log(numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };
// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3, 4, 5];

// add(...arr1);
// add(...arr2);

function obj({ a, ...other }) {
  console.log(a, other);
}
obj({ a: 'miss', b: 'asd', c: 'ssd' });
