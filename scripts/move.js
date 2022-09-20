var rightPressed   = false
var leftPressed    = false
var upPressed      = false
var downPressed    = false
var shooting       = false

addEventListener('keydown', keyDownHandler, false)
addEventListener('keyup', keyUpHandler, false)

var mouse_x = 0
var mouse_y = 0

c.addEventListener('mousemove', (event) => {
    mouse_x = event.clientX-264
    mouse_y = event.clientY-7

});


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
 
    // state.mouse_pos.m_a = Math.atan2(mouse_y-state.player_pos.y, mouse_x-state.player_pos.x)/Math.PI*18

}

console.log('move is loaded');