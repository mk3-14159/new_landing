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
  
