$(function () {

    //$('#gallery .buttons .prev').slideImg();
    $('#gallery .buttons').slide({
        img: '#gallery .photos img',
        prev: '.prev',
        next: '.next',
        auto: false,
        rate: 50000
    });

    $('#gallery .buttons').carousel({
        img: '#gallery .photos2 img',
        prev: '.prev2',
        next: '.next2',
        auto: false,
        rate: 5000
    });

});




