$(function() {
    $("#make_grid").click(function makeGrid() {
        $("tr").remove();
        $("#pixel_canvas").css("background-color","white");
        const height = $("#input_height").val();
        const width = $("#input_width").val();
        const pixel = $("#input_pixel").val();
        for (var x = 1; x<=height ; x++){
            $("#pixel_canvas").append("<tr> </tr>");
            for (var i = 1; i<=width ; i++){
            $("tr").last().append("<td> </td>");
            };
        }
        $("tr").css("height",pixel);
        $("td").css("width",pixel);
    });
});

$(function() {
    $("#pixel_canvas").click(function (){
        let color = $("#colorPicker").val();
        $(event.target).css("background-color",color);
    });
});

$(function() {
    $("#pixel_canvas").click(function (){
        let color = $("#colorPicker").val();
        $(event.target).css("background-color",color);
    });
});
