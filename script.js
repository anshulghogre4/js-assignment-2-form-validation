let form = document.querySelector('form');
let firstName =document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let email =  document.getElementById('email');
let password =document.getElementById('password');
let comfirmPassword =document.getElementById('c_password');
let signUp =document.getElementById('signUp');

let alphabets = /^[A-Za-z]+$/;
let pwRegEx = /^(?=.*[0-9])(?=.*[!@#$%^&*()])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*()]{8,24}$/;




function setError(ele,errMessage){

    let element =document.getElementsByClassName(ele)[0];

    element.innerText = errMessage;
    
}

function noError(para){


    let parameter =document.getElementsByClassName(para)[0];

   parameter.innerText = "";
    
}
 
function validateInputs(){

let firstNameValue = firstName.value.trim();
let lastNameValue = lastName.value.trim();
let emailValue =  email.value.trim();
let passwordValue =password.value.trim();
let comfirmPasswordValue =comfirmPassword.value.trim();



//  to check first name

 if( firstNameValue.length < 3){
    setError("firstNameError","first name is too short");   
} 
else if(!firstNameValue.match(alphabets))
{
    setError("firstNameError","letters must be only alphabets");
    
} else
{
    noError("firstNameError");
}

//  to check last name


 if( lastNameValue.length <3)
 {
        setError("lastNameError","llast name is too short");
        
    }
   else if(!lastNameValue.match(alphabets))
   {
        setError("lastNameError","letters must be only alphabets");
        
    } else
     {
        noError("lastNameError");
    } 

 

//  to check email length


if (emailValue.length>64){
    setError("emailError","email length should be less than 64 characters");
}else {
    noError("emailError");
} 

//  to check password


if (passwordValue.length < 8 || passwordValue.length > 24  ){
    setError("pwError","password should be between the range of 8-24 characters!")
}  
else if 
(!pwRegEx.test(passwordValue)){
    setError("pwError","password should contain the following: \n  1) atleast one number.  \n2) atleast one special character. \n 3) atleast one lower case character.  \n 4)  atleast one upper case charater.")
} 
else{
    noError("pwError");
}


// to check comfirm password

if(comfirmPasswordValue != passwordValue){

    setError("cpwError"," password doesn't match,please check!");
}else {
    noError("cpwError");
} 


}


form.addEventListener("submit",(e)=>{

    e.preventDefault(); //to prevent default behaviour of browser

validateInputs();

});


