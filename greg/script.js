$(document).ready(function(){
    $("td").on({
        mouseenter: 
            function(e){     
                var button = $(this).children("input");
                var imgSrc = getImage(button.val());    
                $("#container").css("background-image", 'url(' + imgSrc + ')');
                $("#container").css("background-size", "cover");
            },
        mouseleave:
            function (){
                $("#container").css("background-image", '');
                $("#container").css("background-size", "");
            }
        }
    );

    $("td").click(
        function(e){     
            $("td").off("mouseenter");
            $("td").off("mouseleave");
            var button = $(this).children("input");
            var imgSrc = getImage(button.val());    
            $("#container").css("background-image", 'url(' + imgSrc + ')');
            $("#container").css("background-size", "cover");

            $("#selectArena > table").hide("fast");
            $("#selectPlayers").show("fast");

            $("#selectArena > h2").text("Select Players");            
        }
    );

    $("#player1").change(function(){
        var img = getPlayerImg($(this).val());
        /* Change player1Img src atrribute to display the image */
        $("#player1Img").attr("src",img);
    });

    $("#player2").change(function(){
        var img = getPlayerImg($(this).val());
        /* Change player1Img src atrribute to display the image */
        $("#player2Img").attr("src",img);
    });

    function getImage(val) {
        var img;
        switch (val) {
            case "beach":
                img = "dojo_arena_photos/beach.jpg";
                break;
            case "planet":
                img = "dojo_arena_photos/earth.jpg";
                break;
            case "dojo":
                img = "dojo_arena_photos/dojo.jpg";
                break;
            case "forest":
                img = "dojo_arena_photos/forest.jpg";
                break;
            case "matrix":
                img = "dojo_arena_photos/matrix.jpg";
                break;
            case "snow":
                img = "dojo_arena_photos/snow.jpg";
                break;
        }
        console.log("val :" + val + " img: " + img );
        return img;
    }

    function getPlayerImg(val) {
        var img;
        switch (val) {
            case "donny":
                img = "dojo_arena_photos/donny.png";
                break;
            case "leo":
                img = "dojo_arena_photos/leo.png";
                break;
            case "mikey":
                img = "dojo_arena_photos/mikey.png";
                break;
            case "raphael":
                img = "dojo_arena_photos/raphael.png";
                break;
            default:
                img = "";
        }
        console.log("val :" + val + " img: " + img );
        return img;
    }

});