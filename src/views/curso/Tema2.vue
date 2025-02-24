<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Normas de Información Financiera'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-5 
    .bg-color-4.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-2
          figure
            img(src='@/assets/curso/tema2/1.png', alt='')
        .col-lg.order-1.mb-3.mb-lg-0
          .p-4
            p.mb-0(data-aos="fade-up") Las Normas de Información Financiera (NIF) establecen principios y lineamientos que estandarizan la elaboración y presentación de los estados financieros. Su aplicación garantiza que la información financiera sea clara, transparente y comparable, permitiendo a cualquier interesado tomar decisiones informadas con base en datos consistentes y verificables.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.mb-3.mb-lg-0.order-2
        p Desde 2019, su relevancia ha aumentado debido a la globalización de los mercados y la necesidad de cumplir con requisitos internacionales, como las Normas Internacionales de Información Financiera (NIIF). Por ejemplo, en empresas multinacionales, las NIF aseguran que los reportes financieros sean comprensibles para inversionistas tanto locales como extranjeros, fortaleciendo la confianza y consolidando la relación con los grupos de interés (González, 2019).
        p Además, su implementación es clave para el cumplimiento de normativas legales y tributarias, evitando errores en los registros que podrían derivar en problemas fiscales. Por ejemplo, si una empresa emplea un método de valoración de inventarios no alineado con las NIF, sus cifras financieras podrían ser rechazadas en una auditoría fiscal (Martínez, 2020).
    
      .col-lg-5.order-1
        figure
          img(src="@/assets/curso/tema2/2.png", alt="", data-aos="zoom-in")

    .bg-full-width.bg-color-6.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/3.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 En el ámbito empresarial, el control de las NIF permite interpretar los estados financieros con mayor precisión e implementar estrategias que optimicen el desempeño financiero de la organización. Comprender su estructura es un paso fundamental para administrar recursos de manera alineada con los estándares internacionales.


    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Objetivos y características fundamentales

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.mb-3.mb-lg-0
        p Las Normas de Información Financiera buscan estandarizar la preparación de los estados financieros para garantizar su utilidad y confiabilidad en la toma de decisiones. Estas normas aseguran que los datos financieros sean comprensibles, comparables, relevantes y verificables, lo que refuerza la confianza de los usuarios de la información financiera.
        h2(data-aos="fade-left") Objetivos de las Normas de Información Financiera
        p A continuación, se presentan los principales objetivos de las NIF y su impacto en la gestión empresarial:
      .col-lg-5
        figure
          img(src="@/assets/curso/tema2/4.svg", alt="", data-aos="zoom-in")

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/5.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Proveer información útil para la toma de decisiones")
            p Facilitan la toma de decisiones de inversionistas, acreedores y administradores. Ejemplo: una empresa que planea expandirse necesita analizar su flujo de efectivo para evaluar si cuenta con los recursos necesarios.
    
          .div(titulo="Promover la comparabilidad")
            p Permiten evaluar estados financieros de diferentes empresas bajo criterios uniformes. Ejemplo: si se analizan dos empresas similares para inversión, las NIF garantizan que sus informes sean comparables (González, 2019).
    
          .div(titulo="Garantizar la transparencia y la confianza")
            p Aseguran que la información presentada sea clara y verificable. Ejemplo: una auditoría basada en NIF tiene mayor credibilidad y aceptación en el mercado.
    
    .bg-full-width.bg-fondo-1.mb-lg-5
      .px-4.p-md-5

        h2(data-aos="fade-left") Características fundamentales de la información financiera
        p.mb-5 Para cumplir con su propósito, la información financiera debe poseer ciertas características esenciales:

        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/6.svg" alt="" style="width: 90px")
              h5.text-center Comprensibilidad
              p.mb-0.text-center La información debe ser clara y sencilla para que cualquier usuario con conocimientos básicos de contabilidad pueda entenderla.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/6.svg" alt="" style="width: 90px")
              h5.text-center Relevancia
              p.mb-0.text-center Debe contribuir a la toma de decisiones. Ejemplo: un estado de resultados mensual permite identificar pérdidas o ganancias inesperadas.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/6.svg" alt="" style="width: 90px")
              h5.text-center Fiabilidad
              p.mb-0.text-center  Los datos deben ser verificables y libres de errores significativos. Ejemplo: el registro del valor de activos debe basarse en cifras documentadas.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/6.svg" alt="" style="width: 90px")
              h5.text-center Comparabilidad 
              p.mb-0.text-center Los informes financieros deben permitir la comparación entre períodos o con otras empresas para evaluar el desempeño.
    
    p.mb-5 El dominio de estos principios es clave para interpretar adecuadamente los estados financieros y gestionar eficazmente los recursos de cualquier organización.

    h2.mb-0(data-aos="fade-left") Ejemplo práctico
    
    .bg-full-width.bg-h85.mb-lg-5
      .px-4.p-md-5     
        .row.justify-content-center.align-items-center
          .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0
            p Imagine que administra una tienda de ropa y decide analizar su rentabilidad mensual. Gracias a la aplicación de las NIF, puede estructurar sus ingresos y egresos de manera uniforme y clara. Esto le permitirá identificar qué productos son más rentables y tomar decisiones para ajustar tus estrategias de venta.
            p.mb-0 Dominar los objetivos y características fundamentales de las NIF es esencial para gestionar con éxito cualquier organización, ya que te proporciona una base sólida para interpretar y presentar información financiera.

          .col-lg-5(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema2/7.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    

    .titulo-figura.mb-4
      h5 Figura 1. 
      span Objetivos y características de la NIF

    .row.mb-5.justify-content-center.p-4.bg-color-7.tarjeta
      .col-lg-10
        figure
          img(src="@/assets/curso/tema2/8.svg", data-aos="zoom-in")
      

    .bg-full-width.bg-color-8.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Importancia de las normas en el ámbito empresarial.
            p.mb-4(data-aos="fade-right") Los invitamos a leer el documento <b>Importancia de las normas en el ámbito empresarial</b>, donde se analiza el papel fundamental de las Normas de Información Financiera (NIF) en la transparencia, comparabilidad y gestión contable de las organizaciones. A través de ejemplos prácticos, se explican sus beneficios en la toma de decisiones estratégicas y su impacto en la estabilidad financiera y competitividad empresarial.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Importancia de las normas en el ámbito empresarial.
    
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/9.png', alt='')

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://infolibros.org/libros-pdf-gratis/negocios/contabilidad/" target="_blank" rel="noopener noreferrer") García García, J. (s.f.). Fundamentos de la Contabilidad.
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://infolibros.org/libros-pdf-gratis/negocios/contabilidad/https://www.imcp.org.mx_blank" rel="noopener noreferrer") Instituto Mexicano de Contadores Públicos (IMCP). (s.f.). Normas de Información Financiera (NIF) en México.  

            

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=bGy6CxG19Ak" target="_blank" rel="noopener noreferrer") Gómez, J. (2021). Curso de Normas de Información Financiera: NIF A1 Introducción [Video]. YouTube. Recuperado de 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
