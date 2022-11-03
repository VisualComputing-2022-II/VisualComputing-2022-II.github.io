function preload() {
    colorShader = readShader('blend.frag',  
                    { matrices: Tree.pmvMatrix, varyings: Tree.color4 });
}

function setup() {

    createCanvas(300, 300, WEBGL);
    colorPicker1 = createColorPicker('#fff000')
    colorPicker2 = createColorPicker('#000fff')

    colorPicker1.position(10, 0);
    colorPicker2.position(80, 0);


}

function draw() {

    resetShader()

    background(255);
    fill(colorPicker1.color())
    square(-width/2 + 10, -height/2 + 50, 100)

    fill(colorPicker2.color())
    square(0, -height/2  + 50, 100)

    shader(colorShader)
    color1 = colorPicker1.color()
    color2 = colorPicker2.color()
    colorShader.setUniform('uMaterial1', [red(color1), green(color1), blue(color1), alpha(color1)])
    colorShader.setUniform('uMaterial2', [red(color2), green(color2), blue(color2), alpha(color2)])
    circle(0, 0, 100)

    

}