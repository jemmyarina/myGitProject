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
         
        var lastname = childData.lname;
        var lnameUpper = lastname.substring(0, 1);
        var firstname = childData.fname;

        sessionStorage.setItem("userUID", uid);
        sessionStorage.setItem("uNames", lnameUpper+ '.' +firstname);
 
       
        });
})
.catch(error=>{
    
    alert(error.message);
});
}
})