class sprite{
    constructor(x, y, rot, rad, type){
        if(type==='player'){
            this.type  = type
            this.x   = x
            this.y   = y
            this.rot = rot
            this.rad   = rad
            this.heal  = 100
            this.color = '#28537d'
            this.speed = 2
        }else if(type==='villian'){
            this.type  = type
            this.x   = x
            this.y   = y
            this.rad   = rad
            this.heal  = 100
            this.color = '#7d2828'
        }
    }
    draw(){
        ctx.save()
        ctx.beginPath();
        ctx.translate(this.x, this.y);
        ctx.fillStyle='#f5dbdb'
        ctx.rotate(this.rot);
        ctx.fillRect(-10, 0, 20, 40);
        ctx.closePath();
        ctx.restore();

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.rad, 0, Math.PI*2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}
class shoot{
    constructor(x, y){
        this.x = x
        this.y = y
        this.x2 = Math.sin(rotate)
        this.y2 = Math.cos(rotate)
        this.rad = 10
        this.color = '#ff5733'
        this.velocity = 10
    }
    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.rad, 0, Math.PI*2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
    update(){
        this.x += this.x2*10
        this.y += this.y2*10
    }


}
console.log('sprite is loaded');