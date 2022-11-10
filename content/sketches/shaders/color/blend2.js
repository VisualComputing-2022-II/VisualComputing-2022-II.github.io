let uMaterial1
let uMaterial2
let brightness_slider

function preload() {
  colorShader = readShader('blend.frag',
                          { matrices: Tree.NONE, varyings: Tree.color4 });
}

function setup() {
  createCanvas(400, 400, WEBGL);
  colorPicker = createColorPicker('#ed225d')
  colorPicker2 = createColorPicker('#ed225d')
  brightness_slider = createSlider(0, 1, 0.5, 0.01)
  print(brightness_slider)
}

function draw() {
  
  background(255);
  
  
  fill(colorPicker.color())
  square(0, 10, 50)
  
  fill(colorPicker2.color())
  square(100, 10, 50)
  
  push()
    shader(colorShader)
    uMaterial1 = colorPicker.color()._array
    uMaterial2 = colorPicker2.color()._array

    colorShader.setUniform('uMaterial1', uMaterial1)
    colorShader.setUniform('uMaterial2', uMaterial2)
    colorShader.setUniform('brightness', brightness_slider.value())
    noStroke()
    square(50, 50, 50)
  pop()

  resetShader()
  
}
