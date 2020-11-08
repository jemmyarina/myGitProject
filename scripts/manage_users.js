
window.onload = () => {
    manageUsers();
}


function datafetched(){
const usersList = document.querySelector('table')
db.collection("Users").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
    const userRow=document.createElement('tBody');
        userRow.innerHTML+= 
        
    ` 
    <td> ${doc.data().fname}</td>
    <td> ${doc.data().lname}</td>
    <td>${doc.data().email}</td>
    <td>${doc.data().role}</td>
        <td ><input type="submit" value="Delete"></td>`
        usersList.appendChild(userRow);
     });
  });

}
datafetched();

//.......DELETE USER..........
// function deleteUser(userId) {
//   db.collection('Users').doc(userId).delete().then(() => {
//     alert("USER DELETED SUCCESSFULLY!");
//   }).catch(e =>{
//     alert("FAILED TO DELETE THIS USER!");
//   });

//   datafetched();
//   setTimeout(()=>{
//    deleteUser()}, 60000);