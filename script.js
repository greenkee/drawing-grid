var rows = 16;
var cols = 16;
var borderSize = 1;
var currColor = 'green';
$(document).ready(function(){
    redrawGrid(rows, cols);

    $(".ColorBox").click(function(){
        color = ( $(this).css('background-color'));
        currColor = color;
        setDrawColor(currColor);
    });

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

    setDrawColor(currColor);
}

function setDrawColor(color){
    $('.GridSquare').hover(
        function(){
            $(this).css("background-color",color);
        }
    );
}
