$(document).ready(function () {

    if($('.field1.current')[0]){
        $('#prev').hide();
    }

    $('#next').click(function () {
       $('.current').removeClass('current').hide().next().show().addClass('current');
        $('#progress_bar li.active').next().addClass('active'); 
        $('#prev').show();
    });



    $('#prev').click(function(){
        $('.current').removeClass('current').hide().prev().show().addClass('current');
        $('#progress_bar li.active').removeClass('active').prev().addClass('active');
        if($('.field1.current')[0]){
            $('#prev').hide();
        }
    });
});