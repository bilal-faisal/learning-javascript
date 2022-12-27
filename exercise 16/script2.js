// (function () {
//   console.log('This will never run again');
//   const privateVar = 2;
//   var privateVar1 = 2;
// })();
// // console.log(privateVar1);
// {
//   let privateVar1 = 2;
//   var privateVar2 = 2;
// }
// console.log(privateVar2);
// // console.log(privateVar1);

// (() => console.log('This will never run again'))();
// console.clear();

// // Closure Example 1
// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(passengerCount);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();

// // Closure Example 2
// let f;
// const g = function () {
//   const a = 3;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 33;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();

// h();
// f();

// Closure Example 3
// const boardPassengers = function (n, wait) {
//   let perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are bording all ${n} passengers`);
//     console.log(`There are 3 groups, each with  ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start bording in ${wait} seconds`);
// };
// boardPassengers(180, 3);

///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
