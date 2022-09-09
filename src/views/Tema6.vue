<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 6
      h1 Experiencia de usuario (UX) 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-8.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t6/t6_01.svg", alt="alt")
      .col-lg-9(data-aos="fade")
        p.mb-4 El término #[strong UX o #[em User Experience]] por sus siglas en inglés, significa Experiencia de Usuario y según la #[span.bold.clr--blue Norma ISO 9241-210:] UX es la percepción y respuesta de un usuario como resultado del uso anticipado de un producto, sistema o servicio, antes de que este salga al mercado. Para darle al producto un uso anticipado, su diseño debe estar centrado en el usuario, incorporando elementos visuales, textuales y de sonido de tal manera que la experiencia con éste permita la mayor interacción posible.
        .row
          .col-auto.d-none.d-lg-flex
            figure
              img(src="@/assets/curso/temas/recursos/rectangle_01.svg", alt="alt").img90
          .col
            p.mb-0 #[strong Según Madrid (2018) la Asociación Profesional de Experiencia de Usuario -UXPA- determinó que las actividades a realizar para lograr un buen diseño de UX son:]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .slyderBg_02.pt-5.p-4(data-aos="fade") 
          SlyderA(tipo="b")
            .row.justify-content-around.cardNumber(data-cardNumber="01")
              .col-lg-8.mb-2.mb-lg-0                                
                p Investigar previamente al cliente y a los usuarios para conocer más acerca de ellos, sus necesidades, objetivos y expectativas respecto del producto que se va a implementar. Para ello es importante utilizar las técnicas de recolección de información vistas anteriormente.      
              .col-auto
                figure
                  img(src='@/assets/curso/temas/t6/t6_28.svg', alt='').img150.m-auto

            .row.justify-content-around.cardNumber(data-cardNumber="02")
              .col-lg-8.mb-2.mb-lg-0                                
                p Realizar el benchmarking del producto a desarrollar; el cual consiste en compararlo con la competencia para determinar en qué aspectos se puede diferenciar de esta y así poder optimizarlo proporcionándole el valor agregado para los usuarios.      
              .col-auto
                figure
                  img(src='@/assets/curso/temas/t6/t6_29.svg', alt='').img150.m-auto

            .row.justify-content-around.cardNumber(data-cardNumber="03")
              .col-lg-8.mb-2.mb-lg-0                                
                p Comprender cuál es el contexto de uso que le proporcionaran los usuarios al producto y así poder definir el alcance y objetivos que tendrá, los requisitos de diseño y desarrollo necesario para su implementación.      
              .col-auto
                figure
                  img(src='@/assets/curso/temas/t6/t6_30.svg', alt='').img150.m-auto

            .row.justify-content-around.cardNumber(data-cardNumber="04")
              .col-lg-8.mb-2.mb-lg-0                                
                p Realizar el diseño conceptual del producto multimedia, partiendo de las actividades anteriores para establecer correctamente la estructura y funcionalidades que ofrecerá y el valor que aportará en cuanto su uso y accesibilidad.      
              .col-auto
                figure
                  img(src='@/assets/curso/temas/t6/t6_31.svg', alt='').img150.m-auto

            .row.justify-content-around.cardNumber(data-cardNumber="05")
              .col-lg-8.mb-2.mb-lg-0                                
                p Realizar el diseño de la interfaz del producto para determinar cómo lo vería el usuario cuando esté terminado. Para ello se utilizan las técnicas Wireframe y Mockup vistas anteriormente.      
              .col-auto
                figure
                  img(src='@/assets/curso/temas/t6/t6_32.svg', alt='').img150.m-auto

            .row.justify-content-around.cardNumber(data-cardNumber="06")
              .col-lg-8.mb-2.mb-lg-0                                
                p Aplicar pruebas de usabilidad del producto con el fin de evaluar el uso que el usuario le dará al producto de acuerdo con el alcance y los objetivos definidas por el cliente.     
              .col-auto
                figure
                  img(src='@/assets/curso/temas/t6/t6_33.svg', alt='').img150.m-auto

      .col-lg-5.d-none.d-lg-flex
        figure
          img(src="@/assets/curso/temas/t6/t6_01A.svg", alt="alt")

    .cajon.cjn--paleBlue.p-4.mb-5(data-aos="zoom-in")
      p.mb-0 Las anteriores actividades se pueden resumir en un enfoque metodológico para determinar las etapas que se llevan a cabo para diseñar la UX; como se muestra en la siguiente figura:

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-8
        figure
          img(src="@/assets/curso/temas/t6/t6_02.svg", alt="alt")

    .row.mb-5(data-aos="fade")
      .col-auto.d-none.d-lg-flex
        figure
          img(src="@/assets/curso/temas/recursos/rectangle_01.svg", alt="alt").img90
      .col
        p.mb-0 #[strong A continuación se pueden conocer las etapas para diseñar la Experiencia de Usuario (UX):]

    .bg_img_0
      .row.justify-content-center.mb-5
        .col-lg-5.col-8.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/temas/t6/t6_03.svg", alt="alt")
        .col-lg-7(data-aos="fade")
          LineaTiempoD.color-acento-botones       
            .row(numero="1" titulo="La etapa de investigación")
              .col-12
                p Recopila la mayor cantidad de información posible, caracterizando los usuarios de acuerdo con su perfil personal, demográfico, cultural y rol que desempeña en el proyecto e igualmente se categorizan las necesidades que tienen de usar el producto a desarrollar. 
                .row
                  .col-auto
                    figure
                      img(src="@/assets/curso/temas/t6/t6_04.svg", alt="alt").img90
                  .col
                    p.mb-0 Se analizan las características del contexto de uso del producto (políticas, económicas, tecnológicas, sociales y culturales) y se realiza un estudio de mercado para detectar aquellas que presenten similitudes y realizar un rediseño de este si es necesario. 

            .row(numero="2" titulo="La etapa de definición ")
              .col-12              
                .row.mb-4
                  .col-auto
                    figure
                      img(src="@/assets/curso/temas/t6/t6_05.svg", alt="alt").img90
                  .col
                    p.mb-0 Plasma toda la información recopilada anteriormente, en la definición del alcance del proyecto, estableciendo los objetivos específicos de acuerdo con el uso que los usuarios harán del producto a desarrollar. 

                p.mb-0 Se identifican las actividades necesarias para la elaboración de la maqueta, precisando la técnica y las herramientas tecnológicas que se utilizarán en la etapa de diseño. Se definen los instrumentos para la aplicación de las pruebas de usabilidad del producto.

            .row(numero="3" titulo="La etapa de diseño")
              .col-12
                p Estructura la maqueta / prototipo del producto, estableciendo los aspectos de funcionalidad y las interfaces de interacción que tendrá con el usuario.  
                .row
                  .col-auto
                    figure
                      img(src="@/assets/curso/temas/t6/t6_06.svg", alt="alt").img90
                  .col
                    p.mb-0 Se utilizan las herramientas de maquetado de alta fidelidad como los #[em mockups], incorporando textos, imágenes o animaciones para darle una mayor aproximación a lo que sería  el producto final, permitiendo que tanto cliente como usuario realice los procesos necesarios con lo cual puedan evaluar su usabilidad.

            .row(numero="4" titulo="La etapa de prueba ")
              .col-12              
                .row.mb-4
                  .col-auto
                    figure
                      img(src="@/assets/curso/temas/t6/t6_05.svg", alt="alt").img90
                  .col
                    p.mb-0 Permite realizar la evaluación del prototipo diseñado, tanto con el cliente como con el usuario. Con el primero se comprobará si el producto cumple con el alcance y los objetivos definidos y con los segundos se comprobará si satisface las necesidades de uso. 

                p.mb-0 En este proceso de #[em feedback] se utilizarán las técnicas y herramientas definidas con el compromiso de realizar todos los ajustes que sean solicitados por clientes y usuarios.

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-10
        .row.justify-content-center.align-items-center
          .col-auto
            figure
              img(src="@/assets/curso/temas/t2/t2_24.svg", alt="alt")
          .col
            p.mb-0 El diseño de la Experiencia de Usuario -UX-, es un proceso iterativo que debe realizarse cuantas veces sea necesario hasta que cliente y usuarios satisfagan las expectativas que tienen con el producto. 

    p(data-aos="fade").mb-5 #[strong Según Morville (2004), un buen diseño de UX refleja un producto multimedia:]

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          h5 Figura 4.
          span Diseño UX

        ImagenInfografica
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/t6/t6_27.svg', alt='')

          .crd--info(x="50%" y="0%" numero="+")
            h4.mb-0.cstm--crdTitle Accesible
            p.p-4 Proporciona el acceso a todo tipo de usuario entre los cuales se incluyen los que posean discapacidades.

          .crd--info(x="79%" y="12.5%" numero="+")
            h4.mb-0.cstm--crdTitle Usable
            p.p-4 Brinda facilidad de uso al permitir alto grado de interacción del usuario durante el tiempo de utilización.

          .crd--info(x="88.5%" y="38%" numero="+")
            h4.mb-0.cstm--crdTitle Encontrable
            p.p-4 Posee un sistema de navegación que le permite al usuario ubicarse fácilmente dentro de él y encontrar lo que está buscando.

          .crd--info(x="79%" y="65.5%" numero="+")
            h4.mb-0.cstm--crdTitle Que aporte valor
            p.p-4 Contribuye al rendimiento de las actividades para las cuales fue creado, optimizando los costos y agilizando los tiempos en los que incurren el cliente y los usuarios si no lo utilizan.

          .crd--info(x="25%" y="65.5%" numero="+")
            h4.mb-0.cstm--crdTitle Útil
            p.p-4 Tiene la capacidad de dar respuesta a las necesidades de los usuarios que lo utilizan, cumpliendo con lo establecido en los requerimientos.

          .crd--info(x="12%" y="40%" numero="+")
            h4.mb-0.cstm--crdTitle Creíble
            p.p-4 Es confiable para los usuarios, al poseer las características que espera y adecuarse a los objetivos y propósitos definidos. 

          .crd--info(x="21%" y="12.5%" numero="+")
            h4.mb-0.cstm--crdTitle Deseable
            p.p-4 El diseño y la apariencia están en armonía con su eficiencia haciendo que el usuario se conecta emocionalmente con él.





    h3(data-aos="fade") Diseño de la Experiencia de Usuario -UX-

    p(data-aos="fade").mb-5 El enfoque metodológico visto anteriormente en el que se establecieron las etapas para llevar a cabo la UX; se contempla un proceso central para la elaboración del producto el cual corresponde a la etapa de “diseño”, en la cual según lo dicho por Morville (2004), se deben tener en cuenta aspectos fundamentales como: 

    .row.mb-4(data-aos="fade")
      .col-auto
        h3.custom-H3 Usabilidad

    p(data-aos="fade").mb-5 La usabilidad como se mencionó antes no es más que la facilidad de uso del producto para el usuario. Según (Ronda 2013) citando a Nielsen (2017) para lograr la usabilidad se deben cumplir con algunos principios:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")(data-aos="fade")
      .row(titulo="Visibilidad del estado del sistema").p-4
        .col-lg-8          
          p El usuario debe recibir una retroalimentación del estado del producto en cada instante para saber qué pasa cuando interactúa con él, por ejemplo si está guardando, cargando, o si hay algún tipo de error. 
          p.mb-0 En la imagen anterior se observan los mensajes que visualiza un usuario cuando sube un archivo correctamente #[em SUCCESS!] y puede cerrar el proceso CLOSE o cuando hubo algún problema en esta acción #[em ERROR!] Y debe intentar de nuevo #[em TRY AGAIN]. 
     
        .col-lg-4.col-8
          figure
            img(src='@/assets/curso/temas/t6/t6_08.png', alt='')  

      .row(titulo="Relación del producto con el mundo real").p-4
        .col-lg-8          
          p Se debe brindar al usuario toda la información necesaria para que no tenga dudas o cometa errores en la acción que va a realizar.
          p.mb-0 Por ejemplo cuando un usuario está haciendo una compra tipo crédito en línea, se le debe indicar qué datos debe diligenciar y en donde los encuentra en su tarjeta como se muestra en la imagen, ya que se debe partir de que todos los internautas no son ágiles en el manejo de estos sistemas. 
     
        .col-lg-4.col-8
          figure
            img(src='@/assets/curso/temas/t6/t6_09.png', alt='')  

      .row(titulo="Libertad al usuario").p-4
        .col-lg-8          
          p El producto debe permitir que el usuario cancele un proceso que estaba realizando sin finalizarlo, de tal manera que esta acción no represente compromisos o penalizaciones que puedan llegar a afectarlo en cualquier aspecto de su estado emocional o material. 
          p En la imagen se visualiza como un usuario a abortado la compra en el momento en que estaba digitando el número de la tarjeta de crédito. 
          p.mb-0 Esta libertad que le da el producto multimedia permite que el usuario tenga el control y evita que se sienta encasillado en él.
     
        .col-lg-4.col-8
          figure
            img(src='@/assets/curso/temas/t6/t6_10.png', alt='')

      .row(titulo="Consistencia").p-4
        .col-lg-8          
          p Utilizar un patrón de diseño de los elementos del producto no solo le proporciona coherencia sino claridad y facilidad de uso a la hora de ser utilizado por el usuario. Por ejemplo cuando se diseñan botones se debe colocar del mismo color y tamaño.

          p En la imagen se puede observar que los botones definidos tienen el mismo tamaño y se han aplicado colores específicos dependiendo de las acciones que realizan; por ejemplo el rojo indica el proceso de contactar al cliente, el verde implica una acción de descarga, el azul el hecho de leer mas sobre algo, el fucsia ingresar a un sistema y el naranja realizar una búsqueda.

          p.mb-0 Estos patrones son fácilmente asimilados por los usuarios evitando que se confunda al usar el producto.  
     
        .col-lg-4.col-8
          figure
            img(src='@/assets/curso/temas/t6/t6_11.png', alt='') 

      .row(titulo="Prevención de errores").p-4
        .col-lg-8          
          p Se deben dar instrucciones claras a los usuarios sobre cómo manejar el producto y las acciones que deben realizar para evitar su mal uso y posteriormente el abandono, debido a los errores que puede arrojar.          

          p.mb-0 En la imagen se observa como un sistema le indica al usuario la forma de crear una contraseña para registrarse en el producto.   
     
        .col-lg-4.col-8
          figure
            img(src='@/assets/curso/temas/t6/t6_12.png', alt='')

      .row(titulo="Recordación").p-4
        .col-lg-8          
          p El producto multimedia debe proporcionar toda la información posible en aquellos momentos donde el usuario necesita recordar los detalles claves que le permitan confirmar la decisión que está a punto de tomar.       

          p En la imagen se visualiza el momento en que se debe realizar el pago de un producto/servicio sin recordarle al cliente los detalles de su compra y exigiendo que este eche mano de su memoria para finalmente tomar la decisión de realizarla.          

          p.mb-0 Este aspecto de no recordación es común en los productos y no es considerado como un error, pero si se mira desde el punto de vista del diseño, incluir este estos detalles no solo hacen más funcional el sistema, sino que puede evitar una incorrecta toma de decisiones al depender solo de la memoria. 
     
        .col-lg-4.col-8
          figure
            img(src='@/assets/curso/temas/t6/t6_13.png', alt='')  

      .row(titulo="Flexibilidad y eficiencia de uso").p-4
        .col-lg-8          
          p Se refiere a la capacidad de utilización del producto independientemente del tipo de usuario; es decir si a este se le facilita el uso de las herramientas tecnológicas o si por el contrario no le es sencillo ni familiar hacerlo.       

          p En la imagen se sugiere un motor de búsqueda que solo contiene una barra en forma de caja donde el usuario introduce las palabras o las temáticas que quiere consultar independientemente de si tiene habilidades o no en el manejo del sistema de información.           

          p.mb-0 Si el internauta es lo suficientemente ágil y avanzado en el uso de estas aplicaciones podrá hacer búsquedas avanzadas que le permitan filtrar la información que necesita.
     
        .col-lg-4.col-8
          figure
            img(src='@/assets/curso/temas/t6/t6_14.png', alt='')

      .row(titulo="Diseño minimalista").p-4
        .col-lg-8          
          p Es importante no saturar de información al usuario del producto, mostrándole contenido innecesario que lo distraiga y lo desvíe del objetivo de utilización del producto.       

          p En la imagen se observa la pantalla inicial de una agencia de viajes en la que se presenta al usuario dos barras o cajas en la que debe introducir la fecha de inicio de su viaje y el número de habitaciones que necesita de acuerdo con el número de personas que van a viajar.          

          p.mb-0 Esta presentación es sencilla y no se presta para confusiones, puesto que solicita la información que necesita la empresa para diligenciar el pedido del cliente.
     
        .col-lg-4.col-8
          figure
            img(src='@/assets/curso/temas/t6/t6_15.png', alt='') 

      .row(titulo="Reconocer y corregir errores").p-4
        .col-lg-8          
          p Proporciona información al usuario de lo que está generando errores en la utilización del producto multimedia, y le brinda recomendaciones de las acciones que puede realizar para un buen uso del sistema.       

          p La imagen presenta un mensaje del producto multimedia, el cual indica al usuario que el programa no se puede instalar porque falta el archivo MSVCR100.dll y también presenta la recomendación para solventar el problema, realizando la reinstalación del aplicativo de nuevo.         

          p.mb-0 En este ejemplo se muestra con claridad la acción que el usuario puede ejecutar para la corrección de lo que probablemente está presentando la falla, ya sea por una mala instalación o por un inconveniente en el dispositivo donde se está llevando a cabo el proceso.
     
        .col-lg-4.col-8
          figure
            img(src='@/assets/curso/temas/t6/t6_16.png', alt='')

      .row(titulo="Ayuda y documentación").p-4
        .col-lg-8          
          p Se deben detectar las dudas más comunes de los usuarios cuando está usando el producto multimedia e incluir la información necesaria para que el mismo pueda encontrar la manera de resolverlas. De esta forma el producto se hace auto gestionable.     

          p En la imagen se muestra como la empresa presenta y documenta las ayudas necesarias para que el usuario pueda realizar los procesos y funcionalidades del producto multimedia sin que necesite una ayuda extra.         

          p.mb-0 En este caso si hace clic en Mis pedidos encontrará la información para llevar a cabo el seguimiento de su pedido, realice una devolución o vuelva a la tienda para hacer otra compra.
     
        .col-lg-4.col-8
          figure
            img(src='@/assets/curso/temas/t6/t6_17.png', alt='')  

    .row.mb-4(data-aos="fade")
      .col-auto
        h3.custom-H3 Accesibilidad
    
    .bg_img_04.mb-5
      .row.justify-content-center.mb-5
        .col-lg-3.col-8.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/temas/t6/t6_18.svg", alt="alt")
        .col-lg-9(data-aos="fade")
          p.mb-4 Como se vio anteriormente un producto multimedia es accesible cuando permite la entrada y uso a cualquier tipo de usuario sin importar su condición física. La #[strong WAI - #[em Web Accessibility Initiative] -] creó una serie de normas que ayudan a los diseñadores a lograr dicha accesibilidad a través de la implementación de la #[strong WCAG 2.0 (#[em Web Content Accessibility Guidelines]).]       
          .row.mb-4
            .col-auto.d-none.d-lg-flex
              figure
                img(src="@/assets/curso/temas/recursos/rectangle_01.svg", alt="alt").img90
            .col
              p.bold.mb-0 Esta guía consiste en una serie de estándares técnicos que explican cómo flexibilizar el ingreso de usuarios con discapacidad a cualquier contenido #[em web]. Consta de 12 pautas con diferentes niveles que permiten una accesibilidad básica (nivel A), intermedia (nivel AA) o Alta (nivel AAA). 

          p Estas pautas o criterios se agrupan en cuatro (4) principios: 

      TabsC.color-primario(data-aos="fade")
        .py-3.py-md-4(titulo="Perceptible")
          .row.justify-content-center.align-items-center
            .col-lg-9.mb-4.mb-lg-0
              h4 Perceptible
              p Este principio se enfoca en asegurar que todo el contenido del producto puede ser comprendido por el usuario proporcionándole diferentes alternativas como texto, video o audio.
              p.mb-0 En la imagen referida hay un grupo de objetos contiguos con los cuales se quiere transmitir información que no es individual. Este caso es un sistema de calificación compuesto por estrellas alineadas en 5 columnas y 6 filas, que se ha dispuesto para que los usuarios (filas) valoren en una escala de 1 a 5 (columnas) la funcionalidad de un producto. En lugar de utilizar texto para cada fila, se utiliza el color amarillo que indica el número de puntos que ese usuario le ha dado al producto, si la puntuación es la máxima todas las estrellas están coloreadas. 
          
            .col-lg-3.col-8
              figure
                img(src="@/assets/curso/temas/t6/t6_19.svg", alt="alt")

        .py-3.py-md-4(titulo="Operable")
          .row.justify-content-center.align-items-center
            .col-lg-9
              h4 Operable
              p El producto debe proporcionar facilidad de interacción y navegación a los usuarios a través del mouse o el teclado. La interfaz o pantalla que se le coloque al usuario para acceder al producto multimedia deben permitirle ir al lugar que quiera.

              p.mb-0 En la imagen de referencia el formulario que se presenta esta organizado visualmente de tal forma que a través de la distribución y el texto que se ha utilizado, el usuario sepa que información se coloca primero y cual después. Igualmente si faltó alguna casilla por diligenciar, el mismo sistema indique mediante un sonido y mensaje de alerta que se ha saltado un campo y además no permita avanzar hasta que sea completado. Esta función hace que el producto sea fácilmente operable sin posibilidad de que el usuario se pierda o tenga confusión sobre su uso.
          
            .col-lg-3.col-8
              figure
                img(src="@/assets/curso/temas/t6/t6_20.svg", alt="alt")

        .py-3.py-md-4(titulo="Comprensible")
          .row.justify-content-center.align-items-center
            .col-lg-9
              h4 Comprensible
              p El contenido del producto y la forma en que el usuario puede interactuar con él debe estar de acuerdo con su capacidad de entendimiento, sin importar el perfil o el nivel de formación que posea. 

              p.mb-0 Una de las acciones que comúnmente realizan los usuarios es la de borrar información personal o de cualquier índole; ésta puede ser representada con una papelera de reciclaje como se muestra en la imagen anterior. El icono indica que la cesta está llena porque se han eliminado datos y el usuario siempre la verá en ese estado hasta que no ejecute la acción de vaciarla, pues aunque el producto no lo exprese, se puede intuir o comprender que para ver la cesta vacía se debe ejecutar esta acción.
          
            .col-lg-3.col-8
              figure
                img(src="@/assets/curso/temas/t6/t6_21.svg", alt="alt")

        .py-3.py-md-4(titulo="Robustez")
          .row.justify-content-center.align-items-center
            .col-lg-9
              h4 Robustez
              p El producto debe ser lo suficientemente robusto para permitir su uso sin importar la ubicación, máquina o navegador que se utilice y debe poder ser interpretado por cualquier aplicación, tecnología o usuario.

              p.mb-0 En la imagen se puede observar una aplicación de fitness y otra de calendario que son compatibles en dispositivos móviles, de tal forma que el usuario pueda desplazarse a cualquier lugar llevándolas consigo, ya que el celular puede ser de cualquier marca, lo mismo el sistema operativo que las soporta. La información que contiene el producto es la suficiente para que el usuario comprenda el botón que debe oprimir para comenzar y compartir su progreso en una actividad física o la estadística del flujo de trabajo mensual de acuerdo con las fechas programadas.
          
            .col-lg-3.col-8
              figure
                img(src="@/assets/curso/temas/t6/t6_22.svg", alt="alt")

    .row.mb-4(data-aos="fade")
      .col-auto
        h3.custom-H3 Interactividad

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="fade")
        p.mb-4 Un producto multimedia interactivo es aquel que incorpora diferentes medios que permiten que el usuario entre en contacto con él. Por lo tanto, puede integrar texto, audio, animación, videos o simuladores. Los proyectos que pueden hacer este tipo de integración pueden ser: aplicaciones móviles, programas, páginas #[em web] o videojuegos principalmente. Estos productos pertenecen a un mercado que está en constante evolución e innovación debido a que la tecnología no se estanca, igualmente está dirigidos a públicos objetivos concretos que son activos al momento de interactuar con el producto. 
        .row.mb-4
          .col-auto.d-none.d-lg-flex
            figure
              img(src="@/assets/curso/temas/recursos/rectangle_01.svg", alt="alt").img90
          .col 
            p.bold.mb-0 Según Belloch (s.f.) los criterios por tener en cuenta para que un producto sea considerado lo suficientemente interactivo son: 
      .col-lg-4(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t6/t6_23.svg", alt="alt")


    TabsA.color-primario.mb-5(data-aos="zoom-in")
      .tarjeta.cstm_border.p-4(titulo="Sistema de navegación ")
        h4.mb-4 Sistema de navegación 
        .row
          .col-auto.d-none.d-lg-flex
            figure
              img(src="@/assets/curso/temas/t6/t6_24.png", alt="alt").img150
          .col
            p En el tema de sistema de navegación de un proyecto multimedia se explicó con más detalle los tipos de desplazamiento que le permiten al usuario tener un contacto con el producto de forma lineal, jerárquica o híbrida. En este caso, por ejemplo:
            p.mb-0 La imagen muestra cómo el usuario puede interactuar con un libro digital y pasar las páginas para leer su contenido. El tipo de estructura utilizada en el sistema de navegación es lineal ya que el usuario se desplaza a través de él de manera horizontal avanzando o retrocediendo si así lo desea, es decir hace un recorrido secuencial. 

      .tarjeta.cstm_border.p-4(titulo="Finalidad y base teórica")
        h4.mb-4 Finalidad y base teórica 
        .row
          .col-auto.d-none.d-lg-flex
            figure
              img(src="@/assets/curso/temas/t6/t6_25.png", alt="alt").img150
          .col
            p De acuerdo con el alcance y objetivos que se persigan, se pueden construir productos multimedia que tengan la función de informar a los usuarios sobre determinadas temáticas o también productos formativos cuya finalidad sea buscar el aprendizaje en determinadas áreas de conocimiento.
            p.mb-0 En la imagen se observa un producto multimedia que corresponde a un tutorial que va guiando sobre la realización de una receta de cocina; este puede ser un video que oriente paso a paso sobre cómo conseguir el objetivo, también se puede programar un clic sobre la imagen para que aparezca un texto explicativo y el usuario vaya avanzando paso a paso en la elaboración de la fórmula. 

      .tarjeta.cstm_border.p-4(titulo="Nivel de control del usuario")
        h4.mb-4 Nivel de control del usuario 
        .row
          .col-auto.d-none.d-lg-flex
            figure
              img(src="@/assets/curso/temas/t6/t6_26.png", alt="alt").img150
          .col
            p Es la capacidad que se le puede conferir al usuario para realizar la #[em configure] del producto multimedia de acuerdo con la necesidad y el uso que le va a proporcionar. El usuario debe poder modificar características y tomar decisiones sobre el producto.
            p.mb-0 En la imagen se observa como el usuario puede configurar la forma de presentar una temática utilizando la herramienta ofimática de PowerPoint. En este caso el recuadro naranja muestra como este puede tomar el control sobre la forma de pasar las diapositivas en la que debe marcar la opción de repetir el ciclo hasta presionar ESC, mostrar sin narración o sin animación. Este tipo de interacción proporciona más confianza al transferir al usuario el poder de uso del producto de acuerdo con su necesidad. 

    .tarjeta.color-secundario.p-3(data-aos="zoom-in")
      .row.justify-content-around.align-items-center
        .col-auto
          img(src="@/assets/curso/temas/recursos/cta_02.svg").img65
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Tutorial infografía con menú interactivo en Power Point 
              p.mb-0 Estimado aprendiz, se invita a observar el siguiente video que enseña cómo realizar una infografía introduciendo elementos interactivos al utilizar el programa ofimático de PowerPoint: 
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=vWMWOz_R0xY" target="_blank")
                span.clr--base ver video
                i.clr--base.fas.fa-file-download



</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
