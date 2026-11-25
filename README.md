# Fundamentos de JavaScript · RAMCRACK

Curso práctico de JavaScript en español, desde la primera línea de código hasta el consumo de servidores y la conexión con una base de datos. Reúne **78 ejercicios numerados desde el 1 en cada capítulo**, material de teoría y proyectos prácticos, organizados en 10 capítulos.

[![Patrocinar en GitHub Sponsors](https://img.shields.io/badge/Patrocinar-GitHub%20Sponsors-ea4aaa?logo=githubsponsors&logoColor=white)](https://github.com/sponsors/Dhaniel-05)

## Temas

Sintaxis y estructuras de control · Funciones · Formularios y DOM · Programación Orientada a Objetos · JSON · Eventos · Callbacks, promesas y `async/await` · `fetch` y Axios · SQL con Node.js · BOM del navegador.

## Requisitos de entorno

| Herramienta | Para qué se usa |
|---|---|
| Un navegador actualizado | Ejecutar los ejercicios y ver la consola (tecla F12) |
| [Visual Studio Code](https://code.visualstudio.com/) con la extensión **Live Server** | Servir los archivos en local. Es necesario para los ejercicios que leen archivos con `fetch` o `XMLHttpRequest` |
| Conexión a internet | Las APIs de prueba y las librerías cargadas desde CDN (SweetAlert y Axios) |
| [Node.js](https://nodejs.org/) y MySQL | Solo para el ejercicio 2 del capítulo 8 (bases de datos) |

## Cómo empezar

1. Clone este repositorio:

   ```bash
   git clone https://github.com/Dhaniel-05/Javascript.git
   ```

2. Abra la carpeta `Javascript` en Visual Studio Code.
3. Haga clic derecho sobre el `.html` del ejercicio y elija **Open with Live Server**.
4. Abra la consola del navegador (F12): muchos ejercicios muestran allí sus resultados.

### Base de datos con Node.js (Cap. 8, ejercicio 2)

1. Ejecute en MySQL el script `BD_001.sql`.
2. En una terminal, dentro de la carpeta del ejercicio, instale las dependencias y ejecútelo:

   ```bash
   cd "Cap.8. Bases_Datos/ex_02_BD_Practica"
   npm install
   node index.js
   ```

3. Termine el proceso con `Ctrl+C`.

> **Solo para práctica local.** El ejemplo se conecta como `root` sin contraseña y escribe la conexión en el código. En un proyecto real use un usuario propio de la aplicación con contraseña, guardada en variables de entorno.
>
> El paquete `mysql` es antiguo y puede fallar con la autenticación por defecto de MySQL 8 (`ER_NOT_SUPPORTED_AUTH_MODE`). Para proyectos nuevos se recomienda `mysql2`.

### Notas sobre algunos ejercicios

- Los ejercicios que dependen de APIs públicas pueden dejar de funcionar si el servicio externo cambia o no está disponible.
- El ejercicio 6 del capítulo 5 usa un WebSocket local de ejemplo; este repositorio no incluye ese servidor.
- Los audios del ejercicio 7 del capítulo 5 son tonos generados para este curso.

## Contenido

1. [Introducción a JavaScript](#cap-1)
2. [Formularios](#cap-2)
3. [Programación Orientada a Objetos](#cap-3)
4. [JSON](#cap-4)
5. [Eventos](#cap-5)
6. [Programación síncrona y asíncrona](#cap-6)
7. [Servidores: Fetch y Axios](#cap-7)
8. [Bases de datos](#cap-8)
9. [BOM del navegador](#cap-9)
10. [Proyectos prácticos](#cap-10)

<a id="cap-1"></a>

### Cap. 1. Introducción a JavaScript

- [Teoría: variables var y let](Cap.1.%20Introducci%C3%B3n_Javascript/ex_02_Variables/Variables_var_y_let.md)
- [1. Introducción](Cap.1.%20Introducci%C3%B3n_Javascript/ex_01_Intro)
- [2. Variables](Cap.1.%20Introducci%C3%B3n_Javascript/ex_02_Variables)
- [3. Tipos Datos](Cap.1.%20Introducci%C3%B3n_Javascript/ex_03_Tipos_Datos)
- [4. Concatenar Datos](Cap.1.%20Introducci%C3%B3n_Javascript/ex_04_Concatenar_Datos)
- [5. Comentarios](Cap.1.%20Introducci%C3%B3n_Javascript/ex_05_Comentarios)
- [6. Capturar Datos Usuario](Cap.1.%20Introducci%C3%B3n_Javascript/ex_06_Capturar_Datos_Usuario)
- [7. Constantes](Cap.1.%20Introducci%C3%B3n_Javascript/ex_07_Constantes)
- [8. Operadores Matemáticos](Cap.1.%20Introducci%C3%B3n_Javascript/ex_08_Operadores_Matem%C3%A1ticos)
- [9. Operadores Asignación](Cap.1.%20Introducci%C3%B3n_Javascript/ex_09_Operadores_Asignaci%C3%B3n)
- [10. Operadores de Comparación](Cap.1.%20Introducci%C3%B3n_Javascript/ex_10_Operadores%20de%20Comparaci%C3%B3n)
- [11. Funciones Matemáticas](Cap.1.%20Introducci%C3%B3n_Javascript/ex_11_Funciones_Matem%C3%A1ticas)
- [12. Cadenas Texto](Cap.1.%20Introducci%C3%B3n_Javascript/ex_12_Cadenas_Texto)
- [13. Funciones String](Cap.1.%20Introducci%C3%B3n_Javascript/ex_13_Funciones_String)
- [14. Arrays Arreglos](Cap.1.%20Introducci%C3%B3n_Javascript/ex_14_Arrays_Arreglos)
- [15. Condicionales](Cap.1.%20Introducci%C3%B3n_Javascript/ex_15_Condicionales)
- [16. Operadores Lógicos](Cap.1.%20Introducci%C3%B3n_Javascript/ex_16_Operadores%20L%C3%B3gicos)
- [17. Condicional Switch Case](Cap.1.%20Introducci%C3%B3n_Javascript/ex_17_Condicional_Switch_Case)
- [18. Ciclo While](Cap.1.%20Introducci%C3%B3n_Javascript/ex_18_Ciclo_While)
- [19. Ciclo Do While](Cap.1.%20Introducci%C3%B3n_Javascript/ex_19_Ciclo_Do_While)
- [20. Ciclo For](Cap.1.%20Introducci%C3%B3n_Javascript/ex_20_Ciclo_For)
- [21. Ciclo For In](Cap.1.%20Introducci%C3%B3n_Javascript/ex_21_Ciclo_For_In)
- [22. Break Continue](Cap.1.%20Introducci%C3%B3n_Javascript/ex_22_Break_Continue)
- [23. Funciones Declarativas](Cap.1.%20Introducci%C3%B3n_Javascript/ex_23_Funciones_Declarativas)
- [24. Funciones Parámetros](Cap.1.%20Introducci%C3%B3n_Javascript/ex_24_Funciones_Par%C3%A1metros)
- [25. Funciones Return](Cap.1.%20Introducci%C3%B3n_Javascript/ex_25_Funciones_Return)
- [26. POO Objetos](Cap.1.%20Introducci%C3%B3n_Javascript/ex_26_POO_Objetos)
- [27. POO Clases](Cap.1.%20Introducci%C3%B3n_Javascript/ex_27_POO_Clases)
- [28. POO Clase Date](Cap.1.%20Introducci%C3%B3n_Javascript/ex_28_POO_Clase_Date)

<a id="cap-2"></a>

### Cap. 2. Formularios

- [1. Formularios Botones](Cap.2.%20Formularios/ex_01_Formularios_Botones)
- [2. Formularios Controles Texto](Cap.2.%20Formularios/ex_02_Formularios_Controles_Texto)
- [3. Formularios Control Select](Cap.2.%20Formularios/ex_03_Formularios_Control_Select)
- [4. Sweet Alert Funcionalidad Avanzada](Cap.2.%20Formularios/ex_04_Sweet_Alert_Funcionalidad_Avanzada)
- [5. CheckBox](Cap.2.%20Formularios/ex_05_CheckBox)
- [6. Radio Buttons](Cap.2.%20Formularios/ex_06_Radio_Buttons)
- [7. Textarea](Cap.2.%20Formularios/ex_07_Textarea)
- [8. Onfocus](Cap.2.%20Formularios/ex_08_Onfocus)
- [9. Onblur](Cap.2.%20Formularios/ex_09_Onblur)
- [10. Open Confirmar](Cap.2.%20Formularios/ex_10_Open_Confirmar)
- [11. Redireccionar Location](Cap.2.%20Formularios/ex_11_Redireccionar_Location)
- [12. Textarea Conteo Caracteres](Cap.2.%20Formularios/ex_12_Textarea_Conteo_Caracteres)
- [13. Temporizador Set Time Out](Cap.2.%20Formularios/ex_13_Temporizador_Set_Time_Out)
- [14. Audio](Cap.2.%20Formularios/ex_14_Audio)
- [15. Reloj Date](Cap.2.%20Formularios/ex_15_Reloj_Date)

<a id="cap-3"></a>

### Cap. 3. Programación Orientada a Objetos

- [Teoría: paradigmas de programación y bases de la POO](Cap.3.%20POO_Javascript/Paradigmas_de_Programacion.md)
- [1. Prototipo](Cap.3.%20POO_Javascript/ex_01_Prototipo)
- [2. Prototipos Objetos](Cap.3.%20POO_Javascript/ex_02_Prototipos_Objetos)
- [3. Clases Definición](Cap.3.%20POO_Javascript/ex_03_Clases_Definici%C3%B3n)
- [4. Herencia SubClases](Cap.3.%20POO_Javascript/ex_04_Herencia_SubClases)
- [5. Herencia Métodos](Cap.3.%20POO_Javascript/ex_05_Herencia_M%C3%A9todos)
- [6. Práctica Herencia](Cap.3.%20POO_Javascript/ex_06_Pr%C3%A1ctica_Herencia)

<a id="cap-4"></a>

### Cap. 4. JSON

- [Teoría: rutas en un proyecto web (PDF)](Cap.4.%20JSON/Rutas%20Teor%C3%ADa/Rutas%20en%20un%20proyecto%20web.pdf)
- [1. Persona](Cap.4.%20JSON/ex_01_Persona)
- [2. Acceder Copiando JSON](Cap.4.%20JSON/ex_02_Acceder_Copiando_JSON)
- [3. Acceder JSON](Cap.4.%20JSON/ex_03_Acceder_JSON)
- [4. Acceder JSON Fetch](Cap.4.%20JSON/ex_04_Acceder_JSON_Fetch)
- [5. Acceder JSON Catch](Cap.4.%20JSON/ex_05_Acceder_JSON_Catch)
- [6. Práctica JSON Club Magios](Cap.4.%20JSON/ex_06_Pr%C3%A1ctica_JSON_Club_Magios)
- [7. Práctica Biblioteca JSON](Cap.4.%20JSON/ex_07_Pr%C3%A1ctica_Biblioteca_JSON)

<a id="cap-5"></a>

### Cap. 5. Eventos

- [1. Click Mouseover](Cap.5.%20Eventos/ex_01_Click_Mouseover)
- [2. Prevent Default](Cap.5.%20Eventos/ex_02_Prevent_Default)
- [3. Keypress Keydown Keyup](Cap.5.%20Eventos/ex_03_Keypress_Keydown_Keyup)
- [4. Mousemove Mouseover Mouseout](Cap.5.%20Eventos/ex_04_Mousemove_Mouseover_Mouseout)
- [5. Mouse Trajectory](Cap.5.%20Eventos/ex_05_Mouse_Trajectory)
- [6. Events Real Time](Cap.5.%20Eventos/ex_06_Events_Real_Time)
- [7. Eventos Personalizados](Cap.5.%20Eventos/ex_07_Eventos_Personalizados)
- [8. Práctica Buscador Peliculas Series](Cap.5.%20Eventos/ex_08_Pr%C3%A1ctica_Buscador_Peliculas_Series)

<a id="cap-6"></a>

### Cap. 6. Programación síncrona y asíncrona

- [1. Asíncrona Introducción](Cap.6.%20Programacion_S%C3%ADncrona_As%C3%ADncrona/ex_01_As%C3%ADncrona_Introducci%C3%B3n)
- [2. Asíncrona Callbacks](Cap.6.%20Programacion_S%C3%ADncrona_As%C3%ADncrona/ex_02_As%C3%ADncrona_Callbacks)
- [3. Asíncrona Promesas](Cap.6.%20Programacion_S%C3%ADncrona_As%C3%ADncrona/ex_03_As%C3%ADncrona_Promesas)
- [4. Asíncrona Async Await](Cap.6.%20Programacion_S%C3%ADncrona_As%C3%ADncrona/ex_04_As%C3%ADncrona_Async_Await)
- [5. Asíncrona Manejo Errores](Cap.6.%20Programacion_S%C3%ADncrona_As%C3%ADncrona/ex_05_As%C3%ADncrona_Manejo_Errores)
- [6. Asíncrona Peticiones Encadenadas](Cap.6.%20Programacion_S%C3%ADncrona_As%C3%ADncrona/ex_06_As%C3%ADncrona_Peticiones_Encadenadas)

<a id="cap-7"></a>

### Cap. 7. Servidores: Fetch y Axios

- [1. Servidores Post](Cap.7.%20Servidores/ex_01_Servidores_Post)
- [2. Servidores Put Delete Patch](Cap.7.%20Servidores/ex_02_Servidores_Put_Delete_Patch)
- [3. Servidores Fetch Avanzado](Cap.7.%20Servidores/ex_03_Servidores_Fetch_Avanzado)
- [4. Axios](Cap.7.%20Servidores/ex_04_Axios)
- [5. Axios Avanzado](Cap.7.%20Servidores/ex_05_Axios_Avanzado)

<a id="cap-8"></a>

### Cap. 8. Bases de datos

- [1. Bases Datos Teoría](Cap.8.%20Bases_Datos/ex_01_Bases_Datos_Teor%C3%ADa)
- [2. BD Practica](Cap.8.%20Bases_Datos/ex_02_BD_Practica)

<a id="cap-9"></a>

### Cap. 9. BOM del navegador

- [1. Propiedades de pantalla y navegador](Cap.9.%20BOM_Navegador/ex_01_Propiedades_Pantalla_Navegador)

<a id="cap-10"></a>

### Cap. 10. Proyectos prácticos

- [Calculadora científica](Cap.10.%20Proyectos_Practicos/calculadora)
- [Space Invaders mejorado](Cap.10.%20Proyectos_Practicos/space_invaders_mejora)

## Apoyar el proyecto

Si este material le sirvió, puede apoyar su mantenimiento en [GitHub Sponsors](https://github.com/sponsors/Dhaniel-05). También ayuda dejar una estrella en el repositorio.

## Licencia

El **código fuente original del curso** se distribuye bajo la [licencia MIT](LICENSE).

Los recursos de terceros y las librerías externas **no** están cubiertos por esa licencia. Consulte el archivo [NOTICE](NOTICE).

---

**RAMCRACK**
