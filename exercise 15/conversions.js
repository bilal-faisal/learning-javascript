const arr = [1, 2, 3, 2, [4, 5]];
const set = new Set([1, 2, 3, 2, [4, 5]]);

const object = {
  Mon: {
    Open: 2,
    Close: 11,
  },
  Tue: {
    Open: 3,
    Close: 12,
  },
};
const map = new Map([
  [
    'Mon',
    {
      Open: 2,
      Close: 11,
    },
  ],
  [
    'Tue',
    {
      Open: 3,
      Close: 12,
    },
  ],
]);

// arr to set
console.log(new Set(arr));
// arr to objects
console.log({ ...arr });
// arr to map               --> substitute
console.log(new Map(Object.entries({ ...arr })));

// set to array
console.log([...set]);
// set to objects           --> substitute
console.log({ ...[...set] });
// set to map               --> substitute
console.log(new Map(Object.entries({ ...[...set] })));

// object to map
console.log(new Map(Object.entries(object)));
// object to array
console.log(Object.entries(object));
// object to sets
console.log(new Set(Object.entries(object)));

// map to array
console.log([...map]);
// map to set
console.log(new Set(map));
// map to object
console.log(Object.fromEntries(map));
