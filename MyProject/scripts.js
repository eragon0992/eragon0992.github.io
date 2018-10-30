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

var checked = false;
$('#defaultCheck1').click(function() {
    var button_create = document.getElementById("button-create");
    checked = !checked;
    if (checked) {
        $('#button-create').removeClass('d-none');
    } else {
        $('#button-create').addClass('d-none');
    }
});

$("#button-create").click(function() {
    var ctx = document.getElementById('canvas-id').getContext('2d');
    ctx.clearRect(0, 0, 600, 400);
    ctx.fillStyle = "#EFEFFF";
    ctx.fillRect(0, 0, 600, 400);
    $(".custom-file-label").html("");
    $("input:file").val("");
    $("#student-photo-row").addClass("d-none");
});


$("input:file").change(function() {
    var photo = $(this).val();
    var ctx = document.getElementById('canvas-id').getContext('2d');
    var img_photo = new Image();
    photo = photo.replace("C:\\fakepath\\", "");
    img_photo.src = "id/" + photo;
    $(".custom-file-label").html(photo);
    img_photo.onload = function() {
        ctx.drawImage(img_photo, 0, 0, 300, 400);
    };
    $('#student-photo-row').removeClass("d-none");

});

$("#btn-save").click(function() {
    var ctx = document.getElementById('canvas-id').getContext('2d');
    var img_title = new Image();
    var img_logo = new Image();
    img_logo.src = "id/logo.png";
    img_title.src = "id/title.png";
    var name = $('#name').val();
    var group = $('#group').val();
    img_title.onload = function() {
        ctx.drawImage(img_title, 300, 0, 300, 100);
        ctx.fillStyle = "#00F";
        ctx.strokeStyle = "#F00";
        ctx.font = "20pt Calibri";
        ctx.textAlign = "center";
        ctx.fillText(name, 450, 110);
        ctx.fillText(group + " клас", 450, 140);
    };

    img_logo.onload = function() {
        ctx.drawImage(img_logo, 0, 250, 150, 150);
    }

    var options = {
        render: "image",
        ecLevel: "H",
        minVersion: 1,

        fill: "#333333",
        background: "#ffffff",

        text: name + "\n" + group + " клас",
        size: 200,
        radius: 0,
        quiet: 1,

        mode: 0,

        mSize: 10 * 0.01,
        mPosX: 50 * 0.01,
        mPosY: 50 * 0.01,

        label: "МГ41",
        fontname: "Calibri",
        fontcolor: "#000000",
    };

    //ctx.drowImage(qrcode(options), 200, 200);

    $('#canvas-id').empty().qrcode(options);

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