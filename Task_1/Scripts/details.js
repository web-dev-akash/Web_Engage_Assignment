const onLoad = () => {
  const email = localStorage.getItem("email");
  const mobile = localStorage.getItem("mobile");
  const code = localStorage.getItem("code");
  const div = document.getElementById("displayData");
  div.innerHTML = `
    <h2>Email : ${email}</h2>
    <h2>Mobile : +${code} ${mobile}</h2>
  `;
};
onLoad();
