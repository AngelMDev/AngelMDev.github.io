pageHeight=window.innerHeight;
navOffset=parseFloat($("nav").css("height"))*2;
var skills=$("#skills").offset().top;
var education=$("#education").offset().top;
var experience=$("#experience").offset().top;
var portfolio=$("#portfolio").offset().top;
$("nav").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top-navOffset/2
    });
});

$(document).on("scroll", function(){
    scrollValue=$(window).scrollTop();
    if(scrollValue<skills-navOffset){
        $("#about_link").addClass('link-active');
        $("#skills_link").removeClass('link-active');
    }
    if(scrollValue>=skills-navOffset){
        $("#about_link").removeClass('link-active');
        $("#education_link").removeClass('link-active');
        $("#skills_link").addClass('link-active');
    }
    if(scrollValue>=education-navOffset){
        $("#skills_link").removeClass('link-active');
        $("#experience_link").removeClass('link-active');
        $("#education_link").addClass('link-active');
    }
    if(scrollValue>=experience-navOffset){
        $("#education_link").removeClass('link-active');
        $("#portfolio_link").removeClass('link-active');
        $("#experience_link").addClass('link-active');
    }
    if(scrollValue>=portfolio-navOffset){
        $("#experience_link").removeClass('link-active');
        $("#portfolio_link").addClass('link-active');
    }
});
