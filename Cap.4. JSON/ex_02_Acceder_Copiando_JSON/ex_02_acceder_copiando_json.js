/*Acceder al archivo JSON*/

//Copiar el contenido del archivo JSON para almarcenarlo en una variable
let miPersona = {
    "nombre":"Persona Ejemplo",
    "edad":30,
    "estudiante": "true",
    "residencia":{
        "direccion":"Calle Ficticia 123",
        "ciudad":"Ciudad Ejemplo"
    },
    "telefonos":["0000000001","0000000002"]
}

let elementoTexto = document.getElementById(`nombre`);
elementoTexto.textContent = miPersona.nombre;