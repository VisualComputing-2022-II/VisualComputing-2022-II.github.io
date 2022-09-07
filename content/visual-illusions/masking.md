---
title: Masking
description: Masking description
weight: 2
---

{{% notice warning %}}
**Workshop**  
Implement an image processing web app supporting different image kernels and supporting:  
**-** Image histogram visualization.  
**-** Different lightness (coloring brightness) tools.
{{% /notice %}}

---

# Kernel y Convoluciones

Un kernel, una matriz de convolución o una máscara es una matriz pequeña que se utiliza para desenfocar, agudizar, grabar, detectar bordes y más. Esto se logra haciendo una convolución entre el kernel y una imagen.

## Implementación

La convolución es el proceso de agregar cada elemento de la imagen a sus vecinos locales, ponderados por el kernel. [(Leer más)](https://en.wikipedia.org/wiki/Kernel_%28image_processing%29#Convolution)

{{< p5-iframe sketch="/sketches/convolution.js" width="750" height="450" >}}

---

# Histogramas

Un histograma de imagen es un tipo de histograma que actúa como una representación gráfica de la distribución tonal en una imagen digital. Traza el número de píxeles para cada valor tonal. Permite juzgar la distribución tonal completa de un vistazo. [(Leer más)](https://en.wikipedia.org/wiki/Image_histogram)

{{< p5-iframe sketch="/sketches/histogram.js" width="700" height="500" >}}