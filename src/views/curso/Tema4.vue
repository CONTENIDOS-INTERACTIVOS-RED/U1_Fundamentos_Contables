<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4. Partida doble y ecuación contable'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-2
        p El principio de partida doble y la ecuación contable son los fundamentos básicos de la contabilidad, esenciales para registrar y analizar las operaciones financieras de una organización. Este principio establece que toda transacción tiene un efecto dual: un débito y un crédito de igual valor que garantizan el equilibrio en los estados financieros. La ecuación contable, por su parte, refleja la relación entre los activos, pasivos y patrimonio, expresada como:
            
      .col-lg-5.mb-3.mb-lg-0.order-1
        figure
          img(src="@/assets/curso/tema4/1.png", alt="", data-aos="zoom-in")
    
    .titulo-figura.mb-4
      h5 Figura 3. 
      span Ecuación contable 

    .row.mb-5.justify-content-center.p-4.bg-color-7.tarjeta
      .col-lg-8
        figure
          img(src="@/assets/curso/tema4/2.svg", data-aos="zoom-in")
    
    .bg-full-width.bg-color-6.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema4/3.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 El principio de partida doble garantiza que los recursos de una empresa estén financiados ya sea por deudas o por el capital propio de los propietarios (Pérez, 2022). Su aplicación permite mantener registros precisos y verificables de las transacciones, reduciendo errores y mejorando la transparencia financiera.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p Por ejemplo, si una empresa adquiere equipo de oficina financiado por un crédito, la ecuación contable reflejará un aumento tanto en los activos (equipo) como en los pasivos (deuda). Este registro mantiene el equilibrio contable y refuerza la confianza en la información financiera presentada (López, 2021).
        .py-4.px-5.bg-color-1(data-aos="fade-right")
          p.mb-0 Además, la partida doble facilita la elaboración de estados financieros estandarizados, como el balance general y el estado de resultados, lo que permite evaluar la rentabilidad y estabilidad financiera de la organización. Comprender su relación con la ecuación contable es clave para registrar operaciones correctamente, analizar resultados financieros y tomar decisiones fundamentadas.
    
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/4.png", alt="", data-aos="zoom-in")
    
    #t_4_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.1] Estructura y funcionamiento de las cuentas contables
    
    p.mb-4 La partida doble es el principio fundamental que rige la contabilidad moderna, asegurando que cada transacción impacte al menos dos cuentas de manera equilibrada. Su aplicación garantiza que los estados financieros reflejen con precisión la realidad económica de una organización.

    .bg-full-width.bg-color-info
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema4/5.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="2%" y="53.5%" numero="+")
                h5 Débito y Crédito
                p Cada transacción afecta dos cuentas: una se debita y otra se acredita por el mismo valor.
    
              .bg-color-white.box-shadow.p-3(x="40%" y="5.5%" numero="+")
                h5 Equilibrio de la ecuación contable
                p La ecuación contable (Activo = Pasivo + Patrimonio) debe mantenerse equilibrada, ya que los débitos y créditos siempre tienen el mismo valor.
    
              .bg-color-white.box-shadow.p-3(x="83%" y="53.5%" numero="+")
                h5 Dualidad económica
                p Toda operación financiera tiene dos efectos: uno en los recursos (activos) y otro en su financiación (pasivos o patrimonio). Ejemplo: al adquirir un vehículo financiado, aumentan tanto los activos como los pasivos.
    
    .bg-full-width.bg-color-4.mb-lg-5.border-top.color-terciario
      .px-4.p-md-5     
        .row.justify-content-center.align-items-center
          .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0
            h5 Ejemplo práctico de la partida doble 
            p.mb-0 Para entender su aplicación, se presenta un caso práctico de pago de nómina en una empresa de servicios.
            p Una empresa de servicios decide pagar la nómina de sus empleados por $20.000. El registro según los principios de la partida doble sería:
            ul.lista-ul--color.p-4
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-9
                p.mb-0 <b>Débito</b>. Gastos de personal (gasto) por $20.000.  
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-9
                p.mb-0 <b>Crédito.</b>  Caja (activo) por $20.000
            p.mb-0 Este registro refleja el impacto de la transacción tanto en los gastos como en la disminución del efectivo, manteniendo el equilibrio contable.


          .col-lg-5(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema4/6.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
            
    h2(data-aos="fade-left") Importancia de los principios de la partida doble
    p.mb-5 Aplicar correctamente los principios de la partida doble permite:

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        div.tarjeta.bg-color-11.p-4.text-center.text-white
          p.mb-0 <b>Detectar errores</b> en los registros contables.
      .col-lg-4.mb-3.mb-lg-0
        div.tarjeta.bg-color-12.p-4.text-center
          p.mb-0 <b>Garantizar la precisión</b> de los estados financieros.
      .col-lg-4.mb-3.mb-lg-0
        div.tarjeta.bg-color-5.p-4.text-center
          p.mb-0 <b>Facilitar la preparación</b> de reportes financieros claros y  estandarizados.
              

    #t_4_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.2] Relación entre la ecuación contable y los registros financieros
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema4/8.png", data-aos="zoom-in")
      .col-lg-8.mb-3.mb-lg-0.order-1
        .bg-color-8.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema4/7.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La ecuación contable, representada por la fórmula Activo = Pasivo + Patrimonio, es el principio fundamental que sustenta todos los registros financieros. Este equilibrio garantiza que cada transacción tenga un impacto proporcional en las cuentas, manteniendo la integridad y consistencia de los estados financieros. En otras palabras, cada registro contable debe ajustarse a este principio para reflejar con precisión la situación económica de la organización (López, 2021).
        h2(data-aos="fade-left") Relación práctica entre la ecuación y los registros
        p(data-aos="fade-left") Cada transacción, ya sea un ingreso, un gasto, una compra o un pago, afecta al menos dos cuentas contables. Por ejemplo, si se adquiere maquinaria financiada parcialmente con efectivo y parcialmente con un préstamo, los registros contables respetarán la ecuación contable:
    
    
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .tarjeta.bg-color-2.h-100.text-center
          .bg-color-11.px-4.px-lg-5.py-3.rounded-top.text-white
            h4.mb-0.text-center Activo (maquinaria)
          p.mb-0.p-4 Aumenta.

      .col-lg-4.mb-3.mb-lg-0
        .tarjeta.bg-color-13.h-100.text-center
          .bg-color-12.px-4.px-lg-5.py-3.rounded-top
            h4.mb-0.text-center Activo (caja)
          p.mb-0.p-4 Disminuye.

      .col-lg-4.mb-3.mb-lg-0
        .tarjeta.bg-color-14.h-100.text-center
          .bg-color-5.px-4.px-lg-5.py-3.rounded-top
            h4.mb-0.text-center Pasivo (préstamo)
          p.mb-0.p-4 Aumenta.
    
    p.mb-4 Este ejemplo demuestra cómo la ecuación contable organiza la información para que los estados financieros sean comprensibles y equilibrados (Pérez, 2022).

    .bg-full-width.bg-h85.mb-lg-5
      .px-4.p-md-5     
        .row.justify-content-center.align-items-center
          .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0.order-2
            h5 Ejemplo sencillo 
            p.mb-0 PSi una empresa vende productos por $5.000 y recibe el pago en efectivo, los registros financieros serán:
            ul.lista-ul--color.p-4
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-9
                p.mb-0 <b>Débito</b>. Caja (Activo) por $5.000.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-9
                p.mb-0 <b>Crédito.</b>  Ventas (Ingreso) por $5.000.
            p.mb-0 La ecuación contable permanece intacta, ya que el incremento en los activos se compensa con el aumento en el patrimonio debido a los ingresos generados.

          .col-lg-5(data-aos="zoom-in").order-1
            img.img-fluid(src='@/assets/curso/tema4/9.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    h2(data-aos="fade-left") Importancia de la relación para la administración empresarial
    p.mb-5 Esta conexión entre la ecuación contable y los registros financieros es clave para garantizar que las decisiones empresariales se basen en datos confiables. Por ejemplo, si la empresa planea invertir en una nueva línea de productos, la ecuación contable permite analizar cómo la inversión afectará los recursos disponibles, las obligaciones y el capital.


    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema4/10.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Transparencia
                p.mb-0 Los registros equilibrados generan confianza entre inversionistas y reguladores.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema4/11.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Precisión
                p.mb-0 Facilita la detección de errores contables.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema4/12.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Cumplimiento legal
                p.mb-0 Asegura que los estados financieros cumplan con las normativas contables locales e internacionales. 

    p.mb-4 Comprender esta relación permite registrar transacciones correctamente y generar estados financieros confiables que respalden la toma de decisiones estratégicas.

    .bg-full-width.bg-color-8.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0.order-2
            h2.mb-4(data-aos="flip-up") Ejemplos prácticos de partida doble y su aplicación
            p.mb-4(data-aos="fade-right") Los invitamos a leer el documento <b>Ejemplos prácticos de partida doble y su aplicación</b>, donde se explican de manera detallada transacciones contables clave que reflejan la correcta aplicación de este principio fundamental en contabilidad. A través de ejemplos concretos, como la compra de mercadería, ventas, pago de servicios y préstamos bancarios, se facilita la comprensión del registro contable y su impacto en la situación financiera de una empresa.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Ejemplos prácticos de partida doble y su aplicación
    
          .col-lg-4.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/13.png', alt='')
    
    h2(data-aos="fade-left") Importancia de la aplicación de la partida doble
    p.mb-5 La aplicación correcta de la partida doble garantiza que los estados financieros sean confiables y permitan a los usuarios analizar la situación económica de la empresa con precisión. Además, facilita el cumplimiento de las normativas legales y mejora la transparencia en la información financiera.

    .bg-full-width.bg-color-8.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Ejemplos prácticos de partida doble y su aplicación
            p.mb-4(data-aos="fade-right") Los invitamos a leer el documento <b>Ejemplos prácticos de partida doble y su aplicación</b>, donde se explican de manera detallada transacciones contables clave que reflejan la correcta aplicación de este principio fundamental en contabilidad. A través de ejemplos concretos, como la compra de mercadería, ventas, pago de servicios y préstamos bancarios, se facilita la comprensión del registro contable y su impacto en la situación financiera de una empresa.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Ejemplos prácticos de partida doble y su aplicación
    
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/14.png', alt='')

    
    

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://infolibros.org/libros-pdf-gratis/negocios/contabilidad/" target="_blank" rel="noopener noreferrer") InfoLibros. (s.f.). Libros de Contabilidad ¡Gratis! [PDF]. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.contabilidadyfinanzas.com/partida-doble-y-ecuacion-contable" target="_blank" rel="noopener noreferrer") García, P. (2020). Partida Doble y Ecuación Contable: Conceptos básicos [Blog]. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=42hDlH4PQC4" target="_blank" rel="noopener noreferrer") Clase Contable. (2019). Partida Doble y Ecuación Contable [Video]. YouTube. Recuperado de 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema4',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de las siguientes opciones describe mejor la contabilidad financiera? ',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Se enfoca en el control de inventarios y costos de producción',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Registra y comunica la situación financiera de una entidad a usuarios externos',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'Permite la toma de decisiones internas sobre producción',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Se encarga del análisis fiscal para determinar los impuestos a pagar',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Qué representan las Normas de Información Financiera (NIF)? ',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Reglas fiscales para calcular impuestos',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Principios que regulan la elaboración y presentación de los estados financieros',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Normas para establecer precios de productos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Procedimientos de auditoría',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto: 'Los estados financieros se caracterizan por: ',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Ser útiles para la toma de decisiones y reflejar la situación económica de la entidad',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Estar diseñados exclusivamente para las auditorías',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Mostrar solo las ganancias y pérdidas',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ser emitidos únicamente a final de año',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: 'En la partida doble, cada transacción contable: ',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Afecta al menos dos cuentas, manteniendo el equilibrio de la ecuación contable',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Solo registra ingresos y egresos',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Se realiza en el libro mayor únicamente',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'No es necesario que tenga un efecto equilibrado',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto: 'Una cuenta en contabilidad se define como: ',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Un documento para registrar transacciones bancarias',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Un registro donde se anotan los aumentos o disminuciones de elementos patrimoniales',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Un informe mensual de ingresos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Un comprobante de pago',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
