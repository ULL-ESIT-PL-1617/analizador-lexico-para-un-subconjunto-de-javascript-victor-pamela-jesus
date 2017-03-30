# Matching groups

Al colocar parte de una expresión regular entre paréntesis creas un grupo de captura, o *matching group*. Lo que se capture mediante la parte de la expresión regular entre paréntesis después puede ser referenciado para así convertir las expresiones regulares en una herramienta que no sólo permite identificar textos sino también permite después trabajar con partes específicas de ellos.

Los paréntesis presentes en una expresión regular pueden ser posteriormente referenciados por el orden, de izquierda a derecha, en el que aparecen, esto manteniéndose incluso para grupos anidados. De manera que para la siguiente expresión regular:

```javascript
/(a+(b+(c+))(d+))/
```

Los grupos de captura son los siguientes:

<table>
  <tr>
    <th>Referencia al grupo</th>
    <th>Expresión regular que captura</th>
  </tr>
  <tr>
    <td>$1</td>
    <td>a+b+c+d+</td>
  </tr>
  <tr>
    <td>$2</td>
    <td>b+c+</td>
  </tr>
  <tr>
    <td>$3</td>
    <td>c+</td>
  </tr>
  <tr>
    <td>$4</td>
    <td>d+</td>
  </tr>
</table>

Los elementos que captura un grupo pueden después ser referenciados de diferentes maneras dependiendo del método que se utilice. Si un mismo grupo de captura captura múltiples partes de una cadena, sólo la última capturada será accesible después.

Un grupo de captura que empiece con `?:` se conoce como un *non-capturing group* y no se puede referenciar posteriormente. Esto sirve para mejorar el desempeño de la expresión regular en casos donde necesitamos usar los paréntesis como parte de la sintáxis pero no para su uso de captura.

Los paréntesis, aparte de uso para captura, también sirven como una herramienta para agrupar conjuntos, así la expresión regular `/ferr(ero|ari)/` hace match con ferrero tanto con ferrari. También es posible usar metacaracteres sobre paréntesis, como por ejemplo `/h(ey)+/`, donde el cierre de Kleene aplica a `ey` exclusivamente.
