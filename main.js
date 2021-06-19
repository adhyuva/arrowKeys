
let x = 60 ;
let xPx = x + "px";
let y = 60 ;
let yPx = y + "px";
function eventHandler(event) {
    if(event.keyCode == 39){
        x += 10;
        xPx = x + "px";
        $("#box").css("left", xPx)

    }else if(event.keyCode == 37){
        x -= 10;
        xPx = x + "px";
        $("#box").css("left", xPx)
    }else if(event.keyCode == 32 || event.keyCode == 38){
        y -= 10;
        yPx = y + "px";
        $("#box").css("top", yPx)
    }else if(event.keyCode == 40){
        y += 10;
        yPx = y + "px";
        $("#box").css("top", yPx)
    }else{
    }
}
$("body").keydown(eventHandler);

