let dataId = localStorage.getItem('dataId');

const title = document.getElementById('title');
const content = document.getElementById('content');

db.collection('Blog_articles').doc(dataId).get().then((snapshot) => {

title.value = snapshot.data().post_title, 
content.innerHTML = snapshot.data().post_textarea2
});

document.getElementById('editbtn').onclick=()=>{
    var username = sessionStorage.getItem(username);
    let articleImage;
function uploadImage(event){
    if(event.target.files[0]!=null){
        articleImage=event.target.files[0];
    }
    
}

const bform=document.getElementById('form');
const post_title=document.getElementsByClassName('title')[0];
const post_textarea2=document.getElementsByClassName('textarea2')[0];
const post_photo=document.getElementsByClassName('photo')[0];
const errorMessage=document.querySelector('.errorMessage');
const articleId=uniqueid();

function createBlog(){
   
  if(post_title.value==''){
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
    else{
        storage.ref(`blogs/${articleId}/articleImage.jpg`).put(articleImage)
        .then(()=>{
            db.collection("Blog_articles").doc(`${articleId}`).update({

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

}

createBlog();