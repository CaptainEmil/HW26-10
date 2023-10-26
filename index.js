"use strict";

console.clear();

function timer(time){
    let currentTime=new Date();
    let endTime=new Date();
    let timeArr=time.split(':');
    for(let i of timeArr){
        if(i.split('').length!==2)throw new Error('not correct time format');
    }
    let hour=timeArr[0];
    let minute=timeArr[1];
    let second=timeArr[2];
    endTime.setHours(hour);
    endTime.setMinutes(minute);
    endTime.setSeconds(second);

    setTimeout(function () {
        console.log("Time's up!");
    },endTime-currentTime);

}

timer('20:17:00');
