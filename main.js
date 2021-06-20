
let x = 60 ;
let xPx = x + "px";
$("#fish2").hide();
function eventHandler(event) {
    
    if(event.keyCode == 39){
        if(x == 430){
            x = 430
            xPx = x + "px";
            document.getElementById("status").innerHTML = "Status: You are going as far as you can go to you right<br/> Click the left arrow to go left!";
        }else{
            x += 10;
            xPx = x + "px";
            $("#box").css("left", xPx)
            document.getElementById("fish2").visibility = "hidden";
            $("#fish2").hide();
            $("#fish").show();
            document.getElementById("status").innerHTML = "Status: All Good!";
        }
    }else if(event.keyCode == 37){
        if( x == 10){
            x = 10
            xPx = x + "px";
            document.getElementById("status").innerHTML = "Status: You are going as far as you can go to you left<br/> Click the right arrow to go right!";
        }else{
            x -= 10;
            xPx = x + "px";
            $("#box").css("left", xPx)
            $("#fish").hide(); 
            $("#fish2").show();
            document.getElementById("status").innerHTML = "Status: All Good!";
        }
    }else{
        return
    }
}
$("body").keydown(eventHandler);

