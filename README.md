# Recetarios Escolares Saludables 🍲

Esta es una aplicación web simple que presenta dos colecciones de recetas saludables dirigidas a escuelas primarias:

1.  **Recetario Escolar Veracruz:** Basado en el documento "RECETARIO ATENCIÓN ALIMENTARIA - ALIMENTACIÓN ESCOLAR MODALIDAD CALIENTE" del DIF Estatal Veracruz.
2.  **Recetario Saludable UNICEF:** Basado en el documento "RECETARIO SALUDABLE PARA LAS ESCUELAS PRIMARIAS" de UNICEF México y el Instituto Nacional de Salud Pública (INSP).

La aplicación está diseñada para ser responsiva y fácil de usar en dispositivos móviles.

## Características

* Visualización de recetas en tarjetas interactivas.
* Separación visual entre los dos recetarios.
* Ventana modal para ver detalles (ingredientes y preparación) de cada receta.
* Diseño responsivo optimizado para móviles.
* Navegación simple (incluyendo menú móvil).

## Cómo Usar

1.  Abre el archivo `index.html` en tu navegador web.
2.  Navega por la página principal para ver las tarjetas de recetas, separadas por recetario (Veracruz y UNICEF).
    * En pantallas pequeñas, usa el botón de menú (hamburguesa) en la esquina superior derecha para navegar directamente a cada sección.
3.  Haz clic en cualquier tarjeta de receta para abrir una ventana modal con los detalles.
4.  Dentro del modal, puedes ver la lista de ingredientes y los pasos de preparación.
5.  Cierra el modal haciendo clic en la '×' o fuera del cuadro de diálogo.

## Estructura de Archivos

El proyecto consta de 3 archivos principales:

* `index.html`: Contiene la estructura HTML base de la aplicación.
* `style.css`: Contiene los estilos CSS (principalmente utilidades de Tailwind CSS y algunos estilos personalizados).
* `script.js`: Contiene los datos de las recetas y la lógica JavaScript para mostrar las tarjetas, el modal y manejar la navegación.

## Despliegue en GitHub Pages

Puedes alojar esta aplicación gratuitamente usando GitHub Pages:

1.  **Crea un Repositorio:** Crea un nuevo repositorio en tu cuenta de GitHub (o usa uno existente).
2.  **Sube los Archivos:** Sube los archivos `index.html`, `style.css`, y `script.js` a la raíz de tu repositorio.
3.  **Activa GitHub Pages:**
    * Ve a la configuración (`Settings`) de tu repositorio en GitHub.
    * En la sección `Pages` (usualmente en el menú lateral izquierdo).
    * Selecciona la rama desde la cual quieres desplegar (normalmente `main` o `master`).
    * Selecciona la carpeta raíz (`/root`) como fuente.
    * Guarda los cambios.
4.  **Accede a tu Sitio:** GitHub te proporcionará una URL (algo como `https://tu-usuario.github.io/tu-repositorio/`) donde tu aplicación estará visible después de unos minutos.

## Tecnologías Utilizadas

* HTML5
* CSS3 (con [Tailwind CSS](https://tailwindcss.com/))
* JavaScript (Vanilla)

## Fuentes de Datos

* PDF: "RECETARIO ATENCIÓN ALIMENTARIA - ALIMENTACIÓN ESCOLAR MODALIDAD CALIENTE" - DIF Estatal Veracruz.
* PDF: "RECETARIO SALUDABLE PARA LAS ESCUELAS PRIMARIAS" - UNICEF México / INSP.

