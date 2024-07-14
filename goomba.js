import { ctx, canvas, gravity} from './main.js';

export let goombaImg = new Image();
goombaImg.src = '/img/spriteGoomba.png'

export class Goomba { 
    constructor(x,y, speedX, limit ) {
        this.width = 43.33;
        this.height = 50;
        this.position = {
            x:x,
            y:y
        }
        this.speed = {
            x: speedX,
            y:0
        }

        this.frame = 0;
        this.cropWidth = 130 ;

        this.traveled = 0;
        this.limit = limit;
    }


    draw() {
        // ctx.fillStyle = 'red';
        // ctx.fillRect(this.position.x, this.position.y, this.width, this.height)


        ctx.drawImage(
            goombaImg,
            this.cropWidth * this.frame , 0, this.cropWidth , 150,
            this.position.x, this.position.y, this.width, this.height
        );
    }

    update() {
        this.frame++;
        this.draw();
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        if (this.frame > 58) {
            this.frame = 0
        }

        // move side to side
        this.traveled += Math.abs( this.speed.x);
        if (this.traveled > this.limit) {
            this.traveled = 0;
            this.speed.x = -this.speed.x;
        }

        // מעתיקים את זה מהשחקן בשביל כוח משיכה
        if (this.position.y + this.height + this.speed.y <= canvas.height) {
            this.speed.y += gravity;
        }
        // else {
        //     this.speed.y = 0;
        // }


    
    }

}