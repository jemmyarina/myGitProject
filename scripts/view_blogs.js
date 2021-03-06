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

function editBlog(blogId){
    console.log(blogId);

    window.location.href = "editBlog.html?postuid=" + blogId;
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
        const articlesRow = document.createElement('tBody');
        var post_date = new Date (doc.data().post_date).toLocaleString();
        articlesRow.innerHTML+= 
            
          ` 
            <tr class="row">
                <td> ${post_date }</td>
                <td> ${doc.data().post_title}</td>
                <td> ${doc.data().pub_names}</td>
                
                <td ><input type="submit" value="Delete" onclick=deletePost('${doc.id}')></td>
                <td ><input type="submit" value="Edit" class="edit" onclick=editBlog('${doc.id}')></td> 
            </tr>    
        `
        messagesList.appendChild(articlesRow);         
    });
      });
    
    }
    
    articlesfetched();
    