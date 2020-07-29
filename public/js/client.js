let header__box = document.querySelector('.header__box');
let header__checkbox = document.querySelector('.header__checkbox');
header__box.addEventListener('click', () => {
    if(header__box.classList.contains('checked')){
        header__box.classList.remove('checked');
    }else{
        header__box.classList.add('checked');
    }
});