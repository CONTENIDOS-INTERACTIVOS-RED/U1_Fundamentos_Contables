<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. La cuenta'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    
    p.mb-4 La cuenta es el elemento esencial en el registro contable y la base para organizar las operaciones financieras de una empresa. Su estructura permite clasificar y resumir información sobre recursos, obligaciones y resultados económicos, facilitando la comprensión y el análisis financiero. Gracias a las cuentas, es posible identificar cómo las transacciones afectan los activos, pasivos, ingresos, gastos y patrimonio de una organización.

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")
      .col-lg-8.mb-3.mb-lg-0.order-1
        .bg-color-8.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El principio de partida doble, fundamento de las cuentas, asegura que cada transacción se registre con un impacto igual y opuesto en dos o más cuentas. Por ejemplo, si una empresa adquiere un vehículo mediante financiamiento, se registra un aumento en los activos y un incremento equivalente en los pasivos. Este principio mantiene el equilibrio en los estados financieros y garantiza información precisa y verificable (Fernández, 2020).
        p(data-aos="fade-left") Comprender el funcionamiento de las cuentas es clave para la administración empresarial. Por ejemplo, al evaluar la rentabilidad de una línea de productos, los registros contables permiten identificar ingresos y costos asociados, facilitando la toma de decisiones y la optimización de recursos (López, 2021).
    

    .bg-full-width.bg-h85.mb-lg-5
      .px-4.p-md-5     
        .row.justify-content-center.align-items-center
          .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0.order-2
            p Además, las cuentas no solo registran transacciones, sino que también garantizan el cumplimiento normativo. En Colombia, las empresas deben estructurar sus registros contables conforme al <b>Plan Único de Cuentas (PUC)</b>, asegurando transparencia y cumplimiento de obligaciones legales (García, 2021).
            p.mb-0 Dominar el uso de las cuentas no solo es una capacidad técnica, sino una herramienta estratégica que permite analizar información financiera, detectar tendencias y tomar decisiones alineadas con los objetivos empresariales.

          .col-lg-5(data-aos="zoom-in").order-1
            img.img-fluid(src='@/assets/curso/tema3/3.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
            

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Estructura y funcionamiento de las cuentas contables

    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-md-3

        p.mb-5 Las cuentas contables son la base del sistema de registro financiero, organizando y resumiendo las operaciones económicas de una empresa. Cada cuenta refleja un aspecto específico de los recursos, obligaciones o resultados financieros, facilitando el análisis y la toma de decisiones.
    
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/4.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Nombre de la cuenta
                p.mb-0 Identifica el tipo de transacción o elemento financiero registrado, como “Caja”, “Ventas” o “Gastos de publicidad”.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/5.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Código contable
                p.mb-0 Número o código alfanumérico asignado según el plan contable, permitiendo clasificar transacciones de manera uniforme.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/6.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Saldo
                p.mb-0 Refleja el valor acumulado de la cuenta, ya sea deudor o acreedor según el tipo de cuenta y las transacciones registradas (Fernández, 2020).
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 El funcionamiento de una cuenta contable se basa en el principio de la partida doble, donde cada transacción afecta al menos dos cuentas: una se debita y otra se acredita.
    
    .titulo-figura.mb-4
      h5 Tabla 2.
      span Ejemplos de Transacciones Contables con sus Cuentas Debitadas y Acreditadas

    .tabla-a.color-acento-botones.mb-5 
      table
        thead
          tr
            th.bg-color-5 Ejemplo de transacción
            th.bg-color-5 Cuenta debitada
            th.bg-color-5 Cuenta acreditada
        tbody
          tr
            td Compra de mercadería al contado
            td Inventarios (Activo, aumenta)
            td Caja (Activo, disminuye)
          tr
            td Pago de un cliente por $5.000
            td Caja (Activo, aumenta)
            td Ingresos por servicios (Ingresos, aumenta)
    

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-2
        p Este método garantiza que el sistema contable se mantenga equilibrado y refleje con precisión la situación financiera de la empresa (Rodríguez, 2022). Dominar el manejo de cuentas contables permite llevar un registro preciso, facilitar la toma de decisiones estratégicas y cumplir con los requerimientos legales y fiscales.
        h2(data-aos="fade-left") Ejemplo práctico
        .py-4.px-5.bg-color-3.mb-3(data-aos="fade-right")
          p Imagine que gestiona una empresa de servicios y recibe el pago de un cliente por $5.000. En el registro contable:
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-9
              p.mb-0 <b>Debita.</b> La cuenta “Caja” por $5.000, ya que el efectivo en su empresa aumenta.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-9
              p.mb-0 <b>Acredita.</b> La cuenta “Ingresos por servicios” por $5.000, reflejando el incremento en sus ingresos.
            
      .col-lg-5.mb-3.mb-lg-0.order-1
        figure
          img(src="@/assets/curso/tema3/7.png", alt="", data-aos="zoom-in")


    .titulo-figura.mb-4
      h5 Tabla 3.
      span Relación de cuentas y movimientos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.bg-color-5 Cuenta
                th.bg-color-5 Débito
                th.bg-color-5 Crédito
            tbody
              tr
                td Caja
                td $5.000
                td -
              tr
                td Ingresos por servicios
                td -
                td $5.000
      
        .py-4.px-5.bg-color-6.mb-3(data-aos="fade-right")
          p.mb-0 Llevar un control preciso de las entradas y salidas de recursos permite que los estados financieros reflejen con fidelidad la realidad económica de la organización. En el marco de las Normas de Información Financiera (NIF), la cuenta “Caja” se denomina “Efectivo y equivalentes de efectivo”, abarcando tanto el dinero disponible como inversiones a corto plazo altamente líquidas y sujetas a un riesgo insignificante de cambio en su valor.
        
        p A pesar de este cambio en la nomenclatura, la cuenta “Caja” sigue utilizándose para registrar el dinero en efectivo y los fondos depositados en cuentas bancarias a la vista. Para efectos contables internos, puede seguir empleándose, mientras que en los estados financieros se agrupa bajo “Efectivo y equivalentes de efectivo” para cumplir con los estándares de presentación y ofrecer mayor claridad a los usuarios de la información financiera.
      
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/8.png", alt="", data-aos="zoom-in")
    
    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/9.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Dominar la estructura y el funcionamiento de las cuentas contables es clave para garantizar la integridad de los registros. Al comprender cómo se relacionan entre sí, se facilita la identificación de errores, el análisis de tendencias y la toma de decisiones informadas que favorezcan el crecimiento empresarial.
    

    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Relación con los principios de partida doble

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.mb-3.mb-lg-0
        p El principio de partida doble es un pilar fundamental de la contabilidad y se encuentra directamente relacionado con la operatividad de las cuentas contables. Este principio establece que toda transacción financiera genera un impacto dual: por cada débito en una cuenta, hay un crédito equivalente en otra. Este equilibrio asegura que el sistema contable refleje de manera precisa y verificable todas las operaciones de una organización.
        h2(data-aos="fade-left") Esencia del principio de partida doble
        p Este principio garantiza que los activos de una empresa sean financiados por pasivos o patrimonio, manteniendo la integridad de los estados financieros y asegurando la confiabilidad de los datos registrados.
      .col-lg-5
        figure
          img(src="@/assets/curso/tema3/10.png", alt="", data-aos="zoom-in")


    .titulo-figura.mb-4
      h5 Tabla 4.
      span Aplicación del principio de partida doble en la compra de activos

 
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th.bg-color-5 Situación
            th.bg-color-5 Registro contable
            th.bg-color-5 Impacto
        tbody
          tr
            td Compra de equipo de oficina por $10.000 al contado
            td 
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-9
                  p.mb-0 <b>Débito</b>. Equipo de oficina (activo) por $10.000. 
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-9
                  p.mb-0 <b>Crédito.</b>  Caja (activo) por $10.000.
            
            td La transacción afecta a dos cuentas opuestas, pero mantiene el equilibrio financiero.
          tr
            td Compra de inventario financiada con crédito bancario por $50.000
            td 
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-9
                  p.mb-0 <b>Débito</b>. Inventario por $50.000.  
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-9
                  p.mb-0 <b>Crédito.</b>  Obligaciones bancarias por $50.000.
            
            td Refleja el aumento en activos y la adquisición de una obligación financiera, permitiendo evaluar los efectos en la estructura financiera.
    
    h2(data-aos="fade-left") Importancia de la estructura y el funcionamiento
    p.mb-5 Dominar la estructura y el funcionamiento de las cuentas contables es esencial para garantizar la integridad de los registros financieros. Al comprender cómo se relacionan las cuentas entre sí, puede identificar errores, analizar tendencias y tomar decisiones informadas que favorezcan el crecimiento empresarial.

    .bg-full-width.bg-color-8.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0.order-2
            h2.mb-4(data-aos="flip-up") Ejemplos sencillos de partida doble.
            p.mb-4(data-aos="fade-right") Los invitamos a leer el documento <b>Ejemplos sencillos de partida doble</b>, donde se presentan transacciones contables básicas explicadas de manera clara y estructurada. A través de ejemplos como la compra de mobiliario, el pago de servicios, ventas al contado, pago de deudas bancarias y adquisición de inventario a crédito, se ilustra la correcta aplicación de este principio contable, facilitando su comprensión y uso en la práctica empresarial.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Ejemplos sencillos de partida doble.
    
          .col-lg-4.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/11.png', alt='')
    
    h2(data-aos="fade-left") La importancia del principio en la toma de decisiones
    p.mb-5 El principio de partida doble también es clave para detectar errores y fraudes. Si los registros contables no están equilibrados, indica que hay inconsistencias que deben corregirse. Por ejemplo, si al realizar el cierre contable de un periodo encuentra que los débitos no coinciden con los créditos, podría identificar transacciones omitidas o registradas de manera incorrecta (Fernández, 2020).

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        h2(data-aos="fade-left") Ejemplo práctico
        .py-4.px-5.bg-color-3.mb-3(data-aos="fade-right")
          p Imaginen que venden productos por $5.000 y el cliente paga en efectivo. El registro sería:
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-9
              p.mb-0 <b>Debito.</b> Caja por $5.000.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-9
              p.mb-0 <b>Crédito.</b> Ventas por $5.000.
      
        .titulo-figura.mb-4
          h5 Tabla 5.
          span Relación de cuentas y movimientos
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.bg-color-5 Cuenta
                th.bg-color-5 Débito
                th.bg-color-5 Crédito
            tbody
              tr
                td Caja
                td $5.000
                td -
              tr
                td Ventas 
                td -
                td $5.000
   
            
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/12.png", alt="", data-aos="zoom-in")


    .bg-full-width.bg-color-10.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/13.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Este registro indica que tanto el ingreso generado como el incremento en el efectivo se reflejen de manera adecuada en las cuentas contables. Al dominar este principio, puede garantizar que las transacciones se registren correctamente y que los estados financieros sean fiables.


    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Clasificación de cuentas según el plan contable


    p.mb-4 La clasificación de cuentas según el plan contable es una herramienta fundamental para organizar y estructurar las operaciones financieras de una empresa. Este sistema estándar posibilita que las transacciones sean registradas de forma uniforme, lo que posibilita su interpretación y análisis. Cada país o sector cuenta con un plan contable específico, como el Plan Único de Cuentas (PUC) en Colombia, que organiza las cuentas en grupos y subgrupos para garantizar la consistencia en los registros financieros.

    .titulo-figura.mb-4
      h5 Tabla 6.
      span Codificación del catálogo de cuentas
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th.bg-color-5 Clase
            th.bg-color-5 Grupo
            th.bg-color-5 Cuenta
            th.bg-color-5 Subcuenta
            th.bg-color-5 Clasificación por tipo de estado financiero
        tbody
          tr
            td 1: Activos
            td 11: Efectivo y equivalentes de efectivo
            td 1105: Caja
            td 110505: Caja Principal
            td Balance General o Estado de la situación financiera (NIIF)
          tr
            td 2: Pasivos
            td 21: Obligaciones financieras
            td 2105: Proveedores Nacionales
            td 210505: Proveedores Nacionales Corto Plazo
            td Balance General o Estado de la situación financiera (NIIF)
          tr
            td 3: Patrimonio
            td 31: Capital social
            td 3105: Capital Suscrito y Pagado
            td 310505: Capital Social Pagado
            td Balance General o Estado de la situación financiera (NIIF)
          tr
            td 4: Ingresos
            td 41: Ingresos Operacionales
            td 4105: Ventas de Mercancías
            td 410505: Ventas de Mercancías
            td Estado de Resultados
          tr
            td 5: Costos
            td 51: Costos de Ventas
            td 5105: Costo de Mercancías Vendidas
            td 510505: Costo de Mercancías Vendidas
            td Estado de Resultados
          tr
            td 6: Gastos
            td 61: Costos de Producción o de Operación
            td 6105: Materias Primas
            td 610505: Materias Primas Nacionales
            td Estado de Resultados
          tr
            td 7: Gastos no Operacionales
            td 71: Costos de Distribución
            td 7105: Transporte de Productos Vendidos
            td 710505: Transporte Nacional de Productos Vendidos
            td Estado de Resultados
    
    h2(data-aos="fade-left") Clasificación general de las cuentas
    p.mb-5 Las cuentas contables se agrupan generalmente en las siguientes categorías principales:

    .bg-full-width.bg-fondo-2
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-8.order-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/15.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Cuentas de Activo
                p.text-center Representan los recursos que posee la empresa y que generan beneficios económicos futuros. 
                p.text-center <b>Ejemplo:</b> “Caja”, “Cuentas por cobrar”, “Inventarios”.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/16.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Cuentas de Pasivo
                p.text-center Reflejan las obligaciones financieras de la organización.  
                p.text-center <b>Ejemplo:</b> “Proveedores”, “Obligaciones bancarias”.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/17.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Cuentas de Patrimonio
                p.text-center Incluyen los recursos aportados por los propietarios o socios y las utilidades retenidas. 
                p.text-center <b>Ejemplo:</b> “Capital social”, “Reservas”.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/18.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Cuentas de Ingresos
                p.text-center Registran los beneficios obtenidos por la venta de bienes o servicios. 
                p.text-center <b>Ejemplo:</b> “Ventas”, “Ingresos por intereses”.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/19.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Cuentas de Gastos
                p.text-center Representan los costos y egresos incurridos para operar la empresa.  
                p.text-center <b>Ejemplo:</b> “Gastos de personal”, “Servicios públicos”.
       
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema3/14.png', alt='')
    
    .titulo-figura.mb-4
      h5 Figura 2. 
      span Clasificación general de las cuentas contables

    .row.mb-5.justify-content-center.p-4.bg-color-7.tarjeta
      .col-lg-8
        figure
          img(src="@/assets/curso/tema3/20.svg", data-aos="zoom-in")
    
    h2(data-aos="fade-left") Aplicación práctica de la clasificación
    p.mb-5 El uso adecuado de la clasificación contable permite registrar de manera precisa las transacciones financieras dentro de una empresa. A continuación, se presentan ejemplos prácticos de cómo se aplican estos principios en diferentes situaciones comerciales.

    .row.justify-content-center
      .col-lg-10
        .row.justify-content-center.align-items-center.bg-h85
          .col-lg-6(data-aos="fade-left").mb-3.mb-lg-0.order-2
            h5 Venta de mercancía por $10.000 en efectivo	
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-9
                p.mb-0 <b>Debito.</b> Caja (Activo) por $10.000. 
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-9
                p.mb-0 <b>Crédito.</b> Ventas (Ingresos) por $10.000.

          .col-lg-3(data-aos="zoom-in").order-1
            img.img-fluid(src='@/assets/curso/tema3/21.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    .row.mb-5.justify-content-center
      .col-lg-10
        .row.justify-content-center.align-items-center.bg-h86
          .col-lg-6(data-aos="fade-left").mb-3.mb-lg-0
            h5 Pago de una factura de servicios públicos por $2.000
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-9
                p.mb-0 <b>Debito.</b> Gastos de servicios públicos (Gastos) por $2.000.  
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-9
                p.mb-0 <b>Crédito.</b> Caja (Activo) por $2.000.

          .col-lg-3(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema3/22.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
      

    h2(data-aos="fade-left") Beneficios de la clasificación según el plan contable
    p.mb-5 El uso de un plan contable estandarizado proporciona ventajas significativas para la gestión empresarial.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/23.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Uniformidad
              p Permite que los registros sean consistentes entre empresas del mismo sector, facilitando la comparación de información financiera.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/24.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Facilidad de auditoría
              p Los auditores pueden revisar los registros de manera eficiente gracias a la estandarización.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/25.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Análisis financiero
              p Facilita la interpretación de los datos, permitiendo una toma de decisiones más precisa y fundamentada.
          
    h2(data-aos="fade-left") Importancia para la administración empresarial
    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/26.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Comprender la clasificación de las cuentas según el plan contable permite analizar la situación financiera de una organización con mayor precisión. Además, garantiza el cumplimiento de normativas legales y estándares internacionales, promoviendo la transparencia y la confianza entre los usuarios de la información financiera.





    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.contaduria.gov.co/marco-conceptual-para-la-informacion-financiera-y-normas-de-informacion-financiera" target="_blank" rel="noopener noreferrer") Contaduría General de la Nación. (2024). Marco Conceptual para la Información Financiera y Normas de Información Financiera. Recuperado de Contaduría General de la Nación

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.academia.edu/7606790/CLASIFICACION_DE_LAS_CUENTAS_195_cuentas" target="_blank" rel="noopener noreferrer") Trujillo, J. M. (2011). Clasificación de las cuentas.
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/271541?page=1" target="_blank" rel="noopener noreferrer") Sánchez Morales, F. (2024). Fundamentos de contabilidad financiera: (1 ed.). Editorial Universitaria de Chile. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=gR_XVZx7VOA" target="_blank" rel="noopener noreferrer") Akyurt, E.  (2020, 28 de agosto). Estructura general de la cuenta: Los elementos que la componen. Dualidad contable México. [Vídeo] YouTube
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=2Jnd3V4BbXA" target="_blank" rel="noopener noreferrer") Gómez, J. (2019). ¿Qué son las cuentas contables? [Video]. YouTube. Recuperado de 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
