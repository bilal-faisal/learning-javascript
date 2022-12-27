printReverse(["a","b","c","d"]);
isUniform(["a","a","b","b"]);
sumArray([1,2,3,4,5]);
findMax([10,20,3,4,-5]);


function printReverse(arr){
    console.log(" * * * Print Reverse Function * * * ");
    for(var i= arr.length-1; i >= 0 ; i--  ){
        console.log(arr[i]);
    }
}

function isUniform(arr){
    console.log(" * * * Check Uniformity Function * * * ");
    var value=1;
    for(var i=1;i<arr.length;i++){
        if(arr[i] !== arr[i-1]){
            value=0;
        }
    }
    if(value === 0){
        console.log("False")
    }else if(value === 1){
        console.log("True")
    }
}

function sumArray(arr){
    console.log(" * * * Sum Array Function * * * ");
    var sum = 0;
    arr.forEach(function(num){
        sum += num;
    })
    console.log("Sum = " + sum);
}

function findMax(arr){
    console.log(" * * * Find Max Function * * * ");
    var max = arr[0];
    for(var i = 1;i<arr.length;i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    console.log("Max = " + max);
}