function homeAnimationAdditional() {
    function splitToLinesAndFadeUp(selector, $scroller) {
        document.querySelectorAll(selector).forEach(text => {
            let mathM = text.innerHTML.match(/<\s*(\w+\b)(?:(?!<\s*\/\s*\1\b)[\s\S])*<\s*\/\s*\1\s*>|\S+/g);
            if (mathM === null) return;
            mathM = mathM.map(el => `<span style="display:inline-flex; overflow: hidden"><span>${el}</span></span>`);
            text.innerHTML = mathM.join(' ');

            let tl = gsap
                .timeline({
                    paused: true,
                    scrollTrigger: {
                        scroller: document.body,
                        trigger: text,
                        once: true,
                    },
                })
                .fromTo(
                    text.querySelectorAll('span>span'),
                    { yPercent: 100 },
                    { yPercent: 0, delay: 0.3, stagger: 0.02, duration: 0.6, ease: "power4.out" }
                );
        });
    }
    splitToLinesAndFadeUp('.advantages-screen .title, .apartment-screen-block-text .title, .location-screen-head .title, .location-screen-head .dark-text, .right-text-wrapper .light-text, .first-screen-text .title, .concept-screen .dark-text, .concept-screen .title, .concept-screen .white-text64, .concept-screen .color-text64, #id-page-concept .concept-text, #id-page-payment .concept-text, .developer-screen-1 .grid-12-left .dark-text, .developer-screen-2 .light-text, .developer-screen-3 .light-text');

    function splitToLinesAndFadeUp2(selector, $scroller) {
        document.querySelectorAll(selector).forEach(text => {
            let mathM = text.innerHTML.match(/<\s*(\w+\b)(?:(?!<\s*\/\s*\1\b)[\s\S])*<\s*\/\s*\1\s*>|\S+/g);
            if (mathM === null) return;
            mathM = mathM.map(el => `<span style="display:inline-flex; overflow: hidden"><span>${el}</span></span>`);
            text.innerHTML = mathM.join(' ');

            let tl = gsap
                .timeline({
                    paused: true,
                    scrollTrigger: {
                        scroller: document.body,
                        trigger: text,
                        once: true,
                    },
                })
                .fromTo(
                    text.querySelectorAll('span>span'),
                    { yPercent: 100 },
                    { yPercent: 0, stagger: 0.02, duration: 0.4, ease: "power4.out", delay: 0.6}
                );
        });
    }
    splitToLinesAndFadeUp2('.advantages-screen .dark-text, .advantages-screen .light-text');

    const blockAnim = document.querySelectorAll('.head-screen-text-wrapper, .contacts-right-info, .contacts-row-mob-right');
    blockAnim.forEach(section => {
        gsap.set(section, { overflow: 'visible' });
        const tl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                scroller: document.body,
                triggerHook: 1,
                trigger: section,
                // start: '0% bottom',
                // end: '100% bottom',
                once: true,
            },
        });
        tl.fromTo(
            section,
            { x: '500px', duration: 0, autoAlpha: 0},
            { x: 0, duration: 0.6, autoAlpha: 1},
        );
    });

    const titleAnim = document.querySelectorAll('.head-screen-title, .contacts-row, .page404-text');
    titleAnim.forEach(section => {
        gsap.set(section, { overflow: 'visible' });
        const tl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                triggerHook: 1,
                // trigger: section,
                // scroller: document.body,
                start: '-100% bottom',
                end: '0% bottom',
                once: true,
            },
        });
        tl.fromTo(
            section,
            { y: '500px', duration: 0, autoAlpha: 0},
            { y: 0, duration: 0.6, autoAlpha: 1},
        );
    });

}
homeAnimationAdditional();
