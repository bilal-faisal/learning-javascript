///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. 
   HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

GOOD LUCK 😀
*/
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// 1
dogs.forEach(
  (obj) => (obj.recommendedFood = Math.floor(obj.weight ** 0.75 * 28))
);
console.log(dogs[1].recommendedFood);

// 2
// const indexOfSarah = dogs.findIndex((obj) => obj.owners.includes("Sarah"));

// if (dogs[indexOfSarah].curFood > dogs[indexOfSarah].recommendedFood) {
//   console.log("Eating Too Much");
// } else {
//   console.log("Eating Too Little");
// }

const sarahObject = dogs.find((obj) => obj.owners.includes("Sarah"));

console.log(
  `Sarah's dog is eating too ${
    sarahObject.curFood > sarahObject.recommendedFood ? "much" : "little"
  }`
);

// 3

// // Owners Eat Too Much
// const ownersEatTooMuchObj = dogs.filter(
//   (obj) => obj.curFood > obj.recommendedFood
// );
// console.log(ownersEatTooMuchObj);
// const ownersEatTooMuchArr = [];
// ownersEatTooMuchObj.forEach((element) => {
//   ownersEatTooMuchArr.push(...element.owners);
// });
// console.log(ownersEatTooMuchArr);

// // Owners Eat Too Less
// const ownersEatTooLessObj = dogs.filter(
//   (obj) => obj.curFood < obj.recommendedFood
// );
// const ownersEatTooLessArr = [];
// ownersEatTooLessObj.forEach((element) => {
//   ownersEatTooLessArr.push(...element.owners);
// });
// console.log(ownersEatTooLessArr);

// Easy way
const ownersEatTooMuchArr = dogs
  .filter((obj) => obj.curFood > obj.recommendedFood)
  .flatMap((obj) => obj.owners);
console.log(ownersEatTooMuchArr);

const ownersEatTooLessArr = dogs
  .filter((obj) => obj.curFood < obj.recommendedFood)
  .flatMap((obj) => obj.owners);
console.log(ownersEatTooLessArr);

// 4

const lastElemEatTooMuchArr = [...ownersEatTooMuchArr].pop();
ownersEatTooMuchArr.splice(-1);
console.log(
  `${ownersEatTooMuchArr.join(
    ", "
  )} and ${lastElemEatTooMuchArr}'s dogs eat too much!`
);

const lastElemEatTooLessArr = [...ownersEatTooLessArr].pop();
ownersEatTooLessArr.splice(-1);
console.log(
  `${ownersEatTooLessArr.join(
    ", "
  )} and ${lastElemEatTooLessArr}'s dogs eat too less!`
);

// 5
const eatingExactAmount = dogs.some(
  (obj) => obj.curFood === obj.recommendedFood
);
console.log(eatingExactAmount);

// 6
const checkEatingOkay = (obj) =>
  obj.curFood <= obj.recommendedFood + obj.recommendedFood * 0.1 &&
  obj.curFood > obj.recommendedFood - obj.recommendedFood * 0.1;

const eatingOkayAmount = dogs.some(checkEatingOkay);
console.log(eatingOkayAmount);

// 7

const eatingOkayAmountDogsArray = dogs.filter(checkEatingOkay);
console.log(eatingOkayAmountDogsArray);

// 8
console.clear();

const dogsShallow = [...dogs];
const sortedobjects = dogsShallow.sort(
  (a, b) => a.recommendedFood - b.recommendedFood
);
console.log(sortedobjects);

// // Sorting array on recommended food
// const chk = dogsShallow.map((obj) => obj.recommendedFood).sort((a, b) => a - b);
// console.log(chk);
