const pantalla = document.getElementById("pantalla");

function insertar(valor) {
    pantalla.value += valor;
}

function borrar() {
    pantalla.value = '';
}

/* NOTA DIDÁCTICA SOBRE eval()
   eval() ejecuta cualquier texto como código JavaScript, no solo operaciones matemáticas.
   Si ese texto viene de una persona, de la URL o de un servidor, alguien podría ejecutar
   código malicioso en la página (por ejemplo, robar datos de la sesión).
   Además, es más lento y dificulta encontrar errores.

   Aquí se usa solo para mantener corto un ejercicio local. Que la pantalla sea de solo
   lectura (readonly) NO es una medida de seguridad: se puede cambiar desde las
   herramientas del navegador. En un proyecto real no use eval(): escriba un analizador de
   expresiones o use una librería especializada y mantenida.

   Otros detalles: el botón ^ escribe ** (potencia), y sin, cos y tan trabajan en radianes.
   Cada función se debe cerrar con ) antes de pulsar =. */
function calcular() {
    try {
        pantalla.value = eval(pantalla.value);
    } catch (e) {
        pantalla.value = 'Error';
    }
}