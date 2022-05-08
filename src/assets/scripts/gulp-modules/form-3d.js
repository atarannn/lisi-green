function formOpen(form) {
    form.classList.add('active');
    const tl = gsap.timeline({ paused: true });
    tl.fromTo(form,
        {autoAlpha: 0},
        {autoAlpha: 1, duration: 0.3}, '<');
    tl.play();
    document.querySelector('body').style.overflow = 'hidden';
}
function formClose(form) {
    form.classList.remove('active');
    const tl = gsap.timeline({ paused: true });
    tl.fromTo(form,
        { autoAlpha: 1 },
        { autoAlpha: 0, duration: 0.3, clearProps: 'all' }, '<');
    tl.play();
    document.querySelector('body').style.overflow = 'auto';
}
function formInit() {
    const form = document.querySelector('.form-wrap');
    document.querySelector('[data-open-form]').addEventListener('click', () => formOpen(form));
    document.querySelector('[data-close-form]').addEventListener('click', () => formClose(form));
}
window.addEventListener('DOMContentLoaded', formInit);
