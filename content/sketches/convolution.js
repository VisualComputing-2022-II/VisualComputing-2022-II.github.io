let img;
const w = 120;

const matrix = [[-1, -1, -1],
                [-1, 0, -1],
                [-1, -1, -1]];

function preload() {
    img = loadImage('./apollo11.jpg');
}

function setup() {
    createCanvas(640, 360);
    background(255, 255, 255);
}

function draw() {
    image(img, 0, 0);
    
    let xstart = constrain(mouseX - w/2, 0, img.width);
    let ystart = constrain(mouseY - w/2, 0, img.heigth);
    let xend = constrain(mouseX + w/2, 0, img.heigth);
    let yend = constrain(mouseY + w/2, 0, img.width);

    const matrixsize = 3
    loadPixels()
    for(let x = xstart; x < xend; x++) {
        for (let y = ystart; y < yend; y++) {
            let c = convolution(x, y, matrix, matrixsize, img);
            let loc = x + y * img.width;
            pixels[loc] = c;
        }
    }

    updatePixels();
}


function convolution(x, y, matrix, matrixsize, img) {
    let rtotal = 0.0;
    let gtotal = 0.0;
    let btotal = 0.0;

    const offset = matrixsize / 2;
    for(let i=0; i < matrixsize; i++) {
        for (let j = 0; j < matrixsize; j++) {
            let xloc = x + i-offset;
            let yloc = y + j-offset;
            let loc = xloc + img.width*yloc;

            loc = constrain(loc, 0, img.pixels.length-1);

            rtotal += (red(img.pixels[loc]) * matrix[i][j]);
            gtotal += (green(img.pixels[loc]) * matrix[i][j]);
            btotal += (blue(img.pixels[loc]) * matrix[i][j]);
            
        } 

    }

    rtotal = constrain(rtotal, 0, 255);
    gtotal = constrain(gtotal, 0, 255);
    btotal = constrain(btotal, 0, 255);
}
