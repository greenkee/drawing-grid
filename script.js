var rows = 16;
var cols = 16;
$(document).ready(function(){
    for (i = 0; i < rows; i++){
        var row = $('<div>', {class:"GridRow"});
        $('#frame').append(row);
    }
    for (i = 0; i< cols; i++){
        var box = $('<div>', {class:"GridSquare"});
        $('.GridRow').append(box);
    }
    $('.GridSquare').hover(
        function(){
            $(this).css("background-color",'green');
        }
    );
    $('#frame').dblclick(function(){
        var yes = confirm("Clear Drawing?");
        if(yes){

            $('.GridSquare').css('background-color', 'white');
        }
    });
});
