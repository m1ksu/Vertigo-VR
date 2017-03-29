$(document).ready(function () {
    $('.h-1').parallax({imageSrc: 'img/bg1.jpg'});
    $('.h-2').parallax({imageSrc: 'img/bg2.jpg'});
    $('.h-3').parallax({imageSrc: 'img/bg3.jpg'});
    hsize();

    function typed() {
        $(".index-title").typed({
            strings: ["isionary", "irtual", "isual", "ivid", "ersatile", "ertigo."],
            typeSpeed: 75,
            backSpeed: 75
        });
    }

    typed();

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
    var pre = ""
    //var pre = "/Vertigo-VR";
    switch (page) {
        case pre + "/":
            navActive('home');
            break;
        case pre + "/portfolio.html":
            navActive('portfolio');
            break;
        case pre + "/services.html":
            navActive('services');
            break;
        case pre + "/contact.html":
            navActive('contact');
            break;
    }
    console.log(pre + page);

    function navActive(page) {
        $('.navigator *').removeClass("nav-active");
        $("#" + page).addClass("nav-active");
    }
})

$(window).resize(function() {
    if ($(window).width() < 760) {
        $('.dropdown').slideUp();
    } hsize();
});

function hsize() {
    if ($(window).width() < 1400) {
        $('.h-3').css('background-image', 'url("img/bg1.jpg")');
        $('.services-logo').attr('src', 'img/logo.svg');
    } else {
        $('.h-3').css('background-image', 'url("img/bg3.jpg")');
        $('.services-logo').attr('src', 'img/logodark.svg');
    }
}
