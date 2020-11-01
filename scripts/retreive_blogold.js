
let articles=[];
function retreive(){
    db.collection("Blog_articles").get().then((querySnapshot) => {
      querySnapshot.forEach((article)=> {
          console.log(article.id)
        storage.ref(article.data().post_photo).getDownloadURL().then((blogImageUrl)=>{
            articles.push({
                post_id: article.id,
                pub_names: article.data().pub_names,
                post_title: article.data().post_title,
                post_date: article.data().post_date,
                post_textarea2: article.data().post_textarea2,
                post_photo: blogImageUrl
           })
        }).catch((downUrlError)=>{
            console.log(downUrlError)
        })
    });
}).catch((fetchingError)=>{
    console.log(fetchingError)
})
} 

function dataRetreived(){
  
    var articalPost = ""
   console.log(articles);
    articles.forEach((a)=>{
        // console.log(articles);
        articalPost+=`<div class='Latest_posts_container'>
    <div class='Post_border'>
        <div class='Post_photo'>
            <img src='${a.post_photo}' alt='Post image' style='width: 120px;'>
        </div>
        <div class='Post_text'>
            <div class='Post_title'>
                <p>${a.post_title}</p>
            </div>
            <div class='Post_date_publisher'>
                <p>${a.post_date}/ by <span class='sp'>${a.pub_names}</span> </p>
            </div>
            <div class='Post_starting_txt'>
                <p>${a.post_textarea2}</p>
            </div>
            <div class='Read_more_btn' data_id='${a.post_id}'>
                <input type='submit' onclick= 'fetchDisplayBlog(${a.post_id})' value='Read more'>
            </div>
        </div>
    </div>
</div>`
    })
    
document.getElementById("blogArticle").innerHTML=articalPost;
}

// function fetchDisplayBlog(blogid){
//     alert("Hello world");
// let blogContainer=getElementById('Blog_posts');
// db.collection('Blog_articles').doc(blogid).get().then((article)=>{
// alert("Here"+article)
//     blogContainer.innerHTML = `
    
//     <div class="Post_title">
//         <p>${article.post_title}</p>
//     </div>

//     <div class="Post_photo_and_content">
//         <div class="Post_photo">
//             <img src="../assets/Blog_post_img1.png" alt="Post image" style="width: 120px;">
//         </div>
//         <div class="Date_pub_and_text">
//             <div class="Post_date_publisher">
//                 <p> ${article.post_date} by <span class="sp"> ${article.pub_names}</span> </p>
//             </div>
//             <div class="Post_txt">
//                 <p> 
//                 ${article.post_textarea2}
//                 </p>
//             </div>
//         </div>
//     </div>       

//     `; 
// })
// .catch((e)=>{
//     alert.log(e)
// })
// }

    retreive();
setTimeout(()=>{
    dataRetreived()
},4000)

let container=document.querySelector('.Blog_latest_group');
container.addEventListener('click',(e)=>{
    // localStorage.setItem('blogid',e.target.parentElement.getAttribute('data_id'));
    if(!e.target.parentElement.classList.contains('Read_more_btn')) return;
    window.location.href='../pages/blog_article_read_more.html';
})
