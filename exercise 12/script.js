// var arr11 = [4, 5, 3, 6, 87, 21, 'error', -1, 3];
// var arr22 = [3, 4, 5, 6, 2, 34, 334, 5];

// var output = check(arr11, arr22);
// output = Object.keys(output).length;
// console.log(output);

// function check(arr1, arr2) {
//   var arr = arr1.concat(arr2);
//   // if a number
//   var max = arr[0];
//   var min = arr[0];

//   for (var i = 0; i < arr.length; i++) {
//     if (typeof arr[i] !== 'number') continue;
//     //console.log(arr[i]);
//     if (arr[i] > max) max = arr[i];
//     if (arr[i] < min) min = arr[i];
//   }
//   //   var outArr = [];
//   //   outArr.push(max);
//   //   outArr.push(min);
//   var outObj = {};
//   outObj.Max = max;
//   outObj.Min = min;

//   //   console.log(outObj.length);

//   return outObj;
// }

// ++++++++++++++++++++++++++++++++

// var Arr = [12, 5, 3];
// printForecast(Arr);

// function printForecast(Arr) {
//   var str = '';
//   str += ' ... ';
//   for (var i = 0; i < Arr.length; i++) {
//     //str += Arr[i] + '*C in ' + (i + 1) + (i == 0 ? ' day ... ' : ' days ... ');
//     str += `${Arr[i]}*C in ${i + 1} ${i == 0 ? ' day ... ' : ' days ... '}`;
//   }
//   console.log(str);
// }
'use strict';

const jonas = {
  name: 'Jonas',
  year: '2001',
  calcAge: function () {
    return 2021 - this.year;
  },
};
console.log(jonas.calcAge());
