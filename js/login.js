const elLoginForm = document.querySelector('.js-login-form');
const elLoginEmail = document.querySelector(".js-login-email");
const elLoginPassword = document.querySelector(".js-login-password");

const API_PATH = 'http://192.168.3.6:5000/';

async function loginUser() {
    try {
        const res = await fetch(`${API_PATH}user/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: elLoginEmail.value,
                password: elLoginPassword.value
            })
        });
        const data = await res.json();
        if (data.token) {
            window.localStorage.setItem('loginToken', data.token);
            window.location.href= "/";
        }
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}

elLoginForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    loginUser();
})