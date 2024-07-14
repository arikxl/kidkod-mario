import {  Player} from './player1.js';
import { ctx, canvas} from './main.js';
import { keys } from './move.js';
import { bgImg, Bgs, hillsImg, Platform, platformImg, smallImg } from './bgs.js';
import { Goomba } from './goomba.js';
// import {  bg, bgImg, Bgs, hills,  platforms } from './bgs.js';


// מעבירים לפה את הכל בפונקציית הINIT
export let player;
export let bg;
export let hills;
export let platforms = [];
export let goombas = []

let scrollX = 0;

function init() {
    scrollX = 0;
    player = new Player();
    goombas = [
        new Goomba(700, 400, -0.4,0),
        new Goomba(760, 400, -0.4,0),
        new Goomba(820, 400, -0.4,0),
    ]

    hills = new Bgs(-1, -1, hillsImg)
    bg = new Bgs(-1, -1, bgImg);

    platforms = [
    new Platform(1000, 200, platformImg),
    new Platform(-1, canvas.height-platformImg.height, platformImg),
    new Platform(platformImg.width-3, canvas.height-platformImg.height, platformImg),
    new Platform(1900, canvas.height-smallImg.height, smallImg),
    new Platform(1900+smallImg.width-2, canvas.height-platformImg.height, platformImg),
    new Platform(1900+(smallImg.width-2 )*2, canvas.height-platformImg.height, platformImg),
    new Platform(1900+(smallImg.width-2 )*3, canvas.height-smallImg.height, smallImg),
    new Platform(2300+(smallImg.width-2 )*3, canvas.height-smallImg.height+150, smallImg),
    // new Platform(0, 100),
    ];



}


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

    
    goombas.forEach((g, index) => {
        g.update();
        if (killGoomba(player, g)) {
            // alert('aaa')
            player.speed.y -= 20;
            // למנוע קפיצה של פריים משתמשים בסט טיים אאוט
            setTimeout(() => {
                goombas.splice(index,1) 
            },0)
        } else if (
            player.position.x + player.width >= g.position.x &&
            player.position.y + player.height >= g.position.y &&
            player.position.x  <= g.position.x +g.width
        ) {
            init();
        }
    })

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
    } else if (
        (keys.left.pressed && player.position.x > 100)
        // את התנאי השני להוסיף רק בטיפול בבאגים למנוע גלישה לצד שמאל
        || (keys.left.pressed && scrollX ===0&&  player.position.x > 0)
    
    ) {
        player.speed.x = -5;

    }else {
        player.speed.x = 0;
        
        if (keys.right.pressed) {
            platforms.forEach(p => {
                p.position.x -= 5;
            })
            goombas.forEach(g => {
                g.position.x -= 5;
            })
            scrollX += 5;
            hills.position.x -=3
            // } else if (keys.left.pressed) {
            // להוסיף את התנאי השני רק בתיקון באגים
        } else if (keys.left.pressed && scrollX > 0) {
            platforms.forEach(p => {
                p.position.x += 5;
            })
            goombas.forEach(g => {
                g.position.x += 5;
            })
            scrollX -= 5;
            hills.position.x +=3
        }
    }

    // בשלב 11 להחליף את ה5 במשתנה SPEED ואת ה3 למכפלה 0.66



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

        goombas.forEach((goomba) => {
            if (
                goomba.position.y + goomba.height <= p.position.y &&
                goomba.position.y + goomba.height + goomba.speed.y >= p.position.y &&
                goomba.position.x + goomba.width >= p.position.x &&
                goomba.position.x <= p.position.x + p.width
            ) {
                goomba.speed.y =0
            }
        })

    })


    function killGoomba(player, goomba) {
        return (
            player.position.y + player.height <= goomba.position.y &&
            player.position.y + player.height + player.speed.y >= goomba.position.y &&
            player.position.x + player.width >= goomba.position.x &&
            player.position.x <= goomba.position.x + goomba.width
        )
    }


    // WIN CONDITION
    if (scrollX > 30000) {
        alert('you win!')
        // return
    }
    


    // LOSE CONDITION

    if (player.position.y > canvas.height) {
        // alert('you lose!')
        init();
    }

}


window.onload = () => {
  init();
  animate();
};


