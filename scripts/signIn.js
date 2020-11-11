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

    const uid= resultData.user.uid; 
    signInForm.reset();

    db.collection("Users").doc(uid).get().then( function(snapshot){
  
        var childData = snapshot.data();

        console.log(childData);

        var firstname = childData.fname;
        var lastname = childData.lname;
        var role = childData.role;
        var email = childData.email;
         
        if(role === 'client'){
            sessionStorage.setItem("userUID", uid);
            sessionStorage.setItem("clientEmail", email);
            sessionStorage.setItem("clientNames", firstname+' '+lastname);   
            sessionStorage.setItem("clientFname", firstname);  
            sessionStorage.setItem("clientLname", lastname);  
            window.location.href = "../admin/dashboard_client.html";
        }
        else if(role === 'admin'){
            sessionStorage.setItem("userUID", uid);
            sessionStorage.setItem("adminEmail", email);
            sessionStorage.setItem("adminFname", firstname);  
            sessionStorage.setItem("adminLname", lastname);  
            window.location.href="../admin/dashboard_admin.html";
        }
       
        });
})
.catch(error=>{
    
    alert(error.message);
});
}
})