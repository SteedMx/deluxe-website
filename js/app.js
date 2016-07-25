$(document).foundation();

$(document).ready(function(){       
    var scroll_start = 0;
    var startchange = $('#startchange');
    var offset = startchange.offset();
    if ($(window).width() >= 1019){  
        if (startchange.length){
            $(document).scroll(function() { 
                scroll_start = $(this).scrollTop();
                if(scroll_start > offset.top) {
                    $(".top-bar").css('background-color', 'rgba(55, 42, 69, 0.9)');
                    $(".top-bar a").css('color', '#F0F0F0');

                } else {
                    $('.top-bar').css('background-color', 'transparent');
                    $(".top-bar a").css('color', '#FFF');

                }
            });

        }
    } else {
        $('.top-bar').css('background-color', 'rgba(55, 42, 69, 0.9)');
    }
    if ($(window).width() <= 640){
        $('.top-bar ul').removeClass('text-center');
        
    } else {
        $('.top-bar ul').addClass('text-center');   
    }
});
