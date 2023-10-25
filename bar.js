class Bar {
    x;
    y;
    width;
    height;
    color;
    canvas;
    context;

    constructor(x, y, width, height, color, canvas, context) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.canvas = document.getElementById('myCanvas');
        this.context = this.canvas.getContext("2d");
    }

    drawBar() {
        this.context.beginPath();
        this.context.rect(this.x, this.y, this.width, this.height);
        this.context.fillStyle = this.color;
        this.context.fill();
        this.context.closePath();
    }
}