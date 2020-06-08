const menu = document.querySelector('.menu');

if (menu) {
    const menu__dropdown = menu.querySelector('.menu__dropdown')
    menu__dropdown.classList.remove('menu__dropdown_loading')

    const changePage = ({ target }) => {
        menu__dropdown.classList.add('menu__dropdown_loading')
        window.location.href = target.value;
    }
    
    menu.addEventListener('change', changePage)
}

