
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Disabling the sending  button
    const commentbtn=document.querySelector('#comment_btn');
    const sendbtn=document.querySelector('#submitbtn');
    commentbtn.style.display="block";


var uid = getUrlParameter("postuid");

db.collection("Blog_articles").doc(uid).get().then(async (doc) => {
    const img = await storage.ref(doc.data().post_photo).getDownloadURL().then( blogImage =>{
        return blogImage;
    }).catch( (e)=>{
        console.log(e);
    })
    var record ="";
    var Data = doc.data();
    
    const formattedDate = new Date (Data.post_date).toLocaleString();

    record+=`
    <div class="Post_title">
                <p>${Data.post_title}</p>
            </div>

            <div class="Post_photo_and_content">
                <div class="Post_photo">
                    <img src="${img}" alt="Post image" style="width: 120px;">
				</div>
				<div class="Date_pub_and_text">
					<div class="Post_date_publisher">
						<p>${formattedDate}/ by <span class="sp">${Data.pub_names}</span> </p>
					</div>
					<div class="Post_txt">
						<p>${Data.post_textarea2}</p> 
					</div>
				</div>
			</div>
    
    `;
    document.getElementById('post').innerHTML=record;

})

// comments

const comment=document.querySelector(".cContent");

const commentsInput = (comment, form)=>{
    if(comment.length==0){
        alert("PLEASE, FILL THE FORM")
    }
    else{
        submitComment(comment, form); 
    }
}



const commentForm = document.querySelector(".comment-form");

async function submitComment(comment, form) {
    var uid = getUrlParameter("postuid");
    
   
    // submitBtn.innerHTML = 'Loading ....';
    const docRef = db.collection("Blog_articles");
    await docRef.doc(uid).collection("comments").doc().set({
        Date: new Date().getTime(),
        Comment: comment,
        postId: uid,
        userName: sessionStorage.getItem("userNames")
    })
    .then((result) => {
    form.reset();
       console.log(result);
    })
    .catch((err) => {
        console.log(err)
    })
}
commentForm.onsubmit = (e) => {
    e.preventDefault();
    commentsInput(comment.value, commentForm)
}


//login to comment
const loginButton = document.getElementById('comment_btn')

loginButton.addEventListener('click', () => {
    window.location.href = `../pages/sign_in.html?blogId=${uid}`
})

//retrieve comments
db.collection('Blog_articles').doc(uid).collection("comments").get().then(snapshot => {
    snapshot.docs.forEach(doc => {
       showComments(doc)
    })
})


// const commentOutput = document.querySelector('.commentsOutput')
const commentContainer = document.querySelector('.commentsOutput');
function showComments(doc){
   const result=doc.data();
   const formattedDate = new Date (result.Date).toLocaleString();
   const div = document.createElement('div');
   div.innerHTML = `
   <div class="commentContainer">	
            <div class="cDetails">
                <div class="cDateClient">
                    <p> ${formattedDate}</p>
                    <span> ${result.userName} </span>
                </div>
                
                <p class="cBody"> ${result.Comment}</p> 
            </div>
        <br>
    </div>
   `
    commentContainer.appendChild(div);    
}


