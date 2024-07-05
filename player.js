import { ctx,} from './main.js';


export class Player{ 
    constructor() { 
        this.width = 50;
        this.height = 50;
        this.position = {
            x: 100,
            y:100
        }
    }


    draw() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

}


const player = new Player();
player.draw();