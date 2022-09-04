let x1 = 50; // Coordenada x del vestido azul
let x2 = 320; // Coordenada x del vestido amarillo
let y = 50; // Coordenada y de los vestidos
let button; // Botón para revelar la ilusión
let reveal = 0; // Listener del botón

function setup() {
	createCanvas(570, 440);
	button = createButton('Revelar/Ocultar');
	button.position(0, 400);
	button.size(width,40);
	button.mousePressed(changeReveal);
}
  
function draw() {
	background(148);
	noStroke();

	// Vestido Azul
	push();
		fill(38,41,63);
		rect(x1,y,160,300);
	pop();

	// Vestido Amarillo
	push();
		fill(245,234,143);
		rect(x2,y,160,300);
	pop();

	//stripes(x1,y,color(70,76,153)); // Stripes Azules
	stripes(x1,y,color(52,61,165)); // Stripes Azules
	stripes(x2,y,color(255)); // Stripes Amarillas

	// Luz A
	push();
		fill(245,234,143,128);
		rect(x1+80,y+40,120,220);
	pop();

	// Luz B
	push();
		fill(38,41,63,128);
		rect(x2+80,y+40,120,220);
	pop();

	// fondo falso
	fakeBack(reveal);

}

// -----------------------------------------------------------------------

function stripes(x,y,stripesColor) {
	push();
		fill(stripesColor);
		translate(x,y);
		rect(0,30,160,40);
		rect(0,85,160,20);
		rect(0,150,160,15);
		rect(0,175,160,15);
		rect(0,200,160,15);
		rect(0,285,160,15);
	pop();
}

function changeReveal() { // Listener del botón para cambiar fillVar
	if (reveal == 0) {
		reveal = 255;
	} else {
		reveal = 0;
	}
}

function fakeBack(reveal) {
	push();
		fill(0,0,0,reveal);
		rect(0,0,570,120);
		rect(0,300,570,100);
		rect(0,0,140,400);
		rect(200,0,210,400);
		rect(470,0,100,400);
	pop();
}