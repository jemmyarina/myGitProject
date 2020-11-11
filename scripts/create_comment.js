var useremail = sessionStorage.getItem('userEmail');
console.log(useremail)

const bform=document.getElementById('form');
const comment_body=document.getElementsByClassName('cContent')[0];
const errorMessage=document.querySelector('.errorMessage');
const commentId=uniqueid();

function createComment(){
   
    
  if(comment_body.value==''){
        errorMessage.style.display="block";
        errorMessage.style.backgroundColor="crimson";
        errorMessage.innerHTML="Please, type the comment first";
       
    }
    
    else{
        
            db.collection("comments").doc(`${commentId}`).set({

                pub_names:username,
                post_title:post_title.value,
                post_date:new Date().getTime(),
                post_textarea2:post_textarea2.value,
                post_photo:`blogs/${articleId}/articleImage.jpg`
                })
                console.log(pub_names.value)
                errorMessage.style.display="block";
                errorMessage.style.backgroundColor="lightblue";
                errorMessage.innerHTML="Article saved successfull";
         
         
    }
}

function uniqueid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }