// function isEven(num){
//     if( num % 2 === 0 ){
//         return true;
//     }
//     return false;
// }


// **************************************

// function factorial(numb){
    
//     var result = numb;
//     if(numb >= 0 ){
//         if(numb === 0 ){
//             return numb + 1;
//         }
//         if(numb === 1 ){
//             return numb;
//         }
//         while( numb > 1){   

//             result *=  numb - 1;
//             numb--;

//         }
//         return result;
//     }
// }

// *******************

// function factorial(num){
//     //define a result variable
//     var result = 1;
//     //calculate factorial and store value in result
//     for(var i = 2; i <= num; i++){
//         result *= i;
//     }
//     //return the result variable
//     return result;
//   }
  
// **************************************


function kebabToSnake(str) {
    var result = str.replace( /-/g , "_" );
    return result;
}
