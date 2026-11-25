# Variables `var` y `let` en JavaScript

`let` y `var` son palabras clave para declarar variables, pero tienen diferencias importantes en su alcance, su inicialización y su comportamiento.

## 1. Ámbito (scope)

**`var` tiene ámbito de función.** Si se declara dentro de una función, solo existe dentro de ella. Si se declara fuera de cualquier función, es global. Si se declara dentro de un bloque (`if`, `for`, `while`), ignora el bloque: su ámbito sigue siendo el de la función o el global.

```js
function testVar() {
    if (true) {
        var x = 10; // x es accesible fuera del bloque if
    }
    console.log(x); // 10
}
testVar();
```

**`let` tiene ámbito de bloque.** Solo existe dentro de las llaves `{}` donde se declara.

```js
function testLet() {
    if (true) {
        let y = 10; // y solo es accesible dentro del bloque if
    }
    console.log(y); // Error: y is not defined
}
testLet();
```

## 2. Redeclaración

**`var`** permite volver a declarar la misma variable en el mismo ámbito, lo que puede causar errores sin darse cuenta.

```js
var x = 5;
var x = 10; // No hay error, x ahora es 10
console.log(x); // 10
```

**`let`** no lo permite.

```js
let y = 5;
let y = 10; // Error: Identifier 'y' has already been declared
```

## 3. Elevación (hoisting)

**`var`:** la declaración se «eleva» al principio de su ámbito antes de ejecutar el código, pero la asignación no. Por eso se puede usar antes de la línea donde se declara, y su valor es `undefined`.

```js
console.log(x); // undefined
var x = 5;
```

**`let`:** también se eleva, pero no se puede usar antes de su declaración porque está en la **zona temporal muerta**. Intentarlo produce un error.

```js
console.log(y); // Error: Cannot access 'y' before initialization
let y = 5;
```

## 4. Inicialización

Si no se asigna un valor, **tanto `var` como `let` quedan con el valor `undefined`**. Usar la variable después de declararla no produce error.

```js
var a;
let b;

console.log(a); // undefined
console.log(b); // undefined
```

La diferencia está en **cuándo** ocurre: `var` ya vale `undefined` desde el inicio de su ámbito, mientras que `let` recibe `undefined` cuando la ejecución llega a su declaración.

> `const` es distinto: exige un valor en la misma declaración.

## ¿Cuándo usar `let` y `var`?

- **`var`** era la única forma de declarar variables en las versiones antiguas de JavaScript. Por los problemas que pueden causar la elevación y la falta de ámbito de bloque, se prefiere evitarlo en código moderno.
- **`let`** es la mejor opción cuando el valor va a cambiar, porque su comportamiento es más predecible. Si la variable no se va a reasignar, use `const`.

## Observaciones generales

- `var` es más permisivo, y eso puede llevar a errores.
- `let` es más seguro.
- Ambas sirven para declarar variables, pero `let` es la apropiada para el desarrollo moderno.
