let x = 15 // Desfase horizontal entre cada fila de cuadrados
let y = 40; // Altura de las filas
let fillVar = 0; // Relleno de los cuadrados
let button;	// Botón para cambiar fillVar

function setup() {
	createCanvas(570, 400);
	button = createButton('Mostrar/Ocultar Cuadrados');
	button.position(0, 360);
	button.size(width,40);
  button.mousePressed(changeFillVar);
}
  
function draw() {
	background(255);

	drawSquares(x,y,fillVar);
	drawLines(y);
}

// -----------------------------------------------------------------------

function changeFillVar() { // Listener del botón para cambiar fillVar
	if (fillVar === 0) {
		fillVar = 255;
	} else {
		fillVar = 0;
	}
}

function drawSquares(x,y,fillVar){ // Función para dibujar los cuadrados negros
	push();
		translate(y/4,0);
		noStroke();
		fill(fillVar);
		for (let i = 0; i < 2; i++) {
			for (let j = 0; j < 7; j++) {
				square(y*2*j,y*4*i,y);
			}
			for (let j = 0; j < 7; j++) {
				square(y*2*j+x,y+y*4*i,y);
			}
			for (let j = 0; j < 7; j++) {
				square(y*2*j+2*x,2*y+y*4*i,y);
			}
			for (let j = 0; j < 7; j++) {
				square(y*2*j+x,3*y+y*4*i,y);
			}
		}
		for (let j = 0; j < 7; j++) {
			square(y*2*j,y*8,y);
		}
	pop();
}

function drawLines(y) {  // Función para dibujar las líneas
	push();
		strokeWeight(3);
		stroke(120);
		for (let i = 1; i < 9; i++) {
			line(0,y*i,width,y*i);
		}
	pop();
}