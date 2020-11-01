//query users collection
function manageUsers() {
db.collection('Users').get().then((users) => users.forEach((i) => {
console.log(i.data())
})) ;
}

window.onload = () => {
    manageUsers();
}

console.log()
function datafetched(){
const usersList = document.querySelector('table')
db.collection("Users").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
    const userRow=document.createElement('tBody');
        userRow.innerHTML+= 
        
      ` 
    <td>1</td>
    <td> ${doc.data().fname}</td>
    <td> ${doc.data().lname}</td>
    <td>${doc.data().email}</td>
    
        <td ><input type="submit" value="Delete"></td>
     
 

`
        usersList.appendChild(userRow);
    //   "<tr> <td>"+ doc.data().role +"</td> <td>"+ doc.data().email +"</td> <td class='all-btn' ><button  onclick='viewContent()' class='button button1'> "+ 'View' +" </button> <button  onclick='editContent()' class='button button2'>"+ 'Edit' +"</button> <button onclick='deletePost()' class='button button3'>"+ 'Delete' +"</button> </td> </tr>" 
     });
  });

}

datafetched();
