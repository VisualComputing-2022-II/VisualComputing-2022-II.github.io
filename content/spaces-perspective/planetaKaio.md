---
title: Planeta Kaio
description: Implementación de un escenario tridimensional con temática del Planeta Kaio de Dragon Ball. Se usan conceptos de espacios, cámara, perspectiva y texturas.
weight: 1
katex: true
---

<!-- {{% notice warning %}}
**Workshop**  
Implement an image processing web app supporting different image kernels and supporting:  
**-** Image histogram visualization.  
**-** Different lightness (coloring brightness) tools.
{{% /notice %}} -->

---

# Coordenadas Esféricas

Este tipo de [coordenadas](https://es.wikipedia.org/wiki/Coordenadas_esf%C3%A9ricas) están basadas en el sistema de coordenadas polares, el cuál recordemos es bidimensional y consta de un ángulo y el valor del radio. Para nuestro caso aumentaremos a 3 tres dimensiones agregando un ángulo adicional.

![Coordenadas](/sketches/coords2.png) 
> De Cristian Quinzacara - Trabajo propio, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=122972075

**Líneas y superficies coordenadas** 

Debido a que nuestro interés es recorrer un planeta de manera lineal como lo haría un auto, podemos servirnos de las **líneas coordenadas**, las cuales obtenemos variando una de las coordenadas y manteniendo fijas las otras dos:

* Líneas coordenadas **r**: Semirrectas radiales partiendo del origen de coordenadas.
* Líneas coordenadas **θ**: Semicírculos verticales (meridianos).
* Líneas coordenadas **φ**: Circunferencias horizontales (paralelos).

Para este caso se mantiene fijo el **r** y varían los otros dos ángulos.

![Coordenadas](/sketches/coords.png) 
> De Lyudmil Antonov Lantonov - Este gráfico vectorial, sin especificar según el W3C, fue creado con Inkscape., CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=2229816

<!-- 
![Coordenadas](/sketches/coordsplane.png) 
> De Gonfer, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=1716817
-->

**Texturas** 

Para las texturas del planeta, el ambiente, las construcciones, árboles, etc. Utilizamos imágenes respectivamente y las librerias de P5 texture(), textureMode() y textureWrap() para cargar estas imágenes a los diferentes elementos mencionados. 

**Caso especial auto modelado** 

De manera distinta se realizó el proceso de desarrollo del carrito, para el cuál no sólo se carga la textura sino también se realiza la carga de un modelo en 3D para darle forma especial a este objeto, para ello una vez tenemos el archivo .obj contenedor de nuestro modelo, usamos la librería de P5 loadModel() y model() para carga y visualización respectivamente.


<!-- 
$$
\left [ x,y \right ]
\=
(i\cdot 1) + (h\cdot 2) + (g\cdot 3)
$$
-->

## Implementación Planeta Kaio

{{% notice tip %}}
Movimiento del carro: _**WASD**_. Cámara del carro: **Flechas Izq. y Der.**.
{{% /notice %}}

{{< p5-iframe sketch="/sketches/kaio.js" lib1="https://cdn.jsdelivr.net/gh/freshfork/p5.RoverCam@1.1.1/p5.rovercam.min.js" width="1320" height="830" >}}
<!-- {{< p5-iframe sketch="/sketches/kaio.js" width="520" height="530" >}} -->