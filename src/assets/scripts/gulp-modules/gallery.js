// const parallaxAnimLogo = document.querySelectorAll('.gallery-column.middle-column');
// parallaxAnimLogo.forEach(section => {
//     gsap
//         .timeline({
//             paused: true,
//             scrollTrigger: {
//                 trigger: section,
//                 scrub: 1,
//                 scroller: '.gallery-container',
//         },
//     })
//     .fromTo(
//             section,
//             {
//                 y: 0,
//             },
//             {
//                 y: 481,
//                 ease: 'ease',
//             },
//         );
//     });

// const parallaxAnimLogo2 = document.querySelectorAll('.left-right-column');
// parallaxAnimLogo2.forEach(section => {
//     gsap
//         .timeline({
//             paused: true,
//             scrollTrigger: {
//                 trigger: section,
//                 scrub: 1,
//                 scroller: '.gallery-container',
//             },
//         })
//         .fromTo(
//             section,
//             {
//                 y: 0,
//             },
//             {
//                 y: -500,
//                 ease: 'ease',
//             },
//         );
// });

function popupOpen(popup) {
    popup.classList.add('active');
    const swiper = document.querySelectorAll('.mySwiper img');
    const tl = gsap.timeline({ paused: true });
    tl.set(popup, { autoAlpha: 0 });
    tl.fromTo(popup,
        { autoAlpha: 0},
        { autoAlpha: 1, duration: 0.4}, '<');
    tl.fromTo(swiper,
        { scale: 0},
        { scale: 1, duration: 0.4, clearProps: 'all'}, '<');
    tl.play();
    document.querySelector('body').style.overflow = 'hidden';
}
function popupClose(popup) {
    popup.classList.remove('active');
    const tl = gsap.timeline({ paused: true });
    tl.fromTo(popup,
        { autoAlpha: 1 },
        { autoAlpha: 0, duration: 0.4, clearProps: 'all' }, '<');
    tl.set(popup, { autoAlpha: 0 });
    tl.play();
    document.querySelector('body').style.overflow = 'auto';
}
function popupInit() {
    const popup = document.querySelector('.gallery-popup-wrapper');
    document.querySelector('[data-open-gallery-popup]').addEventListener('click', () => popupOpen(popup));
    document.querySelector('[data-close-gallery-popup]').addEventListener('click', () => popupClose(popup));
}
window.addEventListener('DOMContentLoaded', popupInit);

var swiper2 = new Swiper('.mySwiper2', {
    loop: false,
    spaceBetween: 5,
    freeMode: false,
    width: 66,
    breakpoints: {
        575: {
            width: 66
        },
        320: {
            width: 40
        }
    }
});
var swiper = new Swiper('.mySwiper', {
    loop: false,
    spaceBetween: 0,
    slidesPerView: 1,
    centeredSlides: true,
    thumbs: {
        swiper: swiper2,
    },
    navigation: {
        nextEl: document.querySelector('[data-next]'),
        prevEl: document.querySelector('[data-prev]')
    }
});

