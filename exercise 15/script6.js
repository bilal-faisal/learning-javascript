const restaurant = new Map();
restaurant.set('name', 'Pizza Online');
console.log(restaurant.set('Found', 2012));

console.log(restaurant.get('name'));
console.log(restaurant.get('Found'));

restaurant
  .set('categories', ['Italian', 'Vegetarion'])
  .set('open', 4)
  .set('close', 12)
  .set(true, 'We are open :D')
  .set(false, 'Sorry! We are closed :( ');

const currentTime = 11;
console.log(
  restaurant.get(
    restaurant.get('open') < currentTime &&
      restaurant.get('close') > currentTime
  )
);

// console.log(restaurant.has('Found'));
// console.log(restaurant.size);
// restaurant.delete('Found');
// console.log(restaurant.has('Found'));
// console.log(restaurant.size);

console.clear();
// Object
const openingHoursObject = {
  Mon: {
    Open: 2,
    Close: 11,
  },
  Tue: {
    Open: 3,
    Close: 12,
  },
};
const openingHoursMap = new Map(Object.entries(openingHoursObject));
const openingHoursArray = [...openingHoursMap];

const arr = [1, 2, 3, 4, 5];
const set = new Set(arr);

// object to array
console.log(Object.entries(openingHoursObject));
// object to map
console.log(new Map(Object.entries(openingHoursObject)));

// array to object
console.log(Object.assign({}, openingHoursArray));
// array to map
console.log(new Map(openingHoursArray));
// array to set
console.log(new Set(arr));

// map to object
console.log(Object.fromEntries(openingHoursMap));
// map to array
console.log([...openingHoursMap]);

// set to array
console.log([...set]);

// console.log(openingHoursObject);
// console.log(Object.entries(openingHoursObject));
// // Map
// const openingHoursMap = new Map(Object.entries(openingHoursObject));
// console.log(openingHoursMap);
// // Array

// console.log([...openingHoursMap]);
