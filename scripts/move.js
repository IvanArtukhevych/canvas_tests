var rightPressed   = false
var leftPressed    = false
var upPressed      = false
var downPressed    = false
var shooting       = false
var mousePose      = {
    x:0,
    y:0
}

addEventListener('keydown', keyDownHandler, false)
addEventListener('keyup', keyUpHandler, false)
addEventListener('mousemove', (e)=>{
        mousePose.x = e.clientX-((window.innerWidth-c.clientWidth)/2),
        mousePose.y = e.clientY-10
})







function keyDownHandler(e) {
    if(e.keyCode == '68'){
        rightPressed = true
    }
    else if(e.keyCode == '65'){
        leftPressed = true
    }
    else if(e.keyCode == '87'){
        upPressed = true
    }
    else if(e.keyCode == '83'){
        downPressed = true
    }
}
function keyUpHandler(e) {
    if(e.keyCode == '68'){
        rightPressed = false
    }
    else if(e.keyCode == '65'){
        leftPressed = false
    }
    else if(e.keyCode == '87'){
        upPressed = false
    }
    else if(e.keyCode == '83'){
        downPressed = false
    }
}

function move_detector(obj) {
    if(rightPressed){
        obj.x++;}
    else if(leftPressed){
        obj.x--;}
    else if(upPressed){
        obj.y--;}
    else if(downPressed){
    obj.y++;}

    let r = Math.atan2(mousePose.x-obj.x,  mousePose.y-obj.y)
    obj.rot = -r
}

console.log('move is loaded');