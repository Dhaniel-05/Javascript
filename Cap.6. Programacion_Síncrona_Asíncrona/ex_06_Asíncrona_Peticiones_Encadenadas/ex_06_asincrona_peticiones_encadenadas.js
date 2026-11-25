/* Peticiones encadenadas con async/await y try/catch.

Se consultan usuarios, productos y carritos en https://fakestoreapi.com, una API pública
con datos de prueba, y luego se relaciona el primer usuario con su carrito.

- await espera cada respuesta antes de pasar a la línea siguiente.
- try/catch atrapa los errores de red y los que se lanzan con throw.
- fetch no falla con un 404 o un 500: por eso se revisa respuesta.ok.
*/

const URL_BASE = 'https://fakestoreapi.com';

/* Función reutilizable: pide un recurso y devuelve el JSON. */
async function pedirJson(recurso) {
    const respuesta = await fetch(`${URL_BASE}/${recurso}`);
    if (!respuesta.ok) {
        throw new Error(`Falló la petición de ${recurso} (código ${respuesta.status})`);
    }
    return respuesta.json();
}

async function obtenerDatos() {
    try {
        const usuarios = await pedirJson('users');
        console.log('Usuarios:', usuarios);

        const productos = await pedirJson('products');
        console.log('Productos:', productos);

        const carritos = await pedirJson('carts');
        console.log('Carritos:', carritos);

        const primerUsuario = usuarios[0];
        /* find devuelve el primer elemento que cumple la condición, o undefined. */
        const carrito = carritos.find(item => item.userId === primerUsuario?.id);

        if (!carrito) {
            console.log('No se encontró un carrito para el primer usuario.');
            return;
        }

        console.log(`El usuario ${primerUsuario.name.firstname} tiene el carrito con ID: ${carrito.id}`);

        /* Cada carrito solo trae el id del producto: se busca su título en la lista de productos. */
        carrito.products.forEach(({ productId, quantity }) => {
            const producto = productos.find(item => item.id === productId);
            console.log(`${quantity} x ${producto ? producto.title : `Producto ${productId}`}`);
        });
    } catch (error) {
        console.error('Error al obtener los datos:', error.message);
    }
}

obtenerDatos();

/* Reto: estas tres peticiones no dependen entre sí. Pruebe a lanzarlas al mismo tiempo:

const [usuarios, productos, carritos] = await Promise.all([
    pedirJson('users'),
    pedirJson('products'),
    pedirJson('carts')
]);
*/
