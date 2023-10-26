"use strict";

console.clear();

function timer(sec,startTime){
    let ms=sec*1000;
    let cnt=0;
    let interval=setInterval(function () {
        if(startTime===0)clearInterval(interval);
        console.log(startTime--);
    },ms);

}

timer(2,5);
