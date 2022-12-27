// 'use strict';

// const players = ['Messi', 'Ronaldo', 'Afridi'];

// for (const [i, j] in players) {
//   console.log(`${+i + 1}: ${j}`);
// }

// for (let i = 0; i < players.length; i++) {
//   console.log(`${i + 1}: ${players[i]}`);
// }

// players.forEach(function (element, i) {
//   console.log(`${i + 1}: ${element}`);
// });

// for (const [i, element] of players.entries()) {
//   console.log(`${i + 1}: ${element}`);
// }

// for (const index in players) {
//   console.log(index, players[index]);
// }

const days = ['Mon', 'Tue', 'Wed', 'Thur'];

const openingHours = {
  [days[0]]: {
    Open: 2,
    Close: 11,
  },
  [days[1]]: {
    Open: 3,
    Close: 12,
  },
  [days[2]]: {
    Open: 0,
    Close: 12,
  },
};
const entries = Object.entries(openingHours);
for (const [key, { Open, Close }] of entries) {
  console.log(
    `On ${key}, we open at ${Open}pm and close at ${Close}${
      Close < 12 ? 'pm' : 'am'
    }.`
  );
}

// console.log(days.entries());
// // console.log(openingHours.entries());

// console.log(Object.entries(openingHours));
// console.log(Object.entries(days));

// const properties = Object.keys(openingHours);

// let str = `We are open ${properties.length} days a week: `;
// for (const day of properties) {
//   str += `${day}, `;
// }
// str = str.slice(0, -2);
// str += ` at `;

// const values = Object.values(openingHours);

// for (const i of values) {
//   str += `${i.Open}pm, `;
// }
// str = str.slice(0, -2);
// str += ` respectively. `;
// console.log(str);

// for (const i of days) {
//   const open = openingHours[i]?.Open ?? '-';
//   console.log(`On ${i}, we open at ${open}`);
// }

// console.log(restaurant.order?.(1, 3) ?? 'Method does not exist');

// const users = [
//   { name: 'Bilal', city: 'Okara' },
//   { name: 'Fatima', city: 'Quetta' },
// ];
// console.log(users[02]?.name ?? 'Required Index does not exist');
