"use strict";

console.clear();

function printVals(arr){
    let cnt=0;
    let interval=setInterval(function () {
        console.log(arr[cnt++]);
        if(cnt===arr.length)clearInterval(interval);
    },1000);
}

printVals([1,2,3,4]);
