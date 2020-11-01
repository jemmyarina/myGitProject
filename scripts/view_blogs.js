//query messages collection
function manageArticles() {
    db.collection('Blog_articles').get().then((articles) => articles.forEach((i) => {
    console.log(i.doc.data())
    })) ;
    }
    
    window.onload = () => {
        manageArticles();
        document.getElementById('usersTable').style.display="block";
    }
    
    function articlesfetched(){
    const messagesList = document.querySelector('table')
    db.collection("Blog_articles").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
        const articlesRow=document.createElement('tBody');
        articlesRow.innerHTML+= 
            
          ` 
            <tr class="row">
                <td>1</td>
                <td> ${doc.data().post_date}</td>
                <td> ${doc.data().post_title}</td>
                        
                    <td ><input type="submit" value="Delete"></td>
                    <td ><input type="submit" value="Edit"></td>
            </tr>    
    
    `
        messagesList.appendChild(articlesRow);
        //   "<tr> <td>"+ doc.data().role +"</td> <td>"+ doc.data().email +"</td> <td class='all-btn' ><button  onclick='viewContent()' class='button button1'> "+ 'View' +" </button> <button  onclick='editContent()' class='button button2'>"+ 'Edit' +"</button> <button onclick='deletePost()' class='button button3'>"+ 'Delete' +"</button> </td> </tr>" 
         });
      });
    
    }
    
    articlesfetched();
    