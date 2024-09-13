
// task-4 complete





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






console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  }));
