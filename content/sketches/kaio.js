// Radio del planeta
let r = 200

// Velocidad de movimiento
speed = 1

let rot = 0
let teta = 0
let phi = 0
let carOrientation = 0

let cam

function preload() {
  grass = loadImage(['/sketches/grass.jpg'])

  carObj = loadModel('/sketches/car.obj',true)
  carTexture = loadImage(['/sketches/car.png'])
}

function setup() {
  // createCanvas(1300, 800, WEBGL)
  createCanvas(500, 500, WEBGL)
  textureMode(NORMAL)
  
  // Posición inicial del carro
  teta = PI/2
  phi = PI/2

  cam = createCamera()

  camCenter = sphericVector(radians(100),radians(90),r+30)
  cam.lookAt(camCenter.x, camCenter.y, camCenter.z)
}

function draw() {
  
  background(220)
  
  // Control de cámara con mouse
  orbitControl()

  camPos = sphericVector(phi, teta, r+60)

  cam.setPosition(camPos.x, camPos.y, camPos.z)

  // CONTROLES DE MOVIMIENTO

  // ------------------------------------------------
  // Códigos de teclas:
  // 
  // https://www.toptal.com/developers/keycode
  // 
  // ------------------------------------------------

  // Movimiento: Carro
  if (keyIsDown(87)){ // W
    teta -= radians(speed) * sin(carOrientation)
    phi -= radians(speed) * cos(carOrientation)
  }
  if (keyIsDown(83)){ // S
    teta += radians(speed) * sin(carOrientation)
    phi += radians(speed) * cos(carOrientation)
    
  }
  if (keyIsDown(65)){ // A
    teta += radians(speed) * cos(carOrientation)
    phi -= radians(speed) * sin(carOrientation)
  }
  if (keyIsDown(68)){ // D
    teta -= radians(speed) * cos(carOrientation)
    phi += radians(speed) * sin(carOrientation)
  }
  // Orientación: Carro
  if (keyIsDown(LEFT_ARROW)){
    carOrientation -= radians(speed)
  }
  if (keyIsDown(RIGHT_ARROW)){
    carOrientation += radians(speed)
  }
 

  // Iluminación
  ambientLight(255)
  //pointLight('white', 100, 0, 500)
  // axis(250)
  rotateZ(-PI/2)

  // camPos = sphericVector(teta, phi, r+60)

  // cam.setPosition(camPos.x, camPos.y, camPos.z)
  
  // cam.tilt(carOrientation) * cos(carOrientation)
  // cam.pan(carOrientation) * sin(carOrientation)

  // Rotación global
  // rotateZ(radians(50))
  // rotateX(radians(-10))
  // rotateY(radians(-10))

  // Cámara
  push()
    stroke('orange')
    fill(50,255)
    translate(camPos)
    rotateZ(carOrientation + PI)
    axis(50)
    sphere(5)
  pop()
  
  // Foco de cámara
  push()
    stroke('red')
    fill(50,255)
    translate(camCenter)
    rotateZ(carOrientation + PI)
    // axis(50)
    // sphere(3)
  pop()
  

  // Dibujo: Planeta
  push()
    // fill('rgba(200,255,0,0.2)')
    texture(grass)
    // noFill()
    noStroke()
    sphere(r)
  pop()

  // Dibujo: Carro
  push()
    // fill(0,0,255,100)
    vCarro = sphericVector(teta, phi, r+6)
    translate(vCarro)
    rotateY(-phi)
    rotateZ(-teta)
    rotateY(carOrientation+PI)
    axis(50)
    scale(r/1500)
    texture(carTexture)
    noStroke()
    model(carObj)
  pop()

  // Carretera
  push()
    noFill()
    cylinder(r+r/150,r/7.5)
  pop()

  // Edificio 1: Casa
  push()
    stroke('pink')
    fill(50,255)
    vEdif1 = sphericVector(radians(115),radians(120),r)
    translate(vEdif1)
    rotateY(radians(-120))
    rotateZ(-radians(115))
    // axis(50)
    sphere(r/5)
  pop()

  // Edificio 2: Garaje
  push()
    stroke('white')
    fill(50,255)
    vEdif2 = sphericVector(radians(130),radians(95),r)
    translate(vEdif2)
    rotateX(radians(40))
    // axis(50)
    cylinder(r/7.5,r/5)
  pop()

  // Edificio 3: Fuente
  push()
    stroke('yellow')
    fill(50,255)
    vEdif1 = sphericVector(radians(110),radians(95),r)
    translate(vEdif1)
    rotateY(radians(-95))
    rotateZ(radians(-110))
    // axis(50)
    cylinder(r/15,r/100)
  pop()

  // Árbol
  push()
    // stroke('yellow')
    noStroke()
    fill(50,255)
    vEdif1 = sphericVector(radians(110),radians(70),r)
    translate(vEdif1)
    rotateY(radians(-70))
    rotateZ(radians(-110))
    // axis(50)
    cylinder(r/50,r/2)
    
    // Hojas
    push()
      fill(0,255,0,100)
      translate(sphericVector(0,0,r/4))
      // axis(20)
      sphere(r/7.5)
    pop()

  pop()
 
  //specularMaterial(250)
  //shininess(50) 
 
}

// -------------------------------------------------------------------------


// CONVERSIÓN: COORDENADAS ESFÉRICAS A CARTESIANAS
// Coordenada X
function xCoord(theta, phi, r){
  x = r*sin(theta)*cos(phi)
  return x
}

// Coordenada Y
function yCoord(theta, phi, r){
  y = r*sin(theta)*sin(phi)
  return y
}

// Coordenada Z
function zCoord(theta, phi, r){
  z = r*cos(theta)
  return z
}

// Vector de coordenadas resultante
function sphericVector(theta, phi, r) {
  x = xCoord(theta,phi,r)
  y = yCoord(theta,phi,r)
  z = zCoord(theta,phi,r)
  let v = createVector(x,z,y)
  return v
}

function axis(len) {
  push()
    strokeWeight(len/30)

    // X-Axis
    stroke(255, 0, 0)
    fill(255, 0, 0)
    line(0, 0, 0, len, 0, 0) //horizontal red X-axis line
    // text("X", 100 + 5, 0, 0)

    // Y-Axis
    stroke(0, 255, 0)
    fill(0, 255, 0)
    line(0, 0, 0, 0, len, 0) //vertical blue Y-axis line
    // text("Y", 0, 100 + 15)
    
    // Z-Axis
    stroke(0, 0, 255)
    fill(0, 0, 255)
    line(0, 0, 0, 0, 0, len) //vertical blue Y-axis line
    // text("Z", 0, 100 + 15)
  pop()
}