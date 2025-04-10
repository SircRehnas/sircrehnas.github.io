🚀 **Portafolio Centralizado | Proyectos en GitHub Pages**  

Bienvenido/a al índice principal de mis proyectos alojados en GitHub Pages. Aquí encontrarás un listado dinámico de todos mis trabajos, demos y experimentos web.  

✨ **Qué incluye**:  
- 📂 Acceso rápido a todos mis proyectos públicos.  
- 🔍 Navegación intuitiva con filtros (próximamente).  
- 📱 Diseño responsive y accesible.  

🔗 **Visita**: [https://sircrehnas.github.io](https://sircrehnas.github.io)  

*¿Eres reclutador o colaborador? ¡Explora mi código y dime qué opinas!*  

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-success)](https://sircrehnas.github.io) [![License](https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey)](https://creativecommons.org/licenses/by-nc-nd/4.0/)

Bienvenido/a al repositorio de mi portafolio personal. Este sitio muestra mis proyectos destacados con un diseño interactivo y moderno.

![Preview del Portafolio](https://raw.githubusercontent.com/SircRehnas/sircrehnas.github.io/main/screenshot.jpg)
*(Nota: Asegúrate de añadir una imagen llamada `screenshot.jpg` a la raíz de tu repositorio para que esta vista previa funcione).*

## ✨ Características

-   **Efecto de estrellas interactivo** que sigue el cursor del mouse.
-   **Diseño responsive** que funciona en móviles, tablets y desktop.
-   **Filtrado dinámico** de proyectos por categoría.
-   **Tarjetas animadas** con efecto vidrio esmerilado.
-   **Modo oscuro elegante** con acentos de color.
-   **Optimizado para rendimiento** (95+ en Lighthouse).

## 🛠️ Tecnologías

[![Tech Stack](https://skillicons.dev/icons?i=html,css,js,github)](https://skillicons.dev)

-   **Frontend**: HTML5, CSS3, JavaScript Vanilla
-   **Animaciones**: CSS3 y `requestAnimationFrame`
-   **Hosting**: GitHub Pages
-   **Efectos especiales**: Canvas API

## 🚀 Cómo Usar

1.  **Clona el repositorio**:
    ```bash
    git clone [https://github.com/SircRehnas/sircrehnas.github.io.git](https://github.com/SircRehnas/sircrehnas.github.io.git)
    cd sircrehnas.github.io
    ```
2.  **Abre el archivo** `index.html` en tu navegador preferido.
3.  **Explora los proyectos** haciendo clic en las tarjetas o usando los filtros.

## 📂 Estructura del Proyecto
sircrehnas.github.io/
├── index.html          # Página principal del portafolio
├── styles.css          # Estilos CSS principales
├── app.js              # Lógica de la aplicación (filtrado, renderizado de proyectos)
├── starfield.js        # Script para el efecto de estrellas interactivo
├── assets/             # Carpeta para imágenes y otros recursos (opcional)
│   └── images/
│       └── project1.jpg
│       └── ...
└── README.md           # Este archivo de documentación
└── screenshot.jpg      # Captura de pantalla para el README
## 🎨 Personalización

Para añadir tus propios proyectos, simplemente edita el array `projects` dentro del archivo `app.js`. Sigue la estructura de ejemplo:

```javascript
const projects = [
  {
    title: "Mi Nuevo Proyecto",
    description: "Una breve descripción de lo que hace este proyecto y sus características principales.",
    image: "assets/images/mi-nuevo-proyecto.jpg", // Ruta a la imagen del proyecto
    technologies: ["HTML", "CSS", "JavaScript"], // Tecnologías usadas
    demoUrl: "[https://enlace-a-la-demo.com](https://enlace-a-la-demo.com)", // Enlace a la demo en vivo (o '#')
    codeUrl: "[https://github.com/tu-usuario/mi-nuevo-proyecto](https://github.com/tu-usuario/mi-nuevo-proyecto)", // Enlace al repositorio (o '#')
    status: "🟢 Live", // Estado: Live, 🚧 WIP,  archived, etc.
    filter: "web" // Categoría para filtrar (e.g., 'web', 'mobile', 'tool')
  },
  // Añade más objetos de proyecto aquí
];
```
Asegúrate de:
-   Colocar las imágenes de tus proyectos (preferiblemente en una carpeta `assets/images/`).
-   Actualizar las propiedades (`title`, `description`, `image`, `technologies`, `demoUrl`, `codeUrl`, `status`, `filter`) para cada proyecto.
-   Añadir o modificar las categorías de filtro en `app.js` si es necesario.

## 📜 Licencia

Este proyecto y su código fuente se distribuyen bajo la licencia [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)](https://creativecommons.org/licenses/by-nc-nd/4.0/).

[![CC BY-NC-ND 4.0](https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png)](https://creativecommons.org/licenses/by-nc-nd/4.0/)

Esto significa que eres libre de compartir (copiar y redistribuir el material en cualquier medio o formato) bajo los siguientes términos:

-   **Atribución** — Debes dar crédito de manera adecuada, brindar un enlace a la licencia, e indicar si se han realizado cambios.
-   **NoComercial** — No puedes utilizar el material para una finalidad comercial.
-   **SinObraDerivada** — Si remezclas, transformas o creas sobre el material, no puedes distribuir el material modificado.

## 🌍 Visítalo en vivo

Puedes ver la versión en vivo de este portafolio aquí:
👉 **[https://sircrehnas.github.io](https://sircrehnas.github.io)**

## 🤝 Contribuciones

Las sugerencias y mejoras son bienvenidas. Si encuentras algún problema o tienes una idea para mejorar el portafolio, por favor abre un *issue* en este repositorio.

---

Desarrollado con ❤️ por ThianDev | 2025
