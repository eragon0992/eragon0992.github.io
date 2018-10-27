AOS.init();
$(document).ready(function() {
    $('#HeaderLogo').addClass('animated fadeInLeft');
    $('#HeaderTitle').addClass('animated fadeInRight');
    $('#HeaderLogo').css("visibility", "visible");
    $('#HeaderTitle').css("visibility", "visible");

});

$("#Title").hover(function() {
    $("#Title").addClass('animated pulse');
    $('#HeaderTitle').css("visibility", "visible");
})

$('.carousel').carousel({
    interval: 3500
})

$('.carousel-control-prev-icon').click(function() {
    $('#carouselExampleFade').carousel('prev');
});

$('.carousel-control-next-icon').click(function() {
    $('#carouselExampleFade').carousel('next');
});

$('.dropdown-toggle').dropdown();

document.getElementById('btnSubmit').onclick = function() {
    var name = document.getElementById('inputName');
    var email = document.getElementById('exampleInputEmail1');
    var message = document.getElementById('exampleFormControlTextarea1');
    var text = '';
    name.classList.remove('is-invalid');
    email.classList.remove('is-invalid');
    message.classList.remove('is-invalid');

    if (name.value.length < 2 || email.value.length < 2 || message.value.length < 2 || email.value.indexOf('@') < 0) {
        if (name.value.length < 2) {
            name.classList.add('is-invalid');
        }
        if (message.value.length < 2) {
            message.classList.add('is-invalid');
        }
        if (email.value.length < 2 || email.value.indexOf('@') < 0) {
            email.classList.add('is-invalid');
        }
    } else {
        text += 'Доброго дня, ' + name.value + '! \n Ми зв\'яжемося з вами найближчим часом. Відповідь надішлемо на Вашу поштову скриньку: ' + email.value + '.';
        name.value = '';
        email.value = '';
        message.value = '';
        alert(text);
    }
};