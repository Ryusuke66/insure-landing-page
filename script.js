let menuIcon = document.getElementById('menu');
let nav = document.querySelector('nav');

menuIcon.addEventListener('click', () => {
    if(menuIcon.classList.contains('active')) {
        menuIcon.classList.remove('active');
        menuIcon.classList.add('inactive');
        nav.classList.remove('on');
    } else {
        menuIcon.classList.remove('inactive');
        menuIcon.classList.add('active');
        nav.classList.add('on');
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }
});