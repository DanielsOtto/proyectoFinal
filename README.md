# proyectoFinal
- Versión 1.1 → Arreglados los errores al crear los archivos de extensiones.
- Versión 1.2 → Modificado el carrito, ahora contiene una simulación de compra.
- Versión 1.3 → Modificada la carpecta scss. Cambios en los files .scss, mejorando el orden en destino.css.
- Versión 2.0 → Arreglado un encabezado en sección Carrito.
              → Agregados EXTENDS en la sección Carritos (clases buying/purchase), en secciones Hombres y Mujeres (form/select), sección SharedStructures (en Header, clases titleBox/logoBox y en Footer, clases delivery/socialMedia/payment/createdBy).
              → Agregados MIXINS - medidasGlobal y displayFlex - medidasGlobal obtiene los valores de ancho y alto, se utiliza en los fragmentos: _imágenes, _botones, _carrito. - displayFlex obtiene los valores para display, flex-direction, flex-wrap, align-items y justify-content. Se utiliza en los fragmentos: _botones, _carrito, _indexMain, _MenAndWomen y _sharedStructures.
              → Agregados estilos con MAPS, creados: styleBoxs y stileFonts. Se utilizan en las fragmentos: _tipografía, _botones, _carrito, _contactos, _menAndWomen y _sharedStructures. 
- Versión 2.1 → Arreglado un error en la seccion Carrito, con la posición de la ubicación.
- Versión 2.2 → Arreglado los errores en las carpetas components y utilities.

// Entrega SASS II + SEO 
- Versión 2.3 → Cambio de nombre de la marca. 
              → Agregado icono de tacho de basura en la sección Carro de compras. Futuro botón para cancelar la compra.
              → Imágenes comprimidas. 
              → Agregados los meta keywords y description. Actualizados los titles de las páginas web.
- Versión 2.3b → Arreglado errores del cambio de nombre.
- Versión 3.0 → Agregado el carousel en inicio, muetra las prendas más vendidas. 
              → Agregado los fragmentos _variables (contiene anchos y altos utilizados en imágenes) + _mediaQuerys ( contiene ajustes para las medidas 768px y 480px).
- Versión 3.0a → Solucionado errores de anchos. 
- Versión 3.0b → Ajustes.
- Versión 3.0c → Comprimida la imágen de la marca. 
- Versión 3.0d → Reducida la cantidad de variables. Los maps dejaron de estar en el fragmento _funciones y pasaron al de _variables.
- Versión 3.0e → Modificados todos los archivos de la carpeta SCSS. Agregadas variables al fragmento _variables, y agregado el mixin "marginAndPadding" al fragmento _funciones. Modificado el orden de los imports en el archivo origen.scss.  
- Versión 3.1  → Modificado los fragmentos:
                      ▬ _variables, se ajustaron los mapas (tenían una ´,´ de más)
                      ▬ _mediaQuerys, las cuales afectan las secciones Hombre y Mujer (ahora las imágenes tienen el mismo tamaño cuando se achica la pantalla).
                      ▬ _imágenes (se modificó el tamaño del mapa que muestra la ubicación).
                      ▬ _tipografías, en la clase .shirt__info se agregó  ´&:last-of-type´ (ahora el precio del producto aparece centrado, mientras que el detalle se mantiene justificado a la izquierda). 
- Versión 3.1a → Correción de errores: faltaban 2 ´;´, agregados, solucionados (en los archivos _variables y _mediaQuerys).
