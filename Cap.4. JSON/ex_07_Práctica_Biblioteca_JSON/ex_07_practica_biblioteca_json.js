/* Práctica: mostrar una biblioteca guardada en un archivo JSON usando fetch.

Todos los libros, autores, editoriales y códigos del archivo libros.json son inventados.

Importante: abra el HTML con un servidor local (por ejemplo, la extensión Live Server de VS Code).
Si lo abre con doble clic (file://), el navegador bloquea la petición con fetch.

Peticiones HTTP más comunes:
GET     Obtener información de un servidor.
POST    Enviar información al servidor.
PUT     Actualizar un recurso.
DELETE  Eliminar un recurso.

Códigos de estado más comunes:
200  Respuesta completada
201  Elemento creado
204  Respuesta vacía
400  Mal solicitado
401  No autorizado
404  No encontrado
*/

const contenedor = document.getElementById('contenedor');

/* Crea un párrafo con una etiqueta en negrita y su valor.
   Se usa textContent (y no innerHTML) para que los datos se muestren como texto
   y nunca se ejecuten como HTML. */
function crearDato(etiqueta, valor) {
    const parrafo = document.createElement('p');
    const nombre = document.createElement('strong');
    nombre.textContent = `${etiqueta}: `;
    parrafo.append(nombre, valor || 'No definido');
    return parrafo;
}

function mostrarLibro(libro, indice) {
    const tarjeta = document.createElement('div');
    const encabezado = document.createElement('h3');
    encabezado.textContent = `Libro ${indice + 1}`;

    tarjeta.append(
        encabezado,
        crearDato('Título', libro.titulo),
        crearDato('Editorial', libro.editorial),
        crearDato('Edición', libro.edicion),
        crearDato('ISBN', libro.isbn),
        /* Cuando la propiedad tiene espacios se accede con corchetes. */
        crearDato('Autor principal', libro.autores['autor principal']),
        crearDato('Código SENA', libro['codigo sena'].join(', ')),
        crearDato('Descripción', libro.descripcion),
        document.createElement('hr')
    );
    contenedor.appendChild(tarjeta);
}

/* La ruta es relativa: libros.json está en la misma carpeta que el HTML. */
fetch('libros.json')
    .then(respuesta => {
        /* fetch no falla con un 404: hay que revisar respuesta.ok. */
        if (!respuesta.ok) {
            throw new Error(`No se pudo leer el archivo (código ${respuesta.status})`);
        }
        return respuesta.json();
    })
    .then(datos => datos.biblioteca.forEach(mostrarLibro))
    /* catch atrapa cualquier error ocurrido en los pasos anteriores. */
    .catch(error => {
        console.error(error);
        contenedor.textContent = `Error: ${error.message}`;
    });
