
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

var uid = getUrlParameter("postuid");


let articles=[];
function retreive(){
    db.collection("Blog_articles").doc(uid).get().then((querySnapshot) => {
      querySnapshot.forEach((doc)=> {
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

db.collection("Blog_articles").doc(uid).get().then((doc) => {

    var record ="";

    var Data = doc.data();
    var post_photo=storage.ref(Data.post_photo).getDownloadURL();

    record+=`


    <div class="Post_title">
                <p>${Data.post_title}</p>
            </div>

            <div class="Post_photo_and_content">
                <div class="Post_photo">
                    <img src="${post_photo}" alt="Post image" style="width: 120px;">
				</div>
				<div class="Date_pub_and_text">
					<div class="Post_date_publisher">
						<p>${Data.post_date}/ by <span class="sp">${Data.pub_names}</span> </p>
					</div>
					<div class="Post_txt">
						<p>${Data.post_textarea2}</p> 
					</div>
				</div>
			</div>
    
    `;
    document.getElementById('post').innerHTML=record;

})

