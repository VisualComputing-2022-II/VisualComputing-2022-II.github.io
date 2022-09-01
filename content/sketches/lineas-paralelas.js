function setup() {
    createCanvas(558, 360, WEBGL);
  }
  
function draw() {
    background(255);

    let x = 10;
    let y = 40;

    push();
        noStroke();
        fill(0);    
        drawSquares(x,y);
    pop();

    push();
        strokeWeight(3);
        stroke(120);
        for (let i = -3; i < 5; i++) {
            line(-width/2,y*i-20,width/2,y*i-20);
        }
    pop();
}

function drawSquares(x,y){
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 7; j++) {
            square(-width/2+y/4+y*2*j,-height/2+y*4*i,y);
        }
        for (let j = 0; j < 7; j++) {
            square(-width/2+y/4+y*2*j+x,-height/2+y+y*4*i,y);
        }
        for (let j = 0; j < 7; j++) {
            square(-width/2+y/4+y*2*j+2*x,-height/2+2*y+y*4*i,y);
        }
        for (let j = 0; j < 7; j++) {
            square(-width/2+y/4+y*2*j+x,-height/2+3*y+y*4*i,y);
        }
    }
    for (let j = 0; j < 7; j++) {
        square(-width/2+y/4+y*2*j,-height/2+y*8,y);
    }
}