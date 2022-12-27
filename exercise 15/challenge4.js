// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const text = document.querySelector('textarea');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
  underScoreToCamel(text.value);
});

const underScoreToCamel = function (str) {
  const arr = str.toLowerCase().split('_');
  // console.log(arr);
  const arr1 = [];
  for (const word of arr) {
    const no = word[0].toUpperCase() + word.slice(1);
    arr1.push(no);
  }
  // console.log(arr1);
  const str1 = arr1.join('');
  // console.log(str1);
  const final = str1[0].toLowerCase() + str1.slice(1);
  // console.log(final);

  const arr2 = [];
  for (const i of final.split('\n')) {
    arr2.push(i.trim());
  }
  const camelCase = arr2.join('\n');
  // console.log(camelCase);

  const arr3 = camelCase.split('\n');
  // console.log(arr3);
  let int = 0;
  for (const i of arr3) {
    int++;
    console.log(`${i.padEnd(20, ' ')} ${'✔'.repeat(int)}`);
  }
};

// underScoreToCamel(`underscore_case
//     first_name
//    Some_Variable
//      calculate_AGE
//    delayed_departure`);
