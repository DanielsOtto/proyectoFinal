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

- Versión 2.2 ~ Sección Inicio → esta conectada a sec_Inicio.js, en el cuál esta alojado el carousel, proximamente le haré los cambios para que se visualicen los objetos más comprados - Sección Hombres → esta vinculada a dos archivos.js (inventario.js e estructura.js, mientras en el primero estan los objetos, en el segundo estan los procesos lógicos), los productos en venta se muestran desde esos archivos, y por otro lado creé los filtros por TIPO de producto y por PRECIO.
- Versión 2.3 ~ Sección Hombres los Radio Buttons para elegir los talles estarán deshabilitados si el talle en cuestión no tiene stock disponible. 
- Versión 2.4 ~ En la función "agregarProductos" en el archivo estructuras.js, almaceno el arreglo carritoDeCompras en el localStorage, y utilizo JSON para luego poder reutilizar el arreglo de objetos. Los objetos de este arreglo los visualizo en el archivo HTML carrito. En la misma función también conseguí que los items no se repitan en el arreglo, y asi poder visualizar la cantidad correcta de cada objeto y su talle correspondiente. 

- Versión 2.4a ~ [DESAFÍO  COMPLEMENTARIO] Agregué operadores ternarios y lógicos (&&) en el archivo estructuras.js, carpeta scripts, [en la función "filtroPrecio" linea 167 y en los eventos de botones, "opcionTipo" l. 154 y "opcionPrecio" l. 181]. Agregué destructuración en los archivos estructuras.js y appCarrito.js, carpeta scripts, [en las funciones "mostrarGaleria" l. 53  y "galeriaCarrito" l. 56, respectivamente]. 
[DESAFÍO LIBRERÍAS] Agregué las librerías Sweet Alert y Toastify, en los archivos estructura.js y appCarrito.js, carpeta scripts. En el archivo estructura.js, en el evento de botonAgregar línea 99, agregué un toastify, el cuál aparece cada vez que agregas un elemento al carrito. Mientras que en el archivo appCarrito.js, agregué ambas librerías, con toastify, aplicada en el boton eliminar aparece cada vez que eliminas un elemento del carrito. Por otro lado, la librería Sweet Alert la utilizo para mostrar el importe final, una vez que el usuario hace click en el botón "finalizar compra" si el carrito tiene elementos te da el importe, si no te comunica que el carrito esta vacìo. 

~ Versión 2.4b ~ [DESAFÍO AJAX] Creé dos archivos JSON, de los cuales recupero la información que voy a tener en las galerías. Los mismos los recupero mediante la herramienta FETCH, en los archivos "mainHombres.js" y "mainMujeres.js", (línea 148 aprox.) .
