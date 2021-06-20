
let x = 60 ;
let xPx = x + "px";
$("#fish2").hide();
function eventHandler(event) {
    if(event.keyCode == 39){
        x += 10;
        xPx = x + "px";
        $("#box").css("left", xPx)
        document.getElementById("fish2").visibility = "hidden";
        $("#fish2").hide();
        $("#fish").show();
    }else if(event.keyCode == 37){
        x -= 10;
        xPx = x + "px";
        $("#box").css("left", xPx)
        $("#fish").hide();
        $("#fish2").show();
    }else{
    }
}
$("body").keydown(eventHandler);

