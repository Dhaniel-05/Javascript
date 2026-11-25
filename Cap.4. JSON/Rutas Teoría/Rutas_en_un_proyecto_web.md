# Rutas en un proyecto web

Una **ruta** es la dirección que le indica al navegador dónde está un archivo: una imagen, una hoja de estilos, un script o un `.json`. Si la ruta está mal, el archivo no carga y en la consola (F12) suele aparecer un error **404 (no encontrado)**.

## Contenido

1. [Tipos de ruta](#1-tipos-de-ruta)
2. [Los símbolos básicos](#2-los-símbolos-básicos)
3. [La regla más importante: ¿desde dónde se calcula?](#3-la-regla-más-importante-desde-dónde-se-calcula)
4. [Cómo calcular una ruta paso a paso](#4-cómo-calcular-una-ruta-paso-a-paso)
5. [Errores comunes](#5-errores-comunes)
6. [Práctica](#6-práctica)

## 1. Tipos de ruta

| Tipo | Cómo empieza | Desde dónde se calcula | Ejemplo |
|---|---|---|---|
| **URL absoluta** | Con el protocolo (`https://`) | No depende de dónde esté usted: es la dirección completa | `https://jsonplaceholder.typicode.com/posts` |
| **Relativa a la raíz** | Con `/` | Desde la raíz del servidor | `/datos/persona.json` |
| **Relativa** | Con `./`, `../` o directamente con el nombre | Desde la ubicación actual | `../datos/persona.json` |

> Es común llamar «ruta absoluta» a la que empieza con `/`. Es la que recorre el camino completo desde la raíz del sitio.

### Cuidado con las rutas que empiezan con `/`

La raíz no es «la carpeta de su proyecto», sino **la raíz del servidor**. Depende de cómo se publique:

| Dónde se ejecuta | `/datos/persona.json` apunta a |
|---|---|
| Live Server abierto en la carpeta del proyecto | La carpeta `datos` del proyecto |
| Live Server abierto en una carpeta superior | La carpeta `datos` de esa carpeta superior |
| GitHub Pages de un repositorio (`usuario.github.io/repositorio/`) | `usuario.github.io/datos/persona.json`, **sin** el nombre del repositorio |

Por eso en este curso se usan **rutas relativas**: siguen funcionando aunque el proyecto completo se mueva de lugar.

## 2. Los símbolos básicos

| Símbolo | Significado | Ejemplo |
|---|---|---|
| `archivo.json` | Está en la carpeta actual | `persona.json` |
| `./` | La carpeta actual (es lo mismo que no escribir nada) | `./persona.json` |
| `../` | Subir un nivel | `../persona.json` |
| `../../` | Subir dos niveles | `../../persona.json` |
| `carpeta/` | Entrar a una carpeta | `datos/personas/persona.json` |

Use siempre la barra `/`. La barra invertida `\` es propia de las rutas de Windows y no debe usarse en la web.

## 3. La regla más importante: ¿desde dónde se calcula?

Una ruta relativa **no siempre se calcula desde el archivo donde está escrita**. Depende de quién la use:

| Dónde se escribe la ruta | Se calcula desde |
|---|---|
| `src` y `href` en un HTML | El archivo **HTML** |
| `url(...)` en un CSS | El archivo **CSS** |
| `fetch()` y `XMLHttpRequest` en un JS | La **página HTML** que cargó el script |
| `new Audio()` o `imagen.src = ...` en un JS | La **página HTML** que cargó el script |
| `import` en módulos de JavaScript | El archivo **JS** que hace el `import` |

> Las dos filas de la página HTML suponen que la página no usa la etiqueta `<base>`, que cambia el punto de partida.

### Ejemplo de la diferencia

```text
proyecto/
├── index.html          ← carga js/app.js
├── datos/
│   └── persona.json
└── js/
    └── app.js          ← aquí se escribe el fetch
```

```js
// Dentro de js/app.js

fetch('../datos/persona.json'); // No es la ruta correcta: piensa desde la carpeta js/
fetch('datos/persona.json');    // Correcto: piensa desde index.html
```

> **Un detalle que confunde:** si `proyecto/` es la raíz del servidor, la primera línea también podría funcionar, porque no se puede subir más arriba de la raíz y el navegador ignora el `../` sobrante. Dejaría de funcionar al publicar el proyecto dentro de una subcarpeta.

En los ejercicios de este curso el `.html` y su `.js` están en **la misma carpeta**, así que el resultado es igual desde cualquiera de los dos. Cuando están en carpetas distintas, manda el HTML.

## 4. Cómo calcular una ruta paso a paso

Hágase tres preguntas:

1. **¿Desde dónde parto?** Use la tabla de la sección anterior.
2. **¿Dónde está el archivo que necesito?**
3. **¿Cuánto debo subir y a qué carpetas debo entrar?**

### Ejemplo real de este capítulo

El ejercicio 3 necesita leer el JSON del ejercicio 1:

```text
Cap.4. JSON/
├── ex_01_Persona/
│   └── ex_01_persona.json         ← lo que necesito
└── ex_03_Acceder_JSON/
    ├── ex_03_acceder_json.html    ← punto de partida
    └── ex_03_acceder_json.js      ← aquí se escribe la ruta
```

| Paso | Acción | La ruta va quedando |
|---|---|---|
| 1 | Parto de la carpeta `ex_03_Acceder_JSON`, donde está el HTML | |
| 2 | Subo un nivel para llegar a `Cap.4. JSON` | `../` |
| 3 | Entro a la carpeta `ex_01_Persona` | `../ex_01_Persona/` |
| 4 | Escribo el nombre del archivo | `../ex_01_Persona/ex_01_persona.json` |

```js
let xhr = new XMLHttpRequest();
xhr.open('GET', '../ex_01_Persona/ex_01_persona.json', true);
```

Lo mismo con `fetch`:

```js
fetch('../ex_01_Persona/ex_01_persona.json')
    .then(respuesta => respuesta.json())
    .then(persona => console.log(persona))
    .catch(error => console.error(error));
```

Vea los archivos: [JSON del ejercicio 1](../ex_01_Persona/ex_01_persona.json) y [código del ejercicio 3](../ex_03_Acceder_JSON/ex_03_acceder_json.js).

## 5. Errores comunes

### Calcular desde el archivo equivocado

Es el caso de la sección 3: en `fetch` se parte de la página HTML, no de la carpeta del `.js`.

### Abrir el HTML con doble clic

Al abrirlo así, la dirección empieza por `file://`. Las rutas relativas de imágenes, CSS y scripts clásicos suelen funcionar, pero el navegador **bloquea `fetch` y `XMLHttpRequest`** al leer archivos locales, por seguridad. También bloquea los módulos (`type="module"`).

**Solución:** use la extensión **Live Server** de Visual Studio Code. La dirección empezará por `http://`.

### No respetar mayúsculas y minúsculas

Windows normalmente no distingue entre `Persona.json` y `persona.json`, pero muchos servidores, incluido GitHub Pages, **sí distinguen**. Un proyecto puede funcionar en su computador y fallar al publicarlo.

**Solución:** escriba cada nombre exactamente como aparece en la carpeta.

### Olvidar que `fetch` no falla con un 404

Si la ruta está mal, el servidor responde 404, pero `fetch` no lo considera un error y no salta al `catch` por sí solo. Revise `respuesta.ok`:

```js
fetch('datos/persona.json')
    .then(respuesta => {
        if (!respuesta.ok) {
            throw new Error(`No se encontró el archivo (código ${respuesta.status})`);
        }
        return respuesta.json();
    })
    .then(persona => console.log(persona))
    .catch(error => console.error(error.message));
```

### Cómo encontrar el error

1. Abra las herramientas del navegador con **F12**.
2. Entre a la pestaña **Red** (*Network*) y recargue la página.
3. Busque la petición en rojo y revise la **URL completa** que pidió el navegador. Compárela con la ubicación real del archivo.

> **Consejo:** evite espacios y tildes en los nombres de archivos y carpetas de proyectos nuevos. Pueden funcionar, pero en las direcciones aparecen codificados (un espacio se ve como `%20`) y es más fácil equivocarse.

## 6. Práctica

Cree esta estructura:

```text
proyecto/
├── carpeta1/
│   ├── archivo1.html
│   └── subcarpeta/
│       └── archivo2.json
└── carpeta2/
    ├── archivo3.js
    └── archivo4.css
```

Intente resolver cada reto antes de ver la respuesta.

### Reto 1

Desde `archivo1.html`, enlace `archivo4.css`.

<details>
<summary>Ver la respuesta</summary>

```html
<link rel="stylesheet" href="../carpeta2/archivo4.css">
```

Se sube de `carpeta1` a `proyecto` y se entra a `carpeta2`.

</details>

### Reto 2

Desde `archivo1.html`, cargue `archivo3.js`.

<details>
<summary>Ver la respuesta</summary>

```html
<script src="../carpeta2/archivo3.js"></script>
```

</details>

### Reto 3

`archivo1.html` carga `archivo3.js`. ¿Qué ruta debe escribir **dentro de `archivo3.js`** para leer `archivo2.json` con `fetch`?

<details>
<summary>Ver la respuesta</summary>

```js
fetch('subcarpeta/archivo2.json');
```

Aunque el código está en `carpeta2`, la ruta se calcula desde `archivo1.html`, que está en `carpeta1`.

</details>

### Reto 4

Ahora una página guardada en `carpeta2` carga `archivo3.js`. ¿Cómo cambia la ruta del `fetch`?

<details>
<summary>Ver la respuesta</summary>

```js
fetch('../carpeta1/subcarpeta/archivo2.json');
```

El código es el mismo archivo, pero cambió la página de partida.

</details>

### Reto 5

Dentro de `archivo4.css` quiere usar como fondo una imagen `fondo.png` guardada en `carpeta1`.

<details>
<summary>Ver la respuesta</summary>

```css
body {
    background-image: url('../carpeta1/fondo.png');
}
```

En CSS la ruta se calcula desde el archivo CSS.

</details>

## Resumen

- Prefiera las **rutas relativas**.
- `../` sube un nivel; el nombre de una carpeta seguido de `/` entra en ella.
- En `fetch`, la ruta parte de la **página HTML**; en `url()` de CSS, del **archivo CSS**.
- Respete mayúsculas y minúsculas.
- Para leer archivos con `fetch`, use un **servidor local**.
