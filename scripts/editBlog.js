let dataId = localStorage.getItem('dataId');
const bform=document.getElementById('form');

const title = document.getElementById('title');
const content = document.getElementById('textarea2');

db.collection('Blog_articles').doc(dataId).get().then((snapshot) => {

title.value = snapshot.data().post_title, 
content.innerHTML = snapshot.data().post_textarea2
});

// .........EDITING..........
let articleImage=[];
document.getElementById('editbtn').onclick=(event)=>{
    let input=document.createElement('input');
    input.type='file';

    input.onchange=(event)=>{
        articleImage=event.target.articleImage;
    }
    input.click();
}
    // if(event.target.files[0]!=null){
        // articleImage=event.target.files[0];
    // }
// }

document.getElementById('editbtn').onclick=()=>{
// var username = sessionStorage.getItem(username);

const post_title= document.getElementById('title').value;
const post_textarea2=document.getElementById('textarea2').value;
// const post_photo=document.getElementById('photo').value;
// const errorMessage=document.querySelector('.errorMessage');

let articleId=dataId;

console.log(post_title);
console.log(post_textarea2);
 

// let uploadImage = storage.ref(`blogs/${articleId}/articleImage.jpg`).put(articleImage[0]);

// uploadImage.on('state_changed',()=>{
    db.collection("Blog_articles").doc(`${articleId}`).update({

        // pub_names:username,
        post_title:post_title,
        // date_modified : new Date().getTime(),
        post_textarea2:post_textarea2,
        // post_photo:`blogs/${articleId}/articleImage.jpg`
    })
    .then(()=>{
        console.log('blog edited');
    });

}