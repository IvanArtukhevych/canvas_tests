var player = new sprite(
    60,
    50,
    0,
    10,
    'player'
)
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
    }

    window.requestAnimationFrame(game)
}
window.requestAnimationFrame(game)
console.log('script is loaded');
