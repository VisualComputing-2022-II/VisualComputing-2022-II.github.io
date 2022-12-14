'use strict';

let image_src;
let video_src;
let mosaic;

// ui
let resolution;
let video_on;
let mode;
let paintings;

function preload() {
  
  // paintings are stored locally in the /sketches/shaders/paintings dir
  // and named sequentially as: p1.jpg, p2.jpg, ... p30.jpg
  // so we pick up one randomly just for fun:
  image_src = loadImage(`/sketches/assets/p${int(random(1, 6))}.jpg`);
  // image_src = loadImage('/sketches/assets/p1.jpg');
  // video_src = createVideo(['/sketches/shaders/wagon.webm']);
  // video_src.hide();
  
  mosaic = readShader('/sketches/shaders/pixelator/pixelatorShader.frag',
           { matrices: Tree.NONE, varyings: Tree.texcoords2 });
  
  paintings = [];

  for (let i = 1; i <= 6; i++) {
    paintings.push(loadImage(`/sketches/assets/p${i}.jpg`));
  }

}

function setup() {
  createCanvas(600, 600, WEBGL);
  textureMode(NORMAL);
  noStroke();
  shader(mosaic);

  resolution = createSlider(1, 100, 50, 1);
  resolution.position(10, 35);
  resolution.style('width', '80px');
  resolution.input(() => mosaic.setUniform('resolution', resolution.value()));

  mosaic.setUniform('resolution', resolution.value());

  // video_on = createCheckbox('video', false);
  // video_on.changed(() => {
  //   if (video_on.checked()) {
  //     mosaic.setUniform('source', video_src);
  //     video_src.loop();
  //   } else {
  //     mosaic.setUniform('source', image_src);
  //     video_src.pause();
  //   }
  // });
  
  // palette = createQuadrille(paintings);
  
  mosaic.setUniform('source', image_src);

  // video_on.position(10, 55);

  mode = createSelect();
  mode.position(10, 75);
  mode.option('original');
  mode.option('pixelator');
  mode.selected('pixelator');
  mode.changed(() => {
    mosaic.setUniform('original', mode.value() === 'original');
  });
}

function draw() {
  
  // which previous exercise does this code actually solve?
  /*
        y                  v
        |                  |
  (-1,1)|     (1,1)        (0,1)     (1,1)
  *_____|_____*            *__________*   
  |     |     |            |          |        
  |_____|_____|__x         | texture  |        
  |     |     |            |  space   |
  *_____|_____*            *__________*___ u
  (-1,-1)    (1,-1)       (0,0)    (1,0) 
  */
  beginShape();
  vertex(-1, -1, 1, 0, 1);
  vertex(1, -1, 0, 1, 1);
  vertex(1, 1, 0, 1, 0);
  vertex(-1, 1, 0, 0, 0);
  endShape();

  // // Texto gu??a - Resoluci??n y Frame Rate:
  // textSize(25);
  // fill(0);
  // text(`Resolution: ${resolution.value()} - Frame rate: ${int(frameRate())}`, 0, image_src.height);
  
}

function keyPressed() {
  if (key === '1' || key === '2' || key === '3' || key === '4' || key === '5' || key === '6') {
    mosaic.setUniform('source', paintings[key-1]);
  }
}