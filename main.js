let up = 0;
let down = 0;
let right = 0;
let left = 0;

function eventHandler(event) {
    if(event.keyCode == 39){
        right ++;
        document.getElementById("right").innerHTML = `You have pressed the right key ${right} times <br/>`
    }else if(event.keyCode == 37){
        left ++;
        document.getElementById("left").innerHTML = `You have pressed the left key ${left} times <br/>`
    }else if(event.keyCode == 32 || event.keyCode == 38){
        up ++;
        document.getElementById("up").innerHTML = `You have pressed the up/space key ${up} times<br/>`
    }else if(event.keyCode == 40){
        down ++;
        document.getElementById("down").innerHTML = `You have pressed the down key ${down} times<br/>`
    }else{
    }
}
$("body").keydown(eventHandler);

