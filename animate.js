import { player,} from './player.js';
import { ctx, canvas} from './main.js';



function animate() { 
    requestAnimationFrame(animate);
    // console.log('test')
    // add after you see red squre animation strange
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
    
    
    player.update();
    
}


animate();