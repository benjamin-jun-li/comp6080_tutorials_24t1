document.title = "demo";
const body = document.querySelector("body");
const registerForm = document.querySelector(".register-form")
const form = document.createElement("form");
form.setAttribute("class", "login-form");
const nameLabel = document.createElement("label");
const pwdLabel = document.createElement("label");
const nameInput = document.createElement("input");
const pwdInput = document.createElement("input");
const loginBtn = document.createElement("button");

const createLabeledInput = () => {
  const input = document.createElement("input");

  return input;
};

loginBtn.setAttribute("type", "submit");
loginBtn.textContent = "Sign in";
nameLabel.setAttribute("for", "name");
pwdLabel.setAttribute("for", "password");
nameLabel.textContent = "Name";
pwdLabel.textContent = "Password";

nameInput.setAttribute("name", "name");
pwdInput.setAttribute("name", "password");
pwdInput.setAttribute("type", "password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(nameInput.value, pwdInput.value);
  if (res.status === 200) {
    form.style.display = "none";

  }
});

form.appendChild(nameLabel);
form.appendChild(nameInput);
form.appendChild(pwdLabel);
form.appendChild(pwdInput);
form.appendChild(loginBtn);

const duplicatedForm = form.cloneNode(deep=true);

body.appendChild(form);
body.appendChild(duplicatedForm);

const changeDisplayStatus = (status) => {

}