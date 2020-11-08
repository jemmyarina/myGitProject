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
    // location.href="../admin/dashboard_client.html";
    // message.style.display="block";

    db.collection("Users").doc(uid).get().then( function(snapshot){
  
        var childData = snapshot.data();

        console.log(childData);

        var firstname = childData.fname;
        var lastname = childData.lname;
        var role = childData.role;
        
        // var email = childData.email;
        // sessionStorage.setItem("fname", firstname);  
        if(role === 'client'){
            sessionStorage.setItem("userUID", uid);
            // sessionStorage.setItem("userEmail", email);
            sessionStorage.setItem("username", firstname);     
            window.location.href = "../admin/dashboard_client.html";
        }
        else if(role === 'admin'){
            sessionStorage.setItem("userUID", uid);
            // sessionStorage.setItem("userEmail", email);
            sessionStorage.setItem("userFname", firstname);  
            essionStorage.setItem("userLname", lastname);  
 
            window.location.href="../admin/dashboard_admin.html";
        }
       
        });
})
.catch(error=>{
    message.style.display="block";
            message.innerHTML=error.message;
});
}
})

localStorage.setItem('userId', id);

