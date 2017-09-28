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
        $(".selectbtn").hide();
        $(".tog").toggle();
        $("#selectArena").html("Select Player")
    })

    $("#select1").change(function(){
        var value1 = $("#select1").val();
        $("#fighters1").html('<img class="fighters1" src="' + value1 + '.png">');
    })

    $("#select2").change(function(){
        var value2 = $("#select2").val();
        $("#fighters2").html('<img class="fighters2" src="' + value2 + '.png">');
    })

});
