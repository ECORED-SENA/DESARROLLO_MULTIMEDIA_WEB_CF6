<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 3
      h1 Sistema de navegación del proyecto multimedia

    p(data-aos="fade").mb-5 Una vez definida la arquitectura del proyecto multimedia, es necesario diseñar el mapa mediante el cual el usuario podrá ubicarse, interactuar y desplazarse dentro de la estructura gráfica, visual e informativa del producto. 

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t3/t3_01.svg", alt="alt")
      .col-lg-8(data-aos="fade")
        p #[strong El sistema de navegación es entonces la ruta que deberá seguir el navegante para saber en cada instante dónde está y a dónde puede ir al interior del diseño organizado por el analista.] La navegación le da la posibilidad al cliente de tener una mayor o menor interacción con el producto, de acuerdo con la orientación que brinde el sistema cuando el usuario ejecute cualquier proceso.
        .row
          .col-auto
            figure
              img(src="@/assets/curso/temas/recursos/square_01.svg", alt="alt").img30
          .col
            p El sistema de navegación se debe definir en el proceso de elaboración del diseño del proyecto antes de construirlo para evitar errores de organización, inversión de tiempo y sobrecostos. #[span.bold.clr--blue Este sistema se aplica en los proyectos que se relacionan con sitios web, puesto que se maneja un gran volumen de información y también se puede usar en proyectos que se enfocan en el desarrollo de productos que deben mostrar desempeño en sus funcionalidades, para lo cual es apropiada la construcción de un diseño de interacción (ID)], que consiste en incorporar elementos como cuadros de textos que al hacer el clic en la flecha hacia abajo despliegan opciones para seleccionar una de ellas o se colocan botones que cambian de color y producen sonidos al tener contacto con el usuario.

    #t_3_1.titulo-segundo.color-acento-botones(data-aos="fade")
      h2 3.1 Tipos de navegación

    p(data-aos="fade").mb-5 Los sistemas de navegación están compuestos por enlaces que le permiten al usuario moverse a través de la estructura y contenido del producto. Dependiendo de esta forma de desplazamiento se puede clasificar en:

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row.justify-content-center(titulo="Navegación jerárquica")
        .col-12
          p En este sistema de navegación, el producto desarrollado tiene un contenido principal el cual presenta varias opciones más específicas hacia las cuales se puede desplazar el usuario; se llama navegación jerárquica porque la información está organizada en forma de árbol con diferentes niveles de temas que pueden tener a su vez subtemas. 
          .cajon.cjn--paleBlue.p-4.mb-4
            p.mb-0 Este tipo de navegación le permite al usuario conocer en que lugar de la estructura se encuentra y adentrarse a los contenidos más específicos en los niveles que están más abajo, sabiendo que los generales están en la parte superior de la estructura. Por ejemplo:
          .row.justify-content-center.mb-5
            .col-lg-5.col-8
              figure
                img(src="@/assets/curso/temas/t3/t3_02.svg", alt="alt")

          p.mb-0 En la estructura anterior se observa la presentación general sobre proyecto multimedia, si el usuario quiere saber un poco más puede bajar al siguiente nivel que le informará sobre los elementos interactivos y de hipertexto, si quisiera algo más específico sobre cada uno de ellos debe bajar un nivel más y consultar el contenido de animación, sonidos, nodos y enlaces.

      .row.justify-content-center(titulo="Navegación jerárquica")
        .col-12
          p.mb-4 En este sistema de navegación, el producto desarrollado se puede recorrer de manera secuencial como si se estuviera leyendo un libro pagina por página y devolverse si se quiere. Esta estructura es utilizada cuando se requiere que el usuario siga un camino o unas instrucciones paso por paso. Por ejemplo:           
         
          figure.mb-5
            img(src="@/assets/curso/temas/t3/t3_03.svg", alt="alt")

          .row.justify-content-center
            .col-lg-4
              figure
                img(src="@/assets/curso/temas/t3/t3_04.svg", alt="alt")
            .col-lg-8
              .cajon.cjn--paleBlue.p-4.mb-4
                p.mb-0 En el ejemplo se observa la interfaz (pantalla inicial) de un producto multimedia que pretende enseñar las etapas para el desarrollo de un proyecto. 
              p.mb-0 El usuario debe recorrer en orden lineal el contenido para lograr el aprendizaje; aunque esto no quiere decir que después de llegar al final  o cierre no pueda devolverse a revisar cada una de las etapas anteriores. 

      .row.justify-content-center(titulo="Navegación híbrida")
        .col-12
          p.mb-4 Este sistema de navegación combina los dos anteriores; en este la información está organizada en temas y subtemas jerárquicamente y el usuario puede recorrer el contenido linealmente o no, dependiendo de su elección. Esto permite ordenar y estructurar mejor la información de lo general a lo particular y además acceder a ella secuencialmente. Por ejemplo:       

          .row.justify-content-center
            .col-lg-6            
              figure.mb-5
                img(src="@/assets/curso/temas/t3/t3_05.svg", alt="alt")

          p.mb-5 En la estructura anterior se puede observar como el usuario tiene acceso a toda la información del proyecto y además hacer uso de ella en forma secuencial si lo desea; como si estuviera leyendo un libro por páginas. 

          .row.justify-content-center
            .col-lg-4
              figure
                img(src="@/assets/curso/temas/t3/t3_06.svg", alt="alt")
            .col-lg-8
              .row.mb-4
                .col-auto.d-none.d-lg-flex
                  figure
                    img(src="@/assets/curso/temas/recursos/square_00.svg", alt="alt").img65
                .col
                  p.mb-0 #[strong Los contenidos están organizados conservando una jerarquía que parte de un tena principal que en este caso es el proyecto multimedia, el cual se desglosa en tres temas para su desarrollo, que a su vez se divide en subtemas.]

              p.mb-0 El usuario debe recorrer en orden lineal el contenido para lograr el aprendizaje; aunque esto no quiere decir que después de llegar al final  o cierre no pueda devolverse a revisar cada una de las etapas anteriores. 

    separador

    #t_3_2.titulo-segundo.color-acento-botones(data-aos="fade")
      h2 3.2 Plano

    .bg_img_04.mb-5
      .row.justify-content-center.mb-5
        .col-lg-4.col-8.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/temas/t3/t3_07.svg", alt="alt")
        .col-lg-8(data-aos="fade")
          p #[span.bold.clr--blue Las estructuras de navegación vistas anteriormente reflejan el concepto de mapa de navegación como un artefacto de diseño que tiene como misión definir el orden de las funcionalidades del proyecto;] en otras palabras, es un modelo gráfico que representa la forma en que está organizado y cómo funciona. 
          .row
            .col-auto
              figure
                img(src="@/assets/curso/temas/recursos/square_00.svg", alt="alt")
            .col 
              p.mb-0 #[strong Para elaborar un mapa de navegación se utiliza un Lenguaje Unificado de Modelado -UML- que consiste en un lenguaje visual universal en el cual, a través de diagramas, se representa la relación entre los objetos, elementos, entidades o procesos del proyecto para lograr el objetivo que se ha propuesto.] Por lo tanto, elaborar el mapa antes de empezar el desarrollo es sumamente útil para mitigar el riesgo de cometer errores en la construcción del producto. 

      p(data-aos="fade").mb-5 #[strong Antes de iniciar es necesario entender la sintaxis que se utiliza en el modelado:]

      .row.justify-content-center(data-aos="zoom-in")
        .col-lg-10
          figure
            img(src="@/assets/curso/temas/t3/t3_08.svg", alt="alt")

    .cajon.cjn--paleBlue.p-4(data-aos="zoom-in").mb-5
      p.mb-0 #[strong Por ejemplo, si lo que se quiere es desarrollar un proyecto web para asignar citas médicas virtuales, el mapa de navegación a groso modo podría ser el siguiente:]

    figure(data-aos="zoom-in").mb-5
      img(src="@/assets/curso/temas/t3/t3_09.svg", alt="alt")
      
    .row.justify-content-center.align-items-center
      .col-lg-4.col-8.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t3/t3_10.svg", alt="alt")
      .col-lg-8(data-aos="fade")
        p.mb-4 Se observa que cada entidad informa sobre el estado actual del nodo, las flechas negras determinan la siguiente acción a llevarse a cabo dentro del nodo, las flechas de forma circular corresponden a las acciones que pueden repetirse e indican que de este estado no se puede avanzar a otro, hasta que se logre el objetivo. En el mapa de navegación cada nodo debe representar un pantallazo para el usuario donde el estado inicial apunta a la pantalla principal que conduce a otra y así sucesivamente hasta cerrar el proceso. Posterior al diseño se realiza la codificación del mapa utilizando el lenguaje de programación seleccionado por el diseñador. 

        .tarjeta.color-secundario.p-3.mb-5(data-aos="zoom-in")
            .row.justify-content-around.align-items-center
              .col-auto
                img(src="@/assets/curso/temas/recursos/cta_02.svg").img75
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h4.mb-1 Análisis de sistemas de navegación de sitios web
                    p.mb-0 Estimado aprendiz, Para profundizar sobre sistemas de navegación, consulta el siguiente documento:
                  .col-sm-auto
                    a.boton.color-acento-botones(:href="obtenerLink('/downloads/6201_trecalde_00451.pdf')" target="_blank")
                      span.clr--base Descargar
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
