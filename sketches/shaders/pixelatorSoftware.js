// Video pixelator by Marc Duiker, @marcduiker, August 2021.
// Instructions: 
//   1. Move mouse or touch in the X position to change pixel size. 
//   2. Click the Toggle color modes to cycle through the various color modes.
// YouTube: https://www.youtube.com/watch?v=M3wTNVICUTg
// Inpired by the Brightness Mirror video from The Coding Train: https://www.youtube.com/watch?v=rNqaw8LT2ZU

// Match the resolution to your webcam but try to keep it low to have a decent performance.
const videoXResolution = 640;
const videoYResolution = 480;

let imagen;
let check = true;
let millisecond;
const minSize = 5;
const maxSize = 50;
let windowVideoRatio;
let colorButton;
let videoModeButton;
let isProcessingEnabled = true;
let colorModeIndex = 0;
let lastColorModeIndex = 4;
let resolution;

function preload() {
  imagen = loadImage('p6.jpg')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // imagen.resize(640, 480)
  image(imagen, 0, 0)
  windowVideoRatio = windowWidth / imagen.width;
  resolution = createSlider(1, 10, 10, 1);

}

function draw() {
  background(0);
  imagen.loadPixels();
  if (isProcessingEnabled) {

    pixelSize = floor(imagen.width / resolution.value());

    for (let x = 0; x < imagen.width; x += pixelSize) {
      for (let y = 0; y < imagen.height; y += pixelSize) {
        
        let index = (y * imagen.width + x) * 4;
        let r = imagen.pixels[index + 0];
        let g = imagen.pixels[index + 1];
        let b = imagen.pixels[index + 2];

        let newColor = getColor(r, g, b);

        // Scale to fit windowWidth:
        let scaledX = floor(x * windowVideoRatio);
        let scaledY = floor(y * windowVideoRatio);
        let scaledPixelSize = ceil(pixelSize * windowVideoRatio);

        noStroke();
        fill(newColor);
        rect(scaledX, scaledY, scaledPixelSize, scaledPixelSize);
      }
    }
  }
  
  textSize(16);
  fill(255);
  text(`Resolution: ${resolution.value()} - Frame rate: ${int(frameRate())}`, 10, windowHeight - 80);
  
  if (check){
      millisecond = millis()
      check = false;
      print(millisecond)
  }
  
}

function changeColorMode() {
  if (colorModeIndex < lastColorModeIndex) {
    colorModeIndex++;
  } else {
    colorModeIndex = 0;
  }
}

function changeProcessing() {
  isProcessingEnabled = !isProcessingEnabled;
}

function getColor(r, g, b) {
  let newColor;
  switch (colorModeIndex) {
    case 0:
      newColor = color(r, g, b);
      break;
    case 1:
      newColor = getGrayScaleColor(r, g, b);
      break;
    case 2:
      newColor = getGameboyColor(r, g, b);
      break;
    case 3:
      newColor = getFunkyFutureColor(r, g, b);
      break;
    case 4:
      newColor = getFairyDustColor(r, g, b);
      break;
  }

  return newColor;
}

function getGrayScaleColor(r, g, b) {
  // Gray scale based on linear luminance for each color channel:
  // https://en.wikipedia.org/wiki/Grayscale
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function getGameboyColor(r, g, b) {
  // Color palette source:
  // https://lospec.com/palette-list/kirokaze-gameboy

  let grayScale = getGrayScaleColor(r, g, b);
  let colorPalette = ["#332c50", "#46878f", "#94e344", "#e2f3e4"];
  let index = floor(map(grayScale, 0, 255, 0, 4));

  return colorPalette[index];
}

function getFunkyFutureColor(r, g, b) {
  // Color palette source:
  // https://lospec.com/palette-list/funkyfuture-8

  let colorPalette = [
    "#2b0f54",
    "#ab1f65",
    "#ff4f69",
    "#fff7f8",
    "#ff8142",
    "#ffda45",
    "#3368dc",
    "#49e7ec",
  ];
 
  return getNearestColorInPalette(colorPalette, r, g, b);
}

function getFairyDustColor(r, g, b) {
  // Color palette source:
  // https://lospec.com/palette-list/fairydust-8

  let colorPalette = [
    "#f0dab1",
    "#e39aac",
    "#c45d9f",
    "#634b7d",
    "#6461c2",
    "#2ba9b4",
    "#93d4b5",
    "#f0f6e8",
  ];
 
  return getNearestColorInPalette(colorPalette, r, g, b);
}

function getNearestColorInPalette(colorPalette, r, g, b) {
  let nearestColorIndex = 0;
  let nearestColorDistance = 255;
  for (let c = 0; c < colorPalette.length; c++) {
    let indexColor = color(colorPalette[c]);
    let indexRed = red(indexColor);
    let indexGreen = green(indexColor);
    let indexBlue = blue(indexColor);
    let colorDist = dist(r, g, b, indexRed, indexGreen, indexBlue);
    if (colorDist < nearestColorDistance) {
      nearestColorDistance = colorDist;
      nearestColorIndex = c;
    }
  }

  return colorPalette[nearestColorIndex];
}
