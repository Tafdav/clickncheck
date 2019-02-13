$(document).ready(function () {
    $('#button').click(function () {
       $('.current').removeClass('current').hide().next().show().addClass('current');
        $('#progress_bar li.active').next().addClass('active');
    });


    $('#prev').click(function(){
        $('.current').removeClass('current').hide().prev().show().addClass('current');
        $('#progress_bar li.active').removeClass('active').prev().addClass('active');
    });
});