const ordersSet = new Set(['Pasta', 'Pizza', 'Burger', 'Pasta', 'Pizza']);
// console.log(ordersSet);
// console.log(ordersSet.size);

// // console.log(ordersSet.has('Burger'));
// // console.log(ordersSet.has('Fries'));
// ordersSet.add('Aliya');
// console.log(ordersSet);
// ordersSet.delete('Aliya');
// console.log(ordersSet);
// ordersSet.clear();
// console.log(ordersSet);

// for (const i of ordersSet) {
//   console.log(i);
// }

const arr = ['Waiter', 'Chef', 'Waiter', 'Host'];
console.log(arr);
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr.length);
