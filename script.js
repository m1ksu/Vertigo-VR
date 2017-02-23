$(document).ready(function () {
    $('.header').parallax({imageSrc: 'img/bg1.jpg'});

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
