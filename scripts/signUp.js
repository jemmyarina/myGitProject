const signUpForm=document.querySelector(".form_container");
signUpForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const fname=document.getElementById('Fname').value;
    const lname=document.getElementById('Lname').value;
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    const cpassword=document.getElementById('conf_password').value;
    const message=document.querySelector('.message');
    
    if(fname=='')
    {   message.style.display="block";
        message.style.backgroundColor="crimson";
        message.innerHTML='Please, enter your first name';
        return false;
    }
    else if(lname=='')
    {   message.style.display="block";
        message.style.backgroundColor="crimson";
        message.innerHTML='Please, enter your last name';
        return false;
    }
    else if(email=='')
    {   message.style.display="block";
        message.style.backgroundColor="crimson";
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
        message.style.backgroundColor="crimson";
        message.innerHTML='Password must be at least 6 characters';
        return false;
    }
    else if(cpassword==''){
        message.style.display="block";
        message.style.backgroundColor="crimson";
        message.innerHTML='Confirm your password!';
        return false;
    }
    else if(password !==cpassword){
        message.style.display="block";
        message.style.backgroundColor="crimson";
        message.innerHTML='Passwords not matching';
        return false;
    }
    else{
        auth.createUserWithEmailAndPassword(email,password)
        .then(resultData =>{
            console.log(resultData);
            return db.collection('Users').doc(resultData.user.uid).set({
                fname,lname,email
            })
        })
        .then(()=>{
            signUpForm.reset(); 
            message.style.display="block";
            message.style.backgroundColor="green";
            message.innerHTML="User registered successfully!";
        })
        .catch(error=>{
            message.style.display="block";
            message.innerHTML=error.message;
        });
    }
    

})