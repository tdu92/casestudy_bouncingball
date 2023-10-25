let ball =new Ball(100,400,"red",30);
let bar =new Bar(100,400,100,10,"blue");
function play(){
    ball.move();
    ball.drawBall();
    bar.drawBar();
    ball.collide(bar);
    requestAnimationFrame(play);
}
play();