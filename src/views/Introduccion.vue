<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bloque-texto-a.cstm--color_01.p-4.p-md-5.mb-5(data-aos="fade") 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/temas/intro/intro.svg", alt="alt")
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p Bienvenidos al contenido de diseño de estructuras visuales de proyectos multimedia, en el cual se abordarán diversas temáticas con aspectos básicos y fundamentales que se deben tener en cuenta cuando se va a construir un producto. #[strong A continuación se puede conocer un poco más de este componente formativo:] 

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/ZCI8828x_Tc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)        

    
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
