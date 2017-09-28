$(document).ready(function() {
    $('button').mouseenter(function() {
        var image = "url('" + $(this).attr('my-background') + "')";
        $('.wrapper').css("background-image", image);
    });
    $('button').click(function() {
        var image = "url('" + $(this).attr('my-background') + "')";
        $('.wrapper').css("background-image", image);
        $('.wrapper div').removeClass("greybox");
        $('.wrapper div:first').addClass("hidden");
        $('.wrapper div:nth-child(2)').removeClass("hidden");
        $('.show').addClass("greybox");
    });
    $("select option:selected").each(function() {

    });
    /*   $('.select1').change(function() {
           var image = "url('" + $(this).attr('pic') + "')";
           $('.left').css("background-image", image);
       });
       $('.select2').change(function() {
           var image = "url('" + $("option:selected").attr('pic') + "')";
           $('.right').css("background-image", image); */
    $(".select1").change(function() {
        $(".left").css("background-image", "url('" + $(this).val() + "')");

    });
    $(".select2").change(function() {
        $(".right").css("background-image", "url('" + $(this).val() + "')");

    });
});



/*$( "li" ).hover(
    function() {
        $( this ).append( $( "<span> ***</span>" ) );
      }, function() {
        $( this ).find( "span:last" ).remove();
      }
    );
    */