$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#row1').addClass('animated fadeInUp');
            $('#row1').css("visibility", "visible");
        }
    });
})