//query messages collection
function manageMessages() {
    db.collection('messages').get().then((messages) => messages.forEach((i) => {
    console.log(i.id)
    })) ;
    }
    
    window.onload = () => {
        manageMessages();
        document.getElementById('messageForm').style.display="block";
    }
    
    function messagefetched(){
    const messagesList = document.querySelector('table')
    db.collection("messages").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
        const messageRow=document.createElement('tBody');
            messageRow.innerHTML+= 
            
          ` 
    <tr class="row">
        <td>1</td>
        <td> ${doc.data().Email}</td>
        <td> ${doc.data().Message}</td>
        <td>${doc.data().Name}</td>
         
            <td ><input type="submit" value="Delete"></td>
            <td ><input type="submit" value="Reply"></td>
         
    </tr>    
    
    `
        messagesList.appendChild(messageRow);
        //   "<tr> <td>"+ doc.data().role +"</td> <td>"+ doc.data().email +"</td> <td class='all-btn' ><button  onclick='viewContent()' class='button button1'> "+ 'View' +" </button> <button  onclick='editContent()' class='button button2'>"+ 'Edit' +"</button> <button onclick='deletePost()' class='button button3'>"+ 'Delete' +"</button> </td> </tr>" 
         });
      });
    
    }
    
    messagefetched();
    