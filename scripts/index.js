
var player = new sprite(
    60,
    50,
    10,
    'player'
)

// var villian = new sprite(
//     469,
//     730,
//     20,
//     'villian'
// )
// state.push(villian)
state.push(player)

function game(){
    ctx.clearRect(0, 0, c.width, c.height)
    ctx.globalAlpha = 0.9

    try {
        state.map((obj)=>{
            obj.draw()
            move_detector(obj)
        })
    } catch (error) {
        console.log('it didn t work');
    }

    window.requestAnimationFrame(game)
}
window.requestAnimationFrame(game)
console.log('script is loaded');
