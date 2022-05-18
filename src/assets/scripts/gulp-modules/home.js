function init() {
    function hoverAnimation() {
        if (document.documentElement.clientWidth > 1023) {
            const hoverTrigger1 = document.querySelector('.head-screen-block-1');
            const contentForAnimation1 = document.querySelector('.head-screen-block-1');
            hoverTrigger1.addEventListener('mouseover', () => {
                contentForAnimation1.classList.remove('animation-1');
            });
            hoverTrigger1.addEventListener('mouseout', () => {
                contentForAnimation1.classList.add('animation-1');
            });
            const hoverTrigger2 = document.querySelector('.blue-block');
            const contentForAnimation2 = document.querySelector('.head-screen-block-2');
            hoverTrigger2.addEventListener('mouseover', () => {
                contentForAnimation2.classList.remove('animation-2');
            });
            hoverTrigger2.addEventListener('mouseout', () => {
                contentForAnimation2.classList.add('animation-2');
            });
            const hoverTrigger3 = document.querySelector('.mint-block');
            const contentForAnimation3 = document.querySelector('.head-screen-block-3');
            hoverTrigger3.addEventListener('mouseover', () => {
                contentForAnimation3.classList.remove('animation-3');
            });
            hoverTrigger3.addEventListener('mouseout', () => {
                contentForAnimation3.classList.add('animation-3');
            });
            const hoverTrigger4 = document.querySelector('.apartment-screen-block');
            const contentForAnimation4 = document.querySelector('.animation-img');
            const arrow = document.querySelector('.animation-arrow');
            hoverTrigger4.addEventListener('mouseover', () => {
                arrow.style.transform = 'rotate(-45deg)';
                arrow.style.transition = 'transform .3s ease-in-out';
                contentForAnimation4.style.transform = 'scale(1.2)';
                contentForAnimation4.style.transition = 'transform .4s ease-in-out';
            });
            hoverTrigger4.addEventListener('mouseout', () => {
                arrow.style.transform = 'rotate(0deg)';
                contentForAnimation4.style.transform = 'scale(1)';
            });
        }
    }
    hoverAnimation();
}

document.addEventListener('DOMContentLoaded', init);
