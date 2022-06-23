# proyectoFinal
- → → BRANCH js 
- Versión 1.0   ~ Agregué la carpeta js, y en ella, el archivo main.js. Y en el archivo index.html, agregué la etiqueta <script> para vincularla con el archivo main.js.
                ~ En el archivo main.js, cree la clase "articulo" que va a almacenar las propiedades de cada prenda en venta.
- Versión 1.0a  ~ Arreglando errores. 
- Versión 1.0b  ~ Las funciones comprobarStock() - precioTotal() - comprando() - realizarCompra(), funcionan correctamente.   
- Versión 1.0c  ~ Agregué las funciones mostrarArticle()/opcionesDePago(). La función realizarCompra(), ahora se llama realizarPedido().
- Versión 1.0d  ~ Quité la función opcionesDePago().
- Versión 1.0d  ~ Eliminé la función precioTotal(), su contenido lo reducí a una sola línea, la cuál agregué a la función comprando(). Modifiqué las funciones comprando(), quieroComprar(), comprobarStock() y opcionesDePago(), reduciendo líneas y arreglando todos los errores. Agregué nuevas propiedades → cantidad/multiplePrecio, agregué el método multiplePriceE() y modifiqué todos los métodos que había.

~ → → BRANCH jsSecond
- Versión 2.0  ~ Agregué un arreglo de objetos e incluí los métodos filter() y forEach() en una función, en la cuál compara el valor ingresado con la propiedad "tipo" de los objetos del arreglo, si encuentra una similitud me devuelve un arreglo con esos elementos, sino, me devuelve un alert comunicando que no se encontro nada.
- Versión 2.0a ~ Objetivo hacer un filtro para la búsqueda de objetos.
- Versión 2.0b ~ Agregué nuevas funciones (comprobarStock y mostrarArticulos). La función comprobarStock, verifica que stock sea mayor que 0. Mientras que la función mostrarArticulos, te muestra las propiedades de los objetos seleccionados.
- Versión 2.0c ~ Agregué las funciones (cuantoDesea y arregloCargado). La primera te pregunta cuantos artículos vas a comprar, y descuenta esa cifra del stock (siempre corroborando primero que haya stock suficiente. La segunda funcion retorna "true" si el arreglo.length es mayor a 0, sino retorna "false". Todas las funciones andan correctamente. También realice pequeñas modificaciones en el HTML y en SCSS.

- Versión 2.2 ~ Sección Inicio → esta conectada a sec_Inicio.js, en el cuál esta alojado el carousel, proximamente le hare los cambios para que se visualicen los objetos más comprados - Sección Hombres → esta vinculada a dos archivos.js (inventario.js e estructura.js, mientras en el primero estan los objetos, en el segundo estan los procesos lógicos), los productos en venta se muestran desde esos archivos, y por otro lado se crearon los filtros por TIPO de producto y por PRECIO.
- Versión 2.3 ~ Sección Hombres los Radio Buttons para elegir los talles estarán deshabilitados si el talle en cuestión no tiene stock disponible. 
