const parallaxAnim = document.querySelectorAll('.first-screen-right-logo, .advantages-title-logo, .footer-logo, .page404-logo, .page404-wrap-dog');
parallaxAnim.forEach(section => {
    gsap.set(section, { overflow: 'visible' });
    const tl = gsap.timeline({
        paused: true,
        scrollTrigger: {
            triggerHook: 1,
            trigger: section,
            start: '-100% bottom',
            // end: '100% bottom',
            once: true,
        },
    });
    tl.fromTo(
        section,
        { y: 500 },
        { y: 0, duration: 0.5, delay: 0.3 },
    );
});

const parallaxAnimLogo = document.querySelectorAll('.logo-background');
parallaxAnimLogo.forEach(section => {
    gsap.set(section, { overflow: 'visible' });
    const tl = gsap.timeline({
        paused: true,
        scrollTrigger: {
            triggerHook: 1,
            trigger: section,
            start: '-200% top',
            // end: '100% top',
            once: true,
        },
    });
    tl.fromTo(
        section,
        { y: 700 },
        { y: 0, duration: 0.5, delay: 0.3 },
    );
});
