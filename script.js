console.log("connection secured");

// navbar scroll animation
$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});

// video placeholder
var video =
document.getElementById('video');
video.addEventListener('click', function(){
    video.play();
},false);

// It is very usually that user touch screen  ...



// hero curtain scroll
//$(document).scroll(function(){
//    if ($(document).scrollTop() > 320 ) {
//        $('.advised').addClass('active');
//        $('.overlay').addClass('activetwo');
//    }
//    
//     else {
//         $('.advised').removeClass('active');
//          $('.overlay').removeClass('activetwo');
//     }
// 
// });
  
