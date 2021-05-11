$(function () {
    $(".nav-btn").click(function () {
        if ($('.navigation').hasClass('active')) {
            $('.navigation').removeClass('active');
        } else {
            $('.navigation').addClass("active");
        }
    });
    // Same height 4 cards on homepage
    var highestCard = 0;
    $('.card img').each(function () {
        if ($(this).height() > highestCard) {
            highestCard = $(this).height() + 20;
        }
    });
    $('.card img').height(highestCard);
})

