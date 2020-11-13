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
        
        <td> ${doc.data().Email}</td>
        <td> ${doc.data().Message}</td>
        <td>${doc.data().Name}</td>
         
            <td ><input type="submit" value="Delete" onclick=deleteMessage('${doc.id}')></td>
            
             
         
    </tr>    
    
    `
        messagesList.appendChild(messageRow);
         
         });
      });
    
    }
    
    messagefetched();

    //.......DELETE MESSAGE..........

function deleteMessage(messageId){
    db.collection("messages").doc(messageId).delete().then( ()=>{
        alert("MESSAGE DELETED SUCCESSFULLY!");
    })
    .catch(e =>{
        alert("FAILED TO DELETE THIS MESSAGE!");
    })
};
    

setTimeout(()=>{
    deleteMessage(), 6000});