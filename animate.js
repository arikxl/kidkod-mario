import { Player, player,} from './player.js';
import { ctx, canvas} from './main.js';
import { keys } from './move.js';
import { platform } from './bgs.js';



function animate() { 
    requestAnimationFrame(animate);
    // console.log('test')
    // add after you see red squre animation strange
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
    
    
    player.update();
    platform.draw();

    // only in part 4 movment
    if (keys.right.pressed) {
        player.speed.x = 10;
    } else if (keys.left.pressed) {
        player.speed.x = -10;
    }else {
        
        player.speed.x = 0;
    }

    // CHECK COLITION
    if (
        player.position.y + player.height <= platform.position.y &&
        player.position.y + player.height + player.speed.y >= platform.position.y &&
        player.position.x + player.width >= platform.position.x &&
        player.position.x <= platform.position.x + platform.width
    ) {
        player.speed.y =0
    }
    
}


animate();