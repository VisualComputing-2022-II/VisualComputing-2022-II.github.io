---
title: Color
description: Implementaciones de color blending.
weight: 1
katex: true
---

"Blend mode" en la edición de imágenes digitales y los gráficos por computadora se utilizan para determinar cómo se fusionan dos capas entre sí. El modo de fusión predeterminado en la mayoría de las aplicaciones es simplemente oscurecer la capa inferior cubriéndola con lo que esté presente en la capa superior; Debido a que cada píxel tiene valores numéricos, también hay muchas otras formas de combinar dos capas.

La mayoría de los programas de edición de gráficos , como Adobe Photoshop y GIMP , permiten a los usuarios modificar los modos de fusión básicos, por ejemplo, aplicando diferentes niveles de opacidad a la "capa" superior. La "capa" superior no es necesariamente una capa en la aplicación; se puede aplicar con una herramienta de pintura o edición. La "capa" superior también se denomina "capa de mezcla" y "capa activa".

En las fórmulas que se muestran en esta página, los valores van de 0,0 (negro) a 1,0 (blanco).

## Blend Multiply

"Multiply blend" toma los valores del canal RGBA de 0 a 1 de cada píxel en la capa superior y los multiplica con los valores del píxel correspondiente de la capa inferior. Donde quiera que cualquiera de las capas fuera más brillante que el negro, el compuesto es más oscuro; como cada valor es menor que 1, su producto será menor que cada valor inicial que fue mayor que cero.

$ f (a, b) = ab $, \
donde $a$ es el valor de la capa base y $b$ es el valor de la capa superior.

Este modo es conmutativo : intercambiar dos capas no cambia el resultado. Si las dos capas contienen la misma imagen, el modo de mezcla múltiple es equivalente a una curva cuadrática o corrección gamma con $\gamma=2$. Para la edición de imágenes, a veces es más conveniente simplemente ir al cuadro de diálogo Curvas del software, porque brinda más flexibilidad en la forma de las curvas. O se puede usar el cuadro de diálogo Niveles: el número del medio suele ser $1/\gamma$, por lo que se puede escribir simplemente $0,5$.

Si una capa contiene un color homogéneo, como el color gris (0,8, 0,8, 0,8), el modo de fusión múltiple equivale a una curva que es simplemente una línea recta. Esto también es equivalente a usar este valor de gris como opacidad cuando se mezcla el "modo normal" con una capa inferior negra.
{{< p5-iframe sketch="/sketches/shaders/color/blend.js" lib1="https://cdn.jsdelivr.net/gh/VisualComputing/p5.treegl/p5.treegl.js" width="720" height="580" >}}


## Blend Multiply with brightness


En este modo tambien se realiza una multiplicación de colores, pero se agrega un factor mas a la multiplicación que es el valor del brillo representado por un slider entre 0 y 1.

{{< p5-iframe sketch="/sketches/shaders/color/blend2.js" lib1="https://cdn.jsdelivr.net/gh/VisualComputing/p5.treegl/p5.treegl.js" width="720" height="580" >}}