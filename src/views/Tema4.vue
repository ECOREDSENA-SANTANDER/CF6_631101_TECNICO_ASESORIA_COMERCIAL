<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Fidelización del cliente

    .row.justify-content-center.align-items-center.mb-0(data-aos='fade-right')
        .col-lg-5.mb-3.col-10.col-sm-8
          img(src='@/assets/curso/temas/t4/img01.png', alt='')
        .col-lg-7
          .row
            .col-lg-2.mb-3.col-5.col-md-3
              img(src='@/assets/curso/temas/t4/img02.svg', alt='')
            .col-lg-10 
              p La fidelización del cliente comprende el conjunto de estrategias y acciones que implementa una organización para fortalecer las relaciones comerciales y promover la continuidad en la adquisición de sus productos o servicios. Este proceso se fundamenta en la satisfacción de las necesidades, el cumplimiento de los compromisos adquiridos y la generación de experiencias positivas que favorezcan la confianza y la preferencia por la empresa. 
          p Para desarrollar relaciones comerciales duraderas, las organizaciones deben implementar estrategias que comprendan la atracción de clientes potenciales, su captación, la satisfacción de sus necesidades y el seguimiento posterior a la compra. En este proceso, el asesor comercial cumple una función fundamental, debido a que mantiene contacto con el cliente, identifica sus expectativas, atiende sus requerimientos y contribuye al fortalecimiento de su relación con la organización.
          p Es importante reconocer que la fidelización no consiste únicamente en incrementar las ventas, sino también en mantener relaciones basadas en la confianza, la calidad del servicio y el cumplimiento de las expectativas. Por esta razón, las empresas deben analizar el nivel de satisfacción de sus clientes y establecer acciones diferenciadas según sus experiencias, necesidades y comportamientos de compra.

    p Entre las principales estrategias para fortalecer la fidelización se encuentran:

    .row.justify-content-center.mb-3(data-aos='fade-right')
        .col-lg-3.mb-3.col-9.col-md-7
          img(src='@/assets/curso/temas/t4/img03.png', alt='')
        .col-lg-9
          TabsA.color-acento-botones
            .tarjeta.color-acento-botones--borde.p-4(titulo="Atención personalizada")
              p Ofrecer orientación y alternativas acordes con las necesidades y preferencias del cliente.

            .tarjeta.color-acento-botones--borde.p-4(titulo="Cumplimiento de compromisos")
              p Garantizar las condiciones de calidad, entrega y servicio acordadas durante la venta.

            .tarjeta.color-acento-botones--borde.p-4(titulo="Comunicación continua")
              p Mantener canales de contacto que permitan proporcionar información y atender requerimientos oportunamente.

            .tarjeta.color-acento-botones--borde.p-4(titulo="Seguimiento postventa")
              p Verificar la satisfacción del cliente después de la compra e identificar posibles dificultades.

            .tarjeta.color-acento-botones--borde.p-4(titulo="Gestión de inconformidades")
              p Atender las quejas y reclamaciones mediante soluciones oportunas y procedimientos establecidos.

            .tarjeta.color-acento-botones--borde.p-4(titulo="Reconocimiento de la lealtad")
              p Implementar beneficios o programas que incentiven la continuidad de la relación comercial, de acuerdo con las políticas de la organización.

    p(data-aos="fade-left") Por ejemplo, una empresa comercializadora de electrodomésticos puede fortalecer la fidelización mediante el seguimiento a la entrega de los productos, la orientación sobre las garantías y la atención de solicitudes posteriores a la compra. Estas acciones permiten identificar oportunidades de mejora y fortalecer la confianza del consumidor.


































</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
