const table = document.getElementById("userTable");

Promise.all([
  fetch("https://jsonplaceholder.typicode.com/users").then((data) =>
    data.json()
  ),
  fetch("https://jsonplaceholder.typicode.com/posts").then((data) =>
    data.json()
  ),
  fetch("https://jsonplaceholder.typicode.com/comments").then((data) =>
    data.json()
  ),
]).then(([users, posts, comments]) => {
  thead = document.createElement("tr");
  thead.innerHTML = `
    <th>Username</th>
    <th>Email</th>
    <th>Company</th>
    <th>Geo (Lat,Lng)</th>
    <th>Posts & Comments</th>
  `;
  table.appendChild(thead);

  users.forEach((user) => {
    tr = document.createElement("tr");

    userPosts = posts.filter((post) => post.userId === user.id);

    postsList = "<ul>";
    userPosts.forEach((post) => {
      const postComments = comments.filter((c) => c.postId === post.id);
      postsList += `<li>${post.title} (Comments: ${postComments.length})</li>`;
    });

    postsList += "</ul>";
    tr.innerHTML = `
      <td>${user.username}</td>
      <td>${user.email}</td>
      <td>${user.company.name}</td>
      <td>${user.address.geo.lat}, ${user.address.geo.lng}</td>
      <td>${postsList}</td>
    `;

    table.appendChild(row);
  });
});
