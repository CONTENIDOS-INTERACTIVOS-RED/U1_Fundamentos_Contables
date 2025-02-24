<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p En el marco del desarrollo profesional, la contabilidad desempeña un papel crucial como herramienta estratégica en la toma de decisiones empresariales. Esta unidad tiene como propósito formar profesionales capaces de planificar, gestionar y evaluar presupuestos de manera efectiva, integrando los principios fundamentales de la contabilidad para fortalecer el desempeño organizacional.
        .py-4.px-5.bg-color-1(data-aos="fade-right")
          p.mb-0 La relevancia de esta unidad radica en que proporciona conocimientos esenciales para comprender y gestionar información financiera, una competencia que impacta de manera directa en la planificación y ejecución estratégica dentro de cualquier organización. Además, estos conceptos tienen aplicaciones prácticas que permitirán abordar retos profesionales con un enfoque técnico y fundamentado.
    
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/intro/1.png", alt="", data-aos="zoom-in")
    

    .bg-full-width.bg-fondo-1.mb-lg-5
      .px-4.p-md-5

        p La unidad está organizada en cuatro temas principales:

        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/intro/2.svg" alt="" style="width: 90px")
              h5.text-center Definición de contabilidad y su clasificación 
              p.mb-0.text-center Que introduce el marco conceptual.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/intro/3.svg" alt="" style="width: 90px")
              h5.text-center Normas de información financiera
              p.mb-0.text-center Esenciales para la estandarización y transparencia de la información.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/intro/4.svg" alt="" style="width: 90px")
              h5.text-center La cuenta, la partida doble y la ecuación contable
              p.mb-0.text-center  Que fundamentan el registro contable.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/intro/5.svg" alt="" style="width: 90px")
              h5.text-center Estados financieros: 
              p.mb-0.text-center Definición y características, como herramienta clave para la evaluación empresarial.
</template>
