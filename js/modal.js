//Close Modal and Stop Video

$(function(){
    $('.close').click(function(){      
        $('iframe').attr('src', $('iframe').attr('src'));
    });
});