<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Trazabilidad del servicio al cliente

    .row.justify-content-center.align-items-center.mb-0(data-aos='fade-right')
        .col-lg-5.mb-3.col-10.col-sm-8
          img(src='@/assets/curso/temas/t9/img01.png', alt='')
        .col-lg-7
          p La trazabilidad del servicio al cliente es el proceso que permite registrar, organizar y realizar seguimiento a las interacciones, solicitudes y actuaciones desarrolladas durante la relación comercial. Su finalidad es disponer de información que facilite conocer el historial de atención, verificar el cumplimiento de compromisos y evaluar la calidad del servicio.
          p Este proceso comprende el seguimiento desde la recepción de una solicitud hasta su resolución y cierre, incluyendo las actividades realizadas, los responsables, los tiempos de respuesta y los resultados obtenidos. En las organizaciones comerciales, la trazabilidad permite identificar dificultades recurrentes, verificar el estado de los requerimientos y establecer acciones orientadas al mejoramiento de los procedimientos de atención y postventa.
          p Por ejemplo, cuando un cliente solicita una garantía, la empresa debe registrar la fecha de recepción, el producto relacionado, el motivo de la solicitud, las actuaciones realizadas y la respuesta proporcionada. Esta información permite reconstruir el proceso y verificar si se cumplieron los procedimientos establecidos.

    .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/ico.svg', alt='')
        h3.mb-1.mx-3 Elementos de la trazabilidad del servicio

    p Para realizar un seguimiento adecuado, es necesario considerar los siguientes elementos:
    
    .row.justify-content-center.mb-3.bg3.g-0(data-aos="fade-left")
      .col-lg-6.p-0
        img.w-100.h-100.d-block.object-fit-cover(src='@/assets/curso/temas/t9/img02.svg', alt='')
      .col-lg-6
        .col-lg-12.p-4
          ul.lista-ul
            li.d-flex
              i.fas.fa-angle-right2
              p.mb-0 #[b Identificación del cliente:] información necesaria para reconocer al solicitante, respetando las disposiciones sobre protección de datos personales.
            li.d-flex
              i.fas.fa-angle-right2
              p.mb-0 #[b Registro de la solicitud:] descripción del requerimiento, fecha de recepción y canal utilizado.

            li.d-flex
              i.fas.fa-angle-right2
              p.mb-0 #[b Clasificación:] identificación del tipo de solicitud, como petición, queja, reclamo o requerimiento postventa.

            li.d-flex
              i.fas.fa-angle-right2
              p.mb-0 #[b Responsable:] persona o área encargada de gestionar la solicitud.

            li.d-flex
              i.fas.fa-angle-right2
              p.mb-0 #[b Estado del trámite:] información sobre las etapas de recepción, gestión, respuesta y cierre.
            li.d-flex
              i.fas.fa-angle-right2
              p.mb-0 #[b Tiempos de atención:] registro de los plazos establecidos y los tiempos utilizados para responder.
            li.d-flex
              i.fas.fa-angle-right2
              p.mb-0 #[b Resultado:] descripción de la solución proporcionada y verificación del cumplimiento de los compromisos.
            li.d-flex
              i.fas.fa-angle-right2
              p.mb-0 #[b Evidencias:] documentos, comunicaciones y registros que permiten comprobar las actuaciones realizadas.

    p Estos elementos facilitan el control de las solicitudes y proporcionan información para evaluar la calidad del servicio.

    .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/ico.svg', alt='')
        h3.mb-1.mx-3 Herramientas para la trazabilidad del servicio

    p Las organizaciones utilizan diferentes herramientas para registrar y realizar seguimiento a los procesos de atención, según sus necesidades y recursos disponibles.
    p Entre las principales se encuentran:

    .row.justify-content-center.mb-2(data-aos="fade-left")
      .col-lg-8.mb-3
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Sistemas de gestión de relaciones con clientes (CRM)")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Permiten centralizar información, registrar interacciones, consultar historiales y realizar seguimiento a las solicitudes.

          .row(titulo="Sistemas de gestión de casos o solicitudes")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Facilitan la asignación de responsables, el control de estados y el seguimiento de los tiempos de respuesta.

          .row(titulo="Bases de datos y registros digitales")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Permiten organizar la información relacionada con las solicitudes, los clientes y las actuaciones realizadas.

          .row(titulo="Indicadores de servicio")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Proporcionan información cuantitativa sobre el desempeño de los procesos de atención.
          .row(titulo="Herramientas de seguimiento logístico")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Permiten consultar información relacionada con la ubicación, el despacho y la entrega de productos mediante códigos de barras, identificación por radiofrecuencia (RFID) y sistemas de localización, cuando corresponda.
      .col-lg-4.col-9.col-md-7
        img(src='@/assets/curso/temas/t9/img03.png', alt='')

    p.mb-4 La selección de estas herramientas depende de las características de la organización y de los procedimientos establecidos para la atención al cliente.

    .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/ico.svg', alt='')
        h3.mb-1.mx-3 Canales de atención al cliente

    .row.justify-content-center.align-items-center.mb-4(data-aos='fade-right')
        .col-lg-5.mb-3.col-10.col-sm-8
          img(src='@/assets/curso/temas/t9/img04.png', alt='')
        .col-lg-7
          p Los canales de atención son los medios que utiliza una organización para establecer comunicación con sus clientes, proporcionar información, recibir solicitudes y gestionar requerimientos. Entre los principales canales se encuentran la atención presencial, las líneas telefónicas, el correo electrónico, los sitios web, los formularios digitales, las aplicaciones de mensajería y las redes sociales. 
          p La utilización de estos canales debe responder a las características del público objetivo, las políticas institucionales y las condiciones de accesibilidad y seguridad de la información. Independientemente del canal utilizado, es fundamental registrar las solicitudes y mantener la continuidad de la atención, de manera que el cliente pueda conocer el estado de su requerimiento y recibir respuestas oportunas.
    .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/ico.svg', alt='')
        h3.mb-1.mx-3 Informe de trazabilidad del servicio

    .fondo01.mb-3.p-4.p-md-4.p-lg-5.pt-lg-2(data-aos='fade-right')
        .row.justify-content-center
          .col-lg-8.mb-3 
            p El informe de trazabilidad es un documento que permite presentar de manera organizada los resultados del seguimiento a las solicitudes y los procesos de atención al cliente. Su elaboración facilita la evaluación del servicio y proporciona información para determinar acciones de mejora.
            p De acuerdo con las políticas de la organización, el informe puede incluir:
            ol.lista-ol--cuadro
              li
              .lista-ol--cuadro__vineta
                span a
              | #[b Objetivo del seguimiento:] propósito del análisis y periodo evaluado.
              li
              .lista-ol--cuadro__vineta
                span b
              | #[b Descripción de las solicitudes:] cantidad y clasificación de los requerimientos recibidos.
              li
              .lista-ol--cuadro__vineta
                span c
              | #[b Estado de atención:] solicitudes resueltas, pendientes y en proceso de gestión.
              li
              .lista-ol--cuadro__vineta
                span d
              | #[b Indicadores de servicio:] tiempos de respuesta, cumplimiento de compromisos y nivel de satisfacción.
              li
              .lista-ol--cuadro__vineta
                span e
              | #[b Hallazgos identificados:] dificultades, incumplimientos y oportunidades de mejora.
              li.d-flex
              .lista-ol--cuadro__vineta
                span f
              | #[b Acciones propuestas:] medidas para fortalecer la atención, con responsables y plazos de ejecución.
              li.d-flex
              .lista-ol--cuadro__vineta
                span g
              | #[b Conclusiones:] resultados principales y recomendaciones derivadas del seguimiento.

          .col-lg-4.col-10.col-md-7
            img(src='@/assets/curso/temas/t9/img05.png', alt='')

    .cajon.color-acento-contenido.p-4.mb-4(data-aos="fade-left")
      .h5 Ejemplo de aplicación
      p.mb-0 Una empresa comercial registra 50 solicitudes postventa durante un mes, de las cuales 40 fueron resueltas dentro del plazo establecido y 10 presentaron retrasos. A partir de esta información, se determina un cumplimiento del 80 % y se analizan las causas de las demoras para proponer acciones que permitan mejorar los tiempos de respuesta.

    p(data-aos="fade-left") El informe debe elaborarse con información verificable y conforme a los procedimientos institucionales, de manera que contribuya a la toma de decisiones y al mejoramiento continuo del servicio.




</template>

<script>
export default {
  name: 'Tema9',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
