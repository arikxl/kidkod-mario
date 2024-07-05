import { ctx, canvas} from './main.js';


const platformImg = new Image();
platformImg.src = '/img/platform.png'
// console.log('platform:', platformImg.src)
const bgImg = new Image();
bgImg.src = '/img/background.png'
const hillsImg = new Image();
hillsImg.src = '/img/hills.png'
const smallImg = new Image();
smallImg.src = 'img/platformSmallTall.png';

class Platform{
    constructor(x,y){
    // constructor(x,y, img){
        // this.img = img
        // this.width = img.width
        // this.height =img.height
        this.height = 80;
        this.width = 200;
        this.position={
            x: x,
            y: y,
        }
    }

    // COLITION IS IN ANIMATE FNCTION

    draw() {
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
        // ctx.drawImage(this.img, this.position.x, this.position.y, this.width, this.height)
        
    }
}

export const platform = new Platform(200,canvas.height-200)
// let platforms = [new Platform(0, 100)];
