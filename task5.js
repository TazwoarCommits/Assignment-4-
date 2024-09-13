// task-5





function  waitingTime(waitingTimes  , serialNumber) {
    if(!Array.isArray(waitingTimes) === true || typeof(serialNumber) !== 'number'){
        return 'Invalid Inputs' ;
    }
   
    let totalTimePassed = 0 ;

    for(let time of waitingTimes){
        totalTimePassed += time ;
    }
  
     let avgTime = Math.round(totalTimePassed/waitingTimes.length) ;
     
     return ((serialNumber - 1) - waitingTimes.length)*avgTime ;
     
    
}

console.log(waitingTime([13, 2], 6));








