class sprite{
    constructor(x, y, rad, type){
        if(type==='player'){
            this.type  = type
            this.x   = x
            this.y   = y
            this.rad   = rad
            this.heal  = 100
            this.color = '#28537d'
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
        ctx.rotate(1,5708);
        ctx.fillStyle='#f5dbdb'
        ctx.fillRect(this.x /-2, this.y /-2, 10, 40);
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