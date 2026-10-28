# Cool Images Generator

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![Node.js](https://img.shields.io/badge/Node.js-JavaScript-green.svg)](https://nodejs.org/)

[English](#english) | [Español](#español)

---

## English

A simple Node.js script that generates random high-resolution image links using the `cool-images` package, formats timestamps with `moment`, and logs the generated URLs to a `log.txt` file.

### Features
- Generates 10 random image URLs with resolution 1920x1080.
- Formats local timestamps in Spanish format (`YYYY/MM/DD hh:mm:ss a`).
- Appends generated links and timestamps into `log.txt`.

### Prerequisites
- [Node.js](https://nodejs.org/) installed (v12 or higher recommended).
- [npm](https://www.npmjs.com/) (bundled with Node.js).

### Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/zirryzero/Cool-images.git
cd Cool-images
npm install
```

### Usage
Run the script using:
```bash
node main.js
```

### Output
The console will display:
```
Saved!
```
And after 1 second, a timestamp and 10 image URLs will be appended to `log.txt`:
```
2026/10/28 12:00:00 am
https://unsplash.it/1080/1920?image=...
...
```

### Author
- Harold ([@zirryzero](https://github.com/zirryzero))

### License
This project is licensed under the [ISC License](LICENSE).

---

## Español

Un script sencillo de Node.js que genera enlaces a imágenes aleatorias en alta resolución usando el paquete `cool-images`, formatea marcas de tiempo con `moment` y registra los enlaces resultantes en un archivo `log.txt`.

### Características
- Genera 10 URLs de imágenes aleatorias con resolución 1920x1080.
- Formatea la fecha y hora local (`YYYY/MM/DD hh:mm:ss a`).
- Añade los enlaces generados y la fecha/hora al final de `log.txt`.

### Requisitos previos
- Tener instalado [Node.js](https://nodejs.org/) (versión 12 o superior recomendada).
- [npm](https://www.npmjs.com/) (incluido con Node.js).

### Instalación
Clona el repositorio e instala las dependencias:
```bash
git clone https://github.com/zirryzero/Cool-images.git
cd Cool-images
npm install
```

### Uso
Ejecuta el script con:
```bash
node main.js
```

### Salida
La consola mostrará:
```
Saved!
```
Y tras 1 segundo, se agregará la marca de tiempo y las 10 URLs de imágenes en `log.txt`:
```
2026/10/28 12:00:00 am
https://unsplash.it/1080/1920?image=...
...
```

### Autor
- Harold ([@zirryzero](https://github.com/zirryzero))

### Licencia
Este proyecto está bajo la Licencia [ISC](LICENSE).
