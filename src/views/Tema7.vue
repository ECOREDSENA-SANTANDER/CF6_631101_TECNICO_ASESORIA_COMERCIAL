<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Triángulo del servicio

    .bloque-texto-g.bg4.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t7/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El triángulo del servicio es un modelo de gestión que permite comprender la relación entre los elementos fundamentales que intervienen en la prestación de un servicio de calidad. Su enfoque sitúa al cliente como eje central de las actividades organizacionales y establece la necesidad de coordinar las estrategias, las personas y los sistemas para responder a sus necesidades y expectativas.
          br
          br
          | Este modelo contribuye a identificar cómo las decisiones empresariales, el desempeño del personal y los procedimientos internos influyen en la experiencia del cliente. Su aplicación facilita la organización de los recursos y el fortalecimiento de los procesos de atención.

    .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/ico.svg', alt='')
        h3.mb-1.mx-3 Características del triángulo del servicio
    p El triángulo del servicio se caracteriza por integrar los elementos que participan en la atención y orientar su funcionamiento hacia la satisfacción del cliente.
    p Entre sus principales características se encuentran:

    .row.justify-content-center.mb-4
      .col-lg-8.mb-3 
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Enfoque en el cliente")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Las actividades se organizan considerando sus necesidades, expectativas y requerimientos.

          .row(titulo="Coordinación organizacional")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Las estrategias, el personal y los sistemas deben actuar de manera articulada.

          .row(titulo="Orientación a la calidad")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Promueve el cumplimiento de estándares y compromisos de servicio.

          .row(titulo="Adaptabilidad")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Permite ajustar los procedimientos de acuerdo con las características del mercado y las necesidades de los consumidores.

          .row(titulo="Mejoramiento continuo")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Facilita la identificación de dificultades y el establecimiento de acciones correctivas y de mejora.   
      .col-lg-4
        img(src='@/assets/curso/temas/t7/img02.png', alt='')

    .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/ico.svg', alt='')
        h3.mb-1.mx-3 Estructura del triángulo del servicio

    p El modelo está conformado por tres elementos que interactúan alrededor del cliente:
    
    .row.mb-3(data-aos='fade-right')
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-0
            .col-7.col-lg-5.mb-2
              figure
                img(src='@/assets/curso/temas/t7/1.svg', alt='')
          h4.text-center Estrategia de servicio
          p.mb-0 Comprende las políticas, los objetivos y las acciones que establece la organización para proporcionar experiencias satisfactorias. Define cómo se prestará el servicio y cuáles serán los compromisos asumidos con los clientes.

      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-0
            .col-7.col-lg-5.mb-2
              figure
                img(src='@/assets/curso/temas/t7/2.svg', alt='')
          h4.text-center Personal de servicio
          p.mb-0 Corresponde a los colaboradores que participan en la atención y mantienen contacto con los consumidores. Su formación, comunicación, actitud y capacidad para resolver situaciones influyen directamente en la calidad de las interacciones.
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-0
            .col-7.col-lg-5.mb-2
              figure
                img(src='@/assets/curso/temas/t7/3.svg', alt='')
          h4.text-center Sistemas de servicio
          p.mb-0 Incluyen los procedimientos, recursos tecnológicos, canales de comunicación y herramientas que facilitan la prestación del servicio y permiten cumplir los compromisos adquiridos. El cliente ocupa el centro del modelo, debido a que sus necesidades y expectativas orientan la articulación de estos tres elementos.

    p Por ejemplo, una empresa que ofrece ventas por internet debe contar con una estrategia de atención clara, asesores capacitados y sistemas que permitan registrar pedidos, gestionar entregas y atender reclamaciones. La coordinación de estos elementos contribuye a proporcionar una experiencia satisfactoria.















































</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
