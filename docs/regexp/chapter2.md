# Metacaracteres
Como ya se comentó en el capitulo anterior, en las expresiones regulares existen diversos caracteres que no se pueden utilizar sin ser escapados mediante el uso de '\'.

Estos caracteres son:

* '\' - Como ya hemos dicho, este caracter indica que el siguiente será tratado como un literal, un caracter especial o una referencia.
* '^' - Este caracter, fuera de una clase de caracteres, va a coincidir con el inicio de la cadena de entrada de la expresión regular, es decir, apunta al inicio.
* '$' - Es la contraparte del anterior y apunta al final de la cadena.
* '*' - El cierre de Kleene, intentará encontrar la subexpresión anterior cero o más veces.
* '+' - Igual que la anterior, excepto que está exige que al menos haya una repetición de la subexpresión.
* '{}' - Indica el número de veces que se debe repetir alguna cosa, si sólo se pone un número {numero}, deberá repetirse exactamente esa cantidad, si se pone un número y una coma {numero,}, se deberá repetir esa cantidad o más y si se ponen dos números separados por coma donde el segundo es mayor o igual que el primero, se deberá repetir entre esa cantidad de veces.
* '[]' - Conjunto o clase de caracteres, lo vimos a fondo en el capitulo anterior.
* '|' - Es un or, intentará encontrar la palabra que coincida con la expresión a su izquierda, o con la expresión a su derecha, cualquiera de las dos sirve.
* '[^]' - Negación, como vimos en el anterior capitulo, buscará cualquier cosa que no esté en el conjunto de caracteres al que acompaña.
* 'b' - Coincidirá con las fronteras de las palabras, es decir, con la posición entre la palabra y algún espacio en blanco.
* 'B' - Es la 'b' negada, es decir, encontrará cualquier cosa que no sea la frontera de la palabra.
* 'd' - Coincidirá con cualquier caracter que sea un dígito.
* 'D' - 'd' negado.
* 'f' - Coincidirá con los saltos de página.
* 'n' - Coincidirá con los saltos de linea.
* 'r' - Coincidirá con un retorno de carro.
* 's' - Coincidirá con cualquier caracter blanco, ya sea espacio, salto de linea, retorno de carro, etc...
* 'S' - 's' negado.
* 't' - Coincidirá con un tabulador.
* 'v' - Coincidirá con un tabulador vertical.
* 'w' - Coincidirá con cualquier caracter considerado de palabra y con '_'.
* 'W' - 'w' negado.
* 'un' - Coincidirá con un caracter unicode si sustituimos la n por cuatro cifras hexadecimales.