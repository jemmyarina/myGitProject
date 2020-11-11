const logoutbtn=document.querySelector(".logout");

logoutbtn.addEventListener('click',(e)=>{
    e.preventDefault();
    auth.signOut().then(()=>{
        location.href="../pages/sign_in.html";
    }) .catch(error=>{
        console.log('Failed to logout');
    });
});

// const logoutRead=document.getElementById("logoutReading");
// logoutRead.addEventListener('click',(e)=>{
//     e.preventDefault();
//     auth.signOut().then(()=>{
//         location.href="../pages/blog.html";
//     }) .catch(error=>{
//         console.log('Failed to logout');
//     });
// });