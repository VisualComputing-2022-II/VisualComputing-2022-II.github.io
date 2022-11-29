const xResolution = 640;
const yResolution = 480;

// Imagen
let imagen;
let windowImageRatio;

// Control de pixelado y resolución
let doPixelation = false;
let resolution;

// Control de tiempo
let checkTime = true;
let time;

// ------------------------------------------------------------------------------------------------------

function preload() {
  imagen = loadImage('/sketches/assets/kaaio.jpg')
  // imagen = createVideo(['/sketches/assets/fingers.mov'])
}

function setup() {

  createCanvas(windowWidth, windowHeight);
  image(imagen, 0, 0)
  windowImageRatio = windowWidth / imagen.width;
  
  // Cantida de pixeles de ancho y alto que se van a pintar:
  resolution = createSlider(1, 300, 10, 1);
  doPix = createButton("Toggle");
  doPix.mousePressed(setPixelation());

  imagenRatio = imagen.width / imagen.height

  if (imagenRatio > 1){
    imagen.resize(windowWidth*0.9, (windowWidth/imagenRatio)*0.9)
  }else{
    imagen.resize((windowHeight/imagenRatio)*0.9, windowHeight*0.9)
  }
  
}

function draw() {
  
  background(0);
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

        // Escalado para que no se salga de windowWidth:
        let scaledX = floor(x * windowImageRatio);
        let scaledY = floor(y * windowImageRatio);
        let scaledPixelSize = ceil(pixelSize * windowImageRatio);

        noStroke();
        fill(pixelColor);
        rect(scaledX, scaledY, scaledPixelSize, scaledPixelSize);
      }
    }
  }else{
    image(imagen, 0, 0)
    // imagen.loop()
  }
  
  // Texto guía - Resolución y Frame Rate:
  textSize(16);
  fill(255);
  text(`Resolution: ${resolution.value()} - Frame rate: ${int(frameRate())}`, 10, windowHeight - 80);
  
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