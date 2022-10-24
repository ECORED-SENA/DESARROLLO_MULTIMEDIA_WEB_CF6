<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 1
      h1 Estilo gráfico del proyecto multimedia

    .row.justify-content-center.align-items-center
      .col-lg-4.col-8.mb-4.mb-lg-0(data-aos="zoom-in") 
        figure
          img(src="@/assets/curso/temas/t1/t1_01.svg", alt="alt")
      .col-lg-8(data-aos="fade") 
        .row.mb-4
          .col-auto
            figure
              img(src="@/assets/curso/temas/recursos/square_01.svg", alt="alt").img30
          .col
            p #[span.bold.clr--blue El diseño gráfico es un entorno creativo el cual busca satisfacer las necesidades de algún mercado en el entorno de la comunicación visual con un determinado fin, con un objetivo y un concepto definido, claro y concreto, orientado a un público específico.] El diseño gráfico se caracteriza por la composición de imágenes y signos, los cuales parten de un sin fin de elementos los cuales contienen textos, colores, símbolos y efectos, dando como resultado un producto visual que comunica de manera gráfica y novedosa de diversos nichos de mercado.
        
        .cajon.cjn--grayBlue.p-4.mb-4            
          p.mb-0 El diseño gráfico no solo se limita a verse como una composición de elementos visuales y fijos, utiliza medios y recursos de audio y video y en la actualidad fuertemente está inmerso en la tecnología tridimensional.
    
    separador

    #t_1_1.titulo-segundo.color-acento-botones(data-aos="fade") 
      h2 1.1 Fundamentos y principios de diseño gráfico

    .row.mb-5(data-aos="zoom-in") 
      .col-auto.d-none.d-lg-flex
        figure
          img(src="@/assets/curso/temas/recursos/rectangle_01.svg", alt="alt").img90
      .col      
        p.mb-0 #[strong Se destacan y se toman como referencia seis (6) fundamentos que permiten al diseñador transmitir ideas y conceptos eficaces, #[span.hl--blue potenciando la comunicación del mensaje visual, los cuales son:]]

    .slyderBg_01.py-5.p-4(data-aos="fade") 
      SlyderA(tipo="b")
        .row.justify-content-around
          .col-lg-8.mb-2.mb-lg-0
            h3 Punto focal
            p El principio de punto focal se establece sobre un elemento determinado, aquí es importante salir de un contexto visual formal/casual, el cual permitirá que se le pueda dar forma y color a un diseño en específico, con el fin de captar la atención de usuarios, clientes o espectadores; es decir, podemos cambiar el observador de cómo se ven y se perciben los objetos.        
          .col-lg-3.col-8
            figure
              img(src='@/assets/curso/temas/t1/t1_02.svg', alt='')

        .row.justify-content-around    
          .col-lg-8.order-1.order-lg-2
            h3 Balance o equilibrio
            p Hace referencia al entorno visual de lo que compone un elemento y sus características con las cuales se logran conceder estructura y estabilidad de una pieza gráfica de esta forma se puede crear dinamismo en el contenido, que puede ser simétrico o asimétrico. En este principio cuenta mucho el cómo se les da ubicación a los elementos visuales con el fin de darle estética y percepción cumpliendo un propósito o apariencia particular.           
          .col-lg-3.col-8.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/t1/t1_03.svg', alt='')

        .row.justify-content-around
          .col-lg-8.mb-2.mb-lg-0
            h3 Ritmo o movimiento
            p Es la forma en cómo se puede observar de manera controlada cuando se tiene de referencia un elemento o espacio; es decir, cómo se puede controlar la sensación que se percibe, de acuerdo a los componentes y elementos de un diseño como tal, teniendo en cuenta como se organizan brindando una lectura clara de lo que se quiere enseñar. Se debe tener en cuenta que las composiciones son radiales (elementos de forma circular) o lineal (si son elementos continuos).      
          .col-lg-3.col-8
            figure
              img(src='@/assets/curso/temas/t1/t1_04.svg', alt='')

        .row.justify-content-around    
          .col-lg-8.order-1.order-lg-2
            h3 Proporción o escala
            p El principio de proporción tiene como base la concordancia del tamaño de un objeto con la composición y un resultado final, con la proporción se puede determinar la relación de los elementos sin importar su tamaño (piezas grandes y pequeñas), los cuales contengan una pieza gráfica. Aquí se pueden destacar como parte fundamental de este principio: tamaño, proporción, división
      
          .col-lg-3.col-8.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/t1/t1_05.svg', alt='')

        .row.justify-content-around
          .col-lg-8.mb-2.mb-lg-0
            h3 Unidad o armonía
            p Para tener éxito y conseguir un diseño apropiado es importante tener claro que los elementos deben estar organizados y que cuenten con una correlación entre sí, generando que la pieza gráfica esté representada por una unidad, siendo coherente en la comunicación que se quiera proyectar de acuerdo con un objetivo.   
          .col-lg-3.col-8
            figure
              img(src='@/assets/curso/temas/t1/t1_06.svg', alt='')

        .row.justify-content-around    
          .col-lg-8.order-1.order-lg-2
            h3 Simplicidad
            p El principio de simplicidad es el método por el cual se busca abreviar una pieza gráfica de diseño. Aquí se puede certificar que la pieza diseñada es clara y coherente, la cual permite generar el impacto buscado por el diseñador. 
      
          .col-lg-3.col-8.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/t1/t1_07.svg', alt='')

    separador

    #t_1_2.titulo-segundo.color-acento-botones(data-aos="fade") 
      h2 1.2 Elementos visuales de diseño gráfico

    .bloque-texto-a.cstm--color_01.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/temas/t1/t1_08.png", alt="alt")
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.mb-0 Lo siguientes son los elementos visuales más importantes para la creación de contenidos gráficos en diseño:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--acordeon")(data-aos="fade") 
      .row(titulo="La línea").p-4
        .col-lg-8          
          p En el entorno del diseño se puede definir que la línea es el elemento visual elemental, es una sucesión de puntos conectados el uno del otro generando una trayectoria; están determinadas por su grosor, textura y estilo, de igual forma por su movimiento y dirección. 
          .cajon.cjn--paleBlue.p-4
            p.mb-0 #[strong Con el uso de las líneas se pueden determinar y enfatizar conceptos separarlos y estructurarlos en una composición gráfica en muchos entornos literarios sirven como guía a una lectura en particular.]      
        .col-lg-4.col-8
          figure
            img(src='@/assets/curso/temas/t1/t1_09.svg', alt='')   

      .row(titulo="La forma").p-4
        .col-lg-8          
          p Se puede definir que es un espacio cerrado, que está limitado por dos superficies y la forma de medirlo es alto por ancho, se pueden determinar formas geométricas y formas orgánicas haciendo similitud a la naturaleza y su diversidad, en los dos tipos de formas se encuentra que pueden estar delimitadas por líneas y colores. Cabe resaltar que a partir de una forma se puede transmitir un mensaje o plasmar una emoción lo cual hace que la forma sea la forma en cómo se puede comunicar un concepto visual. 
        .col-lg-4.col-8
          figure
            img(src='@/assets/curso/temas/t1/t1_10.svg', alt='')    

      .row(titulo="El objeto").p-4
        .col-lg-8          
          p Para señalar un objeto, es importante que este adopte propiedades tridimensionales con el fin de observar una ilusión a lo profundo y resaltar el volumen del objeto, es un juego de la perspectiva entre la luz y la sombra. 
        .col-lg-4.col-8
          figure
            img(src='@/assets/curso/temas/t1/t1_11.svg', alt='')   

      .row(titulo="El espacio").p-4
        .col-lg-8          
          p Es el área que está alrededor o dentro de los elementos de una pieza de diseño, se encuentran espacios negativos y positivos, los cuales tienen algunas características particulares, así:
          ul.fa-ul
            li
              i.fa-li.fas.fa-pen-square.clr--orange
              | #[strong Espacio negativo] es el que está entre los elementos para conformar una pieza gráfica y contiene la composición total.
            .hr--line
            li
              i.fa-li.fas.fa-pen-square.clr--orange
              | #[strong Espacio positivo] incluye objetos y sus formas como herramienta básica de diseño y percepción.

        .col-lg-4.col-8
          figure
            img(src='@/assets/curso/temas/t1/t1_12.svg', alt='')    

      .row(titulo="La tipografía").p-4
        .col-lg-8          
          p Es uno de los elementos visuales que más se utiliza en diseño gráfico.
          p Es la manera más efectiva de generar una comunicación visual directa y clara, se conforma por la unión de formas geométricas y orgánicas. La gran mayoría de tipografías de acuerdo a sus características permite descomponer la forma sin alterar el resultado.
          p La tipografía imprime carácter y expresividad, lo que provoca un significado de lo que se quiere transmitir.

        .col-lg-4.col-8
          figure
            img(src='@/assets/curso/temas/t1/t1_13.svg', alt='') 

      .row(titulo="La textura").p-4
        .col-lg-8          
          p Es una condición que presenta una superficie que permite creer visualmente que se percibe la textura al momento de observar la imagen.
          p Por intermedio de la textura se puede crear una ilusión al tacto, estas pueden ser creadas por el uso de esquemas repetitivos de imágenes que hacen que se vean livianas, fuertes, delgadas o gruesas y permiten dar una sensación de tridimensionalidad. Se plantea como sugerencia que no se carguen los diseños de mucha textura para que estos no se vean saturados a la vista, toscos, sin fondo y forma.

        .col-lg-4.col-8
          figure
            img(src='@/assets/curso/temas/t1/t1_14.svg', alt='') 

      .row(titulo="El color").p-4
        .col-lg-8          
          p Es la herramienta más relevante de diseño gráfico, de acuerdo a la percepción del ojo humano la cual puede captar, distinguir y dejar una sensación de calidez o rigidez de acuerdo a la cantidad de color que contenga una pieza gráfica; es decir, que tanta luz se refleja en un objeto y que tanta cantidad de color puede reflejar una sola imagen y como se puede distinguir en una composición. 
          p Cada color puede tener un significado diferente, una sensación, un concepto o algo personal, que a la percepción humana puede generar algún tipo de emocionalidad y determinación a la hora de crear una pieza gráfica. 

        .col-lg-4.col-8
          figure
            img(src='@/assets/curso/temas/t1/t1_15.svg', alt='') 

      .row(titulo="La composición").p-4
        .col-lg-8          
          p La composición de una pieza gráfica se basa en acomodar una serie de elementos gráficos en un entorno visual determinado y que, al momento de hacer una sinergia entre estos, transmitan un mensaje claro y contundente a los receptores teniendo en cuenta que lo que busca una pieza de diseño gráfico es transmitir una idea novedosa y visualmente llamativa, que sea coherente en texto, imagen e ilustración. 
          p Se debe tener en cuenta el cómo se posiciona cada uno de estos elementos encontrando un equilibrio de forma entre ellos, lo más importante de una composición es llegar a una estrategia comunicativa asertiva y visualmente impactante. 

        .col-lg-4.col-8
          figure
            img(src='@/assets/curso/temas/t1/t1_16.svg', alt='')       

      .row(titulo="La diagramación").p-4
        .col-12.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-8.mb-4.mb-lg-0          
              p En el entorno del diseño y sus vertientes cuando se habla del tema de la diagramación inmediatamente se hace énfasis en toda la parte visual de un impreso o pieza gráfica, se habla de armonía, proporción y orden, entre los textos, contenidos, colores, imágenes y audiovisuales (multimedia).
              p Es la técnica de distribución para la estructura y composición de una página.
              p Este arte es parte esencial en un diseño ya que debe ser funcional, llamativo e impactante para un público.
            .col-lg-4.col-8
              figure
                img(src='@/assets/curso/temas/t1/t1_18.svg', alt='') 

        p La Diagramación debe permitir la lectura fácil, pues en ocasiones las piezas creadas son tan llamativas y entendidas por el público, que este omite la lectura de algún texto que contenga  el diseño.
        p Cuando se va a desarrollar la diagramación es importante tener en cuenta:
        .row
          .col-lg-3
            ul.fa-ul
              li.mb-3
                i.fa-li.fas.fa-pen-square.clr--orange
                | #[strong El cabezote] 
              li
                i.fa-li.fas.fa-pen-square.clr--orange
                | #[strong Tipografía] 
          .col-lg-3
            ul.fa-ul
              li.mb-3
                i.fa-li.fas.fa-pen-square.clr--orange
                | #[strong Paginación] 
              li
                i.fa-li.fas.fa-pen-square.clr--orange
                | #[strong Fuentes (letras, tamaños)] 
          .col-lg-3
            ul.fa-ul
              li.mb-3
                i.fa-li.fas.fa-pen-square.clr--orange
                | #[strong Títulos y subtítulos] 
              li
                i.fa-li.fas.fa-pen-square.clr--orange
                | #[strong Gráficas] 
          .col-lg-3
            ul.fa-ul
              li.mb-3
                i.fa-li.fas.fa-pen-square.clr--orange
                | #[strong Ilustraciones] 
              li
                i.fa-li.fas.fa-pen-square.clr--orange
                | #[strong Fotos] 

    .bg_img_01
      .row.justify-content-center
        .col-lg-4.col-8.mb-4.mb-lg-0(data-aos="zoom-in") 
          figure
            img(src="@/assets/curso/temas/t1/t1_19.svg", alt="alt")
        .col-lg-8
          .tarjeta.color-secundario.p-3.mb-5(data-aos="fade") 
            .row.justify-content-around.align-items-center
              .col-auto
                img(src="@/assets/curso/temas/recursos/cta_01.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h3.mb-1 Teoría del color y fundamentación 
                    p.mb-0 Estimado aprendiz, para profundizar sobre el tema puede consultar el siguiente pdf,  pagina 9 a 22.
                  .col-sm-auto
                    a.boton.color-acento-botones(:href="obtenerLink('/downloads/6201_trecalde_00451.pdf')" target="_blank")
                      span.clr--base Descargar
                      i.clr--base.fas.fa-file-download
          .tarjeta.color-secundario.p-3.mb-5(data-aos="fade") 
            .row.justify-content-around.align-items-center
              .col-auto
                img(src="@/assets/curso/temas/recursos/cta_02.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h3.mb-1 Video tutorial psicología del color
                    p.mb-0 Estimado aprendiz, para profundizar sobre el tema puede consultar el siguiente video.
                  .col-sm-auto
                    a.boton.color-acento-botones.px-4(href="https://www.youtube.com/watch?v=X8kbrAzV6BM" target="_blank")
                      span.clr--base Ver 
                      i.clr--base.fas.fa-link

    separador

    #t_1_3.titulo-segundo.color-acento-botones(data-aos="fade") 
      h2 1.3 Imagen corporativa

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.order-2.order-lg-1(data-aos="zoom-in") 
        figure
          img(src="@/assets/curso/temas/t1/t1_20.png", alt="alt")
      .col-lg-8.order-1.order-lg-2(data-aos="fade") 
        p #[span.strong.clr--blue La imagen corporativa es un escenario de posicionamiento y concepto de una marca o empresa en un mercado objetivo, en muchas ocasiones la marca se crea más por el contexto visual que por un eslogan o mensaje; es decir, queda en la retina o mente del público y es recordada por ello.] Es la forma en que se puede generar una imagen positiva de la marca y cómo el público da una interpretación de los productos y servicios presentados por la marca.
        .cajon.cjn--grayBlue.p-4.mb-4.mb-lg-0
          p.mb-0 #[strong Es muy importante tener conexión entre la entre la imagen corporativa y la naturaleza de la empresa; se recomienda diseñar estrategia de comunicación multicanal,] la cual esté directamente encargada de las necesidades e inquietudes del cliente y por ende su fidelización.

    p.mb-5(data-aos="fade")  #[strong ¿Qué se necesita para crear la imagen corporativa de una empresa, emprendimiento o idea de negocio?:]

    .row.justify-content-center
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade") 
        LineaTiempoD.color-acento-botones.mb-5
          .row(numero="1" titulo="El nombre de la empresa")
            .col-auto.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/temas/t1/t1_22.svg", alt="alt")
            .col-lg
              p Debe generar impacto, reconocimiento y ser significativo para el público en general.
              p.mb-0 El nombre de la empresa es muy importante al elegirlo, porque puede conducir a la empresa a ser exitosa o al fracaso.

          .row(numero="2" titulo="El logotipo")
            .col-auto.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/temas/t1/t1_23.svg", alt="alt")
            .col-lg
              p Es esencial que el logotipo de la empresa transmita su filosofía, su origen y su esencia.
              p.mb-0 El logotipo empresarial debe ser claro al público, legible y único dependiendo el target al cual va dirigido.

          .row(numero="3" titulo="El eslogan")
            .col-auto.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/temas/t1/t1_24.svg", alt="alt")
            .col-lg
              p Es la frase con la cual los usuarios sienten identidad  y que fácilmente los lleva a la ideología de la empresa.
              p.mb-0 Es muy importante que la frase no sea larga ni enredada, que sea corta, fuerte y de fácil recordación.

          .row(numero="4" titulo="La tipografía y los colores")
            .col-auto.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/temas/t1/t1_25.svg", alt="alt")
            .col-lg
              p.mb-0 Desde el inicio de la creación de la empresa es significativo definir los colores y tipografía, dándole la identidad a la marca, acorde al rol a desempeñar. En este espacio determinar estos dos factores puede llevar un buen tiempo para su elección.
            
          .row(numero="5" titulo="El sitio web de la compañía")
            .col-auto.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/temas/t1/t1_26.svg", alt="alt")
            .col-lg
              p.mb-0 En estos tiempos de cambio, donde la tecnología está al alcance de todos, se hace fundamental crear un sitio web. Es la manera más adecuada de captar clientes, es importante que dicho sitio conserve la identidad de lo que es la marca.

          .row(numero="6" titulo="El material corporativo")
            .col-auto.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/temas/t1/t1_27.svg", alt="alt")
            .col-lg
              p Se debe cuidar hasta el más mínimo detalle en la creación del material corporativo, ya que este siempre enseñará la identidad de la marca y su esencia.
              p.mb-0 Es importante generalizar el contexto gráfico para cada pieza publicitaria; es decir: folletos, tarjetería, empaques entre otros. 

          .row(numero="7" titulo="La atmósfera")
            .col-auto.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/temas/t1/t1_28.svg", alt="alt")
            .col-lg
              p.mb-0 Las empresas actualmente comercian experiencias y están ligadas al sentir del consumidor, tacto, olfato, efecto visual, sonido y gusto; por ello, es importante impactar la emotividad del usuario y anclarla a gustos particulares.
            p.mt-4.mb-0 Como se puede evidenciar en estos ítems en todo sentido generan comunicación, atracción e identidad, lo cual hace que siempre se debe estar al tanto de lo que sucede con la marca y su entorno. 

      .col-lg-5.col-8(data-aos="zoom-in") 
        figure
          img(src="@/assets/curso/temas/t1/t1_21.png", alt="alt")

    separador

    #t_1_4.titulo-segundo.color-acento-botones(data-aos="fade") 
      h2 1.4 La línea gráfica

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.order-2.order-lg-1(data-aos="zoom-in") 
        figure
          img(src="@/assets/curso/temas/t1/t1_29.png", alt="alt")
      .col-lg-8.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade") 
        .row
          .col-auto.d-none.d-lg-flex
            figure
              img(src="@/assets/curso/temas/recursos/square_01.svg", alt="alt").img30
          .col
            p.mb-4 #[strong  Las propuestas visuales están a la vanguardia, ya que se están creando diversos contenidos gráficos utilizando plataformas innovadoras, versátiles y muy interesantes al público; de igual forma, el cómo se genera la identidad de marca y cómo a través de ella se puede transmitir y crear un entorno claro de comunicación de un concepto propio, una identidad bajo la premisa de hacer que los usuarios puedan acceder a nuevas experiencias digitales en mundo del arte gráfico posicionando la marca en todo momento.]
            .cajon.cjn--paleBlue.p-4
              p.mb-0 A continuación, se mencionan las fases a seguir para la creación de líneas gráficas:

    TabsB.color-secundario(data-aos="fade") 
      .py-4.py-md-5(titulo="Fase 1" :icono="require('@/assets/curso/temas/recursos/tabsA_01.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-4.mb-lg-0
            h4 Fase 1
            p.mb-0  Determinar el concepto para la línea gráfica que va a representar la marca con objetivos definidos y estratégicos.        
          .col-lg-4.col-8
            figure
              img(src="@/assets/curso/temas/t1/t1_30.svg", alt="alt")

      .py-4.py-md-5(titulo="Fase 2" :icono="require('@/assets/curso/temas/recursos/tabsA_02.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-4.mb-lg-0
            h4 Fase 2
            p Crear un #[em moodboard]; es decir, un tablero de inspiración, en el cual se plasmarán los conceptos a desarrollar para graficar, estructurar y planear todo lo concerniente a la idea (línea gráfica). 
            p.mb-0 El #[em moodboard] permite constantemente desarrollar ideas novedosas para la construcción de la identidad gráfica que cumplan con el objetivo de la propuesta para este caso la marca.      
          .col-lg-4.col-8
            figure
              img(src="@/assets/curso/temas/t1/t1_31.svg", alt="alt")

      .py-4.py-md-5(titulo="Fase 3" :icono="require('@/assets/curso/temas/recursos/tabsA_03.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-4.mb-lg-0
            h4 Fase 3            
            p.mb-0 Ya con las ideas claras y listas a ejecutar se debe definir la paleta cromática, es importante tener en cuenta todo lo pertinente de la teoría del color, enfocados en lo que a través de los colores los usuarios pueden experimentar (emoción - sensación - coherencia), con el fin de utilizar un buen recurso y de acuerdo al criterio a seguir en la creación de la línea gráfica se podría utilizar la herramienta AdobeColor y Coolors.co, para tener una guía de la utilización de la paleta de colores.    
          .col-lg-4.col-8
            figure
              img(src="@/assets/curso/temas/t1/t1_32.svg", alt="alt")

      .py-4.py-md-5(titulo="Fase 4" :icono="require('@/assets/curso/temas/recursos/tabsA_04.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-4.mb-lg-0
            h4 Fase 4            
            p.mb-0 Se debe fijar la tipografía de la marca, la cual le dará el contexto adecuado y propio, definirá la identidad y la personalidad de la marca, creando una representación visual y un lenguaje propio, asertivo y de fácil recordación para el público.  
          .col-lg-4.col-8
            figure
              img(src="@/assets/curso/temas/t1/t1_33.svg", alt="alt")

      .py-4.py-md-5(titulo="Fase 5" :icono="require('@/assets/curso/temas/recursos/tabsA_05.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-4.mb-lg-0
            h4 Fase 5            
            p.mb-0 Definir los elementos visuales que hacen parte de la composición de la marca tales como las texturas, patrones y vectores, que al unirlos crean un escenario asombroso, un formato único y personal; es aquí donde la marca deja huella de acuerdo a su contexto, ya que al utilizar adecuadamente la diversidad de elementos gráficos hacen que la composición plasme la idea y quede en la retina del usuario.  
          .col-lg-4.col-8
            figure
              img(src="@/assets/curso/temas/t1/t1_34.svg", alt="alt")

      




    



          

      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
