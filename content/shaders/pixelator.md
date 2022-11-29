---
title: Pixelator
description: Implementación de Pixelator por hardware y software.
weight: 3
katex: true
---

## Coherencia Espacial

Por medio del famoso y trascendentalmente misterioso experimento de la doble rendija podemos recordar el concepto de coherencia espacial. Podemos contemplar de manera real y conceptual a la vez el cambio en la coherencia espacial óptica en función del tamaño de la fuente. Específicamente dos ondas luminosas de la misma frecuencia y amplitud, que nos entregan como resultado esta variación de luz en distintos patrones de interferencia.

![Rendija](/sketches/assets/rendijaCoherenciaEspacial.jpg) 

> J. P. Sharpe and D. A. Collins - *Demonstration of optical spatial coherence using a variable width source*, https://aapt.scitation.org/doi/10.1119/1.3549723


## Aplicación y Frame Rate

Los siguientes ejemplos hacen uso de este concepto de coherencia espacial para reducir la resolución o comprimir diferentes imágenes y video hasta el punto de tener un solo texel. A medida que jugamos con un slider de esta aplicación, podremos realizar una comparación de rendimiento programando con hardware (Shaders) y con software (P5).

Es importante mencionar que el mecanismo realizado por este algoritmo no está exento del fenómeno de *aliasing*, para ello requeriríamos un algoritmo de distribución normal de Gauss para promediar los texels resultantes a partir de sus colindantes.

El método utilizado a continuación consiste en reducir a submatrices la imágen original según se quiera reducir la resolución, luego se tomará el valor RGB del primer pixel de esta submatriz para darle su valor al cuadro (función rec() de P5) que reemplazará toda la submatriz, lo cuál nos produce el fenómeno de *aliasing* que podemos analizar a continuación.
![ExplanationPixelator](/sketches/assets/pixelator.png) 

Ahora nos resta realizar el testeo, poner a prueba el rendimiento de este algoritmo, y analizar lo que cuesta renderizar la imágen desde del hardware y renderizarla pixel por pixel por software, para este último caso podemos observar que tenderá a colapsar el sistema (se reducen los frames por segundo de la función draw) a medida que aumentamos la resolución.

## With Shaders
{{< p5-iframe sketch="/sketches/shaders/pixelator/pixelatorShader.js" lib1="https://cdn.jsdelivr.net/gh/VisualComputing/p5.treegl/p5.treegl.js" width="625" height="625" >}}

---

## With Software

### Image
{{< p5-iframe sketch="/sketches/shaders/pixelator/pixelatorSoftware.js" lib1="https://cdn.jsdelivr.net/gh/VisualComputing/p5.treegl/p5.treegl.js" width="700" height="800" >}}

### Video
{{< p5-iframe sketch="/sketches/shaders/pixelator/pixelatorSoftwareVideo.js" lib1="https://cdn.jsdelivr.net/gh/VisualComputing/p5.treegl/p5.treegl.js" width="700" height="800" >}}