let articles=[];
function retreive(){
    db.collection("Blog_articles").get().then((querySnapshot) => {
      querySnapshot.forEach((article)=> {
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
    alert(articles.length)

    var articalPost = ""
    articles.forEach((a)=>{
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
            <div class='Read_more_btn'>
                <input type='submit' onclick= "triggerBlog('${a.post_id}')" value='Read more'>
            </div>
        </div>
    </div>
</div>`
    })

document.getElementById("blogArticle").innerHTML=articalPost;
}

function triggerBlog(blogId){
  sessionStorage.setItem('blogId',blogId);
  window.location.href="../pages/blog_article_read_more.html";
}


retreive();
setTimeout(()=>{
   dataRetreived()
},8000)