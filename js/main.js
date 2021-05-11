$(function () {
    $(".nav-btn").click(function () {
        if ($('.navigation').hasClass('active')) {
            $('.navigation').removeClass('active');
            $('.nav-btn').removeClass('nav-visible')
        } else {
            $('.navigation').addClass("active");
            $('.nav-btn').addClass('nav-visible')

        }
    });
    // Same height images
    var highestImg = 0;
    $('.card img').each(function () {
        if ($(this).height() > highestImg) {
            highestImg = $(this).height() + 20;
        }
    });
    $('.card img').height(highestImg);

    var highestCard = 0;
    $('.card').each(function () {
        if ($(this).height() > highestCard) {
            highestCard = $(this).height() + 20;
        }
    });
    $('.card').height(highestCard);
})

