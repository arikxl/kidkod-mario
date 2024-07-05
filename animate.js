import { player,} from './player.js';
import { ctx, canvas} from './main.js';
import { keys } from './move.js';



function animate() { 
    requestAnimationFrame(animate);
    // console.log('test')
    // add after you see red squre animation strange
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
    
    
    player.update();

    // only in part 4 movment
    if (keys.right.pressed) {
        player.speed.x = 10;
    } else if (keys.left.pressed) {
        player.speed.x = -10;
    }else {
        
        player.speed.x = 0;
    }

 
    
}


animate();