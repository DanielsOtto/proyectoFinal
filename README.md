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

//Versión 4.0
- Versión 4.0  → Agregadas etiquetas section, ahora todos las etiquetas H1~6 tienen un TAG section. En lás paginas Inicio/Carrito, sus respectivos Hx se encuentran dentro de TAGs section. 
               →  Reconfigurado el valor de REM, antes 1rem valio 16px // ahora 1rem = 10px. Todas las variables que tenían valores en pxs, ahora tienen valores en rem. Todas las variables que tenían valores en rem, sus valores fueron actualizados, debido a la reconfiguración del valor de 1rem. 
               → Reducción de líneas de código. 
- Versión 4.0a → Cambios en la página Inicio: antes, las imágenes traían por defecto textos incluidos y posicionados / ahora, las imágenes estan ´limpias´ y sus textos estan agregados mediante HTML y posicionados usando CSS || Agregué un nuevo estilo de BoxShadow, utilizando la herramienta "Box Shadow CSS Generator | CSSmatic". Esta nueva sombra se utiliza en las imágenes de inicio y en el carousel || Modifiqué el tamaño del carousel, y se mantiene centrado usando las clases de Bootstrap para la columna en la que se encuentra (tamaño de columna + offset)  ///  En la página Carrito: en los botones ENVIAR / BORRAR aumenté la distancia entre las letras usando el atributo "letter-spacing". 
- Versión 4.0b → Borrada la imágen que estaba de más ya fue eliminada, pendiente de la actualización. || Sección Contactos: mejorado el responsiv en el formulario. 
- Versión 4.0c → Sección Contactos: Hice modificaciones en el formulario y en el mapa, no me gustaba como quedaba. 
- Versión 4.0d → Sección Inicio: la nueva imágen no estaba comprimida, ahora si. || Ordené y limpié el código SCSS. || Cambios en la tipografía, saque el estilo Righteous (pero permanece como nombre de variable) y agregue el estilo Lato, regular y Lato, Black. Ahora los textos son mucho más claros.
- Versión 4.1  → Secciones Hombre|Mujer|Carrito: los box-shadow que se aplican en estas secciones fueron modificados, ahora son menos intensos. || Secciones Inicio|Hombre|Mujer: modifiqué algunas imágenes de estas secciones, porque cuando se cambiaba de dispositivo las imágenes se estiraban. En el fragmento MediaQuery cambie la altura de las imñagenes. || En las imágenes de las secciones: Inicio/Hombre/Mujer/Carrito, modifiqué los atributos ALT, ahora son más descriptivos.  || Modifiqué el archivo package.json, ahora tiene una breve descripción y aparece mi nombre en la sección de autor. 
- Versión 4.1a → Sección Contactos: Había utilizado GRID para estructurar el main de esa sección, y lo modifiqué por un FLEXBOX, menos líneas por el mismo resultado. || El logo de la marca tenía un transform (translate), lo había puesto para un ejercicio anterior, lo quité porque no me gusta.
- Versión 4.1b → Modificaciones: Creadas nuevas variables. || Eliminadas las clases: logoBox y titleBox (que se encontraban en el Header y hacían lo mismo mediante un @extend), ahora existe una sola clase: boxHeader // eliminadas: cont-img__h y cont-img__m (se encontraban en la sección Inicio, y estaban vínculadas mediante un @extend), ahora existe cont-img__text. 
- Versión 4.1c → Modificaciones en el fragmento tipografías, le agregué a los @font-face el descriptor font-display con el valor fallback. Lo cual establece un tiempo de bloqueo muy pequeño y un período de intercambio corto, permitiendo que se muestren las fuentes cuándo este descargada y lista para usarse.


→ MERGE -- Entre main (rama principal) y sassSecond (última rama actualizada).
