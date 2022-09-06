let fillVar = 0; // Opacidad de las Líneas
let button;	// Botón para cambiar fillVar

function setup() {
	createCanvas(600, 440);
	angleMode(DEGREES);

	strokeWeight(7);

	button = createButton('Mostrar/Ocultar Líneas');
	button.position(0, height-40);
	button.size(width,40);
	button.mousePressed(changeFillVar);
}
  
function draw() {
	background(255);

	// Cuadrado Azul
	push();
		// Líneas Verticales
		stroke(0);
		noFill();
		line(100,height,width/2-25,0);
		line(width-100,height,width/2+25,0);
	pop();
	
	// Líneas Horizontales
	horizontalStripes();

	// Líneas Reveladoras
	drawLines(fillVar);

	// Líneas Rojas
	redStripes();
}

// -----------------------------------------------------------------------

function changeFillVar() { // Listener del botón para cambiar fillVar
	if (fillVar == 0) {
		fillVar = 255;
	} else {
		fillVar = 0;
	}
}

function drawLines(fillVar) { // Líneas reveladoras
	// Líneas
	push();
		strokeWeight(3);
		stroke(70,165,250,fillVar);
		line(width/3,0,width/3,height);
		line(2*width/3,0,2*width/3,height);
	pop();
}

function horizontalStripes() { // Líneas horizontales
	push();
		let a = 100;
		let x = 0;
		for (let i = x+5; i < 19; i++) {
			x = (1.4**i);
			a += x;
			translate(0,x);
			line(width/2-a/2,0,width/2+a/2,0);
		}
	pop();
}

function redStripes() {
	push();
		stroke('red');
		strokeWeight(6);
		translate(0,-40);
		translate(width/3,height/3);
		line(0,0,width/3,0);
		translate(0,height/2);
		line(0,0,width/3,0);
	pop();
}