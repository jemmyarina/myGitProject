const signInForm=document.querySelector(".form_container");
signInForm.addEventListener('submit', (e)=>{
e.preventDefault();
const email=document.getElementById("email").value;
const password=document.getElementById("password").value;
const message=document.getElementById("message");
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
    else{

  
auth.signInWithEmailAndPassword(email, password).then(resultData=>{
    // console.log(resultData);
    const uid= resultData.user.uid; 
    signInForm.reset();
    location.href="../admin/create_blog_client.html";
    // message.style.display="block";
})
.catch(error=>{
    message.style.display="block";
            message.innerHTML=error.message;
});
}
})
