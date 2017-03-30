# La propiedad lastIndex

El método _exec_ no provee con una manera cómoda de empezar a buscar desde una posición dada dentro del _string_. Pero sí tiene una manera incómoda de hacerlo. 

Los objetos de expresiones regulares tienen propiedades. Una de ellas, por ejemplo, es _source_, que contiene el _string_ desde el que se creó esa expresión. Otra propiedad (de la que hablaremos en este capítulo), es _lastIndex_, que controla, en circunstancias limitadas, donde empezará el siguiente _match_.

Esas circunstancias son que la expresión regular debe tener la opción _global_ (g) activada, y el _match_ debe ocurrir a través del método _exec_. Una vez más, una solución más cómoda habría sido permitir que se le pasase un argumento extra a _exec_.

``` javascript
var pattern = /y/g;
pattern.lastIndex = 3;
var match = pattern.exec("xyzzy");
console.log(match.index);
// → 4
console.log(pattern.lastIndex);
// → 5
```

Si el _match_ tuvo éxito, la llamada a _exec_ automáticamente actualiza la propiedad _lastIndex_ al punto justo después del _match_. Si no se encuentra ningún _match_, _lastIndex_ se pone a _0_, que es el valor que tiene también en un objeto expresión regular recién creado.

Al usar un valor global de expresión regular para múltiples llamadas a _exec_, estas actualizaciones automáticas a la propiedad _lastIndex_ pueden causar problemas. Tu expresión regular puede estar comenzando accidentalmente en un índice que fue dejado por una llamada anterior.

``` javascript
var digit = /\d/g;
console.log(digit.exec("here it is: 1"));
// → ["1"]
console.log(digit.exec("and now: 1"));
// → null
```

Otro efecto interesante de la opción global es que cambia la manera en la que el método _match_ funciona en _strings_. Cuando se llama con una expresión global, en lugar de devolver un array similar al que devuelve _exec_, _match_ encontrará todos los _matches_ del patrón en el _string_ y devolverá un array con los _strings_ que han casado.

``` javascript
console.log("Banana".match(/an/g));
// → ["an", "an"]
```
Así que hay que tener cuidado con las expresiones regulares globales. Los casos donde son necesarias -llamadas a _replace_ y lugares donde quieres usar explícitamente _lastIndex_- son normalmente los únicos lugares donde quieres usarlo.
