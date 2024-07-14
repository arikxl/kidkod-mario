import { ctx, canvas, gravity} from './main.js';


export class Goomba { 
    constructor(x,y, speedX, speedY) {
        this.width = 50;
        this.height = 50;
        this.position = {
            x:x,
            y:y
        }
        this.speed = {
            x: speedX,
            y:speedY
        }

    }


    draw() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.draw();
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;


        // מעתיקים את זה מהשחקן בשביל כוח משיכה
        if (this.position.y + this.height + this.speed.y <= canvas.height) {
            this.speed.y += gravity;
        }
        // else {
        //     this.speed.y = 0;
        // }
    
    }

}