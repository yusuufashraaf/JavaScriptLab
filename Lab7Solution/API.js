async function returnData() {
  let users = await fetch("https://jsonplaceholder.typicode.com/users");
  let posts = await fetch("https://jsonplaceholder.typicode.com/posts");
  let comments = await fetch("https://jsonplaceholder.typicode.com/comments");
  let user = await users.json();
  let post = await posts.json();
  let comment = await comments.json();

  return { user, post, comment };
}

let tbody = document.getElementsByTagName("tbody")[0];
let result = returnData().then((data) => {
  data.user.forEach((element) => {
    const userPost = data.post.filter((elem) => elem.userId === element.id);
    console.log(userPost);
    userPost.forEach((elem) => (postList = `<ul><li>${elem.title}</li>`));

    postsList = "<ul>";
    userPost.forEach((post) => {
      const postComments = data.comment.filter((c) => c.postId === post.id);
      postsList += `<li>${post.title} (Comments: ${postComments.length})</li>`;
    });

    postsList += "</ul>";
    let tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${element.name}</td>
    <td>${element.email}</td>
    <td>${element.company.name}</td>
    <td>${element.address.geo.lat}\n${element.address.geo.lng} </td>
    <td>${postsList}</td>

    `;
    tbody.appendChild(tr);
  });
});


