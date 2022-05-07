# proyectoFinal
- Version 1.1 → Arreglados los errores al crear los archivos de extensiones.
- Version 1.2 → Modificado el carrito, ahora contiene una simulación de compra.
- Version 1.3 → Modificada la carpecta scss. Cambios en los files .scss, mejorando el orden en destino.css.
- Version 2.0 → Arreglado un encabezado en sección Carrito.
              → Agregados EXTENDS en la sección Carritos (clases buying/purchase), en secciones Hombres y Mujeres (form/select), sección SharedStructures (en Header, clases titleBox/logoBox y en Footer, clases delivery/socialMedia/payment/createdBy).
              → Agregados MIXINS - medidasGlobal y displayFlex - medidasGlobal obtiene los valores de ancho y alto, se utiliza en los fragmentos: _imágenes, _botones, _carrito. - displayFlex obtiene los valores para display, flex-direction, flex-wrap, align-items y justify-content. Se utiliza en los fragmentos: _botones, _carrito, _indexMain, _MenAndWomen y _sharedStructures.
              → Agregados estilos con MAPS, creados: styleBoxs y stileFonts. Se utilizan en las fragmentos: _tipografía, _botones, _carrito, _contactos, _menAndWomen y _sharedStructures. 
- Version 2.1 → Arreglado un error en la seccion Carrito, con la posición de la ubicación.
- Version 2.2 → Arreglado los errores en las carpetas components y utilities.

// Entrega SASS II + SEO 
- Version 2.3 → Cambio de nombre de la marca. 
              → Agregado icono de tacho de basura en la sección Carro de compras. Futuro botón para cancelar la compra.
              → Imágenes comprimidas. 
              → Agregados los meta keywords y description. Actualizados los titles de las páginas web.
- Version 2.3b → Arreglado errores del cambio de nombre.
- Version 3.0 → Agregado el carousel en inicio, muetra las prendas más vendidas. 
              → Agregado los fragmentos _variables (contiene anchos y altos utilizados en imágenes) + _mediaQuerys ( contiene ajustes para las medidas 768px y 480px).
- Version 3.0a → Solucionado errores de anchos. 
- Version 3.0b → Ajustes.
- Version 3.0c → Comprimida la imágen de la marca. 
- Version 3.0d → Reducida la cantidad de variables. Los maps dejaron de estar en el fragmento _funciones y pasaron al de _variables.
- Version 3.0e → Modificados todos los archivos de la carpeta SCSS. Agregadas variables al fragmento _variables, y agregado el mixin "marginAndPadding" al fragmento _funciones. Modificado el orden de los imports en el archivo origen.scss.  
- Version 3.1  → Modificado los fragmentos:
                      ▬ _variables, se ajustaron los mapas (tenían una ´,´ de más)
                      ▬ _mediaQuerys, las cuales afectan las secciones Hombre y Mujer (ahora las imágenes tienen el mismo tamaño cuando se achica la pantalla).
                      ▬ _imágenes (se modificó el tamaño del mapa que muestra la ubicación).
                      ▬ _tipografías, en la clase .shirt__info se agregó  ´&:last-of-type´ (ahora el precio del producto aparece centrado, mientras que el detalle se mantiene justificado a la izquierda). 

//Version 4.0
- Version 4.0  → Agregadas etiquetas section, ahora todos las etiquetas H1~6 tienen un TAG section. En lás paginas Inicio/Carrito, sus respectivos Hx se encuentran dentro de TAGs section. 
               →  Reconfigurado el valor de REM, antes 1rem valio 16px // ahora 1rem = 10px. Todas las variables que tenían valores en pxs, ahora tienen valores en rem. Todas las variables que tenían valores en rem, sus valores fueron actualizados, debido a la reconfiguración del valor de 1rem. 
               → Reducción de líneas de código. 
- Version 4.0a → Cambios en la página Inicio: antes, las imágenes traían por defecto textos incluidos y posicionados / ahora, las imágenes estan ´limpias´ y sus textos estan agregados mediante HTML y posicionados usando CSS || Agregué un nuevo estilo de BoxShadow, utilizando la herramienta "Box Shadow CSS Generator | CSSmatic". Esta nueva sombra se utiliza en las imágenes de inicio y en el carousel || Modifiqué el tamaño del carousel, y se mantiene centrado usando las clases de Bootstrap para la columna en la que se encuentra (tamaño de columna + offset)  ///  En la página Carrito: en los botones ENVIAR / BORRAR aumenté la distancia entre las letras usando el atributo "letter-spacing". 
- Version 4.0b → Borrada la imágen que estaba de más ya fue eliminada, pendiente de la actualización. || Sección Contactos: mejorado el responsiv en el formulario. 
