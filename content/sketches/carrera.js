var x,s,buttonRed;
var changeDirection;
var redAlpha = 0;
var stripesAlpha = 255;


/*--------------------------------------------------------------
Código de movimiento ida y vuelta original creado por
cmorgantywls bajo el título "Make shapes move back & forth".

Recuperado el 30/08/2022 de:

https://editor.p5js.org/cmorgantywls/sketches/HkdbRQnOG
--------------------------------------------------------------*/

function setup() {
	createCanvas(700, 260);

	x = 1;
	s = 0.6; // Velocidad
	changeDirection = false; // Switch de dirección
	
	buttonRed = createButton('Toggle Red');
	buttonRed.position(0, height-40);
	buttonRed.size(width/2,40);
	buttonRed.mousePressed(changeToggleRed);

	buttonStripes = createButton('Toggle Stripes');
	buttonStripes.position(width/2, height-40);
	buttonStripes.size(width/2,40);
	buttonStripes.mousePressed(changeStripes);
}

function draw() {
  background(255);
	noStroke();

	drawStripes(stripesAlpha);

	// Rectángulo Amarillo
	fill(255,180,0);
	rect(x,35,55,20);
	
	// Rectángulo Azul
	fill(0,100,255);
	rect(x,165,55,20);

	// Rectángulo Rojo
	fill(255,0,0,redAlpha);
	rect(x,55,55,110);

	// Cambio de dirección der -> izq
	if(x >= width-80){
		changeDirection = true
	}

	// Cambio de dirección izq -> der
	else if (x < 40){
		changeDirection = false;
	}
	
	// Control de velocidad
	if (x >= 0 && changeDirection == false){
		x += s;
	}
	else if(changeDirection == true){
		x -= s;
	}
}

// -----------------------------------------------------------------------

function drawStripes(stripesAlpha) { // Dibujo de franjas verticales
	push();
		let a = 15;
		translate(1.5*a,0);
		strokeWeight(a);
		stroke(0,0,0,stripesAlpha);
		for (let i = 0; i < width/(2*a); i++) {
			line(2*a*i,0,2*a*i,height-40);
		}
	pop();
}

function changeToggleRed() { // Listener del botón para mostrar/ocultar el Cuadrado Rojo
	if (redAlpha == 0) {
		redAlpha = 128;
	} else {
		redAlpha = 0;
	}
}

function changeStripes() { // Listener del botón para mostrar/ocultar Stripes
	if (stripesAlpha == 0) {
		stripesAlpha = 255;
	} else {
		stripesAlpha = 0;
	}
}