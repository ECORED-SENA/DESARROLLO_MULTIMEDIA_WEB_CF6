<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 5
      h1 #[em Mockup]

    .bloque-texto-a.cstm--color_01.p-4.p-md-5.mb-5(data-aos="zoom-in") 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/temas/t5/t5_01.svg", alt="alt")
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.bold Mockup es una maqueta que representa la evolución del Wireframe de alta fidelidad, ya que es una composición gráfica más avanzada y completa que utiliza todos los elementos visuales posibles para producir un modelo a escala del producto multimedia, por lo que proporciona una buena idea de lo que será al final.<br><br>En los Mockup se encuentran varios elementos:

    .container.bg_colorBlue.mb-5
      .row.justify-content-center      
        .col-auto.mb-4(data-aos="zoom-in")
          .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t5/t5_15.png')})`}")
              .tarjeta-flip__contenido
                figure.mb-3
                  img(src="@/assets/curso/temas/t5/t5_15A.svg", alt="alt").img150.m-auto                
                p.px-4 Los cuales representan el estilo gráfico del producto multimedia y están conformado por las imágenes y las gráficas de colores que proporcionan identidad al proyecto de acuerdo con los objetivos planteados.

        .col-auto.mb-4(data-aos="zoom-in")
          .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t5/t5_16.png')})`}")
              .tarjeta-flip__contenido
                figure.mb-3
                  img(src="@/assets/curso/temas/t5/t5_16A.svg", alt="alt").img150.m-auto                
                p.px-4 Que pueden estar conformados por texto, imágenes o ambos. En la medida en que sea lo que realmente contendrá el producto final se le considerará un Mockup de alta fidelidad.

        .col-auto.mb-4(data-aos="zoom-in")
          .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t5/t5_17.png')})`}")
              .tarjeta-flip__contenido
                figure.mb-3
                  img(src="@/assets/curso/temas/t5/t5_17A.svg", alt="alt").img150.m-auto                
                p.px-4 Que refiere el nivel de interacción con interfaces (pantallas) que se pueden vincular entre sí, permitiendo esto que se pueda realizar una simulación de la navegación que tendría el producto final.

    .row.justify-content-center(data-aos="zoom-in")
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span Ejemplo de #[em Mockup]
        figure
          img(src="@/assets/curso/temas/t5/t5_02.png", alt="alt")


    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-10
        .row.justify-content-center.align-items-center
          .col-auto
            figure
              img(src="@/assets/curso/temas/t2/t2_24.svg", alt="alt")
          .col
            p.mb-0 #[strong La figura anterior es un #[em Mockup] que corresponde a una plantilla generica], en la cual se puede observar los botones que proporcionan interactividad como #[strong MORE INFO] para ampliarle la información al usuario o los que aparecen en la parte superior para establecer contacto con el cliente a través de las redes sociales #[strong (Facebook, Twitter, Instagram)] o el correo electrónico #[strong (youremail@email.com)]. Igualmente se observa la funcionalidad de poder cambiar los textos fácilmente de lo que se desea comunicar; por ejemplo, el del DELCIOUS MENU.  

    h4(data-aos="fade") Ventajas de los #[em Mockups]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-5(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t5/t5_03.svg", alt="alt")
      .col-lg-9(data-aos="fade")
        ul.fa-ul
          li
            i.fa-li.fas.fa-pen-square.clr--orange
            | Permiten saber el lugar exacto donde se puede colocar información y además cambiarla fácilmente de acuerdo con las dinámicas del proyecto web; como se observó con el menú del ejemplo de la comida oriental.
          .hr--line
          li
            i.fa-li.fas.fa-pen-square.clr--orange
            | Es fácil de probar el concepto del diseño, puesto que se ve claramente cómo quedaría el producto final, sus funcionalidades e interacciones con el usuario. Esto reduce los costos de desarrollo al corregirse los errores a tiempo.
          .hr--line
          li
            i.fa-li.fas.fa-pen-square.clr--orange
            | El desarrollador puede elaborar con mayor rapidez la guía de estilo del producto e incorporar muchos elementos visuales de acuerdo con la herramienta utilizada. La guía es una recopilación de la apariencia que contiene la información de las normas de diseño, tamaño y tipo de las fuentes de los textos, colores, márgenes, fondos.
          .hr--line
          li
            i.fa-li.fas.fa-pen-square.clr--orange
            | Proporciona mayor claridad a la hora de presentar el diseño al cliente, puesto que lo que está viendo es lo que obtendrá como producto final, aspecto que facilita la experiencia de los usuarios, ayudando a optimizar el diseño antes de la fase de codificación (programación).
          .hr--line

    h4(data-aos="fade").mb-4 Aspectos de creación de los #[em Mockups]

    p(data-aos="fade").mb-5 Hay algunos errores que se pueden cometer cuando se hace el diseño del producto y se ven reflejados en la construcción del #[em Mockup]:

    .crd.crd--avatarH.paleYellow.hg-100.mb-4(data-aos="zoom-in")
      .row.pe-4
        .col-auto
          figure
            img(src="@/assets/curso/temas/t5/t5_04.svg", alt="alt").img90
        .col.py-4       
          p.mb-0 El exceso de detalles, objetos de color e imágenes, pueden ocasionar muchas dificultades en la construcción del Mockup y en la fase de codificación del producto, además de prolongar el tiempo y los costos de desarrollo.

    .crd.crd--avatarH.paleYellow.hg-100.mb-4(data-aos="zoom-in")
      .row.pe-4
        .col-auto
          figure
            img(src="@/assets/curso/temas/t5/t5_05.svg", alt="alt").img90
        .col.py-4       
          p.mb-0 La mayoría de las veces en el diseño no se tiene en cuenta la adaptación del producto a los celulares o las Tablets, y cuando el Mockup es presentado al cliente o los usuarios que utilicen estos dispositivos, no podrán visualizar correctamente el contenido, por lo que el producto se debe someter a un rediseño que implica tiempo y dinero.

    .crd.crd--avatarH.paleYellow.hg-100.mb-4(data-aos="zoom-in")
      .row.pe-4
        .col-auto
          figure
            img(src="@/assets/curso/temas/t5/t5_06.svg", alt="alt").img90
        .col.py-4       
          p.mb-0 No usar el esquema correcto de colores puede tener un impacto negativo en el cliente y los usuarios, por eso es indispensable utilizar las herramientas que brinda el mercado para realizar la combinación adecuada acorde con el proyecto. Hay algunas herramientas gratuitas que se pueden descargar de internet y son de suma utilidad para este aspecto como son: Kuler, Color Scheme Designer, Colour Lovers, Pictaculous, Color Spire, etc.

    .crd.crd--avatarH.paleYellow.hg-100.mb-5(data-aos="zoom-in")
      .row.pe-4
        .col-auto
          figure
            img(src="@/assets/curso/temas/t5/t5_07.svg", alt="alt").img90
        .col.py-4       
          p.mb-0 Al realizar un diseño muy innovador fuera de los esquemas tradicionales puede ocurrir que el producto pierda su funcionalidad y que el Mockup sea poco entendible para el cliente, aspecto que ocasiona desinterés de su parte y hasta el abandono del proyecto.

    h4(data-aos="fade").mb-4 Herramientas para realizar #[em Mockups]

    .row.justify-content-center.mb-5
      .col-lg-9.mb-4.mb-lg-0(data-aos="fade")
        p.mb-4 Para desarrollar un Mockup se pueden utilizar herramientas de diseño vectorial o herramientas de retoque de imágenes. Las primeras permiten la creación y edición de gráficos mediante vectores que facilitan ampliar y reducir las imágenes sin que se pierda su calidad y se vean pixelados o borrosos. Las segundas permiten crear, editar y retocar cualquier tipo de imagen, foto, pintura o dibujo sin poder adicionar mucho texto, ni redimensionar su tamaño ya que no trabajan con escalas.
        .row
          .col-auto
            figure
              img(src="@/assets/curso/temas/recursos/rectangle_01.svg", alt="alt").img90
          .col
            p.bold Algunas de las herramientas más utilizadas para la creación de Mockups son:
      .col-lg-3.d-none.d-lg-flex(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t5/t5_08.svg", alt="alt")

    .slyderBg_01.pt-5.p-4.mb-5(data-aos="fade")
      SlyderA(tipo="b")
        .row.justify-content-around.align-items-center
          .col-lg-3.col-8.mb-2.mb-lg-0
            figure
              img(src='@/assets/curso/temas/t5/t5_09.png', alt='')
          .col-lg-8
            h4 Inkscape
            p.mb-0 Herramienta de diseño vectorial de uso libre y de código abierto es decir que está a disposición del desarrollador modificar o adicionar líneas de programación para añadir funcionalidades a la aplicación. 

        .row.justify-content-around.align-items-center
          .col-lg-3.col-8.mb-2.mb-lg-0
            figure
              img(src='@/assets/curso/temas/t5/t5_10.png', alt='')
          .col-lg-8
            h4 Illustrator
            p.mb-0 Herramienta de adobe que sirve para el diseño vectorial, especial para crear logotipos de diferentes formas y tamaños, iconos, carteles, tarjetas y folletos, permite transformar las fuentes y tamaños de los textos.

        .row.justify-content-around.align-items-center
          .col-lg-3.col-8.mb-2.mb-lg-0
            figure
              img(src='@/assets/curso/temas/t5/t5_11.png', alt='')
          .col-lg-8
            h4 Photoshop
            p.mb-0 Herramienta no vectorial que sirve para el retoque y la edición de imágenes plasmadas en fotos, dibujos o pinturas, también se pueden crear imágenes digitales para las páginas web facilitando la edición de la interfaz (pantalla) que observa el usuario.

        .row.justify-content-around.align-items-center
          .col-lg-3.col-8.mb-2.mb-lg-0
            figure
              img(src='@/assets/curso/temas/t5/t5_12.png', alt='')
          .col-lg-8
            h4 Sketch
            p.mb-0 Herramienta especial para crear la interfaz del usuario en aplicaciones móviles y páginas web, ofrece servicios para la creación y definición de elementos que le proporcionan experiencia al usuario en cuanto a funcionalidad y versatilidad del producto.

        .row.justify-content-around.align-items-center
          .col-lg-3.col-8.mb-2.mb-lg-0
            figure
              img(src='@/assets/curso/temas/t5/t5_13.png', alt='')
          .col-lg-8
            h4 Balsamiq
            p.mb-0 Herramienta que permite realizar funciones con los elementos gráficos como arrastrar, soltar, copiar y pegar, igualmente incorporar Mockups ya creados en un archivo. Se puede utilizar en línea sin necesidad de descargarlo y no es de versión gratuita.

        .row.justify-content-around.align-items-center
          .col-lg-3.col-8.mb-2.mb-lg-0
            figure
              img(src='@/assets/curso/temas/t5/t5_14.png', alt='')
          .col-lg-8
            h4 Axure
            p.mb-0 Herramienta de creación de diseños para páginas web que permite la exportación del Mockup a código HTML que es el lenguaje de marcas para el desarrollo del sitio web, además puede generar un documento en Word del estado (Propuesto, Aceptado, Incorporado)  de cada elemento de la maqueta.

    .cajon.cjn--paleBlue.p-4.mb-5(data-aos="zoom-in")
      p.mb-0 Existen plantillas de Mockups con diseños que contienen elementos funcionales para la experiencia de usuario como botones, enlaces de navegación y diversos elementos para la construcción de las interfaces que no solo ahorran tiempo de desarrollo, sino costos de producción.

    .tarjeta.color-secundario.p-3.mb-5(data-aos="zoom-in")
      .row.justify-content-around.align-items-center
        .col-auto
          img(src="@/assets/curso/temas/recursos/cta_02.svg").img65
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Mockups gratis: ¿Qué son los mockups, dónde los puedes descargar GRATIS y cómo usarlos?
              p.mb-0 Estimado aprendiz, a continuación lo invitamos a consultar un video con el fin de profundizar en el proceso de la creación de <em>wireframes</em>.             
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=crw3hO6VX4IPor" target="_blank")
                span.clr--base ver video
                i.clr--base.fas.fa-file-download

    .row.justify-content-center(data-aos="zoon-in")
      .col-lg-10
        .row.justify-content-center.align-items-center
          .col-auto
            figure
              img(src="@/assets/curso/temas/t2/t2_24.svg", alt="alt")
          .col
            p.mb-0 En el video anterior se observa #[strong cómo construir Mockups utilizando fotos existentes y de libre descarga, en la herramienta de retoque de imágenes Photoshop. Sobre las fotos que se presentan se han incrustado elementos u objetos inteligentes prediseñados cuyo formato es PSD y de los cuales se puede obtener como resultado final un Mockup], que en este caso es estático porque no permite la interacción de los usuarios, ya que su función es la de transmitir un mensaje de marca a un público objetivo definido por el cliente.


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
