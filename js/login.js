import API_PATH from "./main.js";

const elLoginForm = document.querySelector('.js-login-form');
const elRegisterEmail = document.querySelector('.js-login-email');
const elRegisterPassword = document.querySelector('.js-login-password');

const token = localStorage.getItem('loginToken');
if (token) {
    window.location.pathname = '/index.html';
}

const login = async (userEmail, userPassword) => {
    try {
        const res = await fetch(API_PATH + "user/login", {
            method: 'POST',
            headers: {
                'content-type': "application/json",
            },
            body: JSON.stringify({
                email: userEmail,
                password: userPassword,
            }),
        });
        const data = await res.json();

        if (data.token) {
            localStorage.setItem('loginToken', data.token);
        }

        console.log(data.message);

    } catch (error) {
        console.log(error);
    }
}


elLoginForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const email = elRegisterEmail.value;
    const password = elRegisterPassword.value;

    login(email, password)
})