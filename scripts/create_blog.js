let articleImage;
// let articles=[];
function uploadImage(event){
    if(event.target.files[0]!=null){
        articleImage=event.target.files[0];
    }
    
}

const bform=document.getElementById('form');
const pub_names=document.getElementsByClassName('Name')[0];
const pub_email=document.getElementsByClassName('Email')[0];
const pub_bio=document.getElementsByClassName('textarea1')[0];
const post_title=document.getElementsByClassName('title')[0];
const post_date=document.getElementsByClassName('date')[0];
const post_textarea2=document.getElementsByClassName('textarea2')[0];
const post_photo=document.getElementsByClassName('photo')[0];
const errorMessage=document.querySelector('.errorMessage');
const articleId=uniqueid();

function createBlog(){
    const emailRegex=/^[a-z]+([a-z0-9_\-\.]){1,}\@([a-z0-9_\-\.]){1,}\.([a-z]{2,4})$/
    // const emailRegex=/\s+@\s+\.\s+/
    if(pub_names.value==''){
        errorMessage.style.display="block";
        errorMessage.style.backgroundColor="crimson";
        errorMessage.innerHTML="Fill your NAMES";
      
    }
    else if(pub_email.value==''){
        errorMessage.style.display="block";
        errorMessage.style.backgroundColor="crimson";
        errorMessage.innerHTML="Fill your EMAIL";
         
    }  
    else if(pub_bio.value==''){
        errorMessage.style.display="block";
        errorMessage.style.backgroundColor="crimson";
        errorMessage.innerHTML="Fill your BIO in short";
        
    }
    else if(post_title.value==''){
        errorMessage.style.display="block";
        errorMessage.style.backgroundColor="crimson";
        errorMessage.innerHTML="Fill the post TITLE";
       
    }
    else if(post_textarea2.value==''){
        errorMessage.style.display="block";
        errorMessage.style.backgroundColor="crimson";
        errorMessage.innerHTML="Fill the post BODY";
        return false;
    }
    else if(!pub_email.value.match(emailRegex)){
        errorMessage.style.display="block";
        errorMessage.style.backgroundColor="crimson";
        errorMessage.innerHTML="Wrong email"; 
        return false; 
    }
    else{
        storage.ref(`blogs/${articleId}/articleImage.jpg`).put(articleImage)
        .then(()=>{
            db.collection("Blog_articles").doc(`${articleId}`).set({
                pub_names:pub_names.value,  
                pub_email:pub_email.value, 
                pub_bio: pub_bio.value,
                post_title:post_title.value,
                post_date:new Date().getTime(),
                post_textarea2:post_textarea2.value,
                post_photo:`blogs/${articleId}/articleImage.jpg`
                })
                console.log(pub_names.value)
                errorMessage.style.display="block";
                errorMessage.style.backgroundColor="lightblue";
                errorMessage.innerHTML="Article saved successfull";
        })
        .catch((error)=>{
            alert(error)
        })    
        
         
    }

    

}

function uniqueid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }