document.title = "qanda";

const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");

const switchFormDisplay = (option) => {
    // option : register | login
    if (option === "register") {
        loginForm.classList.add("hidden");
        registerForm.classList.remove("hidden");
    } else {
        registerForm.classList.add("hidden");
        loginForm.classList.remove("hidden");
    }
}

const addAuthRedirect = () => {
    const toSignupLink = document.querySelector(".register-link");
    const toSigninLink = document.querySelector(".login-link");
 
    toSignupLink.addEventListener("click", (e) => {
        e.preventDefault();
        switchFormDisplay("register");
    });
    toSigninLink.addEventListener("click", (e) => {
        e.preventDefault();
        switchFormDisplay("login");
    })
}

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const elements = loginForm.elements;
    const email = elements['email-l'].value;
    const password = elements['password-l'].value;
    const obj = {
        email, password
    }
    console.log(obj);
});

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log({
        email: elements['email'].value,
        password: elements['password'].value
    })
});

addAuthRedirect();