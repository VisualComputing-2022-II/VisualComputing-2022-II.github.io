var img;

function preload() {
	img = loadImage(['/sketches/ship.png']); // Load the image
}
  
function setup() {
	createCanvas(600, 600);
	background(255);

	// img.resize(width,height);
	img.resize(0,400);
	var maxRange = 256
	colorMode(HSL, maxRange);
	
	image(img, 0, 0);

	var histogram = new Array(maxRange);
	for (i = 0; i <= maxRange; i++) {
		histogram[i] = 0
	}

	loadPixels();
	
	for (var x = 0; x < img.width; x+=5) {
		for (var y = 0; y < img.height; y+=5) {
			var loc = (x + y * img.width) * 4;
			var h = pixels[loc];
			var s = pixels[loc + 1];
			var l = pixels[loc + 2];
			var a = pixels[loc + 3];
			b = int(l);
			histogram[b]++
		}
	}

	// img.filter(GRAY);
	// image(img, 0, 0);
	
	stroke(300,100,80)
	push()
		// translate(0,200)
		for (x = 0; x <= maxRange; x++) {
			xPos = map(x,0,maxRange,0, img.width-20)
			index = histogram[x];
			y1 = int(map(index, 0, max(histogram), height, height-200));
			y2 = height
			line(xPos, y1, xPos, y2);
		}
	pop()
}