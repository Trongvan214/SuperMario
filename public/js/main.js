import SpriteSheet from './spritesheet.js';
import {loadImage, loadLevel} from './loader.js';
const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

function drawBackground(background, context, sprites){
    background.ranges.forEach(([x1,x2,y1,y2]) => {
        for(let x = x1; x < x2; x++){
            for(let y = y1; y < y2; y++){
                sprites.drawTile(background.tile, context, x, y);
            }
        }
    })
}
context.fillRect(0,0,50,50);

loadImage('/public/img/tiles.png')
.then(image => {
    const sprites = new SpriteSheet(image, 16, 16);
    sprites.define('ground', 0, 0);
    sprites.define('sky', 3, 23);
    loadLevel('1-1')
    .then(level =>{
        console.log(level);
        level.backgrounds.forEach(background => {
            drawBackground(background, context, sprites);
        })
    })
})