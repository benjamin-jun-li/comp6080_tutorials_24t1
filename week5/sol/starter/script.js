document.title = "Qanda";

const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");

const switchFormDisplay = (option) => {
    if (option === "register") {
        loginForm.classList.add("hidden");
        registerForm.classList.remove("hidden")
    } else {
        registerForm.classList.add("hidden");
        loginForm.classList.remove("hidden");
    }
}

const addLinkRedirect = () => {
    const toSignupLink = document.querySelector(".register-link");
    const toSigninLink = document.querySelector(".login-link");

    toSigninLink.addEventListener("click", (e) => {
        e.preventDefault();
        switchFormDisplay("login");
    })
    toSignupLink.addEventListener("click", (e) => {
        e.preventDefault();
        switchFormDisplay("register");
    })
}

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const elements = loginForm.elements;
    console.log(elements);
    console.log({
        email: elements['email'].value,
        password: elements['password'].value
    })
})

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const elements = registerForm.elements;
    console.log({
        email: elements['email'].value,
        password: elements['password'].value
    })
})

addLinkRedirect();
