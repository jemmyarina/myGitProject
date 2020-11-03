// const form = document.getElementById('edit-blog');

let dataId = localStorage.getItem('dataId');

db.collection('Blog_articles').doc(dataId).get().then((blog) => {
    console.log(blog.data());
    title.value = blog.data().title,
    content.innerHTML = blog.data().content
});

// db.collection('Blog_articles').get().then((articles) => articles.forEach((i) => {
//     console.log(i.doc.data())
//     })) ;

