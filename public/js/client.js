let login = document.querySelector('.main_login');
let signup = document.querySelector('.main_signup');
let form_login = document.querySelector('.form_login');
let form_signup = document.querySelector('.form_signup');
login.addEventListener('click', () => {
    form_signup.classList.add('main_hide');
    form_login.classList.remove('main_hide');
})
signup.addEventListener('click', () => {
    form_login.classList.add('main_hide');
    form_signup.classList.remove('main_hide');
})