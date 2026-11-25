# Paradigmas de programación y bases de la POO

Un **paradigma** es una forma de pensar y organizar un programa. JavaScript es **multiparadigma**: permite combinar varios estilos.

## Imperativo y declarativo

| | Imperativo | Declarativo |
|---|---|---|
| Pregunta que responde | **¿Cómo** se hace? | **¿Qué** se quiere obtener? |
| Estilo | Pasos en orden que van cambiando variables | Se describe el resultado y otro se encarga de los pasos |
| Ejemplos | `for`, `while`, contadores | `filter`, `map`, HTML, SQL |

```js
const numeros = [1, 2, 3, 4, 5, 6];

// Imperativo: se indica cada paso
const paresImperativo = [];
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        paresImperativo.push(numeros[i]);
    }
}

// Declarativo: se indica qué se quiere
const paresDeclarativo = numeros.filter(numero => numero % 2 === 0);
```

## Programación con estado

El **estado** son los datos que un programa recuerda en un momento dado y que pueden cambiar con el tiempo.

```js
let velocidad = 0;   // estado inicial
velocidad += 20;     // el estado cambió
```

## Paso de mensajes

Los objetos colaboran enviándose **mensajes**. En JavaScript, enviar un mensaje es llamar un método: el objeto lo recibe y decide cómo responder, usando o cambiando su propio estado.

```js
const auto = {
    velocidad: 0,
    acelerar(incremento) {
        this.velocidad += incremento;
        return this.velocidad;
    }
};

auto.acelerar(20); // mensaje «acelerar» con el dato 20
```

## Programación Orientada a Objetos (POO)

La POO es un paradigma basado en **objetos** que contienen datos y comportamientos. Facilita modelar entidades del mundo real y reutilizar código. Se construye sobre dos ideas anteriores: la **programación con estado** y el **paso de mensajes**.

### Conceptos clave

- **Clase:** plantilla o molde que define las propiedades y los métodos comunes de un conjunto de objetos.
- **Objeto:** instancia de una clase.
- **Constructor:** método especial que da los valores iniciales a un objeto. Se ejecuta automáticamente al usar `new`. En JavaScript solo puede haber uno por clase.
- **Atributos (propiedades):** datos que definen el estado de un objeto.
- **Métodos:** funciones asociadas a una clase u objeto. Definen su comportamiento y pueden usar o modificar sus atributos.

### Pilares

- **Abstracción:** concentrarse en lo relevante e ignorar los detalles internos.
- **Encapsulamiento:** proteger el estado interno y exponer solo lo necesario mediante métodos públicos.
- **Herencia:** crear clases nuevas a partir de otras, reutilizando y ampliando su funcionalidad.
- **Polimorfismo:** métodos con el mismo nombre que se comportan distinto según la clase.

## Ejemplo: un concesionario de automóviles

Todos los vehículos comparten marca, modelo y velocidad, pero cada tipo tiene un comportamiento propio.

```js
// Clase: el plano de un automóvil
class Automovil {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = 0;
    }

    acelerar() {
        this.velocidad += 20;
        console.log(`${this.marca} ${this.modelo} va a ${this.velocidad} km/h`);
    }

    frenar() {
        this.velocidad = 0;
        console.log(`${this.marca} ${this.modelo} se detuvo`);
    }
}

// Objeto: un automóvil concreto
const auto = new Automovil('Marca A', 'Modelo 1');
auto.acelerar();
auto.frenar();

// Herencia: un camión es un automóvil que además carga peso
class Camion extends Automovil {
    cargarPeso(peso) {
        console.log(`${this.marca} ${this.modelo} está cargando ${peso} kg`);
    }
}

// Encapsulamiento: el atributo con # solo se puede usar dentro de la clase
class AutomovilEncapsulado {
    #motorEncendido = false;

    encenderMotor() {
        this.#motorEncendido = true;
    }

    estadoMotor() {
        return this.#motorEncendido ? 'Encendido' : 'Apagado';
    }
}

// Polimorfismo: el mismo mensaje, otra respuesta
class Deportivo extends Automovil {
    acelerar() {
        this.velocidad += 30;
        console.log(`${this.marca} ${this.modelo} va a ${this.velocidad} km/h (¡Veloz!)`);
    }
}

// Abstracción: desde afuera solo se necesita llamar «arrancar»
class AutomovilAbstracto {
    arrancar() {
        this.#verificarSistema();
        this.#inyectarCombustible();
        console.log('¡Auto encendido!');
    }

    #verificarSistema() {
        console.log('Verificando sistemas...');
    }

    #inyectarCombustible() {
        console.log('Inyectando combustible...');
    }
}
```

| Concepto | Ejemplo con automóviles |
|---|---|
| Clase | El plano general de un automóvil |
| Objeto | Un automóvil real |
| Herencia | Camión y Deportivo heredan de Automóvil |
| Encapsulamiento | El estado del motor está oculto al exterior |
| Polimorfismo | Cada tipo de auto acelera de forma distinta |
| Abstracción | Solo se llama `arrancar`, sin conocer los pasos |
