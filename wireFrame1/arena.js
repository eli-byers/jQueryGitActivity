$(document).ready(function(){

    $("#beach").hover(function(){
        $("#wrapper").css("background-image", "url(beach.jpg)");
    })

    $("#planet").hover(function(){
        $("#wrapper").css("background-image", "url(earth.jpg)");
    })

    $("#dojo").hover(function(){
        $("#wrapper").css("background-image", "url(dojo.jpg)");
    })

    $("#forest").hover(function(){
        $("#wrapper").css("background-image", "url(forest.jpg)");
    })

    $("#matrix").hover(function(){
        $("#wrapper").css("background-image", "url(matrix.jpg)");
    })

    $("#snow").hover(function(){
        $("#wrapper").css("background-image", "url(snow.jpg)");
    })

    $(".selectbtn").click(function(){
        $(".tog").toggle(800);
    })

    $("#select1").change(function(){
        var value1 = $("#select1").val();
        $("#fighters1").html('<img src="' + value1 + '.png" alt="Donny" id="left-fighter">');
    })

    $("#select2").change(function(){
        var value2 = $("#select2").val();
        $("#fighters2").html('<img src="' + value2 + '.png" alt="Donny" id="right-fighter">');
    })



    // $('.button').click(function(){
    //     $(this).show('img');
    // }).hover(function() {
    //     $(this).show('img');
    // });
    // $('#button').on('click hover', function () {
        // Do something for both
    // });
    // $('.button').bind("mouseover", function(){
    //     var color  = $(this).css("background-color");

    //     $(this).css("background", "#380606");

    //     $(this).bind("mouseout", function(){
    //         $(this).css("background", color);
    //     })    
});
