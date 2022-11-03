let img;
let w; // Tamaño del cuadrado
let m1,m2,m3,m4,m5,m6,m7,m8,m9;

// It's possible to convolve the image with many different 
// matrices to produce different effects. This is a high-pass 
// filter; it accentuates the edges. 
let matrix = [[-1,-1,-1],
              [-1, 9,-1],
              [-1,-1,-1]];

function preload() {
  img = loadImage(['/sketches/assets/apollo11.png']);
}

function setup() {
  createCanvas(720, 500);
  img.resize(720, 400);
  img.loadPixels();

  w = 150;

  m1 = createInput(-1);
  m2 = createInput(-1);
  m3 = createInput(-1);
  m4 = createInput(-1);
  m5 = createInput(9);
  m6 = createInput(-1);
  m7 = createInput(-1);
  m8 = createInput(-1);
  m9 = createInput(-1);
  
  // Traslación vertical de los inputs de la matriz
  let yVar = 30;

  m1.position(30, (img.height+yVar)+0);
  m1.size(30);

  m2.position(60, (img.height+yVar)+0);
  m2.size(30);
  
  m3.position(90, (img.height+yVar)+0);
  m3.size(30);

  m4.position(30, (img.height+yVar)+30);
  m4.size(30);

  m5.position(60, (img.height+yVar)+30);
  m5.size(30);

  m6.position(90, (img.height+yVar)+30);
  m6.size(30);

  m7.position(30, (img.height+yVar)+60);
  m7.size(30);
  
  m8.position(60, (img.height+yVar)+60);
  m8.size(30);

  m9.position(90, (img.height+yVar)+60);
  m9.size(30);

  // pixelDensity(1) for not scaling pixel density to display density
  // for more information, check the reference of pixelDensity()
  pixelDensity(1);
}

function draw() {

  // Imprimir imagen en pantalla
  image(img,0,0);

  // Detección de eventos para los inputs de la matriz
  m1.input(inputEvent1);
  m2.input(inputEvent2);
  m3.input(inputEvent3);
  m4.input(inputEvent4);
  m5.input(inputEvent5);
  m6.input(inputEvent6);
  m7.input(inputEvent7);
  m8.input(inputEvent8);
  m9.input(inputEvent9);

  // Calculate the small rectangle we will process
  const xstart = constrain(mouseX - w/2, 0, img.width);
  const ystart = constrain(mouseY - w/2, 0, img.height);
  const xend = constrain(mouseX + w/2, 0, img.width);
  const yend = constrain(mouseY + w/2, 0, img.height);

  const matrixsize = 3;

  loadPixels();
  // Begin our loop for every pixel in the smaller image
  for (let x = xstart; x < xend; x++) {
    for (let y = ystart; y < yend; y++ ) {
      let c = convolution(x, y, matrix, matrixsize, img);
      
      // retrieve the RGBA values from c and update pixels()
      let loc = (x + y*img.width) * 4;
      pixels[loc] = red(c);
      pixels[loc + 1] = green(c);
      pixels[loc + 2] = blue(c);
      pixels[loc + 3] = alpha(c);
    }
  }
  updatePixels();
}

//-----------------------------------------------------------------------------

function keyTyped() { // Evento: Tecla "__" es tipeada.
  if (key == 'a' || key == 'A') {
    if (w == 150) {
      w = displayWidth*2;
    }else{
      w = 150;
    }
  }
  // uncomment to prevent any default behavior
  // return false;
}

function inputEvent1() {
  matrix[0][0] = this.value();
}

function inputEvent2() {
  matrix[0][1] = this.value();
}

function inputEvent3() {
  matrix[0][2] = this.value();
}

function inputEvent4() {
  matrix[1][0] = this.value();
}

function inputEvent5() {
  matrix[1][1] = this.value();
}

function inputEvent6() {
  matrix[1][2] = this.value();
}

function inputEvent7() {
  matrix[2][0] = this.value();
}

function inputEvent8() {
  matrix[2][1] = this.value();
}

function inputEvent9() {
  matrix[2][2] = this.value();
}

function convolution(x, y, matrix, matrixsize, img) {
  let rtotal = 0.0;
  let gtotal = 0.0;
  let btotal = 0.0;
  const offset = Math.floor(matrixsize / 2);
  for (let i = 0; i < matrixsize; i++){
    for (let j = 0; j < matrixsize; j++){
      
      // What pixel are we testing
      const xloc = (x + i - offset);
      const yloc = (y + j - offset);
      let loc = (xloc + img.width * yloc) * 4;

      // Make sure we haven't walked off our image, we could do better here
      loc = constrain(loc, 0 , img.pixels.length - 1);

      // Calculate the convolution
      // retrieve RGB values
      rtotal += (img.pixels[loc]) * matrix[i][j];
      gtotal += (img.pixels[loc + 1]) * matrix[i][j];
      btotal += (img.pixels[loc + 2]) * matrix[i][j];
    }
  }
  // Make sure RGB is within range
  rtotal = constrain(rtotal, 0, 255);
  gtotal = constrain(gtotal, 0, 255);
  btotal = constrain(btotal, 0, 255);
  
  // Return the resulting color
  return color(rtotal, gtotal, btotal);
}
