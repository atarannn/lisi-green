const parallaxAnimLogo = document.querySelectorAll('.gallery-column.middle-column');
parallaxAnimLogo.forEach(section => {
    gsap
        .timeline({
            paused: true,
            scrollTrigger: {
                trigger: section,
                scrub: 1,
                scroller: '.gallery-container',
        },
    })
    .fromTo(
            section,
            {
                y: 0,
            },
            {
                y: -481,
                ease: 'ease',
            },
        );
    });

const parallaxAnimLogo2 = document.querySelectorAll('.gallery-column');
parallaxAnimLogo2.forEach(section => {
    gsap
        .timeline({
            paused: true,
            scrollTrigger: {
                trigger: section,
                scrub: 1,
                scroller: '.gallery-container',
            },
        })
        .fromTo(
            section,
            {
                y: 0,
            },
            {
                y: 481,
                ease: 'ease',
            },
        );
});
