function pausecomp(millis) { 
    var date = new Date(); var curDate = null; 
    do { 
        curDate = new Date(); 
    } 
    while(curDate-date < millis); 
}
//move varibles
let x = 60;
let xPx = x + "px";
//falling varibles
let fall = 10;
let fallPx = fall + "px";
let fall2 = 10;
let fallPx2 = fall + "px";
let fall3 = 10;
let fallPx3 = fall + "px";
let fall4 = 10;
let fallPx4 = fall + "px";
let fall5 = 10;
let fallPx5 = fall + "px";
let weight = Math.ceil(Math.random() * 5)
let weight2 = Math.ceil(Math.random() * 5)
let weight3 = Math.ceil(Math.random() * 5)
let weight4 = Math.ceil(Math.random() * 5)
let weight5 = Math.ceil(Math.random() * 5)


//code for moving fish
$("#fish2").hide();
function eventHandler(event) {
    
    if(event.keyCode == 39){
        if(x == 430){
            x = 430
            xPx = x + "px";
            document.getElementById("status").innerHTML = "Warning: You are going as far as you can go to you right<br/> Click the left arrow to go left!";
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
        if(x == 10){
            x = 10;
            xPx = x + "px";
            document.getElementById("status").innerHTML = "Warning: You are going as far as you can go to you left<br/> Click the right arrow to go right.";

        }else{
            x -= 10;
            xPx = x + "px";
            $("#box").css("left", xPx)
            $("#fish").hide(); 
            $("#fish2").show();
            document.getElementById("status").innerHTML = "Status: All Good!";
        }
    }else{
        return;
    }
}
$("body").keydown(eventHandler);

// code for falling plastic
setInterval(function(){
    if(fall < 450){
    fall = fall + weight;
    fallPx = fall + "px";
    $("#plastic_1").css("top", fallPx)
    }else{
        $("#plastic_1").delay(2000);
        weight = Math.ceil(Math.random() * 5)
        fall = 0;
        fallPx = fall + "px";
        $("#plastic_1").delay(2000);
    }
}
,30)
setInterval(function(){
    if(fall2 < 400){
    fall2 = fall2 + weight2;
    fallPx2 = fall2 + "px";
    $("#plastic_2").css("top", fallPx2)
    }else{
        weight2 = Math.ceil(Math.random() * 5)
        fall2 = 0;
        fallPx2 = fall2 + "px";
    }
}
,30)
setInterval(function(){
    if(fall3 < 400){
    fall3 = fall3 + weight3;
    fallPx3 = fall3 + "px";
    $("#plastic_3").css("top", fallPx3)
    }else{
        weight3 = Math.ceil(Math.random() * 5)
        fall3 = 0;
        fallPx3 = fall3 + "px";
    }
}
,30)
setInterval(function(){
    if(fall4 < 400){
    fall4 = fall4 + weight4;
    fallPx4 = fall4 + "px";
    $("#plastic_4").css("top", fallPx4)
    }else{
        weight4 = Math.ceil(Math.random() * 5)
        fall4 = 0;
        fallPx4 = fall4 + "px";
    }
}
,30)
setInterval(function(){
    if(fall5 < 415){
    fall5 = fall5 + weight5;
    fallPx5 = fall5 + "px";
    $("#plastic_5").css("top", fallPx5)
    }else{
        weight5 = Math.ceil(Math.random() * 5)
        fall5 = 0;
        fallPx5 = fall5 + "px";
    }
}
,30)