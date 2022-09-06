# Masking

## Masking

### Planteamiento del Problema

{{< hint danger >}}
**Workshop**  
Implement an image processing web app supporting different image kernels and supporting:
* Image histogram visualization.
* Different lightness (coloring brightness) tools.
{{< /hint >}}

### Background

{{< hint warning >}}
Un kernel, una matriz de convolución o una máscara es una matriz pequeña que se utiliza para desenfocar, agudizar, grabar, detectar bordes y más. Esto se logra haciendo una convolución entre el kernel y una imagen.
{{< /hint >}}

### Código y Resultados

{{< details title="Convolución" open=false >}}
{{< hint warning >}}
La convolución es el proceso de agregar cada elemento de la imagen a sus vecinos locales, ponderados por el kernel. [Ver más](https://en.wikipedia.org/wiki/Kernel_%28image_processing%29#Convolution)
{{< /hint >}}
{{< /details >}}

{{< p5-iframe sketch="/sketches/convolution.js" width="750" height="450" >}}

{{< details title="Histograma" open=false >}}
{{< hint warning >}}
Un histograma de imagen es un tipo de histograma que actúa como una representación gráfica de la distribución tonal en una imagen digital. Traza el número de píxeles para cada valor tonal. Permite juzgar la distribución tonal completa de un vistazo. [Ver más](https://en.wikipedia.org/wiki/Image_histogram)
{{< /hint >}}
{{< /details >}}

{{< p5-iframe sketch="/sketches/histogram.js" width="700" height="500" >}}

### Conclusiones y Trabajo Futuro

{{< hint warning >}}
Tanto para el desarrollo de las ilusiones ópticas como el de máscaras, filtros y convoluciones, encontramos un enorme valor en materia de computación visual, apenas podemos vislumbrar, percibir por un instante una pizca del alcance creativo y más, colaborativo. Nos planteamos trabajar en pro de alcanzar estos adyacentes posibles y por qué no, mejorar el aspecto visual de nuestros desarrollos a niveles inimaginados.  
{{< /hint >}}