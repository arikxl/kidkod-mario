import { ctx,gravity, canvas} from './main.js';


export class Player{ 
    constructor() { 
        this.width = 50;
        this.height = 50;
        this.position = {
            x: 100,
            y:100
        }


        // only in part 3 gravity
        this.speed = {
            x: 0,
            // y:1
             y:0
        }
    }


    draw() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }


    // only in part 3 gravity
    update() {  
        this.draw();
        this.position.y += this.speed.y;

        // only in part 4 movement
        this.position.x += this.speed.x


        // this.speed.y += gravity;
        if (this.position.y+ this.height + this.speed.y <= canvas.height) {   
            this.speed.y += gravity;


         // זה משאיר את השחקן על הקנבס במקרה שהוא נופל.  מוחקים את זה בתנאי ההפסד
        // } else {
        //     this.speed.y =0;
            
        
        }
    }

}


// export let player = new Player();

// only in part 2 player
// player.draw();
// delete in part 3 gravity and create the animate function

