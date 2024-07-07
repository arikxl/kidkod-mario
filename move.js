// import { player} from './player.js';

import { player } from "./animate.js";


export const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    },
};

window.addEventListener('keydown', (e)=> {
    // console.log(e.code)

    switch (e.code) {
        case 'ArrowUp':
            // console.log('up')
            player.speed.y -=10;
            break;
        case 'ArrowDown':
            // console.log('down')
            break;
        case 'ArrowLeft':
            // console.log('left')
            // player.speed.x -= 10;
            keys.left.pressed = true;
            break;
            case 'ArrowRight':
                // console.log('right')
            // player.speed.x += 10;
            keys.right.pressed = true;

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
            break;
        case 'ArrowDown':
            // console.log('down')
            break;
        case 'ArrowLeft':
            // console.log('left')
            // player.speed.x = 0;
            keys.left.pressed = false;

            break;
            case 'ArrowRight':
            // console.log('right')
            // player.speed.x = 0;
            keys.right.pressed = false;

            break;
        default:
            break;
    }

})