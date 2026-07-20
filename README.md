# Schumacher — sitio web

Landing page one-page para Schumacher (aberturas, pisos y decks).

## Estructura
- `index.html` — estructura de la página
- `styles.css` — estilos y variables de color (editables en `:root` al principio del archivo)
- `script.js` — datos del negocio (precios, promos, planes, etc.) y toda la lógica interactiva
- `logo.png` — logo con fondo transparente

## Cómo editar contenido
Todos los datos (precios, promociones, textos de estadísticas, planes, catálogo, galería) están
en objetos al principio de `script.js`, en la sección:

```
DATOS DEL NEGOCIO — editá acá para actualizar contenido, precios y textos
```

Los valores marcados como EJEMPLO son estimados y hay que reemplazarlos por datos reales antes
de publicar (precios por m², promociones vigentes, estadísticas del hero/Nosotros y fotos de
la galería, que hoy son placeholders).

## Cómo publicar en GitHub Pages
1. Subí estos 4 archivos a la raíz de un repositorio (o a una carpeta y ajustá las rutas).
2. En Settings → Pages, elegí la rama y carpeta donde están estos archivos.
3. Listo, no requiere build ni dependencias — es HTML/CSS/JS puro.
