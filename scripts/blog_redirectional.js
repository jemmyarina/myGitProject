
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

//retrive comments
db.collection('Blog_articles').doc(uid).collection("comments").get().then(snapshot => {
    // console.log(snapshot.data().Comment)
    snapshot.docs.forEach(doc => {
       showComments(doc)
    })
})


//parent container
const commentContainer = document.querySelector('.commentsOutput')

function showComments(doc){
 
    const commentContainer = document.createElement('div')
    commentContainer.setAttribute('class', 'commentContainer')
    const cPhoto = document.createElement('div')
    cPhoto.setAttribute('class', 'cPhoto')
    const image = document.createElement('img')
    image.setAttribute('src', '../assets/commenter.png')
    cPhoto.appendChild(image)
    commentContainer.appendChild(cPhoto)
    const cDetails = document.createElement('div')
    const cDateClient = document.createElement('div')
    cDetails.appendChild(cDateClient)
    commentContainer.appendChild(cDetails)
    let pDate = document.createElement('p')
    pDate.innerText = doc.data().Date
    cDateClient.appendChild(pDate)

}