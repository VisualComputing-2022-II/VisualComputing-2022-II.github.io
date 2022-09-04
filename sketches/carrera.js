var x;
var changeDirection;

function setup() {
  createCanvas(700, 300);
	x = 1;
	changeDirection = false;
	//this variable acts as a "switch" that decides which direction
	//the circle is going based on it's position
}

function draw() {
  background(255);
	noStroke();

	drawStripes();

	fill(255,180,0);
	square(x,50,50);
	
	if(x >= width){
		changeDirection = true
	}
	//if the circle passes the right side, change the direction
	//effects of direction change happen below
	else if (x <= 0){
		changeDirection = false;
	}
	//if the circle passes the left side (or becomes equal to 0)
	//changes the direction, effects are in the next if statement below
	
	if (x >= 0 && changeDirection == false){
		x += 1;
	}
	//if x is greater than OR equal to 0, move right
	else if(changeDirection == true){
		x -= 1;
	}
	//once the switch is changed, x must have been bigger than width
}

// -----------------------------------------------------------------------

function drawStripes() {
	push();
		translate(30,0);
		strokeWeight(20);
		stroke(0);
		for (let i = 0; i < 17; i++) {
			line(40*i,0,40*i,height);
		}
	pop();
}


/*let x = 15 // Desfase horizontal entre cada fila de cuadrados
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
	if (fillVar == 0) {
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
}*/