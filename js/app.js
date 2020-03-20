$(window).on("scroll", function() {
    if ($(this).scrollTop() > 100) {
        $('nav').addClass('fixed_nav');
        $('.top').addClass('show'); 
    } else {
      $('nav').removeClass('fixed_nav');
      $('.top').removeClass('show'); 
    }
});

        $(".demo").animationCounter({
            start: 0,
            end: 50,
            step: 2,
            delay: 50,
            txt:  " +"
        });

$(".show").on("click", function () {
    if($(".password").attr("type") == "password"){
        $(".password").attr("type", "text");
    }
    else{
        $(".password").attr("type", "password");
    }
});

  
