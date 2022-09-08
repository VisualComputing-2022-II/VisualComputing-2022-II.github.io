---
title: Masking
description: Masking description
weight: 2
katex: true
---

{{% notice warning %}}
**Workshop**  
Implement an image processing web app supporting different image kernels and supporting:  
**-** Image histogram visualization.  
**-** Different lightness (coloring brightness) tools.
{{% /notice %}}

---

# Kernel y Convoluciones

Un **kernel**, una **matriz de convolución** o una **máscara** es una matriz pequeña que se utiliza para desenfocar, agudizar, grabar, detectar bordes y más. Esto se logra haciendo una **convolución** entre el _kernel_ y una _imagen_. [(Leer más)](https://en.wikipedia.org/wiki/Kernel_%28image_processing%29#Convolution)

$$
\left (
\begin{bmatrix}
a & b & c\\\\
d & e & f\\\\
g & h & i
\end{bmatrix}
\ast 
\begin{bmatrix}
1 & 2 & 3\\\\
4 & 5 & 6\\\\
7 & 8 & 9
\end{bmatrix}
\right )
\left [ x,y \right ]
\=
(i\cdot 1) + (h\cdot 2) + (g\cdot 3) + (f\cdot 4) + (e\cdot 5) + (d\cdot 6) + (c\cdot 7) + (b\cdot 8) + (a\cdot 9)
$$

## Implementación

La implementación permite construir un kernel arbitrario y visualizar su efecto en la imagen. Algunos kernels de ejemplo son:

$$
\textrm{Identidad}
\=
\begin{bmatrix}
0 & 0 & 0\\\\
0 & 1 & 0\\\\
0 & 0 & 0
\end{bmatrix}
\hspace{1cm}
\textrm{Detección de Bordes}
\=
\begin{bmatrix}
-1 & -1 & -1\\\\
-1 &  8 & -1\\\\
-1 & -1 & -1
\end{bmatrix}
\hspace{1cm}
\textrm{Enfoque}
\=
\begin{bmatrix}
 0 & -1 &  0\\\\
-1 &  5 & -1\\\\
 0 & -1 &  0
\end{bmatrix}
$$

{{% notice tip %}}
Presione _**a**_ para alternar entre el _filtro completo_ y el _filtro focalizado_.
{{% /notice %}}

{{< p5-iframe sketch="/sketches/convolution.js" width="750" height="550" >}}

---

# Histogramas

Un **histograma de imagen** es un tipo de histograma que actúa como una representación gráfica de la distribución tonal en una imagen digital. Traza el número de píxeles para cada valor tonal. Permite juzgar la distribución tonal completa de un vistazo. [(Leer más)](https://en.wikipedia.org/wiki/Image_histogram)

## Implementación

En esta implementación, la imagen está en modo de color **HSL**; el histograma representa la cantidad de **L**.

{{< p5-iframe sketch="/sketches/histogram.js" width="700" height="624" >}}