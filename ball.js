class Ball {
    x;
    y;
    color;
    radius;
    canvas;
    context;
    flag;

    constructor(x, y, color, radius) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.radius = radius;
        this.canvas = document.getElementById("myCanvas");
        this.context = this.canvas.getContext("2d");
        this.flag = "top";
    }

    drawBall() {
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.context.fillstyle = this.color;
        this.context.fill();
        this.context.closePath();
    }

    move() {
        this.clear();
        if (this.y <= this.radius) {
            this.flag = 'bottom';
        } else if (this.y + this.radius > this.canvas.height) {
            this.flag = 'top';
        }
        switch (this.flag) {
            case 'bottom':
                this.moveBot();
                break;
            case 'top':
                this.moveTop();
                break;
        }
    }

    moveTop() {
        this.y -= 5;
    }

    moveBot() {
        this.y += 5;
    }

    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    collide(bar) {
        if (this.y + this.radius >= bar.y && this.x >= bar.x && this.x <= bar.x + bar.width) {
            this.flag = 'top';
        }
    }
}