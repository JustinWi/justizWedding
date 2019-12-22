"use strict"

$(document).ready(function () {
    /* height 100% as window height */
    $('.vh-100').css("min-height", $(window).height());
    /* height 100% as window height */
    $('.vhf-100').css("min-height", $(window).height() - $('.footer').outerHeight() );
    $('#passwordAlert').alert();
    $('#passwordAlert').hide();
    $('#snowflakes').children().hide();

    $('#submitButton').click(function(event) {
        event.preventDefault();
        $('#passwordAlert').fadeOut();

        if ($('#exampleInputPassword1').val().trim().toLowerCase() == "escape room") {
            $('#about').fadeIn();
            $('#events').fadeIn();
            setTimeout(function(){ document.getElementById("about").scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 1000);
            $('#snowflakes').children().show();
        }
        else {
            $('#passwordAlert').fadeIn();
        }
    })
});
/* Scroll content add class */
$(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 150) {
        $(".header").addClass("active")
    } else {
        $(".header").removeClass("active")
    }
});
