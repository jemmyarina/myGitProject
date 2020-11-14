const logoutbtn=document.querySelector(".logout");

logoutbtn.addEventListener('click',(e)=>{
    e.preventDefault();
    auth.signOut().then(()=>{
        console.log("user logged out");
        location.href="../pages/sign_in.html";
    }) .catch(error=>{
        console.log('Failed to logout');
    });
});
