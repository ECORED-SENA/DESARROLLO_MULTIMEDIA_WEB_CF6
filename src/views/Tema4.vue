<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 4
      h1 Wireframe

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-4.mb-lg-0(data-aos="zoom-in")  
        figure
          img(src="@/assets/curso/temas/t4/t4_01.svg", alt="alt")
      .col-lg-8(data-aos="fade")
        p.mb-5 #[strong Es un boceto o esquema visual de un proyecto web que sirve como guía para la diagramación de las páginas que lo conforman. Consiste en un prototipo básico de lo que sería el sitio sin textos, imágenes o colores;] por lo tanto, es apenas la estructura compuesta por los bloques o espacios donde iría la información, botones, menús, gráficos, animaciones, etc. 
        .row.justify-content-center
          .col-auto.d-none.d-lg-flex
            figure
              img(src="@/assets/curso/temas/recursos/rectangle_01.svg", alt="alt").img90
          .col
            p.mb-0 #[strong El Wireframe es el punto de partida para la incorporación de los elementos visuales y componentes interactivos y es por ello por lo que se toma como referencia para la construcción del diseño final del proyecto.]

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-10    
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Wireframe de páginas-web
        figure
          img(src="@/assets/curso/temas/t4/t4_02.svg", alt="alt").class

    .cajon.cjn--paleBlue.p-4.mb-5(data-aos="zoom-in")
      p.mb-0 En la figura se observan algunos Wireframes que representan la estructura conceptual de diferentes páginas que vería un usuario; estas son las interfaces visuales o pantallas que deben contener los espacios para los siguientes elementos:

    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="fade")
        LineaTiempoD.color-acento-botones       
          .row(numero="1" titulo="Bloques de contenido")
            .col-12
              p.mb-0 Es el espacio que ocupará el texto que se está elaborando con la información entregada por el cliente.  

          .row(numero="2" titulo="Bloques de multimedia")
            .col-12
              p.mb-0 Es el espacio reservado para las imágenes, gráficas, videos, logos, banners, etc.    

          .row(numero="3" titulo="Bloques de formulario")
            .col-12
              p.mb-0 Espacio reservado para ubicar un formulario, test o cuestionario para ser diligenciado por el usuario.   

          .row(numero="4" titulo="Bloques de navegación")
            .col-12
              p.mb-0 Son los elementos que dirigen al usuario a otros lugares a través de hipervínculos representados por botones, banners o menús.     

          .row(numero="5" titulo="Bloques de búsqueda")
            .col-12
              p.mb-0 Espacio destinado a buscar información dentro del sitio web.               

      .col-lg-5.d-none.d-lg-flex(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t4/t4_03.svg", alt="alt")


    h5(data-aos="fade").mb-5 Ventajas de los Wireframes

    .row.justify-content-center
      .col-lg-4.col-8.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t4/t4_04.svg", alt="alt")
      .col-lg-8(data-aos="fade")
        ul.fa-ul
          li
            i.fa-li.fas.fa-pen-square.clr--orange
            | Ayuda a los diseñadores a definir la estructura del proyecto web acorde con las indicaciones del cliente.
          .hr--line
          li
            i.fa-li.fas.fa-pen-square.clr--orange
            | Permite retroalimentaciones rápidas al prototipo, puesto que al ser visual facilita la comprensión del cliente y los usuarios respecto de la estructura conceptual del proyecto.
          .hr--line
          li
            i.fa-li.fas.fa-pen-square.clr--orange
            | Percibe los errores con mayor facilidad al observar la funcionalidad del proyecto a través de los elementos gráficos y visuales que lo componen.
          .hr--line
          li
            i.fa-li.fas.fa-pen-square.clr--orange
            | Mejora la usabilidad del proyecto al identificar los elementos que interactuarán con los usuarios a la hora de demostrar su desempeño.

    separador

    #t_4_1.titulo-segundo.color-acento-botones(data-aos="fade")
      h2 4.1 Tipos de navegación

    p(data-aos="fade").mb-5 #[strong Los Wireframes se pueden elaborar a mano alzada usando solo el lápiz y el papel.] Esta técnica resulta mucho más fácil que cualquier otra que haya en el mercado digital; sin embargo, cuando se trabaja en equipo es mejor utilizar herramientas que permitan compartir los desarrollos, de tal manera que cada miembro pueda hacer las modificaciones que considere, de una manera más ágil. 

    .slyderBg_01.pt-5.p-4(data-aos="fade")
      SlyderA(tipo="b")
        .row.justify-content-around.align-items-center
          .col-lg-3.col-8.mb-2.mb-lg-0
            figure
              img(src='@/assets/curso/temas/t4/t4_05.png', alt='')
          .col-lg-8
            h4 Adobe XD
            p.mb-0 Es un editor gráfico para el diseño de prototipos cuya funcionalidad más poderosa es la de permitir la réplica de objetos si es necesario. <br><br>Esto resulta muy útil si se deben crear bloques con el mismo concepto estructural.

        .row.justify-content-around.align-items-center
          .col-lg-3.col-8.mb-2.mb-lg-0
            figure
              img(src='@/assets/curso/temas/t4/t4_06.png', alt='')
          .col-lg-8
            h4 Figma
            p.mb-0 Es un editor que se puede instalar en cualquier sistema operativo de un PC y es especial para el trabajo colaborativo, permitiendo que varas personas al mismo tiempo trabajen sobre un mismo archivo.    

        .row.justify-content-around.align-items-center
          .col-lg-3.col-8.mb-2.mb-lg-0
            figure
              img(src='@/assets/curso/temas/t4/t4_07.png', alt='')
          .col-lg-8
            h4 InVision
            p.mb-0 Además de tener las mimas funciones del Adobe XD, permite añadir elementos interactivos y simular el funcionamiento de la proyecto web.   

        .row.justify-content-around.align-items-center
          .col-lg-3.col-8.mb-2.mb-lg-0
            figure
              img(src='@/assets/curso/temas/t4/t4_08.png', alt='')
          .col-lg-8
            h4 Lucidchart
            p.mb-0 Esta herramienta se puede conseguir en la versión gratuita aunque con ella no se puedan utilizar todas las funciones. Permite no solo realizar bocetos de bloques sino mas conceptuales, diagramas de flujo y organigramas. 

        .row.justify-content-around.align-items-center
          .col-lg-3.col-8.mb-2.mb-lg-0
            figure
              img(src='@/assets/curso/temas/t4/t4_09.png', alt='')
          .col-lg-8
            h4 MockFlow
            p.mb-0 Contiene todas las herramientas para elaborar prototipos pero para la gestión de un solo proyecto web y solo permite incluir a dos miembros del equipo para colaborar.        

        .row.justify-content-around.align-items-center
          .col-lg-3.col-8.mb-2.mb-lg-0
            figure
              img(src='@/assets/curso/temas/t4/t4_10.png', alt='')
          .col-lg-8
            h4 Wireframe.CC
            p.mb-0 Como es una herramienta gratuita tiene las funcionalidades básicas para elaborar prototipos pero a la hora de guardar el proyecto lo hace público, aspecto que lo hace vulnerable de ser copiado. 

    separador

    #t_4_2.titulo-segundo.color-acento-botones(data-aos="fade")
      h2 4.2 Tipos de Wireframe

    p(data-aos="fade").mb-5 Son los siguientes:

    .row.justify-content-center.mb-5
        .col-lg-6.mb-4.mb-lg-0(data-aos="zoom-in")
          .crd.crd--avatarH.grad_01.hg-100
            .row.py-4.pe-4
              .col-auto
                figure
                  img(src="@/assets/curso/temas/t2/t2_32.svg", alt="alt").img90
              .col
                h5.text-white De baja fidelidad
                p.text-white Es un Wireframe sencillo que puede hacerse a mano o utilizando las herramientas digitales. Allí se bosquejan aspectos generales del producto multimedia sin entrar en el detalle de imágenes, contenido o color. Utiliza solo escala de grises, se enfoca en la interacción del usuario y los elementos de diseño que utiliza son cuadrados, rectángulos, círculos, triángulos o líneas.
        .col-lg-6(data-aos="zoom-in")
          .crd.crd--avatarH.grad_01.hg-100
            .row.py-4.pe-4
              .col-auto
                figure
                  img(src="@/assets/curso/temas/t2/t2_33.svg", alt="alt").img90
              .col
                h5.text-white De alta fidelidad
                p.text-white Parte del Wireframe de baja fidelidad, utilizando herramientas más especializadas de prototipado, allí se introducen aspectos que proporcionan más detalles como colores, gráficos, textos y sombras, también se enfoca en el usuario al tener en cuenta su interacción con procesos generales o detallados. Los elementos de diseño que utiliza son los mismos del Wireframe de baja fidelidad, pero con contenidos reales (texto, imágenes, color) que llaman a la acción y a la toma de decisiones.

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-auto 
        figure
          img(src="@/assets/curso/temas/recursos/rectangle_01.svg", alt="alt").img90
      .col
        p.mb-0 Las ventajas y desventajas de utilizar uno u otro tipo de Wireframe se pueden visualizar en la tabla 1:

    .tabla-a.color-acento-botones(data-aos="zoom-in").mb-5 
      table
        thead
          tr
            th(style="width:20%;")  
            th(style="width:40%;")  Ventajas
            th(style="width:40%;")  Desventajas
        tbody
          tr
            td(rowspan='5').text-center Baja fidelidad
            td 
              |#[i.fas.fa-caret-right.clr--orange]Se desarrollan r&aacute;pidamente.
            td 
              |#[i.fas.fa-caret-right.clr--orange] Es un boceto muy general del producto.
          tr
            td
              |#[i.fas.fa-caret-right.clr--orange] De bajo costo para su desarrollo.
            td
              |#[i.fas.fa-caret-right.clr--orange] No se pueden realizar pruebas de rendimiento del producto.
          tr
            td
              |#[i.fas.fa-caret-right.clr--orange] Los cambios requeridos se pueden realizar inmediatamente.
            td
              |#[i.fas.fa-caret-right.clr--orange] De poca utilidad cuando se tienen todos los requisitos.
          tr
            td
              |#[i.fas.fa-caret-right.clr--orange] Se puede realizar un dise&ntilde;o general de las interfaces (pantallas o aspecto visual) que ver&iacute;a el usuario al interactuar con el producto.
            td
              |#[i.fas.fa-caret-right.clr--orange] No se aprecia la navegabilidad del producto.
          tr
            td
              |#[i.fas.fa-caret-right.clr--orange] Se puede visualizar m&aacute;s f&aacute;cilmente cualquier requerimiento adicional.
            td  
          tr
            td(rowspan='5').text-center Alta fidelidad
            td
              |#[i.fas.fa-caret-right.clr--orange] Contempla todos los detalles de dise&ntilde;o del producto.
            td
              |#[i.fas.fa-caret-right.clr--orange] Requiere de mucho tiempo para su elaboraci&oacute;n.
          tr
            td
              |#[i.fas.fa-caret-right.clr--orange] Es completamente interactivo. 
            td
              |#[i.fas.fa-caret-right.clr--orange] De alto costo para su desarrollo.
          tr
            td
              |#[i.fas.fa-caret-right.clr--orange] Posee funcionalidad completa de los procesos y tareas del usuario.
            td 
              |#[i.fas.fa-caret-right.clr--orange] Poco efectivo para la recolecci&oacute;n de los requerimientos. 
          tr
            td
              |#[i.fas.fa-caret-right.clr--orange] Posee todos los elementos de navegabilidad.
            td
              |#[i.fas.fa-caret-right.clr--orange] Muy dispendioso para la realizaci&oacute;n de los cambios requeridos.
          tr
            td
              |#[i.fas.fa-caret-right.clr--orange] Se pueden realizar pruebas de su uso con el usuario. 
            td  

    .tarjeta.color-secundario.p-3.mb-5(data-aos="zoom-in")
      .row.justify-content-around.align-items-center
        .col-auto
          img(src="@/assets/curso/temas/recursos/cta_02.svg").img65
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Guía de Wireframing para principiantes
              p.mb-0 Estimado aprendiz, a continuación lo invitamos a consultar un video con el fin de profundizar en el proceso de la creación de <em>wireframes</em>.  
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=K79icjeOcn8" target="_blank")
                span.clr--base ver video
                i.clr--base.fas.fa-file-download

    .row.justify-content-center(data-aos="zoom-in")
      .col-lg-10
        .row.justify-content-center.align-items-center
          .col-auto
            figure
              img(src="@/assets/curso/temas/t2/t2_24.svg", alt="alt")
          .col
            p.mb-0 #[strong En el video anterior se observa un repaso de los conceptos estudiados sobre Wireframe, lo que debe incluir un buen diseño de su estructura y la manera de comenzar fácilmente a construirlo. La herramienta utilizada es Figma con un componente basado en Wireframe Kits, el cual puede instalarse en el PC en su versión libre. ] 








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
