<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Momentos de verdad en el servicio al cliente

    .row.justify-content-center.align-items-center.mb-0(data-aos='fade-right')
        .col-lg-5.mb-3.col-10.col-sm-8
          img(src='@/assets/curso/temas/t8/img01.png', alt='')
        .col-lg-7
          .row
            .col-lg-2.mb-3.col-5.col-md-3
              img(src='@/assets/curso/temas/t8/img02.svg', alt='')
            .col-lg-10 
              p Los momentos de verdad son las interacciones que se presentan entre el cliente y una organización, durante las cuales se forma una percepción sobre la calidad del servicio recibido. Estos contactos pueden desarrollarse de manera presencial, telefónica o mediante canales digitales, y tienen influencia en la satisfacción, la confianza y la continuidad de la relación comercial.
          p Cada momento de verdad representa una oportunidad para fortalecer la experiencia del cliente o identificar situaciones que requieren acciones por mejorar. Por esta razón, las organizaciones deben reconocer los puntos de contacto más importantes y establecer procedimientos que permitan ofrecer respuestas oportunas y acordes con las expectativas de los consumidores.
        p Por ejemplo, cuando un cliente solicita información sobre un producto, la claridad de la respuesta y la disposición del asesor influyen en su percepción inicial. De igual manera, la atención de una reclamación constituye un momento de verdad que puede fortalecer o afectar la confianza en la empresa.

    .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/ico.svg', alt='')
        h3.mb-1.mx-3 Características de los momentos de verdad

    p Los momentos de verdad presentan características que permiten comprender su importancia en la prestación del servicio:

    .row.justify-content-center.mb-4
      .col-lg-3.mb-3  
        img(src='@/assets/curso/temas/t8/img03.png', alt='')
      .col-lg-9
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Interacción")
            p Se producen cuando el cliente establece contacto con una persona, un procedimiento o un sistema de la organización.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Percepción")
            p Generan una valoración de la experiencia a partir de la atención recibida.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Impacto")
            p Pueden influir positiva o negativamente en la satisfacción y confianza del cliente.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Continuidad")
            p Se presentan en diferentes etapas del ciclo del servicio, incluyendo la postventa.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Oportunidad de mejora")
            p Permiten identificar situaciones críticas y establecer acciones para fortalecer la calidad del servicio.

    p Su importancia radica en que cada contacto contribuye a la percepción general que el cliente construye sobre la organización. Por ello, resulta fundamental mantener coherencia entre la información proporcionada, los compromisos adquiridos y los resultados del servicio.

    .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/ico.svg', alt='')
        h3.mb-1.mx-3 Elementos que favorecen un momento de verdad

    p La calidad de los momentos de verdad depende de la interacción de diferentes elementos que intervienen en la prestación del servicio:

    .row.justify-content-center.mb-3.bg3.g-0
      .col-lg-6.p-0
        img.w-100.h-100.d-block.object-fit-cover(src='@/assets/curso/temas/t8/img05.svg', alt='')
      .col-lg-6
        .col-lg-12.p-4
          ul.lista-ul
            li.d-flex
              i.fas.fa-angle-right2
              p #[b Soporte interno:] comprende las actividades administrativas, operativas y logísticas que respaldan la atención al cliente.
            li.d-flex
              i.fas.fa-angle-right2
              p #[b Soporte físico:] incluye las instalaciones, los equipos y los recursos materiales utilizados durante la prestación del servicio.
            li.d-flex
              i.fas.fa-angle-right2
              p #[b Personal de contacto:] corresponde a los colaboradores responsables de atender, orientar y gestionar las solicitudes de los clientes.
            li.d-flex
              i.fas.fa-angle-right2
              p #[b Cliente:] es la persona que presenta necesidades, expectativas y requerimientos durante la interacción con la organización.
            li.d-flex
              i.fas.fa-angle-right2
              p #[b Servicio:] comprende las actividades y soluciones que proporciona la empresa para satisfacer las necesidades identificadas.

    p La articulación de estos elementos permite fortalecer la calidad de la atención y reducir las dificultades que pueden presentarse durante las interacciones comerciales.

    .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/ico.svg', alt='')
        h3.mb-1.mx-3 Tipos de momentos de verdad

    p Los momentos de verdad pueden clasificarse según la experiencia que generan en el cliente:

    .row.mb-3(data-aos='fade-right')
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-0
            .col-7.col-lg-5.mb-2
              figure
                img(src='@/assets/curso/temas/t8/1.svg', alt='')
          h4.text-center Momentos de verdad positivos
          p.mb-0 Ocurren cuando la interacción cumple o supera las expectativas del cliente. Por ejemplo, recibir una respuesta clara y oportuna ante una solicitud de garantía.

      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-0
            .col-7.col-lg-5.mb-2
              figure
                img(src='@/assets/curso/temas/t8/2.svg', alt='')
          h4.text-center Momentos de verdad negativos
          p.mb-0 Se presentan cuando la experiencia no cumple con las expectativas o evidencia dificultades en la atención. Por ejemplo, recibir información contradictoria sobre las condiciones de entrega.
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-0
            .col-7.col-lg-5.mb-2
              figure
                img(src='@/assets/curso/temas/t8/3.svg', alt='')
          h4.text-center Momentos críticos
          p.mb-0 Corresponden a interacciones de especial importancia para la satisfacción y continuidad de la relación comercial, debido a las consecuencias que puede generar su resultado. Por ejemplo, la solución de una reclamación por un producto defectuoso.

    P Es importante reconocer que un momento crítico puede tener un resultado positivo o negativo, dependiendo de la respuesta proporcionada por la organización. La identificación y evaluación de estos momentos facilita la formulación de acciones de mejora orientadas a prevenir dificultades y fortalecer la experiencia del cliente.
    P Le invitamos a visitar el pódcast, un espacio para comprender cómo la atención al cliente influye en su satisfacción, fortalece la confianza y genera oportunidades de mejora.

    img(src='@/assets/curso/temas/t8/podcast.svg', alt='')
    .row.justify-content-center.g-0(data-aos="fade-right")
      .col-lg-12
        .tarjeta.clr--pink.p-4.rounded-0.h-100.color-primario
          .tarjeta.bg-white.p-4
            TarjetaAudio.color-acento-botones.mb-2.p-3(
            texto="Pódcast: Momentos de verdad: cada interacción cuenta"
            :audio="require_src('@/assets/curso/temas/t8/podcast.svg')"
        )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p.mb-0 













</template>

<script>
export default {
  name: 'Tema8',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
