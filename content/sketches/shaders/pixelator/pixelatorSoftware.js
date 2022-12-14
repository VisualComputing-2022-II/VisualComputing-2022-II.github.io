// Imagen
let imagen;

// Control de pixelado y resolución
let doPixelation = true;
let resolution;

// Control de tiempo
let checkTime = true;
let time;

// ------------------------------------------------------------------------------------------------------

function preload() {
  imagen = loadImage('/sketches/assets/lenna.png')
}

function setup() {

  createCanvas(windowWidth*0.9, windowHeight*0.9);
  
  imagen.resize(windowHeight*0.8, windowHeight*0.8)
  
  // Cantida de pixeles de ancho y alto que se van a pintar:
  resolution = createSlider(1, 100, 50, 1);
  resolution.position(6,imagen.height*1.08);

  doPix = createButton("Toggle");
  doPix.position(146,imagen.height*1.08-3);
  doPix.mousePressed(() => setPixelation());
  
}

function draw() {
  
  background(255);
  imagen.loadPixels();

  // Procedimiento de pixelado de la imagen:
  if (doPixelation) {

    pixelSize = floor(imagen.width / resolution.value());

    for (let x = 0; x < imagen.width; x += pixelSize) {
      for (let y = 0; y < imagen.height; y += pixelSize) {
        
        let index = (y * imagen.width + x) * 4;
        let r = imagen.pixels[index + 0];
        let g = imagen.pixels[index + 1];
        let b = imagen.pixels[index + 2];

        let pixelColor = color(r, g, b);

        noStroke();
        fill(pixelColor);
        rect(x, y, pixelSize, pixelSize);
      }
    }
  }else{
    image(imagen, 0, 0)
  }
  
  // Texto guía - Resolución y Frame Rate:
  textSize(25);
  fill(0);
  text(`Resolution: ${resolution.value()} - Frame rate: ${int(frameRate())}`, 0, imagen.height + 30);
  
  // Calcula el tiempo de la primera iteración:
  if (checkTime){
      time = millis()
      checkTime = false
      print(time)
  }

}

function setPixelation() {
  doPixelation = !doPixelation;
}