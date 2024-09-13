

function calculateTax(income, expenses) {
         if(income && expenses < 0 || income < expenses){
            return 'Invalid Input'
         }
 
        let tax = (income-expenses)* .2 ;
    
        return tax ; 
         
}



function sendNotification(email) {
   if(!email.includes('@') === true){
      return "Invalid Email"
   }
 let names = email.split('@')
 return names[0]+' sent you an email from '+ names[1]
 

}




function checkDigitsInName(name) {
   if(typeof(name) !== 'string')
       return 'Invalid Input'
   for(let letter of name){
       if(isNaN(letter) === false){
           
           return true ;
       }
   } 
   return false ;
}



function calculateFinalScore(obj) {
   if(typeof(obj) !== 'object'){
    return 'Invalid Input'
   }
    let extraMarks = 0 ;
          if (obj.isFFamily === true){
               extraMarks += 20 ;
              }   

        if((obj.testScore + obj.schoolGrade + extraMarks) >= 80 ){
            return true ;
        }
     
       return false ;  
}



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
