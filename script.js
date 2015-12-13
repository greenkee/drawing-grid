var rows = 20;
var cols = 20;
var borderSize = 1;
$(document).ready(function(){
    redrawGrid(rows, cols);


    $('html').dblclick(function(){
        var yes = confirm("Clear Drawing?");
        if(yes){

            $('.GridSquare').css('background-color', 'white');
        }
    });
    $('#resize').click(function(){
        var yes = confirm("Resize?");
        if(yes){
            rows = $("#rowBox").val();
            cols = $("#colBox").val();
            redrawGrid(rows, cols);
        }
    });
});
function redrawGrid(r, c){
    $('#frame').empty();
    console.log(r);
    for (i = 0; i < r; i++){
        var row = $('<div>', {class:"GridRow"});
        $('#frame').append(row);
    }
    for (i = 0; i< c; i++){
        var box = $('<div>', {class:"GridSquare"});
        $('.GridRow').append(box);
    }
    var frameHeight = $('#frame').height();
    $('.GridSquare').css('height', frameHeight/r  - borderSize*2);
    var frameWidth = $('#frame').width();
    $('.GridSquare').css('width', frameWidth/c - borderSize*2);
    $('.GridRow').css('height', frameHeight/r);

    $('.GridSquare').hover(
        function(){
            $(this).css("background-color",'green');
        }
    );
}
