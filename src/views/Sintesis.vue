<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La atención al cliente constituye un proceso fundamental para fortalecer las relaciones comerciales y garantizar la satisfacción de los consumidores. Esta síntesis integra los principales elementos del servicio al cliente, las relaciones comerciales, la experiencia del cliente y el seguimiento postventa, destacando la importancia de gestionar adecuadamente las solicitudes, identificar oportunidades de mejora y evaluar la calidad del servicio para promover la fidelización y el mejoramiento continuo.
    
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La síntesis integra el servicio, las relaciones, la experiencia del cliente y el seguimiento posventa para fortalecer la mejora continua. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
