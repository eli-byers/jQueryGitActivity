 
$(document).ready(function(){


$(".btn1").hover(function() {
    $(wrapper).css("background-image", "url('dojojq/beach.jpg')");
})

$(".btn2").hover(function() {
    $(wrapper).css("background-image", "url('dojojq/earth.jpg')");
})

$(".btn3").hover(function() {
    $(wrapper).css("background-image", "url('dojojq/dojo.jpg')");
})


$(".btn4").hover(function() {
    $(wrapper).css("background-image", "url('dojojq/forest.jpg')");
})


$(".btn5").hover(function() {
    $(wrapper).css("background-image", "url('dojojq/matrix.jpg')");
})


$(".btn6").hover(function() {
    $(wrapper).css("background-image", "url('dojojq/snow.jpg')");
})


$(".btn1").click(function() {
    $(wrapper).css("background-image", "url('dojojq/beach.jpg')");
    $(".btn").hide();
    $(".2btn2").hide();
   

})

$(".btn2").click(function() {
    $(wrapper).css("background-image", "url('dojojq/earth.jpg')");
    $(".btn").hide();
    $(".2btn2").hide();

    
})

$(".btn3").click(function() {
    $(wrapper).css("background-image", "url('dojojq/dojo.jpg')");
    $(".btn").hide();
    $(".2btn2").hide();
})


$(".btn4").click(function() {
    $(wrapper).css("background-image", "url('dojojq/forest.jpg')");
    $(".btn").hide();
    $(".2btn2").hide();
})


$(".btn5").click(function() {
    $(wrapper).css("background-image", "url('dojojq/matrix.jpg')");
    $(".btn").hide();
    $(".2btn2").hide();
})


$(".btn6").click(function() {
    $(wrapper).css("background-image", "url('dojojq/snow.jpg')");
    $(".btn").hide();
    $(".2btn2").hide();
    
})

 $(".btn, .2btn2").click(function(){
        $(".word").html("<b>Select Players</b>");
        $("#dropdown, #dropdown1").toggle(true);
    })


$("#dropdown").change(function(){
        var value1 = $("#dropdown").val();
        $("#left").html('<img src="./dojojq/' + value1 + '.png">');
    })

    $("#dropdown1").change(function(){
        var value2 = $("#dropdown1").val();
        $("#right").html('<img src="./dojojq/' + value2 + '.png">');
    })
  
});