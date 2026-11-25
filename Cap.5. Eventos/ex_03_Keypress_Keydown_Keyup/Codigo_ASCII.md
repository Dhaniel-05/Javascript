# El código ASCII

**ASCII** son las siglas de *American Standard Code for Information Interchange* (Código Estadounidense Estándar para el Intercambio de Información). Se pronuncia «áski».

Un computador solo guarda números. ASCII es un acuerdo que dice **qué número representa cada carácter**: por ejemplo, la `A` es el 65 y la `a` es el 97.

## Contenido

1. [Breve historia](#breve-historia)
2. [Cómo escribir un carácter con Alt en Windows](#cómo-escribir-un-carácter-con-alt-en-windows)
3. [Códigos de uso rápido](#códigos-de-uso-rápido)
4. [Caracteres de control](#caracteres-de-control)
5. [Caracteres imprimibles](#caracteres-imprimibles)
6. [Tabla extendida](#tabla-extendida-página-de-código-850)

| Rango | Qué contiene | ¿Es ASCII estándar? |
|---|---|---|
| 0 a 31 y 127 | Caracteres de control, no imprimibles | Sí |
| 32 a 126 | Espacio, signos, números y letras sin tildes | Sí |
| 128 a 255 | Tildes, eñe, símbolos y figuras para recuadros | **No.** Depende de la página de código |

## Breve historia

- Partió de códigos que ya se usaban en telegrafía y teletipos, que se reorganizaron y ampliaron.
- La primera versión se publicó en **1963**, por la Asociación Estadounidense de Estándares (**ASA**). Esa entidad terminó llamándose **ANSI** (Instituto Nacional Estadounidense de Estándares) en 1969.
- La revisión de **1967** incorporó las letras minúsculas. El resultado, conocido como **US-ASCII**, tiene **128 caracteres** (del 0 al 127) y está pensado para escribir en inglés.
- Para otros idiomas hicieron falta más caracteres. En **1981**, el computador personal de IBM (modelo 5150) usó la **página de código 437**, que aprovecha 8 bits y llega hasta el 255. Después apareció la **página de código 850**, orientada a idiomas de Europa occidental, como el español.
- Hoy la web usa principalmente **UTF-8** (Unicode), que representa los caracteres de muchísimos idiomas. Sus primeros 128 códigos coinciden con ASCII.

## Cómo escribir un carácter con Alt en Windows

Sirve cuando el carácter no está en el teclado. Ejemplo para la **Ñ**:

1. Mantenga presionada la tecla **Alt**.
2. Sin soltarla, escriba **165** en el **teclado numérico** (el de la derecha). La tecla Bloq Num debe estar activada.
3. Suelte **Alt**.

> El resultado de los códigos del 128 al 255 depende de la configuración regional de Windows y del programa. Si no aparece el carácter esperado, revise esa configuración. En un portátil sin teclado numérico este método puede no estar disponible.

## Códigos de uso rápido

### De uso frecuente en español

| Carácter | Combinación |
|:---:|---|
| `ñ` | Alt + 164 |
| `Ñ` | Alt + 165 |
| `@` | Alt + 64 |
| `¿` | Alt + 168 |
| `?` | Alt + 63 |
| `¡` | Alt + 173 |
| `!` | Alt + 33 |
| `:` | Alt + 58 |
| `/` | Alt + 47 |
| `\` | Alt + 92 |

### Vocales con tilde

| Carácter | Combinación |
|:---:|---|
| `á` | Alt + 160 |
| `é` | Alt + 130 |
| `í` | Alt + 161 |
| `ó` | Alt + 162 |
| `ú` | Alt + 163 |
| `Á` | Alt + 181 |
| `É` | Alt + 144 |
| `Í` | Alt + 214 |
| `Ó` | Alt + 224 |
| `Ú` | Alt + 233 |

### Vocales con diéresis

| Carácter | Combinación |
|:---:|---|
| `ä` | Alt + 132 |
| `ë` | Alt + 137 |
| `ï` | Alt + 139 |
| `ö` | Alt + 148 |
| `ü` | Alt + 129 |
| `Ä` | Alt + 142 |
| `Ë` | Alt + 211 |
| `Ï` | Alt + 216 |
| `Ö` | Alt + 153 |
| `Ü` | Alt + 154 |

### Símbolos matemáticos

| Carácter | Combinación |
|:---:|---|
| `½` | Alt + 171 |
| `¼` | Alt + 172 |
| `¾` | Alt + 243 |
| `¹` | Alt + 251 |
| `³` | Alt + 252 |
| `²` | Alt + 253 |
| `ƒ` | Alt + 159 |
| `±` | Alt + 241 |
| `×` | Alt + 158 |
| `÷` | Alt + 246 |

### Símbolos comerciales y otros

| Carácter | Combinación |
|:---:|---|
| `$` | Alt + 36 |
| `£` | Alt + 156 |
| `¥` | Alt + 190 |
| `¢` | Alt + 189 |
| `¤` | Alt + 207 |
| `®` | Alt + 169 |
| `©` | Alt + 184 |
| `ª` | Alt + 166 |
| `º` | Alt + 167 |
| `°` | Alt + 248 |

### Comillas, llaves y paréntesis

| Carácter | Combinación |
|:---:|---|
| `"` | Alt + 34 |
| `'` | Alt + 39 |
| `(` | Alt + 40 |
| `)` | Alt + 41 |
| `[` | Alt + 91 |
| `]` | Alt + 93 |
| `{` | Alt + 123 |
| `}` | Alt + 125 |
| `«` | Alt + 174 |
| `»` | Alt + 175 |

## Caracteres de control

No se ven en pantalla. Se crearon para dar órdenes a impresoras, teletipos y equipos de comunicación. Algunos siguen siendo comunes, como `HT` (tabulación), `LF` y `CR` (saltos de línea).

| Código | Sigla | Significado |
|---:|---|---|
| 0 | **NULL** | Carácter nulo |
| 1 | **SOH** | Inicio de encabezado |
| 2 | **STX** | Inicio de texto |
| 3 | **ETX** | Fin de texto |
| 4 | **EOT** | Fin de transmisión |
| 5 | **ENQ** | Consulta |
| 6 | **ACK** | Reconocimiento |
| 7 | **BEL** | Timbre |
| 8 | **BS** | Retroceso |
| 9 | **HT** | Tabulador horizontal |
| 10 | **LF** | Nueva línea (salto de línea) |
| 11 | **VT** | Tabulador vertical |
| 12 | **FF** | Nueva página (salto de página) |
| 13 | **CR** | Retorno de carro (asociado a la tecla Enter) |
| 14 | **SO** | Desplazamiento hacia afuera |
| 15 | **SI** | Desplazamiento hacia adentro |
| 16 | **DLE** | Escape de vínculo de datos |
| 17 | **DC1** | Control de dispositivo 1 |
| 18 | **DC2** | Control de dispositivo 2 |
| 19 | **DC3** | Control de dispositivo 3 |
| 20 | **DC4** | Control de dispositivo 4 |
| 21 | **NAK** | Confirmación negativa |
| 22 | **SYN** | Inactividad sincrónica |
| 23 | **ETB** | Fin del bloque de transmisión |
| 24 | **CAN** | Cancelar |
| 25 | **EM** | Fin del medio |
| 26 | **SUB** | Sustitución |
| 27 | **ESC** | Escape |
| 28 | **FS** | Separador de archivos |
| 29 | **GS** | Separador de grupos |
| 30 | **RS** | Separador de registros |
| 31 | **US** | Separador de unidades |
| 127 | **DEL** | Suprimir |

## Caracteres imprimibles

| Código | Carácter | Descripción |
|---:|:---:|---|
| 32 | (espacio) | Espacio en blanco |
| 33 | `!` | Cierre de exclamación |
| 34 | `"` | Comillas dobles |
| 35 | `#` | Numeral o almohadilla |
| 36 | `$` | Signo pesos o dólar |
| 37 | `%` | Porcentaje |
| 38 | `&` | Et o ampersand |
| 39 | `'` | Comilla simple o apóstrofo |
| 40 | `(` | Abre paréntesis |
| 41 | `)` | Cierra paréntesis |
| 42 | `*` | Asterisco |
| 43 | `+` | Más |
| 44 | `,` | Coma |
| 45 | `-` | Menos o guion |
| 46 | `.` | Punto |
| 47 | `/` | Barra inclinada |
| 48 | `0` | Número cero |
| 49 | `1` | Número uno |
| 50 | `2` | Número dos |
| 51 | `3` | Número tres |
| 52 | `4` | Número cuatro |
| 53 | `5` | Número cinco |
| 54 | `6` | Número seis |
| 55 | `7` | Número siete |
| 56 | `8` | Número ocho |
| 57 | `9` | Número nueve |
| 58 | `:` | Dos puntos |
| 59 | `;` | Punto y coma |
| 60 | `<` | Menor que |
| 61 | `=` | Igual |
| 62 | `>` | Mayor que |
| 63 | `?` | Cierre de interrogación |
| 64 | `@` | Arroba |
| 65 | `A` | Letra A mayúscula |
| 66 | `B` | Letra B mayúscula |
| 67 | `C` | Letra C mayúscula |
| 68 | `D` | Letra D mayúscula |
| 69 | `E` | Letra E mayúscula |
| 70 | `F` | Letra F mayúscula |
| 71 | `G` | Letra G mayúscula |
| 72 | `H` | Letra H mayúscula |
| 73 | `I` | Letra I mayúscula |
| 74 | `J` | Letra J mayúscula |
| 75 | `K` | Letra K mayúscula |
| 76 | `L` | Letra L mayúscula |
| 77 | `M` | Letra M mayúscula |
| 78 | `N` | Letra N mayúscula |
| 79 | `O` | Letra O mayúscula |
| 80 | `P` | Letra P mayúscula |
| 81 | `Q` | Letra Q mayúscula |
| 82 | `R` | Letra R mayúscula |
| 83 | `S` | Letra S mayúscula |
| 84 | `T` | Letra T mayúscula |
| 85 | `U` | Letra U mayúscula |
| 86 | `V` | Letra V mayúscula |
| 87 | `W` | Letra W mayúscula |
| 88 | `X` | Letra X mayúscula |
| 89 | `Y` | Letra Y mayúscula |
| 90 | `Z` | Letra Z mayúscula |
| 91 | `[` | Abre corchete |
| 92 | `\` | Barra invertida |
| 93 | `]` | Cierra corchete |
| 94 | `^` | Acento circunflejo |
| 95 | `_` | Guion bajo |
| 96 | `` ` `` | Acento grave |
| 97 | `a` | Letra a minúscula |
| 98 | `b` | Letra b minúscula |
| 99 | `c` | Letra c minúscula |
| 100 | `d` | Letra d minúscula |
| 101 | `e` | Letra e minúscula |
| 102 | `f` | Letra f minúscula |
| 103 | `g` | Letra g minúscula |
| 104 | `h` | Letra h minúscula |
| 105 | `i` | Letra i minúscula |
| 106 | `j` | Letra j minúscula |
| 107 | `k` | Letra k minúscula |
| 108 | `l` | Letra l minúscula |
| 109 | `m` | Letra m minúscula |
| 110 | `n` | Letra n minúscula |
| 111 | `o` | Letra o minúscula |
| 112 | `p` | Letra p minúscula |
| 113 | `q` | Letra q minúscula |
| 114 | `r` | Letra r minúscula |
| 115 | `s` | Letra s minúscula |
| 116 | `t` | Letra t minúscula |
| 117 | `u` | Letra u minúscula |
| 118 | `v` | Letra v minúscula |
| 119 | `w` | Letra w minúscula |
| 120 | `x` | Letra x minúscula |
| 121 | `y` | Letra y minúscula |
| 122 | `z` | Letra z minúscula |
| 123 | `{` | Abre llave |
| 124 | `\|` | Barra vertical |
| 125 | `}` | Cierra llave |
| 126 | `~` | Virgulilla |

## Tabla extendida (página de código 850)

Estos códigos suelen llamarse «ASCII extendido», pero **no forman parte del estándar ASCII**: cada página de código asigna sus propios caracteres. Esta es la **850**. En la 437, por ejemplo, el 155 es `¢` y no `ø`.

| Código | Carácter | Descripción |
|---:|:---:|---|
| 128 | `Ç` | C cedilla mayúscula |
| 129 | `ü` | u con diéresis |
| 130 | `é` | e con acento agudo |
| 131 | `â` | a con acento circunflejo |
| 132 | `ä` | a con diéresis |
| 133 | `à` | a con acento grave |
| 134 | `å` | a con anillo |
| 135 | `ç` | c cedilla minúscula |
| 136 | `ê` | e con acento circunflejo |
| 137 | `ë` | e con diéresis |
| 138 | `è` | e con acento grave |
| 139 | `ï` | i con diéresis |
| 140 | `î` | i con acento circunflejo |
| 141 | `ì` | i con acento grave |
| 142 | `Ä` | A mayúscula con diéresis |
| 143 | `Å` | A mayúscula con anillo |
| 144 | `É` | E mayúscula con acento agudo |
| 145 | `æ` | Ligadura ae minúscula |
| 146 | `Æ` | Ligadura AE mayúscula |
| 147 | `ô` | o con acento circunflejo |
| 148 | `ö` | o con diéresis |
| 149 | `ò` | o con acento grave |
| 150 | `û` | u con acento circunflejo |
| 151 | `ù` | u con acento grave |
| 152 | `ÿ` | y con diéresis |
| 153 | `Ö` | O mayúscula con diéresis |
| 154 | `Ü` | U mayúscula con diéresis |
| 155 | `ø` | o con barra |
| 156 | `£` | Libra esterlina |
| 157 | `Ø` | O mayúscula con barra |
| 158 | `×` | Signo de multiplicación |
| 159 | `ƒ` | Florín o símbolo de función |
| 160 | `á` | a con acento agudo |
| 161 | `í` | i con acento agudo |
| 162 | `ó` | o con acento agudo |
| 163 | `ú` | u con acento agudo |
| 164 | `ñ` | Eñe minúscula |
| 165 | `Ñ` | Eñe mayúscula |
| 166 | `ª` | Ordinal femenino |
| 167 | `º` | Ordinal masculino |
| 168 | `¿` | Apertura de interrogación |
| 169 | `®` | Marca registrada |
| 170 | `¬` | Negación lógica |
| 171 | `½` | Un medio |
| 172 | `¼` | Un cuarto |
| 173 | `¡` | Apertura de exclamación |
| 174 | `«` | Abre comillas angulares |
| 175 | `»` | Cierra comillas angulares |
| 176 | `░` | Trama de densidad baja |
| 177 | `▒` | Trama de densidad media |
| 178 | `▓` | Trama de densidad alta |
| 179 | `│` | Línea vertical |
| 180 | `┤` | Vertical con unión a la izquierda |
| 181 | `Á` | A mayúscula con acento agudo |
| 182 | `Â` | A mayúscula con acento circunflejo |
| 183 | `À` | A mayúscula con acento grave |
| 184 | `©` | Derechos de autor (copyright) |
| 185 | `╣` | Doble vertical con unión a la izquierda |
| 186 | `║` | Doble línea vertical |
| 187 | `╗` | Esquina doble superior derecha |
| 188 | `╝` | Esquina doble inferior derecha |
| 189 | `¢` | Centavo |
| 190 | `¥` | Yen o yuan |
| 191 | `┐` | Esquina superior derecha |
| 192 | `└` | Esquina inferior izquierda |
| 193 | `┴` | Horizontal con unión hacia arriba |
| 194 | `┬` | Horizontal con unión hacia abajo |
| 195 | `├` | Vertical con unión a la derecha |
| 196 | `─` | Línea horizontal |
| 197 | `┼` | Cruce de líneas |
| 198 | `ã` | a con tilde (virgulilla) |
| 199 | `Ã` | A mayúscula con tilde (virgulilla) |
| 200 | `╚` | Esquina doble inferior izquierda |
| 201 | `╔` | Esquina doble superior izquierda |
| 202 | `╩` | Doble horizontal con unión hacia arriba |
| 203 | `╦` | Doble horizontal con unión hacia abajo |
| 204 | `╠` | Doble vertical con unión a la derecha |
| 205 | `═` | Doble línea horizontal |
| 206 | `╬` | Cruce de líneas dobles |
| 207 | `¤` | Símbolo de moneda genérico |
| 208 | `ð` | Letra eth minúscula |
| 209 | `Ð` | Letra eth mayúscula |
| 210 | `Ê` | E mayúscula con acento circunflejo |
| 211 | `Ë` | E mayúscula con diéresis |
| 212 | `È` | E mayúscula con acento grave |
| 213 | `ı` | i sin punto |
| 214 | `Í` | I mayúscula con acento agudo |
| 215 | `Î` | I mayúscula con acento circunflejo |
| 216 | `Ï` | I mayúscula con diéresis |
| 217 | `┘` | Esquina inferior derecha |
| 218 | `┌` | Esquina superior izquierda |
| 219 | `█` | Bloque completo |
| 220 | `▄` | Medio bloque inferior |
| 221 | `¦` | Barra vertical partida |
| 222 | `Ì` | I mayúscula con acento grave |
| 223 | `▀` | Medio bloque superior |
| 224 | `Ó` | O mayúscula con acento agudo |
| 225 | `ß` | Letra alemana eszett |
| 226 | `Ô` | O mayúscula con acento circunflejo |
| 227 | `Ò` | O mayúscula con acento grave |
| 228 | `õ` | o con tilde (virgulilla) |
| 229 | `Õ` | O mayúscula con tilde (virgulilla) |
| 230 | `µ` | Signo micro |
| 231 | `þ` | Letra thorn minúscula |
| 232 | `Þ` | Letra thorn mayúscula |
| 233 | `Ú` | U mayúscula con acento agudo |
| 234 | `Û` | U mayúscula con acento circunflejo |
| 235 | `Ù` | U mayúscula con acento grave |
| 236 | `ý` | y con acento agudo |
| 237 | `Ý` | Y mayúscula con acento agudo |
| 238 | `¯` | Macrón |
| 239 | `´` | Acento agudo |
| 240 | (invisible) | Guion de corte de palabra |
| 241 | `±` | Más o menos |
| 242 | `‗` | Doble guion bajo |
| 243 | `¾` | Tres cuartos |
| 244 | `¶` | Signo de párrafo |
| 245 | `§` | Signo de sección |
| 246 | `÷` | División |
| 247 | `¸` | Cedilla |
| 248 | `°` | Grado |
| 249 | `¨` | Diéresis |
| 250 | `·` | Punto medio |
| 251 | `¹` | Superíndice uno |
| 252 | `³` | Superíndice tres |
| 253 | `²` | Superíndice dos |
| 254 | `■` | Cuadrado negro |
| 255 | (nbsp) | Espacio de no separación (nbsp) |
