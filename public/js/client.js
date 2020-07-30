let header__box = document.querySelectorAll('.header__box');
let header__login = document.querySelectorAll('.header__login');
let header__signup =document.querySelector('.header__signup');

header__login.forEach((login) => {
    login.style.color = "red";
})

header__box.forEach((box) => {
    box.addEventListener('click', (event) => {
        console.log(event.classList)
        if(event.target.classList.contains('checked')){
            event.target.classList.remove('checked');
            event.target.style.left = -1 + 'px';
            header__signup.style.color = 'white';
            header__login.style.color = 'red';
        }else{
            event.target.classList.add('checked');
            event.target.style.left = 17 + 'px';
            header__signup.style.color = "red";
            header__login.style.color = 'white';
        }
    });
})
