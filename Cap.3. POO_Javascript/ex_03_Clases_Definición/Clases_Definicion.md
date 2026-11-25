# Clases en JavaScript: definición

## Declaración de clase

```js
class Papel {
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
}
```

## Expresión de clase

### Anónima

```js
let Papel = class {
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
}
```

### Nombrada

```js
let Papel = class MiPapel {
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
}
```

## Importante

- `constructor`: Método especial para inicializar las propiedades.
- `extends`: Define una clase como hija de otra clase.
- `super`: Llama al constructor o métodos de la clase padre.
- `static`: Define métodos que pertenecen a la clase y no a las instancias.

## Ventajas de las clases

1. **Legibilidad:** Proporcionan una forma más clara y estructurada de definir objetos.
2. **Modularidad:** Facilitan la reutilización de código mediante la herencia.
3. **Encapsulación:** Permiten proteger datos sensibles con propiedades privadas.
4. **Facilidad de uso:** Hacen que la programación orientada a objetos sea más accesible en JavaScript.

## Diferencias entre funciones y clases

| Aspecto | Funciones | Clases |
|---|---|---|
| **Definición** | `function Persona() {}` | `class Persona {}` |
| **Herencia** | Usa `Object.create()` o prototipos | Usa `extends` y `super` |
| **Ejecución** | Se pueden invocar sin `new` | Necesitan `new` para instanciarse |
| **Constructores** | Usan funciones tradicionales | Tienen el método `constructor` |
