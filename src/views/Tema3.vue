<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Satisfacción del cliente

    .bloque-texto-g.bloque-texto-g--inverso.bg3.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La satisfacción del cliente corresponde al grado en que un producto, servicio o experiencia cumple con sus necesidades y expectativas. Se relaciona con la percepción que desarrolla el consumidor al comparar lo que esperaba recibir con los resultados obtenidos durante su interacción con la organización. 
          br
          br
          | Para las empresas, la satisfacción constituye un indicador fundamental de la calidad del servicio, debido a que permite identificar fortalezas, reconocer dificultades y establecer oportunidades de mejora. Por esta razón, su gestión debe incorporarse a las políticas organizacionales y a los procedimientos de atención, seguimiento y evaluación.

    p  La identificación de los segmentos de clientes facilita el reconocimiento de sus características, preferencias y requerimientos. A partir de esta información, las organizaciones pueden diseñar estrategias de atención diferenciadas, establecer estándares de servicio y asignar responsabilidades para garantizar el cumplimiento de sus compromisos.

    .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/ico.svg', alt='')
        h3.mb-1.mx-3 Acciones para fortalecer la satisfacción del cliente

    .row.justify-content-center.mb-3.bg3.g-0(data-aos="fade-left")
      .col-lg-6.p-0
        img.w-100.h-100.d-block.object-fit-cover(src='@/assets/curso/temas/t3/img02.svg', alt='')
      .col-lg-6
        .col-lg-12.p-4
          p Para mejorar la satisfacción del cliente, las organizaciones deben desarrollar acciones orientadas a:
          ul.lista-ul
            li.d-flex
              i.fas.fa-angle-right2
              | Identificar las necesidades y expectativas de los diferentes segmentos de clientes.
            li.d-flex
              i.fas.fa-angle-right2
              | Establecer estándares de calidad para los procesos de atención y servicio.
            li.d-flex
              i.fas.fa-angle-right2
              | Capacitar al personal en comunicación, orientación comercial y solución de requerimientos.
            li.d-flex
              i.fas.fa-angle-right2
              | Garantizar información clara, suficiente y oportuna sobre los productos y servicios.
            li.d-flex
              i.fas.fa-angle-right2
              | Implementar mecanismos para recibir y gestionar peticiones, quejas, reclamos y sugerencias.
            li.d-flex
              i.fas.fa-angle-right2
              | Aplicar instrumentos de evaluación, como encuestas de satisfacción e indicadores de desempeño.
            li.d-flex
              i.fas.fa-angle-right2
              | Analizar los resultados obtenidos y formular acciones de mejoramiento continuo.
            li.d-flex
              i.fas.fa-angle-right2
              | Realizar seguimiento a los compromisos y verificar la efectividad de las soluciones implementadas.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/ico.svg', alt='')
      h3.mb-1.mx-3 Gestión de la calidad en la atención al cliente

    p La gestión de la calidad proporciona principios y herramientas que permiten a las organizaciones mejorar sus procesos y responder de manera consistente a las necesidades y expectativas de los clientes.

    .row.mb-4.justify-content-center(data-aos='fade-right')
        .col-sm-9.col-lg-6.mb-4.mb-lg-0
          .tarjeta--boton.bg1.p-4
            .row.justify-content-center.mb-3
              .col-lg-3.col-7
                figure
                  img(src='@/assets/curso/temas/t3/1.svg', alt='')
            p La NTC-ISO 9000:2015 establece los fundamentos y el vocabulario de los sistemas de gestión de la calidad, incluyendo conceptos relacionados con el enfoque al cliente, la satisfacción y el mejoramiento.

        .col-sm-9.col-lg-6.mb-4.mb-lg-0
          .tarjeta--boton.bg2.p-4.h-100
            .row.justify-content-center.mb-3
              .col-lg-3.col-7
                figure
                  img(src='@/assets/curso/temas/t3/2.svg', alt='')
            p Por su parte, la NTC-ISO 9001:2015 establece requisitos para implementar sistemas de gestión de la calidad orientados a proporcionar productos y servicios que cumplan las condiciones aplicables y contribuyan a incrementar la satisfacción del cliente.
    p Estas normas constituyen referentes para fortalecer la gestión organizacional y promover una cultura de calidad basada en el cumplimiento de requisitos, la evaluación de resultados y el mejoramiento continuo. En este sentido, las empresas deben disponer de canales de información y atención que faciliten la gestión de solicitudes de manera presencial o mediante herramientas tecnológicas. Asimismo, es necesario aplicar procedimientos de comunicación, gestión documental, protección de datos personales y atención de requerimientos, de acuerdo con las políticas institucionales y la normativa vigente.
    p(data-aos="fade-left") La evaluación de la satisfacción y el seguimiento a la experiencia del cliente permiten determinar acciones postventa fundamentadas en información verificable. Estas acciones contribuyen a resolver dificultades, prevenir su recurrencia y fortalecer las relaciones comerciales mediante una atención responsable, oportuna y orientada al mejoramiento continuo.











































































</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
