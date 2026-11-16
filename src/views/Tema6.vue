<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Ciclo del servicio

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-lg-12
        img(src='@/assets/curso/temas/t6/img01.png', alt='')
    p El ciclo del servicio es una herramienta que permite representar de manera secuencial las diferentes etapas e interacciones que experimenta un cliente durante su relación con una organización. Comprende los contactos que se presentan desde el acercamiento inicial hasta la atención posterior a la compra, facilitando la identificación de situaciones que influyen en la calidad del servicio.
    p Cada interacción constituye una oportunidad para generar satisfacción o identificar dificultades que requieren atención. Por esta razón, el análisis del ciclo del servicio permite comprender la experiencia del cliente, reconocer los puntos críticos y establecer acciones orientadas al mejoramiento continuo.

    .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/ico.svg', alt='')
        h3.mb-1.mx-3 Etapas del ciclo del servicio
    p Aunque las etapas pueden variar según la actividad económica y las características de la organización, generalmente comprenden:

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-6.mb-3.col-10.col-md-8
        img(src='@/assets/curso/temas/t6/img02.png', alt='')
      .col-lg-6
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Contacto inicial")
            .col-md-12.mb-4.mb-md-0
              p Momento en el que el cliente establece comunicación con la empresa para solicitar información o conocer sus productos y servicios.

          .row(numero="2" titulo="Identificación de necesidades")
            .col-md-12.mb-4.mb-md-0
              p Proceso mediante el cual se reconocen los requerimientos, intereses y expectativas del cliente.

          .row(numero="3" titulo="Orientación y asesoría")
            .col-md-12.mb-4.mb-md-0
              p Presentación de información y alternativas que permitan al cliente tomar decisiones.

          .row(numero="4" titulo="Compra o contratación")
            .col-md-12.mb-4.mb-md-0
              p Formalización de la adquisición del producto o servicio bajo las condiciones acordadas.

          .row(numero="5" titulo="Entrega y cumplimiento")
            .col-md-12.mb-4.mb-md-0
              p Verificación de la entrega del producto o de la prestación del servicio conforme a los compromisos establecidos.

          .row(numero="6" titulo="Atención postventa")
            .col-md-12.mb-4.mb-md-0
              p Acompañamiento posterior a la compra para atender inquietudes, garantías, solicitudes o reclamaciones.

          .row(numero="7" titulo="Seguimiento y fidelización")
            .col-md-12.mb-4.mb-md-0
              p Evaluación de la satisfacción y desarrollo de acciones orientadas a fortalecer la relación comercial.

    p(data-aos="fade-left") Para elaborar el ciclo del servicio, la organización debe identificar los puntos de contacto, organizarlos según la secuencia que experimenta el cliente y analizar los resultados de cada interacción. Esta herramienta permite reconocer las situaciones que afectan la experiencia del consumidor y establecer medidas para fortalecer los procedimientos de atención.

    .cajon.color-acento-contenido.p-4.mb-4(data-aos="fade-left")
      h5 Ejemplo
      p.mb-0 En una tienda de tecnología, el ciclo puede iniciar cuando un cliente solicita información sobre un computador, continuar con la asesoría, la compra y la entrega del equipo, y finalizar con el seguimiento a su funcionamiento y la atención de posibles solicitudes de garantía.















































</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
