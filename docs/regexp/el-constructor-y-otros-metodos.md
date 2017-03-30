# El constructor y otros métodos

El constructor RegExp crea un objeto expresión regular para casar texto con un patrón.

Se acepta tanto notación literal como de constructor:

``` javascript
/pattern/flags; 
new RegExp(pattern [, flags]);
```

La notación literal proporciona compilación de la expresión regular cuando la expresión es evaluada.

Usar la notación literal cuando la expresión regular permanecerá constante.

Por ejemplo, si usas la expresión regular para construir una expresión regular utilizada en un bucle, la expresión regular no será recompilada en cada iteración.

El constructor del objeto expresión  regular, proporciona una compilación en tiempo de ejecución de la expresión regular. Por ejemplo:
```javascript
new RegExp("ab+c")
```

Usa la función del constructor cuando sepas que el patrón de la expresión regular va a cambiar o no conoces el patrón y lo obtienes desde otra fuente, como por ejemplo, del usuario.

Al usar la función del constructor, las normas normales para escapar _strings_ (preceder los caracteres especiales con \ cuando se incluyan en un _string_) son necesaria. Por ejemplo, las siguientes formas son equivalentes:

```javascript 
var re = /\w+/;
var re = new RegExp("\\w+");
```

#### Método: _exec_

El método _exec()_ ejecuta una búsqueda de un _match_ en un _string_ determinado. Devuelve un array resultado o null.

Si estás ejecutando un _match_ simplemente para descubrir si es verdadero o falso, utiliza el método _RegExp.prototype.test()_ o el método _String.prototype.search()_.

#### Método: _search_

```javascript
str.search(regexp)
```
Si tiene éxito, devuelve el índice de la expresión regular dentro del _string_. Si no, devuelve -1.

Cuando quieres saber si un patrón se encuentra en un _string_ usa _search_ (similar al método _test_); para más información pero una ejecución más lenta, usa _match_ (similar al método _exec_).
 
#### Método: _match_

El método _match()_ devuelve los _matches_ al casar un _string_ con una expresión regular.

Si la expresión regular no incluye la opción g, _str.match()_ devuelve el mismo resultado que _RegExp.exec()_. El array devuelto tiene una propiedad extra de input, que contiene el _string_ original que fue _parseado_. Además, tiene una propiedad índice, que representa el índice en 0 del _match_ en el _string_.

Si incluye la opción g, el método devuelve un array que contiene todos los _substrings_ casados en lugar de objetos casados. Los grupos capturados no son devueltos. Si no casa con nada, devuelve _null_.

#### Método: _replace_

El método _replace()_ devuelve un nuevo _string_ con algunos o todos los _matches_ de un patrón reemplazados.

El patrón puede ser un _string_ o una _RegExp_, y el reemplazamiento puede ser un _string_ o una función que se llame para cada _match_.

```javascript
> re = /apples/gi
/apples/gi
> str = "Apples are round, and apples are juicy."
'Apples are round, and apples are juicy.'
> newstr = str.replace(re, "oranges")
'oranges are round, and oranges are juicy.'
```
El _string_ que reemplaza puede ser una función que se invoca para crear un nuevo _substring_ (que sustituya al _substring_ recibido del parámetro #1).