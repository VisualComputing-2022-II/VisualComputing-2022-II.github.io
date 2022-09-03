---
title: Introduction
type: docs
---

# Showcase Title

Esta página consta de reportes académicos enriquecidos para la asignatura _**Computación Visual**_ del período académico **2022-II** de la _Universidad Nacional de Colombia_.

## Integrantes
* [Juan Esteban Alarcón Bravo](https://github.com/jalarconb)
* [Juan Sebastián Ruiz Sánchez](https://github.com/jusruizsa)
* [Isaac Zarate Reyes](https://github.com/izarater)

---

Welcome to the [gohugo](https://gohugo.io/) template to create rich content [academic reports](https://www.wordy.com/writers-workshop/writing-an-academic-report/) having [p5.js](https://p5js.org/) sketches.

## Hacking

Install the [gohugo](https://gohugo.io/) [static site generator](https://jamstack.org/generators/) then:

```sh
$git clone https://github.com/VisualComputing/showcase
$cd showcase
$git submodule update --init --recursive
$hugo server -D --disableFastRender
```

Deploy with `$git push` after redefined `baseURL` in `config.toml` which should point to your actual public remote.

{{< hint info >}}
The **showcase** template uses the [hugo-book](https://github.com/alex-shpak/hugo-book) theme by default. Check the [hugo themes site](https://themes.gohugo.io/) if you wish to add other ones.
{{< /hint >}}

{{< hint info >}}
If you forked the repo don't forget to activate the [actions](https://github.com/VisualComputing/showcase/actions).
{{< /hint >}}

{{< hint info >}}
If you changed the repo name don't forget to update all the js related (both sketches and assets) urls.
{{< /hint >}}