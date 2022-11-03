---
title: Visual Phenomena & Optical Illusions
description: Ilusiones ópticas y fenómenos visuales.
weight: 1
---

{{% notice warning %}}
**Workshop**  
Study, implement and discuss possible applications of some known visual phenomena and optical illusions.
{{% /notice %}}

---

# Ilusiones Ópticas

Las ilusiones ópticas podrían definirse como una **distorsión de la realidad**, producto de un engaño percibido por nuestro sistema visual, desde los ojos hasta el cerebro.

Se conoce que este último no cuenta con tal nivel de procesamiento necesario para darle manejo a toda la información que se recibe a través de la vista, razón por la cuál el tomar un atajo es preciso para el cerebro, generando por ejemplo las predicciones e interpretaciones que parezcan más lógicas.

## La Pared de la Cafetería

¿Las líneas en la siguiente imagen son diagonales? El contraste y la disposición de los cuadros te harán creer que cada cuadro parezca más ancho en uno de los extremos, pero ¿Qué pasará si removemos los cuadros? [(Ver más)](https://www.oftalvist.es/blog/ilusiones-opticas#4-1:~:text=que%20te%20sorprender%C3%A1n!-,L%C3%ADneas%20paralelas,-Aunque%20no%20lo)

{{< p5-iframe sketch="/sketches/illusions/lineas-paralelas.js" width="582" height="424" >}}


## El Vestido

Más que una ilusión, comprobamos que al iluminar con color azúl en el dorado y viceversa tenemos el mismo resultado.

{{< p5-iframe sketch="/sketches/illusions/vestido.js" width="597" height="464" >}}

## Movimiento a Pasos

Al tener el primer rectángulo una luminosidad muy parecida a la de las rayas blancas del fondo, la mitad del tiempo no nos llega información de movimiento al cerebro. Lo mismo ocurre con el objeto más oscuro y las rayas negras pero a intervalos opuestos, creando la sensación de alternancia.

Además, la información del borde de cada objeto móvil se encuentra únicamente en el color, y la corteza visual no puede detectar el principio y el final de cada rectángulo al mismo tiempo en ningún instante dado. [(Ver más)](https://www.cibermitanios.com.ar/2015/05/ilusiones-opticas-interactivas.html)

{{< p5-iframe sketch="/sketches/illusions/carrera.js" width="712" height="484" >}}

## Ilusión de Orbison

La ilusión consiste en una figura bidimensional (En este caso un cuadrado) superpuesta sobre un fondo de líneas radiales. El resultado es una ilusión óptica en la que tanto la figura como el rectángulo que la contiene aparecen distorsionados; en particular, los cuadrados aparecen ligeramente abultados. [(Ver más)](https://en.wikipedia.org/wiki/Ponzo_illusion)

{{< p5-iframe sketch="/sketches/illusions/orbison.js" width="612" height="464" >}}

## Triángulo de Kanizsa

Esta ilusión es evoca la percepción de un borde ilusorio, que aparece sin la necesidad de un cambio de luminancia o color. [(Ver más)](https://en.wikipedia.org/wiki/Illusory_contours)

{{< p5-iframe sketch="/sketches/illusions/contornos-ilusorios.js" width="524" height="524" >}}

## Ilusión de Ponzo

¿La línea superior es más larga o más corta que la inferior? En este ejemplo, un objeto más lejano tendría que ser más largo que uno más cercano para que ambos produzcan imágenes de retina del mismo tamaño, esto debido a que nuestro cerebro identifica las líneas diagonales de los lados convergentes como la profundidad que requiere para interpretar el mundo tridimensional. [(Ver más)](https://en.wikipedia.org/wiki/Ponzo_illusion)

{{< p5-iframe sketch="/sketches/illusions/ponzo.js" width="612" height="464" >}}