let arr1 = [1, 2, 3, 5, 6, 34];
let arr2 = [2, 3];
console.log(arr1.concat(arr2));

console.log(
  arr1.findIndex((elem) => {
    return elem > 5;
  })
);

console.log(
  arr1.find((elem) => {
    return elem > 5;
  })
);
let arr = ["1", "as", "sd", 7, "ssd"];
console.log(arr);
console.log(arr.includes(1));

console.log(
  arr.some((elem) => {
    return elem > 5;
  })
);

console.log(
  arr.every((elem) => {
    return elem > 5;
  })
);

console.clear();
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};
console.log(upperFirstWord("ghj ghj"));
