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
        ctx.fillRect(-5, 0, 10, 30);
        ctx.closePath();
        ctx.restore();

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.rad, 0, Math.PI*2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}
console.log('sprite is loaded');