// Radio del planeta
let r = 200

// Velocidad de movimiento
speed = 0.5

let theta = 0
let phi = 0
let carOrientation = 0

// let tlt = -0.7
// let tltTemp = 0
// let pn = 0

function preload() {
  clouds = loadImage(['/sketches/assets/clouds.png'])
  grass = loadImage(['/sketches/assets/grass.jpg'])
  edificio = loadImage(['/sketches/assets/casa.jpg'])
  hojas = loadImage(['/sketches/assets/leaves.png'])

  carObj = loadModel('/sketches/assets/car.obj',true)
  carTexture = loadImage(['/sketches/assets/car.png'])
}

function setup() {

  createCanvas(1300, 800, WEBGL)
  // createCanvas(500, 500, WEBGL)  

  // Colores
  bg = color(206, 81, 185)
  planeta = color(218, 255, 45)
  casa = color(235, 217, 105)
  fuente = color(132, 91, 44)
  madera = color(92, 62, 55)

  textureMode(NORMAL)
  
  // Posición inicial del carro
  theta = PI/2
  phi = PI/2
  carOrientation = radians(-90)

  // Creación de cámaras
  cam = createCamera()
  cam2 = createCamera()

  setCamera(cam2)

}

function draw() {

  background(bg)

  // Nubes
  push()
    rotateX(PI/2)
    translate(0,0,-height)
    texture(clouds)
    noStroke()
    plane(50000,50000)
  pop()

  // --------------------------------------------------------------------------------------
  // --- CONTROL DE CÁMARA 1 ---

  orbitControl()

  // rotateZ(-PI/2)

  // camPos = sphericVector(-phi+PI, theta, r*1.45)
  camPos = sphericVector(theta, phi, r*1.45)
  cam.setPosition(camPos.x, camPos.y, camPos.z)

  // camFocus = sphericVector(-phi+PI*1.2, theta, r*1)
  // print(sin(carOrientation))
  camFocus = sphericVector(theta + radians(30)*sin(carOrientation+PI), phi + radians(30)*cos(carOrientation+PI), r*1.2)
  cam.lookAt(camFocus.x, camFocus.y, camFocus.z)

  // --------------------------------------------------------------------------------------
  // --- CONTROLES DE MOVIMIENTO ---

  // ------------------------------------------------
  // Códigos de teclas:
  // 
  // https://www.toptal.com/developers/keycode
  // 
  // ------------------------------------------------

  // Movimiento: Carro
  if (keyIsDown(87)){ // W
    theta -= radians(speed) * sin(carOrientation)
    phi -= radians(speed) * cos(carOrientation)
    // tltTemp += radians(speed)
    // cam.tilt(tltTemp)
    // tltTemp= 0
  }
  if (keyIsDown(83)){ // S
    theta += radians(speed) * sin(carOrientation)
    phi += radians(speed) * cos(carOrientation)
    // tltTemp -= radians(speed)
    // cam.tilt(tltTemp)
    // tltTemp= 0
  }
  if (keyIsDown(65)){ // A
    theta += radians(speed) * cos(carOrientation)
    phi -= radians(speed) * sin(carOrientation)
    // pn -= radians(speed*PI/4)
    // cam.pan(pn)
    // pn = 0
  }
  if (keyIsDown(68)){ // D
    theta -= radians(speed) * cos(carOrientation)
    phi += radians(speed) * sin(carOrientation)
    // pn += radians(speed*PI/4)
    // cam.pan(pn)
    // pn = 0
  }
  // Orientación: Carro
  if (keyIsDown(LEFT_ARROW)){
    carOrientation -= radians(speed)
  }
  if (keyIsDown(RIGHT_ARROW)){
    carOrientation += radians(speed)
  }
  // Selector de cámara
  if (keyIsDown(49)) { // 1
    setCamera(cam)
  }
  if (keyIsDown(50)) { // 2
    setCamera(cam2)
  }
  // Reset
  if (keyIsDown(82)){ // R
    reset()
  }

  // Rotación global
  // rotateZ(-PI/2)
  // rotateZ(radians(50))
  // rotateX(radians(-10))
  // rotateY(radians(-10))

  // Iluminación
  ambientLight(110)
  pointLight(255,200,200, 350, -250, 350)
  
  // --------------------------------------------------------------------------------------
  // --- DIBUJOS ---

  // Punto Guía: Cámara 1
  push()
    // rotateZ(PI/2)
    stroke('white')
    fill(50,255)
    translate(camPos)
    // rotateX(-phi)
    // rotateZ(-theta)
    // rotateZ(carOrientation + PI)
    // axis(100)
    // sphere(5)
  pop()
  
  // Punto Guía: Foco de cámara 1
  push()
    // rotateZ(PI/2)
    stroke('red')
    fill(50,255)
    translate(camFocus)
    // rotateZ(carOrientation + PI)
    // axis(20)
    // sphere(3)
  pop()

  // Dibujo: Planeta
  push()
    specularMaterial(250)
    shininess(50)
    // fill(planeta)
    texture(grass)
    // noFill()
    noStroke()
    sphere(r)
  pop()

  // Dibujo: Carro
  push()
    // fill(0,0,255,100)
    vCarro = sphericVector(theta, phi, r+6)
    translate(vCarro)
    rotateY(-phi)
    rotateZ(-theta)
    rotateY(carOrientation+PI)
    // axis(150)
    scale(r/1500)
    texture(carTexture)
    noStroke()
    model(carObj)
  pop()

  // Rotación Global
  rotateZ(-PI/2)

  // Carretera
  push()
    // stroke('blue')
    noStroke()
    fill(160)
    // noFill()
    cylinder(r+r/100,r/7.5)
  pop()

  // Edificio 1: Casa
  push()
    noStroke()
    // fill(casa)
    texture(edificio)
    vEdif1 = sphericVector(radians(115),radians(120),r)
    translate(vEdif1)
    rotateY(radians(-120))
    rotateZ(-radians(115))
    sphere(r/5)
  pop()

  // Edificio 2: Garaje
  push()
    noStroke()
    fill(casa)
    // texture(garaje)
    vEdif2 = sphericVector(radians(130),radians(95),r)
    translate(vEdif2)
    rotateX(radians(40))
    cylinder(r/7.5,r/5)
  pop()

  // Edificio 3: Fuente
  push()
    noStroke()
    fill(fuente)
    vEdif1 = sphericVector(radians(110),radians(95),r)
    translate(vEdif1)
    rotateY(radians(-95))
    rotateZ(radians(-110))
    cylinder(r/15,r/100)
  pop()

  // Árboles
  drawArbol(110,70)
  drawArbol(210,20)
  drawArbol(10,280)
  drawArbol(45,130)
  drawArbol(315,10)
  drawArbol(50,0)
  drawArbol(100,20)
  drawArbol(160,-40)

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

function reset() {
  // Posición inicial del carro
  theta = PI/2
  phi = PI/2
  carOrientation = radians(-90)
}

function drawArbol(theta, phi) {
  push()
    noStroke()
    // fill('brown')
    fill(madera)
    vArbol = sphericVector(radians(theta),radians(phi),r)
    translate(vArbol)
    rotateY(radians(-phi))
    rotateZ(radians(-theta))
    cylinder(r/50,r/2)
    
    // Hojas
    push()
      // fill('green')
      texture(hojas)
      translate(sphericVector(0,0,r/4))
      sphere(r/7.5)
    pop()

  pop()
}