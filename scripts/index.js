var player = new sprite(
    60,
    50,
    0,
    20,
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
        shoots.map((s)=>{
            s.draw()
            s.update()
            if(s.x>2000 || s.x<-2000 || s.y>2000 || s.y<0){
                shoots.shift()
            }

        })
        console.log(shoots);

        
        
    } catch (error) {
    }

    window.requestAnimationFrame(game)
}
window.requestAnimationFrame(game)
console.log('script is loaded');
