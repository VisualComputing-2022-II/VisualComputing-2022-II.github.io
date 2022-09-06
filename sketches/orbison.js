let fillVar = 255; // Opacidad de las Líneas
let button;	// Botón para cambiar fillVar

function setup() {
	createCanvas(600, 440);
	angleMode(DEGREES);

	button = createButton('Mostrar/Ocultar Líneas');
	button.position(0, height-40);
	button.size(width,40);
	button.mousePressed(changeFillVar);
}
  
function draw() {
	background(255);

	// Líneas
	drawLines(fillVar);

	// Cuadrado Azul
	push();
		strokeWeight(5);
		stroke(70,165,250);
		noFill();
		rect(30,30,540,340);
	pop();

	// Rombo Rojo
	push();
		strokeWeight(5);
		stroke(255,0,0);
		noFill();
		rectMode(CENTER);
		translate(width/2,height/2-20);
		rotate(45);
		square(0,0,170)
	pop();	
}

// -----------------------------------------------------------------------

function changeFillVar() { // Listener del botón para cambiar fillVar
	if (fillVar == 0) {
		fillVar = 255;
	} else {
		fillVar = 0;
	}
}

function drawLines(fillVar) { // Función para dibujar las líneas
	// Líneas
	push();
		strokeWeight(4);
		stroke(70,165,250,fillVar);
		let s = 90; // paso
		translate(30,0)
		for (let i = -5; i < 6; i++) {
			line(s*i,30,s*i+500,height/2-20);
			line(s*i,height-70,s*i+500,height/2-20);
		}
	pop();
	// Borrar lo que queda fuera del cuadrado
	push();
		noStroke();
		fill(255);
		rect(0,0,30,height);
		rect(width-30,0,30,height);
	pop();
}