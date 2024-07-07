import {  player,} from './player.js';
import { ctx, canvas} from './main.js';
import { keys } from './move.js';
import {  bg, hills, hills1, platforms } from './bgs.js';

let scrollX = 0;


function animate() { 
    requestAnimationFrame(animate);
    // console.log('test')
    // add after you see red squre animation strange
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
    
    bg.draw();
    hills.draw();
    
    // platform.draw();
    platforms.forEach(p => {
        p.draw()
    })

    
    // תמיד שהפלאייר יהיה אחרון כדי שלא יהיה מאחורי הפלטפורמות
    player.update();

    //  only in part 4 movment
    // if (keys.right.pressed) {
    //     player.speed.x = 5;
    // } else if (keys.left.pressed) {
    //     player.speed.x = -5;
    // }else {
    //     player.speed.x = 0;
    // }

        
    // only in part 6 move background
    if (keys.right.pressed && player.position.x  < 400) {
        player.speed.x = 5;
    } else if (keys.left.pressed && player.position.x >100) {
        player.speed.x = -5;
    }else {
        player.speed.x = 0;
        
        if (keys.right.pressed) {
            platforms.forEach(p => {
                p.position.x -= 5;
            })
            scrollX += 5;
            hills.position.x -=3
        } else if (keys.left.pressed) {
            platforms.forEach(p => {
                p.position.x += 5;
            })
            scrollX -= 5;
            hills.position.x +=3
        }
    }



    // CHECK COLITION
    // if (
    //     player.position.y + player.height <= platform.position.y &&
    //     player.position.y + player.height + player.speed.y >= platform.position.y &&
    //     player.position.x + player.width >= platform.position.x &&
    //     player.position.x <= platform.position.x + platform.width
    // ) {
    //     player.speed.y =0
    // }

    // COLITION FOR MULTI PLATFORMS
    platforms.forEach(p => {
        if (
            player.position.y + player.height <= p.position.y &&
            player.position.y + player.height + player.speed.y >= p.position.y &&
            player.position.x + player.width >= p.position.x &&
            player.position.x <= p.position.x + p.width
        ) {
            player.speed.y =0
        }
    })


    // WIN CONDITION
    if (scrollX > 2000) {
        alert('you win!')
        // return
    }
    
}


animate();