$(document).ready(function(){
    $('#beach').hover(function(){
        $('#wrapper').css('background-image','url(img/beach.jpg)')
    });
    $('#planet').hover(function(){
        $('#wrapper').css('background-image','url(img/earth.jpg)')
    });
    $('#dojo').hover(function(){
        $('#wrapper').css('background-image','url(img/dojo.jpg)')
    });
    $('#forest').hover(function(){
        $('#wrapper').css('background-image','url(img/forest.jpg)')
    });
    $('#matrix').hover(function(){
        $('#wrapper').css('background-image','url(img/matrix.jpg)')
    });
    $('#snow').hover(function(){
        $('#wrapper').css('background-image','url(img/snow.jpg)')
    });


    $('.arena').click(function(){
        $('.greybox').toggleClass('.selectplayer')
        $('.selectPlayer').toggle();
        $('.greybox').toggle();
    });


    $('#selectninjaL').change(function(){
        var val1 = $('#selectninjaL').val();
        $('#ninjaleft').html('<img src="img/' + val1 + '.png" alt=left">');
    });
    $('#selectninjaR').change(function(){
        var val2 = $('#selectninjaR').val();
        $('#ninjaright').html('<img src="img/' + val2 + '.png" alt="right">');
    });

});