# Override Group

Proyecto grupal de la materia **Front-End** (2do año de la tecnicatura).  
Consiste en un sitio web **estático y responsive** que presenta al grupo **Override**, su bitácora de trabajo y páginas/portafolios individuales de cada integrante.

- Repo: https://github.com/SebasTerco73/Override-Group

---

## Tabla de contenidos

- [Demo](#demo)
- [Descripción](#descripción)
- [Tecnologías](#tecnologías)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Secciones del sitio](#secciones-del-sitio)
- [Páginas de integrantes](#páginas-de-integrantes)
- [Funcionalidades](#funcionalidades)
- [Cómo ejecutar el proyecto](#cómo-ejecutar-el-proyecto)
- [Deploy](#deploy)
- [Notas y mejoras pendientes](#notas-y-mejoras-pendientes)
- [Créditos](#créditos)

---

## Demo

Sitio publicado en Vercel:  
https://override-group.vercel.app

---

## Descripción

El sitio está compuesto por:

- **Landing principal** (`index.html`) con:
  - Sección **Nosotros**
  - Sección **Bitácora** (timeline de decisiones/dificultades/soluciones)
  - Sección **Miembros** con cards que enlazan a portafolios individuales

- **Portafolios individuales** (una página por integrante), cada uno con su propio HTML, CSS y JS.

---

## Tecnologías

Según el repositorio, el stack es principalmente:

- **HTML** (estructura)
- **CSS** (estilos + responsive con media queries)
- **JavaScript** (interacciones y UI)

Además, se utilizan recursos externos:

- **Font Awesome** (iconos)
- **Google Fonts** (tipografías en algunas páginas)
- Librerías/íconos externos en portafolios (por ejemplo Devicon en algunas páginas)

---

## Estructura del proyecto

Estructura general (simplificada):

```text
Override-Group/
├── index.html
├── ailen.html
├── marcela.html
├── neyel.html
├── sebas.html
├── css/
│   ├── styles.css
│   ├── styles-ailen.css
│   ├── styles-marcela.css
│   ├── styles-neyel.css
│   └── styles-sebas.css
├── js/
│   ├── script.js
│   ├── script-ailen.js
│   ├── script-marcela.js
│   ├── script-neyel.js
│   └── script-sebas.js
├── img/
└── .vscode/
    └── settings.json
```

---

## Secciones del sitio

En `index.html` vas a encontrar:

- **Nosotros**  
  Presentación del grupo Override: origen, evolución y forma de trabajo.

- **Bitácora**  
  Timeline con eventos del proyecto (decisiones, dificultades y soluciones).

- **Miembros**  
  Cards con cada integrante y un botón/enlace a su portafolio:
  - `ailen.html`
  - `marcela.html`
  - `neyel.html`
  - `sebas.html`

---

## Páginas de integrantes

Cada integrante tiene su propia página, con secciones típicas de portfolio:

- Sobre mí
- Skills
- Proyectos (en algunos casos)
- Hobbies / Pasiones
- Películas
- Discos
- Contacto

---

## Funcionalidades

### En la página principal (`index.html`)

Implementadas con `js/script.js`:

- **Menú hamburguesa (mobile)**  
  Abre/cierra el `<nav>` y se cierra al hacer click en enlaces.

- **Animación de burbujas**  
  Se generan “burbujas” animadas periódicamente y se eliminan al finalizar la animación.

- **Botones de scroll**
  - Subir arriba (`btn-arriba`)
  - Bajar al final (`btn-abajo`)
  - Se muestran/ocultan según la posición del scroll.

- **Toggle de tema claro/oscuro**
  - Usa clase `light-mode` en `body`
  - Persiste preferencia en `localStorage` (`theme: "light" | "dark"`)

---

## Cómo ejecutar el proyecto

Al ser un sitio estático, tenés varias opciones:

### Opción A: abrir directamente el HTML

1. Descargá o cloná el repo
2. Abrí `index.html` en tu navegador

### Opción B: levantar con un servidor local (recomendado)

Con VS Code:

- Instalá la extensión **Live Server**
- Click derecho sobre `index.html` → **Open with Live Server**

O con Node (si tenés instalado):

```bash
npx serve .
```

---

## Deploy

El proyecto está desplegado en **Vercel**:  
https://override-group.vercel.app

---

## Notas y mejoras pendientes

Algunas ideas típicas para iterar el proyecto:

- Agregar al `README.md` capturas (screenshots) del sitio.
- Corregir detalles de accesibilidad:
  - `alt` descriptivos consistentes en imágenes
  - jerarquía de headings (`h1`, `h2`, etc.)
- Unificar convenciones de estilos/JS entre portafolios.
- Optimizar assets en `img/` (peso/tamaño, formatos modernos como WebP).

---

---

## Uso de IA

Durante el desarrollo se utilizó IA para apoyar el trabajo:

- GitHub Copilot ayudó con sugerencias y autocompletado de código.
- ChatGPT asistió en la resolución de problemas de la card “oficio” del archivo styles-neyel.css, especialmente en la estructura y estilos.
  (Prompt utilizado: según mi código html ("pegando el apartado de oficio del html") indícame cómo crear una card de oficio en estilo Netflix) sirviendo como base para su modificacion personalizada.
- También se tomaron ideas para accesibilidad y mejoras generales.

---

## Créditos

Proyecto realizado por el grupo **Override**:

| [<img src="https://avatars.githubusercontent.com/u/128065511?v=4" width="115"><br><sub>Ailén Páez</sub><br><sub>a.jorgelinapaez@gmail.com</sub>](https://github.com/ailenpaez) | [<img src="https://avatars.githubusercontent.com/u/124319050?v=4" width="115"><br><sub>Marcela Herrera</sub><br><sub>mfh.jea1814@gmail.com</sub>](https://github.com/HerreraMarcela) | [<img src="https://avatars.githubusercontent.com/u/95725306?v=4" width="115"><br><sub>Neyel Vilaseco</sub><br><sub>neyelvilaseco@gmail.com</sub>](https://github.com/NeyelVila) | [<img src="https://avatars.githubusercontent.com/u/138830413?v=4" width="115"><br><sub>Sebastián Matías Puche</sub><br><sub>sebasterco10@gmail.com</sub>](https://github.com/SebasTerco73) |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
