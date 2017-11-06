$(document).ready(function() {
    $("#my_audio").get(0).play();
});

$(function() {
    
               $("#slideshow > div:gt(0)").hide();
    
                setInterval(function() { 
                    $('#slideshow > div:first')
                    .fadeOut()
                    .next()
                    .fadeIn(4000)
                    .end()
                    .appendTo('#slideshow');
                }, 7000);
    
            });