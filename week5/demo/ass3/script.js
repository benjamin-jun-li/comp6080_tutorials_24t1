document.title = "Qanda";

const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");

const switchAuthFormDisplay = (option) => {
    if (option === "register") {
        loginForm.classList.add("hidden");
        registerForm.classList.remove("hidden");
    } else {
        registerForm.classList.add("hidden");
        loginForm.classList.remove("hidden");
    }
}

const addAuthFormRedirect = () => {
    const toSignupLink = document.querySelector(".register-link");
    const toSigninLink = document.querySelector(".login-link");

    toSigninLink.addEventListener("click", (e) => {
        e.preventDefault();
        switchAuthFormDisplay("login")
    })

    toSignupLink.addEventListener("click", (e) => {
        e.preventDefault();
        switchAuthFormDisplay("register")
    })
}

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const elements = loginForm.elements;
    const email = elements['email-l'].value;
    const password = elements['password-l'].value;

    console.log({
        email, password
    })
})

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const elements = registerForm.elements;
    const email = elements['email-r'].value;
    const password = elements['password-r'].value;

    console.log({
        email, password
    })
})

addAuthFormRedirect();