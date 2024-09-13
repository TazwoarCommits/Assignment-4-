// task-3

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











