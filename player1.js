import { ctx,gravity, canvas} from './main.js';
import { keys } from './move.js';


export let runLeftImg = new Image();
runLeftImg.src = '/img/spriteMarioRunLeft.png'
export let runRightImg = new Image();
runRightImg.src = '/img/spriteMarioRunRight.png'
export let standLeftImg = new Image();
standLeftImg.src = '/img/spriteMarioStandLeft.png'
export let standRightImg = new Image();
standRightImg.src = 'img/spriteMarioStandRight.png';
export let jumpRightImg = new Image();
jumpRightImg.src = 'img/spriteMarioJumpRight.png';
export let jumpLeftImg = new Image();
jumpLeftImg.src = 'img/spriteMarioJumpLeft.png';

export class Player{ 
    constructor() { 

        this.scale = 0.3;
        this.width = 398 * this.scale;
        this.height = 353 * this.scale;
        this.position = {
            x: 100,
            y:0
        }


        // only in part 3 gravity
        this.speed = {
            x: 0,
            // y:1
             y:0
        }

        this.img = standRightImg;
        this.frame = 0;
        this.cropWidth = 398 ;
    }


    draw() {
        // ctx.fillStyle = 'red';
        // ctx.fillRect(this.position.x, this.position.y, this.width, this.height);

        ctx.drawImage(
            this.img,
            // 0 , 0, 177, 400,
            // זה כדי לחתוך
            this.cropWidth * this.frame , 0, this.cropWidth , 353,
            this.position.x, this.position.y, this.width, this.height);
    }


    // only in part 3 gravity
    update() {  
        // console.log('this.img :', this.img )
        this.frame++;
        if (this.frame > 58 &&
            (!keys.right.pressed || !keys.left.pressed)
            // && this.speed.y === 0 
            //   && !keys.up.pressed 
        ) {
            this.frame=0
        }else if (this.frame > 28 &&
            (keys.right.pressed || keys.left.pressed)
            // && this.speed.y === 0 
            //   && !keys.up.pressed 
        ) {
            this.frame = 0;
        }
        // else if (keys.up.pressed || this.speed.y != 0) {
        //     this.img = jumpRightImg;
        //     this.frame = 0;
        // }
        
        // console.log('this.speed.y:', this.speed.y)



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

