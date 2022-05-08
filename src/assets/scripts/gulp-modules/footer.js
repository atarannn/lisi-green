$(function() {
    // при нажатии на кнопку scrollup
    $('.pageup').click(function() {
        // переместиться в верхнюю часть страницы
        $("html, body").animate({
            scrollTop:0
        },1000);
    })
})
