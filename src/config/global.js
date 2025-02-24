export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Conceptos básicos de contabilidad',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Definición de contabilidad y su clasificación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Concepto general de contabilidad',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Clasificación de la contabilidad',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Importancia de la clasificación contable en el entorno empresarial',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Normas de Información Financiera',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Objetivos y características fundamentales',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'La cuenta',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Estructura y funcionamiento de las cuentas contables',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Relación con los principios de partida doble',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Clasificación de cuentas según el plan contable',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Partida doble y ecuación contable',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Principios básicos de la partida doble',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Relación con los principios de partida doble',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Vargas Moreno, M. D. L. Á. (2020). Fundamentos de contabilidad: ( ed.). Instituto Mexicano de Contadores Públicos. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/151232?page=1',
    },
    {
      referencia:
        'Muñoz Orcera, R. Márquez Vigil, J. & Lazcano Benito, L. (2020). Fundamentos de contabilidad: (1 ed.). McGraw-Hill España. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/218332?page=1',
    },
    {
      referencia:
        'Sánchez Morales, F. (2024). Fundamentos de contabilidad financiera: (1 ed.). Editorial Universitaria de Chile. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/271541?page=1',
    },
    {
      referencia:
        'Pérez, J. J. A., & Garijo de Miguel, S. (2024). Empresa y administración (1.ª ed.). ',
      link: 'https://www.editorialejemplo.com/libro/empresa-y-administracion',
    },
    {
      referencia:
        'Gutiérrez Aragón, Ó. (2015). Fundamentos de administración de empresas. Difusora Larousse - Ediciones Pirámide. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/49039',
    },
    {
      referencia:
        'Reza Trosino, J. C. (2019). El gerente efectivo: los fundamentos de la administración, el trabajo en equipo y el liderazgo (1.ª ed.). Universidad Nacional Autónoma de México (UNAM). ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/228831',
    },
    {
      referencia:
        'Salgado Benítez, J., Guerrero López, L., & Salgado Hernández, N. (2016). Fundamentos de Administración. Grupo Editorial Éxodo. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/130328',
    },
    {
      referencia: 'Macmillan Iberia, S. A. (n.d.). [Título no especificado]. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/267631',
    },
    {
      referencia:
        'Montiel Paternina, S., & Peña Sánchez, A. (2023). Fundamentos de contabilidad financiera. Universidad Libre. ',
      link:
        'https://www.unilibre.edu.co/cartagena/images/investigacion/libros/fundamentos_de_contabilidad_financiera.pdf',
    },
    {
      referencia:
        'Muñoz Orcera, R., Lazcano Benito, L. I., & Márquez Vigil, J. (2021). Contabilidad Financiera. Universidad Pontificia Comillas.',
      link: 'https://repositorio.comillas.edu/xmlui/handle/11531/61318',
    },
  ],
  glosario: [
    {
      termino: 'Activo',
      significado:
        'Recurso controlado por una empresa que genera beneficios económicos futuros.',
    },
    {
      termino: 'Balance general',
      significado:
        'Estado financiero que muestra los activos, pasivos y patrimonio de una empresa en un momento específico.',
    },
    {
      termino: 'Caja',
      significado:
        'Cuenta contable que registra el efectivo disponible de la empresa.',
    },
    {
      termino: 'Capital',
      significado:
        'Recursos financieros aportados por los propietarios para financiar las operaciones de la empresa.',
    },
    {
      termino: 'Contabilidad',
      significado:
        'Sistema de registro y análisis de las transacciones financieras de una organización.',
    },
    {
      termino: 'Costo',
      significado:
        'Valor de los recursos consumidos para producir bienes o servicios.',
    },
    {
      termino: 'Crédito',
      significado:
        'Registro contable que representa una disminución en activos o un aumento en pasivos y patrimonio.',
    },
    {
      termino: 'Deudor',
      significado:
        'Persona o entidad que tiene una obligación de pago con la empresa.',
    },
    {
      termino: 'Débito',
      significado:
        'Registro contable que representa un aumento en activos o un aumento en gastos.',
    },
    {
      termino: 'Estado de Resultados',
      significado:
        'Estado financiero que detalla los ingresos, costos y gastos de una empresa durante un periodo.',
    },
    {
      termino: 'Estado de Flujo de Efectivo',
      significado:
        'Documento que muestra las entradas y salidas de efectivo en actividades operativas, de inversión y de financiamiento.',
    },
    {
      termino: 'Gasto',
      significado:
        'Salida de recursos que no genera un beneficio directo en el futuro.',
    },
    {
      termino: 'Ingresos',
      significado:
        'Recursos obtenidos por la empresa a través de sus actividades principales o secundarias.',
    },
    {
      termino: 'Inventario',
      significado:
        'Bienes destinados a la venta o al proceso de producción en una empresa.',
    },
    {
      termino: 'Liquidez',
      significado:
        'Capacidad de una empresa para cumplir con sus obligaciones a corto plazo.',
    },
    {
      termino: 'Pasivo',
      significado:
        'Obligación financiera que la empresa debe liquidar en el futuro.',
    },
    {
      termino: 'Patrimonio',
      significado:
        'Parte residual de los activos de una empresa una vez deducidos todos los pasivos.',
    },
    {
      termino: 'Rentabilidad',
      significado:
        'Capacidad de una empresa para generar utilidades en relación con sus ingresos o inversiones.',
    },
    {
      termino: 'Transacción',
      significado:
        'Evento económico que afecta la situación financiera de una empresa y debe ser registrado.',
    },
    {
      termino: 'Utilidad',
      significado:
        'Diferencia positiva entre los ingresos y los costos y gastos de una empresa en un periodo determinado.',
    },
  ],
}
