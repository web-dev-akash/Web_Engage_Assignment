const getUsers = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      const template = nunjucks.render("index.njk", { users });
      document.querySelector("#app").innerHTML = template;
    });
};
getUsers();
