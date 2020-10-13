const logoutbtn=document.querySelector(".logout");

logoutbtn.addEventListener('click',(e)=>{
    e.preventDefault();
    auth.signOut().then(()=>
        window.location.href='../pages/sign_in.html');  
    });


 
// logout
// domElement(".fa-sign-out-alt").addEventListener('click', (e) => {
//     e.preventDefault();
//     auth
//     .signOut()
//     .then(() => window.location.href = '../login/');
// })
