const logout=document.getElementsByClassName("logout");
function logout() {
auth.signOut().then(()=>{
    location.href="sign_in.html";
}) .catch(error=>{
    console.log('Failed to login');
});

}