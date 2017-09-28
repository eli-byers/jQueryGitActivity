$(document).ready(function(){
    $('.btn1').mouseenter(function() {
        $('#wrapper').css("background-image", 'url(' + "images/beach.jpg" + ')');
    });

    $('.btn2').mouseenter(function() {
        $('#wrapper').css("background-image", 'url(' + "images/earth.jpg" + ')');
    });

    $('.btn3').mouseenter(function() {
        $('#wrapper').css("background-image", 'url(' + "images/dojo.jpg" + ')');
    });

    $('.btn4').mouseenter(function() {
        $('#wrapper').css("background-image", 'url(' + "images/forest.jpg" + ')');
    });

    $('.btn5').mouseenter(function() {
        $('#wrapper').css("background-image", 'url(' + "images/matrix.jpg" + ')');
    });

    $('.btn6').mouseenter(function() {
        $('#wrapper').css("background-image", 'url(' + "images/snow.jpg" + ')');
    });

    $('.btn1').click(function() {
        $('#wrapper').css("background-image", 'url(' + "images/beach.jpg" + ')');
        $('#wrapper div').removeClass("minibox");
        $('#wrapper div:first').addClass("hidden");
        $('#wrapper div:nth-child(2)').removeClass("hidden");
        $('.show').addClass("minibox");
    });

    $('.btn2').click(function() {
        $('#wrapper').css("background-image", 'url(' + "images/earth.jpg" + ')');
        $('#wrapper div').removeClass("minibox");
        $('#wrapper div:first').addClass("hidden");
        $('#wrapper div:nth-child(2)').removeClass("hidden");
        $('.show').addClass("minibox");
    });

    $('.btn3').click(function() {
        $('#wrapper').css("background-image", 'url(' + "images/dojo.jpg" + ')');
        $('#wrapper div').removeClass("minibox");
        $('#wrapper div:first').addClass("hidden");
        $('#wrapper div:nth-child(2)').removeClass("hidden");
        $('.show').addClass("minibox");
    });

    $('.btn4').click(function() {
        $('#wrapper').css("background-image", 'url(' + "images/forest.jpg" + ')');
        $('#wrapper div').removeClass("minibox");
        $('#wrapper div:first').addClass("hidden");
        $('#wrapper div:nth-child(2)').removeClass("hidden");
        $('.show').addClass("minibox");
    });

    $('.btn5').click(function() {
        $('#wrapper').css("background-image", 'url(' + "images/matrix.jpg" + ')');
        $('#wrapper div').removeClass("minibox");
        $('#wrapper div:first').addClass("hidden");
        $('#wrapper div:nth-child(2)').removeClass("hidden");
        $('.show').addClass("minibox");
    });

    $('.btn6').click(function() {
        $('#wrapper').css("background-image", 'url(' + "images/snow.jpg" + ')');
        $('#wrapper div').removeClass("minibox");
        $('#wrapper div:first').addClass("hidden");
        $('#wrapper div:nth-child(2)').removeClass("hidden");
        $('.show').addClass("minibox");
    });

    $(".left").change(function() {
        $(".charleft").css("background-image", "url('" + $(this).val() + "')");
    });

    $(".right").change(function() {
        $(".charright").css("background-image", "url('" + $(this).val() + "')");
    });

});