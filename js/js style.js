//$(document).ready(function(){
//    $("a").on('click',function(event){
//        if(this.hash ! == ""){
//            event.preventDefault();
//            
//            var hash = this.hash;
//            
//            $('html, body'').animate({
//                scrollTop:$(hash).offset().top},800, function(){
//                window.location.hash=hash;
//                                 
//            });
//        }
//    });
//});


$(document).ready(function(){mixitup(".container")}),$(document).ready(function(){$(".sticky_s").waypoint(function(n){"down"==n?$("nav").addClass("sticky"):$("nav").removeClass("sticky")})}),$(document).ready(function(){$(".colseNav,.mobile_bar li a").click(function(){$(".mobile_bar").css({display:"none",transition:"all 5s"})}),$(".menu_bar_icon a").click(function(){$(".mobile_bar").css({display:"block",transition:"all 5s"})})});
