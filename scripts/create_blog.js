var publisher = sessionStorage.getItem("userNames");
console.log(publisher)

let articleImage;

function uploadImage(event){
    if(event.target.files[0]!=null){
        articleImage=event.target.files[0];
    }
}

const bform=document.getElementById('form');
const post_title=document.getElementsByClassName('title')[0];
// const post_date=document.getElementsByClassName('date')[0];
const post_textarea2=document.getElementsByClassName('textarea2')[0];
const post_photo=document.getElementsByClassName('photo')[0];
console.log(post_photo);
const errorMessage=document.querySelector('.errorMessage');
const pub_names = publisher;
const articleId=uniqueid();
console.log(articleId);
function createBlog(){
    const emailRegex=/^[a-z]+([a-z0-9_\-\.]){1,}\@([a-z0-9_\-\.]){1,}\.([a-z]{2,4})$/
    
console.log("button clicked!")

  if(post_title.value==''){
        errorMessage.style.display="block";
        errorMessage.style.backgroundColor="crimson";
        errorMessage.innerHTML="Fill the post TITLE";
        return false;
    }
    else if(post_textarea2.value==''){
        errorMessage.style.display="block";
        errorMessage.style.backgroundColor="crimson";
        errorMessage.innerHTML="Fill the post BODY";
        return false;
    }
    else if (post_photo== null){
        errorMessage.style.display="block";
        errorMessage.style.backgroundColor="red";
        errorMessage.innerHTML="Firstly, attach photo! ";
        return false;
    }
    else{
        storage.ref(`blogs/${articleId}/articleImage.jpg`).put(articleImage)
        .then(()=>{
            db.collection("Blog_articles").doc(`${articleId}`).set({

                pub_names:publisher,
                post_title:post_title.value,
                post_date:new Date().getTime(),
                post_textarea2:post_textarea2.value,
                post_photo:`blogs/${articleId}/articleImage.jpg`
                })
                console.log(pub_names)
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