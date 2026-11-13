<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.mb-3.col-md-8.col-9
        img(src='@/assets/curso/temas/intro/img01.png', alt='')
      .col-lg-7
        p La atención al cliente representa un elemento estratégico en las organizaciones, debido a su influencia en la satisfacción, la fidelización y la construcción de relaciones comerciales duraderas; para lograr una adecuada atención, se requiere comprender las necesidades y expectativas de los consumidores, así como reconocer los factores que intervienen en la prestación de un servicio de calidad. En este componente se abordarán el triángulo del servicio, los momentos de verdad y el ciclo de atención, con el propósito de analizar las interacciones entre la empresa y sus clientes, identificar oportunidades de mejora y fortalecer la capacidad de respuesta ante diferentes situaciones comerciales.
        p Por otra parte, el seguimiento a la experiencia del cliente facilita la identificación de fortalezas y aspectos por mejorar en los procesos de atención y servicio. Para ello, es fundamental aplicar herramientas y técnicas de evaluación que permitan recopilar información, medir la satisfacción, analizar la trazabilidad del servicio y determinar acciones de mejora. Estos conocimientos contribuyen al desarrollo de competencias orientadas a la gestión de situaciones postventa, la solución de requerimientos y el fortalecimiento de relaciones comerciales basadas en la confianza, la calidad y el mejoramiento continuo.
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

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
