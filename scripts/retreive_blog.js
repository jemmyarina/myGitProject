let articles=[];
let limitnumber =3;
function retreive(){
    db.collection("Blog_articles").orderBy("post_date", "desc").limit(limitnumber).get().then((querySnapshot) => {
      querySnapshot.forEach((article)=> {
        storage.ref(article.data().post_photo).getDownloadURL().then((blogImageUrl)=>{
            articles.push({
                post_id: article.id,
                pub_names: article.data().pub_names,
                post_title: article.data().post_title,
                post_date: new Date(article.post_date).toLocaleString(),
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
    // alert(articles.length)

    var articalPost = ""
    articles.forEach((a)=>{
        const BlogUID = a.post_id;
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
                <input type='submit' onclick= "triggerBlog('${BlogUID}')" value='Read more'>
            </div>
        </div>
    </div>
</div>

`

    })

document.getElementById("blogArticle").innerHTML=articalPost;

        /* Limit Text */
        var txt= $('.Post_starting_txt');
        //    var txt= document.getElementsByClassName('p');
           txt.text(function(index, currentText) {
             return currentText.substr(0, 100)+"...";
           });
        
}

function triggerBlog(BlogUID){
//   sessionStorage.setItem('blogId',blogId);
  window.location.href="../pages/blog_read_more.html?postuid="+BlogUID;
}


retreive();
setTimeout(()=>{
   dataRetreived()
},8000)