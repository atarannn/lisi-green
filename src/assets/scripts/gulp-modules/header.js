document.onscroll = function () {
    scrollFunction();
};
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector('.header').classList.add('not-on-top');
    } else {
        document.querySelector('.header').classList.remove('not-on-top');
    }
}
function menuOpen(menu) {
    menu.classList.add('active');
    const createAnimation = (links, delay = 0) => {
        links.forEach((link, i) => {
            gsap.from(link, {
                delay: delay + i / 7,
                opacity: 0,
            });
        });
    };
    const links = document.querySelectorAll('[data-animation]');
    createAnimation(links, 0.3);
    const tl = gsap.timeline({ paused: true });
    tl.set(menu, { autoAlpha: 1 });
    tl.fromTo(menu,
        {x: 2000},
        {x: 0, duration: 0.4}, '<');
    tl.play();
    document.querySelector('body').style.overflow = 'hidden';
}
function menuClose(menu) {
    menu.classList.remove('active');
    const tl = gsap.timeline({ paused: true });
    tl.fromTo(menu,
        { autoAlpha: 1, x: 0, },
        { x: 2000, duration: 0.4, clearProps: 'all' }, '<');
    tl.set(menu, { autoAlpha: 0 });
    tl.play();
    document.querySelector('body').style.overflow = 'auto';
}
function menuInit() {
    const menu = document.querySelector('.menu-wrap');
    document.querySelector('[data-open-menu]').addEventListener('click', () => menuOpen(menu));
    document.querySelector('[data-close-menu]').addEventListener('click', () => menuClose(menu));
}
window.addEventListener('DOMContentLoaded', menuInit);
