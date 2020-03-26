$(window).on("scroll", function() {
    if ($(this).scrollTop() > 100) {
        $('nav').addClass('fixed_nav');
        $('.top').addClass('show'); 
    } else {
      $('nav').removeClass('fixed_nav');
      $('.top').removeClass('show'); 
    }
});


$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      autoplay: true,
      autoplayTimeout: 4000,
      animateOut: 'fadeOut',
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 3
        }
      }
    })
});
 
$(".change").on("click", function () {
    if($(".password").attr("type") == "password"){
        $(".password").attr("type", "text");
    }
    else{
        $(".password").attr("type", "password");
    }
});

$(".open_btn").on("click", function (){
    $(".mobile_nav").toggleClass("slide");
});

 