$(document).ready(function () {
    $('.h-1').parallax({imageSrc: 'img/bg1.jpg'});
    $('.h-2').parallax({imageSrc: 'img/bg2.jpg'});

    $('.dropdown').slideUp(0);

    var dropdownToggled = false;
    $('.first-link').on('click', function() {
        if (!dropdownToggled && $(window).width() < 760) {
            $('.dropdown').slideDown();
            dropdownToggled = true;
        } else {
            $('.dropdown').slideUp();
            dropdownToggled = false;
        }
    });
    navActive(null);
    var page = window.location.pathname;
    switch (page) {
        case "/":
            navActive('home');
            break;

        case "/portfolio.html":
            navActive('portfolio');
            break;

        case "/services.html":
            navActive('services');
            break;

        case "/contact.html":
            navActive('contact');
            break;
    }
    console.log(page);

    function navActive(page) {
        $('.navigator *').removeClass("nav-active");
        $("#" + page).addClass("nav-active");
    }
})

$(window).resize(function() {
    if ($(window).width() < 760) {
        $('.dropdown').slideUp();
    }
});
