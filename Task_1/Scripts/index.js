const handleFormSubmit = () => {
  let email = document.getElementById("email").value;
  let mobile = document.getElementById("tel").value;
  let code = document.getElementById("countryCode").value;
  if (mobile.length < 10) {
    alert("You have entered an invalid Mobile number");
    return;
  }
  if (
    email.includes("@") &&
    email.includes(".") &&
    email.length > 5 &&
    (email.includes("com") ||
      email.includes("in") ||
      email.includes("org") ||
      email.includes("co.in"))
  ) {
    localStorage.setItem("email", email);
    localStorage.setItem("mobile", mobile);
    localStorage.setItem("code", code);
    window.location.href = "./details.html";
  } else {
    alert("You have entered an invalid email address");
  }
};

const start = () => {
  document
    .getElementById("submitBtn")
    .addEventListener("click", handleFormSubmit);
};
start();
