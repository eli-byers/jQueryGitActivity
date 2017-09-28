$(document).ready(function(){
    $("#button1").hover(function(){
        $(".wrapper").css("background-image", "url(beach.jpg)");
    });
    $("#button2").hover(function(){
        $(".wrapper").css("background-image", "url(earth.jpg)");
    });
    $("#button3").hover(function(){
        $(".wrapper").css("background-image", "url(dojo.jpg)");
    });
    $("#button4").hover(function(){
        $(".wrapper").css("background-image", "url(forest.jpg)");
    });
    $("#button5").hover(function(){
        $(".wrapper").css("background-image", "url(matrix.jpg)");
    });
    $("#button6").hover(function(){
        $(".wrapper").css("background-image", "url(snow.jpg)");
    });
    $("#button1").click(function(){
        $(".arena").html('<p id="orangetext">Select Player</p><select id="select1"><option value="mikey">Mikey</option><option value="raphael">Raphael</option><option value="donny">Donny</option><option value="leo">Leo</option></select><select id="select2"><option value="mikey">Mikey</option><option value="raphael">Raphael</option><option value="donny">Donny</option><option value="leo">Leo</option></select>');
    });
    $("#button2").click(function(){
        $(".arena").html('<p id="orangetext">Select Player</p><select id="select1"><option value="mikey">Mikey</option><option value="raphael">Raphael</option><option value="donny">Donny</option><option value="leo">Leo</option></select><select id="select2"><option value="mikey">Mikey</option><option value="raphael">Raphael</option><option value="donny">Donny</option><option value="leo">Leo</option></select>');
    });
    $("#button3").click(function(){
        $(".arena").html('<p id="orangetext">Select Player</p><select id="select1"><option value="mikey">Mikey</option><option value="raphael">Raphael</option><option value="donny">Donny</option><option value="leo">Leo</option></select><select id="select2"><option value="mikey">Mikey</option><option value="raphael">Raphael</option><option value="donny">Donny</option><option value="leo">Leo</option></select>');
    });
    $("#button4").click(function(){
        $(".arena").html('<p id="orangetext">Select Player</p><select id="select1"><option value="mikey">Mikey</option><option value="raphael">Raphael</option><option value="donny">Donny</option><option value="leo">Leo</option></select><select id="select2"><option value="mikey">Mikey</option><option value="raphael">Raphael</option><option value="donny">Donny</option><option value="leo">Leo</option></select>');
    });
    $("#button5").click(function(){
        $(".arena").html('<p id="orangetext">Select Player</p><select id="select1"><option value="mikey">Mikey</option><option value="raphael">Raphael</option><option value="donny">Donny</option><option value="leo">Leo</option></select><select id="select2"><option value="mikey">Mikey</option><option value="raphael">Raphael</option><option value="donny">Donny</option><option value="leo">Leo</option></select>');
    });
    $("#button6").click(function(){
        $(".arena").html('<p id="orangetext">Select Player</p><select id="select1"><option value="mikey">Mikey</option><option value="raphael">Raphael</option><option value="donny">Donny</option><option value="leo">Leo</option></select><select id="select2"><option value="mikey">Mikey</option><option value="raphael">Raphael</option><option value="donny">Donny</option><option value="leo">Leo</option></select>');
    });
    $(document).on('change', '#select1', function(){
        var image = $(this).val() + ".png";
        $("#left").attr("src", image);
    //     $("#left").css('background-image', "url('" + $(this).val() + "')");
    });
    $(document).on('change', '#select2', function(){
         var image = $(this).val() + ".png";
        $("#right").attr("src", image);
    // $('#select1').change(function(){
    // $("#right").css('background-image', "url('" + $(this).val() + "')")
    });
});