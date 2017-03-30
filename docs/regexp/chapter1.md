# Clases

Las clases de caracteres que existen en las expresiones regulares permiten un gran dinamismo a la hora de diseñarlas. Sus usos van desde permitir la aparición de caracteres especiales en la expresión, hasta trabajar con conjuntos de caracteres. A continuación veremos las distintas clases y sus usos.

### Clases de caracteres
Con este tipo de clases, cuya sintaxis es `[*conjunto de caracteres*] `, podemos decirle a la expresión regular que intente hacer 'match' con uno de los caracteres del conjunto. Entonces, una expresión regular que utilice esto podría ser: `/chic[oax]/` y entonces intentará encontrar las palabras chico, chica o chicx.
Además de esto también podemos darle un rango de caracteres, así, en vez de tener que poner, por ejemplo, todas las letras del abecedario, podemos hacer lo siguiente: `/[a-zA-Z0-9]/`, lo cual intentaría encontrar un caracter del abecedario en minúscula o mayúscula, o un número del 0 al 9.

Como podemos observar es una herramienta muy útil que hace nuestras expresiones mucho más legibles, aunque no acaba ahí.

También podemos negar conjuntos, así la expresión regular buscará cualquier cosa que no esté en el conjunto, y para eso sólo tenemos que añadir el caracter '^': `/[^a]/`. En este caso buscará cualquier cosa que no sea una 'a'.

Otra cosa que podemos hacer es tener conjuntos anidados, es decir: `[a-z[A-Z]]`, por ejemplo, y esto nos da el poder de hacer distintas operaciones con conjuntos como la resta: `/[a-z-[r-t]]/`, lo cual intentaría encontrar cualquier cosa en el rango del abecedario en minúscula excepto la r, s y t. O la intersección, que se puede hacer tanto `/[a-z&&[A-Z]]/` así, como `/[a-z&&A-Z]/` así.

### Escapar caracteres
En las expresiones regulares existen caracteres especiales que no podemos utilizar, los cuales veremos en el próximo capitulo, así que si queremos utilizar estos caracteres tenemos que escaparlos, lo cual se hace añadiendo el caracter '\' detrás del caracter que queremos escapar, por ejemplo, si queremos utilizar '[' como caracter, en la expresión regular deberemos utilizar '\['.

Añadir que '\' también es un caracter escapable así que si ponemos '\\' estaremos diciéndole a la expresión que intente encontrar un '\'.

Por último, comentar que el escape sirve también con códigos unicode, así que si tenemos el código del caracter que queremos escapar, podemos hacerlo sin problema: `/\u20AC/`.