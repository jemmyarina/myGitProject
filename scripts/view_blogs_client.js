//query messages collection
function manageArticles() {
    db.collection('Blog_articles').get().then((articles) => articles.forEach((i) => {
    console.log(i.doc.data())
    })) ;
};
// .............DELETE BLOG ..................
function deletePost(blogId){
    db.collection("Blog_articles").doc(blogId).delete().then( ()=>{
        alert("blog deleted successfully");
    })
    .catch(e =>{
        alert("Failed to delete a blog post");
    })
};
// ..............EDIT BLOG..................
// const editbtn=document.querySelector('edit');
// editbtn.addEventListener('click', (e)=>{
   
// })
function editBlog(blogId){
    console.log(blogId);

    localStorage.setItem('dataId',blogId);
    window.location.href = 'editBlog.html';
}

// ................................

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
                <td> ${doc.data().post_date}</td>
                <td> ${doc.data().post_title}</td>
                <td> ${doc.data().pub_names}</td>
            </tr>    
            <td ><input type="submit" value="More" class="edit" onclick=readmore('${doc.id}')></td> 
        `
        messagesList.appendChild(articlesRow);
        //   "<tr> <td>"+ doc.data().role +"</td> <td>"+ doc.data().email +"</td> <td class='all-btn' ><button  onclick='viewContent()' class='button button1'> "+ 'View' +" </button> <button  onclick='editContent()' class='button button2'>"+ 'Edit' +"</button> <button onclick='deletePost()' class='button button3'>"+ 'Delete' +"</button> </td> </tr>" 
         });
      });
    
    }
    
    articlesfetched();
    