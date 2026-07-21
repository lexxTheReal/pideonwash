function toggleMenu() {
    const nav = document.getElementById('main-nav');
    const burger = document.querySelector('.burger-menu');
    
    if (nav.classList.contains('active')) {
        nav.classList.remove('active');
        burger.classList.remove('active');
    } else {
        nav.classList.add('active');
        burger.classList.add('active');
    }
}
