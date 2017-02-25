$(document).ready(function () {
    $('.h-1').parallax({imageSrc: 'img/bg1.jpg'});
    $('.h-2').parallax({imageSrc: 'img/bg2.jpg'});

    $('.dropdown').slideUp(0);

    var dropdownToggled = false;
    $('#first-link').on('click', function() {
        if (!dropdownToggled) {
            $('.dropdown').slideDown();
            dropdownToggled = true;
        } else {
            $('.dropdown').slideUp();
            dropdownToggled = false;
        }
    });
})
