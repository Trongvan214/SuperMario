export default class SpriteSheet {
    constructor(img, w, h){
        this.image = img;
        this.width = w;
        this.height = h;
        this.tiles = new Map();
    }
    define(name, x, y){
        const buffer = document.createElement('canvas');
        buffer.width = this.width;
        buffer.height = this.height;
        buffer.getContext('2d')
        .drawImage(this.image, (x * this.width), (y * this.height), this.width, this.height,0,0,this.width,this.height);
        this.tiles.set(name, buffer);
    }
    draw(name, context, x, y){
        const buffer = this.tiles.get(name);
        context.drawImage(buffer,x,y);
    }
    drawTile(name, context, x, y){
        this.draw(name,context,x*this.width,y*this.height);
    }
}