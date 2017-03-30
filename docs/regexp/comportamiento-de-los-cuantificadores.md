# Cuantificadores: Lazy vs. greedy

Por defecto los cuantificadores (\*, +, {}) son *greedy*, esto es, captarán la mayor cantidad de caracteres posibles, de manera que una expresión regular como la siguiente:

```javascript
/\/\*.+\*\//
```
captará desde el primer `/*` que consiga, hasta el último `*/`, ignorando todos los de por medio.

Si no es este el comportamiento que se quiere se puede añadir el modificador lazy para asegurar de que la expresión regular capture la subcadena más pequeña que pueda capturar. El modificador lazy se expresa mediante el uso del caracter `?` después de un cuantificador, de manera que para convertir la expresión regular anterior en una con cuantificador lazy quedaría:
```javascript
/\/\*.+?\*\//
```

Aunque el caracter es el mismo que se utiliza para indicar opcional, en este caso, al seguir a un cuantificador, significa que se desea que este cuantificador sea lazy.

## Backtracking
Los cuantificadores greedy siguen capturando hasta el final de la línea y después retroceden hasta coincidir con las otras partes de la expresión regular. Este proceso se conoce como backtracking.
