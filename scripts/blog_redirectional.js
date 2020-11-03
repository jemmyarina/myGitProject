
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

var uid = getUrlParameter("postuid");

db.collection("Blog_articles").doc(uid).get().then((doc) => {


    var record ="";

    var Data = doc.data();
    
    record+=`
    
    <div class="Post_title">
                <p>${Data.post_title}</p>
            </div>

            <div class="Post_photo_and_content">
                <div class="Post_photo">
                    <img src="" alt="Post image" style="width: 120px;">
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

