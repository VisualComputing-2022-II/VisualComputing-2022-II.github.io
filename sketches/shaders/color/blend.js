let uMaterial1
let uMaterial2

function preload() {
  colorShader = readShader('/sketches/shaders/color/blend.frag',
                          { matrices: Tree.NONE, varyings: Tree.color4 });
}

function setup() {
  createCanvas(400, 400, WEBGL);
  colorPicker = createColorPicker('#ed225d')
  colorPicker2 = createColorPicker('#ed225d')
}

function draw() {
  
  background(255);
  
  //Square 1
  fill(colorPicker.color())
  square(0, 10, 50)
  
  //Square 2
  fill(colorPicker2.color())
  square(100, 10, 50)
  
    
  //Color multiplication with shader
  push()
    shader(colorShader)
    uMaterial1 = colorPicker.color()._array
    uMaterial2 = colorPicker2.color()._array

    colorShader.setUniform('uMaterial1', uMaterial1)
    colorShader.setUniform('uMaterial2', uMaterial2)
    noStroke()
    square(50, 50, 50)
  pop()

  resetShader()
    
}
