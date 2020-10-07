const signUpForm=document.querySelector(".form_container");
signUpForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    const message=document.querySelector('.message');
    const cpassword=document.getElementById('conf_password').value;
    if(email=='')
    {   message.style.display="block";
        message.innerHTML='Please, enter email';
        return false;
    }
    else if(password==''){
        message.style.display="block";
        message.innerHTML='Please, enter password';
        return false;
    }
    else if(password.length<6){
        message.style.display="block";
        message.innerHTML='Password must be at least 6 characters';
        return false;
    }
    else if(cpassword==''){
        message.style.display="block";
        message.innerHTML='Confirm your password!';
        return false;
    }
    else if(password !==cpassword){
        message.style.display="block";
        message.innerHTML='Passwords not matching';
        return false;
    }
    else{
        auth.createUserWithEmailAndPassword(email,password)
        .then(resultData =>{
            console.log(resultData);
            signUpForm.reset(); 
            message.style.display="block";
            message.innerHTML="User registered successfully!";
        })
        .catch(error=>{
            message.style.display="block";
            message.innerHTML=error.message;
        });
    }
    

})