function setup() {
	createCanvas(500, 500);
	angleMode(DEGREES);
	rectMode(CENTER);
	ellipseMode(CENTER);
}
  
function draw() {
	background(255);

	// Rombo Rojo
	strokeWeight(3);
	noFill();

	// Triángulo Negro
	push();
		stroke('black');
		translate(width/2,70);
		rotate(60);
		triangle(0,0,300,0,150,250);
	pop();

	//Círculo 1
	push();
		noStroke();
		fill('black');
		translate(width/2-150,height/2-125+40);
		ellipse(0,0,80);
		ellipse(300,0,80);
		ellipse(150,250,80);
	pop();

	// Triángulo Ilusorio
	push();
		noStroke();
		fill('white');
		translate(width/2-150,height/2-125+40);
		triangle(0,0,300,0,150,250);
	pop();

}

// -----------------------------------------------------------------------