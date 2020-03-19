$(window).on("scroll", function() {
    if ($(this).scrollTop() > 100) {
        $('nav').addClass('fixed_nav');
        $('.top').addClass('show'); 
    } else {
      $('nav').removeClass('fixed_nav');
      $('.top').removeClass('show'); 
    }
});

$(".show").on("click", function () {
    if($(".password").attr("type") == "password"){
        $(".password").attr("type", "text");
    }
    else{
        $(".password").attr("type", "password");
    }
});

  
jQuery(".owl-carousel").owlCarousel({
    dots:true,
    center: true,
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay: true,
    autoplayTimeout: 5000,
    items: 3,
});