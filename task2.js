function sendNotification(email) {
    if(!email.includes('@') === true){
       return "Invalid Email" ;
    }
  let names = email.split('@') ;
  return names[0]+' sent you an email from '+ names[1] ;
  

}

console.log(sendNotification('nadim.naem5@outlook.com'));



