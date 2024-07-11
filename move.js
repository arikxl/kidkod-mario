// import { player} from './player.js';

import { player } from "./animate.js";
import { runLeftImg, runRightImg, standLeftImg, standRightImg } from "./player1.js";


export const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    },
    up: {
        pressed: false
    },
};

window.addEventListener('keydown', (e)=> {
    // console.log(e.code)

    switch (e.code) {
        case 'ArrowUp':
            // console.log('up')
            player.speed.y -= 10;
            keys.up.pressed = true;
            break;
        case 'ArrowDown':
            // console.log('down')
            break;
        case 'ArrowLeft':
            // console.log('left')
            // player.speed.x -= 10;
            keys.left.pressed = true;
            player.img = runLeftImg;
            // player.cropWidth = 341;
            // player.width = 128;
            break;
            case 'ArrowRight':
                // console.log('right')
            // player.speed.x += 10;
            keys.right.pressed = true;
            player.img = runRightImg;
            // player.cropWidth = 341;
            // player.width = 128;
            break;
        default:
            break;
    }

})



window.addEventListener('keyup', (e)=> {
    // console.log(e.code)

    switch (e.code) {
        case 'ArrowUp':
            // console.log('up')
            keys.up.pressed = false;
            break;
        case 'ArrowDown':
            // console.log('down')
            break;
        case 'ArrowLeft':
            // console.log('left')
            // player.speed.x = 0;
            keys.left.pressed = false;
            player.img = standLeftImg;
            // player.cropWidth = 177;
            //             player.width = 400;


            break;
            case 'ArrowRight':
            // console.log('right')
            // player.speed.x = 0;
            keys.right.pressed = false;
            player.img = standRightImg;
                        // player.cropWidth = 177;
                        // player.width = 400;

            break;
        default:
            break;
    }

})