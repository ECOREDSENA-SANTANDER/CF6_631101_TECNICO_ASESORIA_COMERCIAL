<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Relaciones con clientes

    .row.justify-content-center.align-items-center.mb-3(data-aos="fade-left")
      .col-lg-12
        img(src='@/assets/curso/temas/t2/img01.png', alt='')

    p Las relaciones con los clientes comprenden las interacciones que una organización establece y mantiene con sus consumidores a lo largo del tiempo. Su gestión busca generar confianza, satisfacción y compromiso mediante el cumplimiento de las condiciones comerciales, la atención de necesidades y la prestación de un servicio de calidad.

    .row.justify-content-center.align-items-center.mb-0(data-aos='fade-right')
        .col-lg-5.mb-3.col-10.col-sm-8
          img(src='@/assets/curso/temas/t2/img02.png', alt='')
        .col-lg-7
          .row
            .col-lg-2.mb-3.col-5.col-md-3
              img(src='@/assets/curso/temas/t2/img03.svg', alt='')
            .col-lg-10 
              p Uno de los principales objetivos de estas relaciones es la fidelización, entendida como el conjunto de estrategias que desarrolla una empresa para promover la preferencia, la permanencia y la recompra de sus productos o servicios. Para lograrlo, es necesario proporcionar experiencias satisfactorias y mantener una comunicación oportuna durante las diferentes etapas de la relación comercial. 
          p Desde la perspectiva empresarial, la construcción de relaciones duraderas requiere coordinar las actividades de proveedores, distribuidores, colaboradores y demás actores que intervienen en la cadena de valor. Esta articulación permite mejorar los procesos, cumplir los compromisos adquiridos y ofrecer soluciones acordes con las expectativas del mercado.

          p Por su parte, el asesor comercial contribuye al fortalecimiento de estas relaciones mediante la identificación de necesidades, la orientación al cliente, la solución de inquietudes y el seguimiento posterior a la venta. Su desempeño influye en la satisfacción del consumidor y en la posibilidad de establecer futuras relaciones comerciales.

    p(data-aos="fade-left") Actualmente, las organizaciones utilizan herramientas de gestión de relaciones con los clientes (CRM, por sus siglas en inglés), que permiten organizar información, registrar interacciones, realizar seguimiento a solicitudes y apoyar la toma de decisiones comerciales. Su aplicación combina recursos tecnológicos, procedimientos organizacionales y estrategias de atención orientadas al conocimiento y la satisfacción del cliente.

    .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/ico.svg', alt='')
        h3.mb-1.mx-3 Protocolo de atención en la relación con el cliente

    p El protocolo de atención es un conjunto de orientaciones y procedimientos que establece la organización para garantizar interacciones respetuosas, claras y coherentes con sus políticas de servicio. Su aplicación permite estandarizar aspectos fundamentales de la atención sin desconocer las necesidades particulares de cada cliente. 
    p(data-aos="fade-left") A continuación, se presenta una infografía sobre el protocolo de atención al cliente.

    .row.justify-content-center.align-items-center.mb-3(data-aos="fade-left")
      .col-lg-10
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/t2/infografia.svg', alt='')

          .tarjeta.bg5.p-3(x="25%" y="22%" numero="1")
            .h5.mb-2 Recepción y bienvenida
            p.mb-0 Saludar cordialmente, presentarse y mostrar disposición para atender al cliente.
          .tarjeta.bg5.p-3(x="21%" y="41%" numero="2")
            .h5.mb-2 Identificación de necesidades
            p.mb-0 Escuchar atentamente y formular preguntas para comprender los requerimientos del cliente.

          .tarjeta.bg5.p-3(x="21%" y="61%" numero="3")
            .h5.mb-2 Orientación y asesoría
            p.mb-0 Proporcionar información clara y ofrecer alternativas acordes con las necesidades identificadas.
          
          .tarjeta.bg5.p-3(x="70%" y="21%" numero="4")
            .h5.mb-2 Gestión de solicitudes
            p.mb-0 Atender inquietudes y requerimientos conforme a las políticas y procedimientos de la organización.

          .tarjeta.bg5.p-3(x="78%" y="38%" numero="5")
            .h5.mb-2 Cierre de la atención
            p.mb-0 Verificar la atención del requerimiento, agradecer al cliente e informar los canales de contacto.
          
          .tarjeta.bg5.p-3(x="78%" y="61%" numero="6")
            .h5.mb-2 Seguimiento posventa
            p.mb-0 Comprobar la satisfacción del cliente, verificar compromisos e identificar oportunidades de mejora.

    p Entre los principales beneficios de implementar protocolos de atención se encuentran la uniformidad en los procedimientos, la disminución de errores, el fortalecimiento de la imagen corporativa, la mejora de los tiempos de respuesta y el incremento de la satisfacción del cliente.

    .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/ico.svg', alt='')
        h3.mb-1.mx-3 Manual de servicio al cliente

    p El manual de servicio al cliente es un documento que reúne las políticas, orientaciones, responsabilidades y procedimientos que deben aplicar los colaboradores durante las interacciones con los consumidores. 
    p Para su elaboración, se recomienda considerar los siguientes elementos:
    p(data-aos="fade-left")  #[b Funciones y responsabilidades:] definir las actividades de cada cargo, sus responsabilidades y los canales de comunicación establecidos para atender los requerimientos de los clientes.
    p(data-aos="fade-left") #[b Etapas de atención:] establecer las orientaciones que deben aplicarse durante el contacto con el cliente, considerando los siguientes momentos:

    .row.justify-content-center.mb-2(data-aos="fade-left")
      .col-lg-8.mb-3
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Inicio y bienvenida")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Recibir al cliente de manera cordial, respetuosa y profesional, utilizando el saludo institucional establecido. Por ejemplo: «Buenos días, bienvenido a nuestra empresa. Mi nombre es Ana, ¿en qué puedo ayudarle?».

          .row(titulo="Identificación de necesidades")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Formular preguntas pertinentes, escuchar atentamente las respuestas y determinar el motivo de la solicitud. En las interacciones comerciales puede utilizarse la técnica AIDA (atención, interés, deseo y acción), cuando resulte apropiada para orientar el proceso de venta.

          .row(titulo="Orientación y solución")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Proporcionar información clara, presentar alternativas y gestionar los requerimientos de acuerdo con las políticas y procedimientos de la organización.

          .row(titulo="Cierre y despedida")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Verificar que el cliente haya recibido la orientación correspondiente, agradecer su contacto e indicar los canales disponibles para futuras solicitudes.

          .row(titulo="Seguimiento posventa")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Comprobar el cumplimiento de los compromisos, conocer el nivel de satisfacción y atender las situaciones que puedan presentarse después de la compra.

      .col-lg-4.col-9.col-md-7
        img(src='@/assets/curso/temas/t2/img04.png', alt='')

    p(data-aos="fade-left") La aplicación de estos procedimientos contribuye a mantener estándares de calidad y facilita la evaluación del desempeño del personal responsable de la atención.



































</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
