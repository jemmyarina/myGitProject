function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }
  
  var blogId = getUrlParameter("postuid");
//   var image = document.querySelector(".image");
  db.collection("Blog_articles").doc(blogId).get().then(function (snapshot) {
  
    var childData = snapshot.data();
    console.log(blogId);

    document.getElementById("form").title.value = childData.post_title;
    document.getElementById("form").textarea2.value = childData.post_textarea2;

    // image.src = childData.photo;
  });

const blog = document.querySelector('#form');

blog.addEventListener('submit', (e) => {

    e.preventDefault();
  
    const title = blog['title'].value;
    const content = blog['textarea2'].value; 
    // if (file) return updateWithImage(title, content);
    updatePost(title, content);
  });
  
  
  function updatePost(title, content) {
    var blogData = {
      post_title:title,
      post_textarea2:content,
      date_modified: new Date().getTime()
    }
    db.collection("Blog_articles").doc(blogId).update(blogData).catch(function (error) {
      console.error("Error adding document: ", error);
    }).then(function () {
      alert('successful updated!');
      window.location.href = "view_blogs.html";
    });
  
  }