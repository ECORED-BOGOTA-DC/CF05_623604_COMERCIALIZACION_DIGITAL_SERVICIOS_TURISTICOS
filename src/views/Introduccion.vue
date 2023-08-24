<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.mb-5
      .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/img01.jpg' alt="Imagen decorativa")
      .col-lg-6(data-aos="fade-left")
        p.mb-0 La proyección de ventas es un cálculo estimado que se da aplicando las técnicas estadísticas, que permiten conocer la previsión de ventas de una empresa en un período de tiempo futuro; algunas de las técnicas de previsión son: el análisis de series temporales, los modelos de regresión, los modelos econométricos, los indicadores económicos y la investigación operativa. Algunas técnicas de prospectiva son el Método Delphi, el Método de los impactos cruzados y el Método de los escenarios. La evolución del mercado tiene como base la preponderancia digital por lo que se deben implementar estrategias que lleven a una marca o negocio a visibilizarse en el mercado y que el mercadeo o #[em marketing] digital comprenda todas las estrategias de promoción de una marca o negocio focalizadas en Internet, por tanto, durante el desarrollo de este componente formativo se hará un recorrido por los elementos, términos y expresiones propios de la cultura digital, que se hace indispensable para estructurar el plan de mercadeo digital, sean bienvenidos a este proceso de formación.

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
