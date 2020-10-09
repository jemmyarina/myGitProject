let articles=[];
function retreive(){
    db.collection("Blog_articles").get().then((querySnapshot) => {
      querySnapshot.forEach((article)=> {
        storage.ref(article.data().post_photo).getDownloadURL().then((blogImageUrl)=>{
            articles.push({
                post_id: article.data().id,
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
    // alert(articles.length)
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
                <input type='submit' onclick= 'fetchDisplayBlog(${a.post_id})' value='Read more'>
            </div>
        </div>
    </div>
</div>`
    })
    

document.getElementById("blogArticle").innerHTML=articalPost;
}
function fetchDisplayBlog(blogid){
db.collection('Blog_articles').doc(blogid).get((article)=>{
    let blogContainer = `
    <div class="Blog_posts">
    <div class="Post_title">
        <p>${article.post_title}</p>
    </div>

    <div class="Post_photo_and_content">
        <div class="Post_photo">
            <img src="../assets/Blog_post_img1.png" alt="Post image" style="width: 120px;">
        </div>
        <div class="Date_pub_and_text">
            <div class="Post_date_publisher">
                <p> ${article.post_date} by <span class="sp"> ${article.pub_names}</span> </p>
            </div>
            <div class="Post_txt">
                <p> 
                ${article.post_textarea2}
                </p>
            </div>
        </div>
    </div>       
</div>
    `; 
})
}

retreive();
setTimeout(()=>{
   dataRetreived()
},5000)