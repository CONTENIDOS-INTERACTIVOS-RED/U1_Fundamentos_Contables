<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Definición de contabilidad y su clasificación'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-8.mb-3.mb-lg-0
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La contabilidad es un sistema que registra el pasado, analiza el presente y proyecta el futuro de una organización. Se le conoce como el "lenguaje de los negocios" porque permite la toma de decisiones basada en información confiable y oportuna. Desde 2019, ha evolucionado para responder a los desafíos del entorno globalizado, exigiendo mayor transparencia y adaptación a normativas internacionales (Vargas Moreno, 2020).
        p(data-aos="fade-left") No es un concepto único, sino un conjunto de sistemas interrelacionados que incluyen la contabilidad financiera, administrativa, fiscal y de costos. Cada una cumple una función específica en el ámbito empresarial, como facilitar la rendición de cuentas a terceros o apoyar la gestión interna (Muñoz Orcera, Márquez Vigil & Lazcano Benito, 2020). Dominar sus fundamentos es clave para interpretar el entorno financiero y tomar decisiones que promuevan la sostenibilidad y competitividad de una empresa.

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Concepto general de contabilidad
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p Más allá del registro de ingresos y egresos, la contabilidad es el sistema nervioso de cualquier organización. A través de ella, se recolecta, organiza y analiza información financiera para guiar la toma de decisiones con base en normas y principios éticos que garantizan transparencia y confiabilidad (Vargas Moreno, 2020).
        .py-4.px-5.bg-color-2.mb-3(data-aos="fade-right")
          p.mb-0 Para entender su importancia, imagine la gestión de una tienda de abarrotes. Registrar ventas en un cuaderno no es suficiente; se necesita clasificar ingresos, identificar gastos y calcular beneficios. La contabilidad organiza esta información de manera clara y precisa.
        p Además, abarca el análisis financiero. Si, por ejemplo, los gastos en publicidad son altos pero los ingresos no aumentan proporcionalmente, se puede ajustar la estrategia. También permite preparar estados financieros esenciales para la confianza de inversionistas, como el balance general que detalla activos, pasivos y patrimonio (Muñoz Orcera, Márquez Vigil & Lazcano Benito, 2020).
    
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/3.svg", alt="", data-aos="zoom-in")
    
    .bg-color-3.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/4.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Otro aspecto clave es el cumplimiento legal. En Colombia, las empresas deben presentar declaraciones fiscales basadas en registros contables, lo que demuestra cómo la contabilidad impacta tanto la gestión interna como la relación con el entorno legal y social.
    
    p.mb-5 Por lo tanto, dominar los fundamentos contables permite gestionar recursos, identificar riesgos y aprovechar oportunidades para garantizar el éxito organizacional.

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Clasificación de la contabilidad
    
    p.mb-4 La contabilidad se estructura en diversas áreas que satisfacen demandas específicas dentro de una organización. Cada clasificación permite abordar situaciones con el enfoque adecuado, optimizando la toma de decisiones.

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/5.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Contabilidad financiera
              p Genera estados financieros destinados a terceros, como accionistas, inversionistas o entidades regulatorias. Sigue normativas como las NIIF. Ejemplo: si una empresa solicita un crédito, el banco requiere su balance general y estado de resultados para evaluar su solvencia (Vargas Moreno, 2020).
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/6.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Contabilidad administrativa
              p Apoya la gestión interna proporcionando datos estratégicos. Ejemplo: evaluar el desempeño de una línea de productos o elaborar presupuestos mensuales para proyectar el impacto de una inversión en tecnología (Muñoz Orcera, Márquez Vigil & Lazcano Benito, 2020).
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/7.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Contabilidad fiscal
              p Garantiza el cumplimiento de obligaciones tributarias. Ejemplo: en Colombia, calcular y declarar el IVA según ingresos y egresos. Si una empresa vende $10.000.000 en un mes y el IVA es del 19 %, debe registrar $1.900.000 como impuesto a pagar ante la DIAN (Sánchez Morales, 2024).
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/8.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Contabilidad de costos
              p Examina los costos de producción, distribución y comercialización para mejorar la rentabilidad. Ejemplo: en una panadería, calcular el costo unitario del pan considerando insumos, tiempo de producción y mano de obra, lo que permite negociar con proveedores y optimizar recursos.
    
    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/9.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Dominar estas clasificaciones permite comprender el funcionamiento de una empresa en distintos niveles y tomar decisiones estratégicas que impulsen su crecimiento y sostenibilidad.
    
    .titulo-figura.mb-4
      h5 Tabla 1.
      span Clasificación de la contabilidad

    .tabla-a.color-acento-botones.mb-5 
      table
        thead
          tr
            th.bg-color-5 Contabilidad Financiera
            th.bg-color-5 Contabilidad Administrativa
            th.bg-color-5 Contabilidad Fiscal
            th.bg-color-5 Contabilidad de Costos
        tbody
          tr
            td Generar Estados Financieros
            td Apoyo a la Gestión Interna
            td Cumplimiento de Obligaciones Tributarias
            td Análisis de Costos de Producción
          tr
            td Destinados a Terceros
            td Elaboración de Presupuestos
            td Normativa Establecida
            td Análisis de Costos de Distribución
          tr
            td Cumplimiento de Normativas
            td Evaluación del Desempeño
            td Declaración del IVA
            td Optimización de Recursos
    
    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Importancia de la clasificación contable en el entorno empresarial
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .p-4.bg-color-2.mb-3(data-aos="fade-right")
          p.mb-0 Descubrir la clasificación contable es esencial para el buen funcionamiento de cualquier organización. Permite analizar la información financiera desde diferentes perspectivas, lo que facilita la toma de decisiones y asegurar el cumplimiento de normativas legales. Sin la aplicación de este conocimiento, la administración de una empresa sería limitada, lo que reduciría las oportunidades de crecimiento y competitividad.
        h2(data-aos="fade-left") Importancia práctica
        p.mb-5 La clasificación contable permite a las empresas estructurar su información financiera de manera organizada y útil. A continuación, se presentan las principales áreas contables y su relevancia en la gestión empresarial:
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/10.png", alt="", data-aos="zoom-in")
    
    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Contabilidad financiera" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Contabilidad financiera
            p Permite preparar estados financieros conforme a estándares internacionales. Ejemplo: si una empresa busca expandirse a mercados globales, necesita reportes financieros confiables.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/11.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Contabilidad fiscal" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Contabilidad fiscal
            p Asegura el cumplimiento de obligaciones tributarias y evita sanciones. Ejemplo: garantiza la correcta declaración  del IVA en Colombia.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/12.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Contabilidad administrativa" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Contabilidad administrativa
            p Brinda herramientas para analizar costos de producción o servicios. Ejemplo: en una empresa de manufactura, ayuda a identificar líneas con altos costos sin los ingresos esperados (Vargas Moreno, 2020).
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/13.png', alt='', style="width: 100%;")
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Contabilidad de costos" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Contabilidad de costos
            p Determina precios adecuados de productos o servicios. Ejemplo: permite calcular el precio de venta basado en costos operativos y margen de ganancia.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/14.png', alt='', style="width: 100%;")
    

    .bg-full-width.bg-fondo-1.mb-lg-5
      .px-4.p-md-5

        h2(data-aos="fade-left") Impacto en el entorno empresarial
        p.mb-5 La clasificación contable no solo optimiza la gestión financiera, sino que también influye en la sostenibilidad y competitividad de una empresa. A continuación, se presentan algunos de sus efectos clave:

        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/15.svg" alt="" style="width: 90px")
              h5.text-center Optimización de costos y recursos
              p.mb-0.text-center La contabilidad administrativa ayuda a detectar ineficiencias y tomar decisiones informadas.
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/16.svg" alt="" style="width: 90px")
              h5.text-center Sostenibilidad financiera
              p.mb-0.text-center La contabilidad de costos permite establecer precios adecuados, asegurando rentabilidad sin comprometer la calidad.
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/17.svg" alt="" style="width: 90px")
              h5.text-center Unificación contable en empresas multinacionales 
              p.mb-0.text-center La contabilidad financiera permite consolidar operaciones bajo un mismo marco normativo (Muñoz Orcera, Márquez Vigil & Lazcano Benito, 2020).
          
    .bg-full-width.bg-h85.mb-lg-5
      .px-4.p-md-5     
        .row.justify-content-center.align-items-center
          .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0
            h5 Ejemplo práctico
            p Si administra un restaurante, la contabilidad de costos permite analizar el gasto en insumos de cada platillo. Si descubre que uno tiene un costo elevado y baja demanda, podría sustituirlo por una opción más rentable, optimizando recursos y aumentando los beneficios.
            p.mb-0 Dominar la clasificación contable permite gestionar cada aspecto de una organización de manera integral, contribuyendo a su éxito y sostenibilidad.

          .col-lg-5(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema1/18.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
            
     


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://libros.unlp.edu.ar/index.php/unlp/catalog/book/237" target="_blank" rel="noopener noreferrer") Fernández Lorenzo, L., & Larramendy, E. (2013). Contabilidad: aprendamos practicando. Universidad Nacional de La Plata. 
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.cesuma.mx/blog/conceptos-basicos-y-objetivos-de-la-contabilidad.html" target="_blank" rel="noopener noreferrer") Cortez, D. Conceptos básicos y objetivos de la contabilidad. Universidad Cesuma.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=mhqQA0kkglU" target="_blank" rel="noopener noreferrer") Gómez, J. (2019). La contabilidad, definición, objetivos e importancia [Video]. YouTube. Recuperado de 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
