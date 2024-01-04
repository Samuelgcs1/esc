let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Role para baixo
        document.querySelector('header').classList.add('fixed');
    } else {
        // Role para cima
        document.querySelector('header').classList.remove('fixed');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para o Firefox
}, false);
