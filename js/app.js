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

        $(".number").animationCounter({
            start: 0,
            end: 200,
            step: 10,
            delay: 50,
            txt:  " +"
        });

        $(".num_alt").animationCounter({
            start: 0,
            end: 60,
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

$(".open_btn").on("click", function (){
    $(".mobile_nav").fadeIn("4000", function (){
        $(".mobile_nav").css("display", "flex");
    }); 
});

$(".close_btn").on("click", function (){
    $(".mobile_nav").fadeOut("3000", function (){
        $(".mobile_nav").css("display", "none");
    });
})
  
  
