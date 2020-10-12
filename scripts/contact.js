const cform=document.querySelector('#form');
const cname=document.getElementById('name');
const cemail=document.getElementById('email');
const cmessage=document.getElementById('textarea');
const errorMessage=document.querySelector('.error_message');


cform.onsubmit=(e)=>{
    e.preventDefault();
    const emailRegex=/^[a-z]+([a-z0-9_\-\.]){1,}\@([a-z0-9_\-\.]){1,}\.([a-z]{2,4})$/
    // const emailRegex=/\s+@\s+\.\s+/
    if(cname.value=='' || cemail.value=='' || cmessage.value=='' ){
        errorMessage.style.display="block";
        errorMessage.style.backgroundColor="crimson";
        errorMessage.innerHTML="Fill all data";
    }
    else if(!cemail.value.match(emailRegex)){
        errorMessage.style.display="block";
        errorMessage.style.backgroundColor="crimson";
        errorMessage.innerHTML="Wrong email"; 
        return false; 
    }
    else{
        db.collection("messages").add({
            Name:cname.value, 
            Email:cemail.value,
            Message:cmessage.value
            })
            console.log(cname.value)
            
            errorMessage.style.display="block";
            errorMessage.style.backgroundColor="lightblue";
            errorMessage.innerHTML="Message sent successfull"; 
    }

}
