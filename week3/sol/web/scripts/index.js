"use strict"

document.title = "week 3 demo";

const createLabeledInput = (labelText, parentDom) => {
    const label = document.createElement("label");
    label.textContent = labelText;
    label.setAttribute("for", labelText);

    const input = document.createElement("input");
    input.setAttribute("name", labelText);
    if (/password/.test(labelText.toLowerCase())) {
        input.setAttribute("type", "password");
    }
    const inputField = document.createElement("div");
    inputField.appendChild(label);
    inputField.appendChild(input);
    inputField.style.margin = "1rem 0";
    parentDom.appendChild(inputField);
    return input;
}


const body = document.querySelector("body");
const loginForm = document.createElement("form");
const loginBtn = document.createElement("button");
loginBtn.setAttribute("type", "submit");
loginBtn.textContent = "login";

const heading = document.createElement("h1");
heading.textContent = "Sign in";


loginForm.appendChild(heading);

const accountInput = createLabeledInput("Account:", loginForm);
const pwdInput = createLabeledInput("Password:", loginForm);

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(accountInput.value);
    console.log(pwdInput.value);
});
loginForm.appendChild(loginBtn);
body.appendChild(loginForm);

