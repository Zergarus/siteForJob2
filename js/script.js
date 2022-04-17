$(document).ready(function(){
    $('.owl-one').owlCarousel({
        items: 4,
        loop:true,
        margin:10,
        nav:true,
        navText : ["<i class='arrow-left'><img src='images/next 24.png' /></i>","<i class='arrow-right'><img src='images/next 23.png' /></i>"]
    });

    $('.owl-two').owlCarousel({
        items: 6,
        loop:true,
        margin:10,
        nav:true,
        navText : ["<i class='arrow-left'><img src='images/next 24.png' /></i>","<i class='arrow-right'><img src='images/next 23.png' /></i>"]
    });
});