const commentForm = document.querySelector('.comment-form');
const commentIcon = document.querySelector('#comment-display-btn');


const showForm = () => {
    commentForm.style.display = 'flex';
}
commentIcon.addEventListener('click', showForm)

//function to get user location
// const locationWrapper = domElement(".user-location");
// function scb(data) {
//     locationWrapper.style.display = 'block';
//     const latitude = document.createElement('p');
//     const longitude = document.createElement('p');
//     latitude.textContent = `Latitude: ${Math.round(data.coords.latitude)}`;
//     longitude.textContent = `Longitude: ${Math.round(data.coords.longitude)}`;

//     locationWrapper.appendChild(latitude);
//     locationWrapper.appendChild(longitude)
// }
// function fcb() {
//     console.log('Failure')
// }
// function userLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(scb, fcb)
//     } else {
//         return false
//     }
// }

//function to enable comments

const email = document.getElementById("email-field");
const comment = document.getElementById("comment-area");
const commentResult = document.getElementById("comment-result");
const submitBtn = document.getElementById("submit-comment-form");


const commentsInput = (mail, msg, form) => {
    // const emailPattern = /^[a-z]+([a-z0-9_\-\.]){1,}\@([a-z0-9_\-\.]){1,}\.([a-z]{2,4})$/;
    
    // if (mail.length === 0) {
    //     email.style.border = '1px solid red';
    //     commentResult.style.color = '#DF502A';
    //     commentResult.innerHTML = 'Email is required';
    //     return false;
    //   } else if (!emailPattern.test(mail)) {
    //     email.style.border = '1px solid red';
    //     commentResult.style.color = '#DF502A';
    //     commentResult.innerHTML = 'Invalid Email Format'
    //     return false;
    //   } else
       if (msg.length === 0) {
        comment.style.border = '1px solid red';
        commentResult.style.color = '#DF502A';
        commentResult.innerHTML = 'comment is required!'
        return false;
      } else {
        submitComment(email.value, comment.value, form)
      }
}


async function submitComment(email, comment, form) {
    const docId = localStorage.getItem('id')
    submitBtn.innerHTML = 'Loading ....';
    const docRef = db.collection("Blog_articles");
    await docRef.doc(docId).collection("comments").doc().set({
        Email: email,
        Comment: comment
    })
    .then(() => {
        form.reset();
        submitBtn.innerHTML = 'Submit';
        commentResult.style.color = '#008B8B';
        commentResult.innerHTML = 'Comment added!';
        commentForm.style.display = 'none';
        setTimeout(() => {
            commentResult.innerHTML = '';  
        }, 2000);
    })
    .catch((err) => {
        console.log(err)
        submitBtn.innerHTML = 'Submit';
        commentResult.innerHTML = 'Create account to comment!';
    })
}

submitBtn.onclick = (e) => {
    e.preventDefault();
    commentsInput( email.value, comment.value, commentForm)
}

//clear the error on keydown

function clearFeedBack() {
    submitBtn.innerHTML = 'Submit';
    commentResult.innerHTML = '';
}
email.addEventListener('keydown', clearFeedBack)
comment.onkeydown = clearFeedBack;

//fetch comments
function getComments() {
    const docId = localStorage.getItem('id');
    db
    .collection('blogs')
    .doc(docId)
    .collection('comments')
    .onSnapshot((comments) => comments
    .forEach((comment) => handleCommets(comment)))
}

function handleCommets(comment) {
        let blogComment = comment.data();
        let divEl = document.createElement('div');
        
        divEl.innerHTML = 
        `<div id="comments-card">
            <div id="user-email">${blogComment.Email}</div>
            <div id="user-comment">${blogComment.Comment}</div>
            <div id="user-reaction">
            <div id="user-reaction-icon">
            <i class="fas fa-heart"></i>
            <i class="far fa-thumbs-up"></i>
            </div>
            <div id="reply">
            <p>Reply</p>
            <i class="fas fa-reply"></i>
            </div>
            </div>
        </div>`;

    domElement(".comment-wrapper").appendChild(divEl)
}


window.onload = () => {
    userLocation()
    readArticle()
    getComments()
}