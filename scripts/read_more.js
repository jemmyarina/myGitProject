function fetchDisplayBlog(){
    let triggedBlogId = sessionStorage.getItem('blogId');
    db.collection("Blog_articles").doc(`${triggedBlogId}`).get().then((article)=>{

        const imgURL = 

        storage.ref(article.data().post_photo).getDownloadURL().then((blogImageUrl)=>{
       
        }).catch((downUrlError)=>{
            console.log(downUrlError)
        })


        firebase.storage().ref(article.data().post_photo).getDownloadURL().then((image)=>{
          let blogContainer = `
          <div class="Blog_posts">
          <div class="Post_title">
              <p>${article.data().post_title}</p>
          </div>
      
          <div class="Post_photo_and_content">
              <div class="Post_photo">
                  <img src="${image}" alt="Post image" style="width: 120px;">
              </div>
              <div class="Date_pub_and_text">
                  <div class="Post_date_publisher">
                      <p> ${article.data().post_date} by <span class="sp"> ${article.data().pub_names}</span> </p>
                  </div>
                  <div class="Post_txt">
                      <p> 
                      ${article.data().post_textarea2}
                      </p>
                  </div>
              </div>
          </div>       
      </div>
          `; 
          document.getElementById("Blog_posts").innerHTML+=blogContainer;
        })
          
      }).catch((error)=>{
          alert(error)
      })
      
      }
      
    fetchDisplayBlog();
    