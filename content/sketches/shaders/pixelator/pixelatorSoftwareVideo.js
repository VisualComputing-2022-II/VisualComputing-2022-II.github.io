// Video
let videoTest;

// Control de pixelado y resolución
let doPixelation = true;
let resolution;

// Control de tiempo
let checkTime = true;
let time;

// ------------------------------------------------------------------------------------------------------

function preload() {
  videoTest = createVideo(['/sketches/assets/pompilish.mov'])
}

function setup() {

  createCanvas(windowWidth*0.9, windowHeight*0.9);
  
  videoTest.size(windowHeight*0.8, windowHeight*0.8)
  
  // Cantida de pixeles de ancho y alto que se van a pintar:
  resolution = createSlider(1, 100, 50, 1);
  resolution.position(6,videoTest.height*1.08);

  doPix = createButton("Toggle");
  doPix.position(146,videoTest.height*1.08-3);
  doPix.mousePressed(() => setPixelation());

  videoTest.position(8,8)
  videoTest.loop()
  videoTest.hide()
  
}

function draw() {
  
  background(255);
  videoTest.loadPixels();

  // Procedimiento de pixelado de la imagen:
  if (doPixelation) {

    pixelSize = floor(videoTest.width / resolution.value());

    for (let x = 0; x < videoTest.width; x += pixelSize) {
      for (let y = 0; y < videoTest.height; y += pixelSize) {
        
        let index = (y * videoTest.width + x) * 4;
        let r = videoTest.pixels[index + 0];
        let g = videoTest.pixels[index + 1];
        let b = videoTest.pixels[index + 2];

        let pixelColor = color(r, g, b);

        noStroke();
        fill(pixelColor);
        rect(x, y, pixelSize, pixelSize);
      }
    }

    videoTest.hide()
    
  }else{
    videoTest.show()
  }
  
  // Texto guía - Resolución y Frame Rate:
  textSize(25);
  fill(0);
  text(`Resolution: ${resolution.value()} - Frame rate: ${int(frameRate())}`, 0, videoTest.height + 30);
  
  // Calcula el tiempo de la primera iteración:
  if (checkTime){
      time = millis()
      checkTime = false
      print(time)
  }

}

function setPixelation() {
  doPixelation = !doPixelation;
  print("xd")
}