export default {
  global: {
    Name: 'Atención al cliente',
    Description:
      'El servicio y la atención al cliente constituyen procesos fundamentales para fortalecer las relaciones comerciales y promover experiencias de servicio satisfactorias. A través del estudio del triángulo del servicio, los momentos de verdad, el ciclo de atención y las herramientas de seguimiento, el aprendiz desarrollará habilidades para identificar las necesidades del cliente, evaluar su experiencia y proponer acciones de mejora que contribuyan a su satisfacción y fidelización.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Atención al cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Características de la atención al cliente',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Finalidad de la atención al cliente',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Relaciones con clientes',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Satisfacción del cliente',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Fidelización del cliente',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Hallazgos en la atención al cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Tipos de hallazgos',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Acciones de mejora en la atención al cliente',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Ciclo del servicio',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Triángulo del servicio',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Momentos de verdad en el servicio al cliente',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Trazabilidad del servicio al cliente',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Atención al cliente',
      significado:
        'conjunto de acciones y procedimientos mediante los cuales una organización proporciona información, orientación y soluciones a las necesidades y requerimientos de sus clientes, con el propósito de garantizar una experiencia satisfactoria y fortalecer las relaciones comerciales.',
    },
    {
      termino: 'Intangibilidad',
      significado:
        'característica de los servicios que indica que las acciones e interacciones que los conforman no constituyen bienes físicos que puedan almacenarse. Su calidad se evalúa a partir de la experiencia y los resultados obtenidos por el cliente.',
    },
    {
      termino: 'Momento de verdad',
      significado:
        'interacción entre el cliente y la organización que influye en la percepción sobre la calidad del servicio. Puede presentarse durante cualquier etapa de la relación comercial y contribuir positiva o negativamente a la satisfacción del cliente.',
    },
    {
      termino: 'Personal de contacto',
      significado:
        'colaboradores de una organización que mantienen comunicación directa con los clientes para proporcionar información, identificar necesidades, gestionar solicitudes y ofrecer alternativas de solución.',
    },
    {
      termino: 'Petición',
      significado:
        'solicitud presentada por un cliente para obtener información, orientación, documentación o una actuación relacionada con un producto, servicio o procedimiento, conforme a los canales establecidos y la normativa aplicable.',
    },
    {
      termino: 'Queja',
      significado:
        'manifestación de inconformidad presentada por un cliente frente a la atención recibida, el comportamiento del personal o las condiciones en las que se desarrolla una interacción con la organización.',
    },
    {
      termino: 'Reclamo',
      significado:
        'expresión de insatisfacción relacionada con las características de un producto, la prestación de un servicio o el incumplimiento de las condiciones y compromisos acordados con el cliente.',
    },
    {
      termino: 'Soporte interno',
      significado:
        'conjunto de procesos, actividades y recursos organizacionales que respaldan la prestación del servicio sin establecer necesariamente contacto directo con el cliente. Comprende funciones administrativas, logísticas, tecnológicas y operativas.',
    },
    {
      termino: 'Soporte físico',
      significado:
        'conjunto de instalaciones, equipos, mobiliario, herramientas y recursos materiales que facilitan la prestación del servicio y contribuyen al desarrollo adecuado de las actividades de atención al cliente.',
    },
    {
      termino: 'Sugerencia',
      significado:
        'propuesta o recomendación presentada por un cliente para mejorar los productos, servicios, procedimientos o condiciones de atención de una organización.',
    },
    {
      termino: 'Trazabilidad del servicio',
      significado:
        'capacidad de registrar, consultar y realizar seguimiento a las diferentes etapas de atención de una solicitud, desde su recepción hasta su cierre, mediante información que permita verificar las actuaciones, los responsables y los resultados obtenidos.',
    },
    {
      termino: 'Ciclo del servicio',
      significado:
        'secuencia de etapas e interacciones que experimenta un cliente durante su relación con una organización, desde el contacto inicial hasta la atención postventa y el seguimiento de su satisfacción.',
    },
    {
      termino: 'Triángulo del servicio',
      significado:
        'modelo de gestión que sitúa al cliente como elemento central y relaciona tres componentes fundamentales: la estrategia de servicio, las personas y los sistemas, con el propósito de garantizar una atención coordinada y de calidad.',
    },
    {
      termino: 'Satisfacción del cliente',
      significado:
        'grado en que un producto, servicio o experiencia cumple con las necesidades y expectativas del consumidor, considerando la relación entre lo esperado y los resultados obtenidos durante su interacción con la organización.',
    },
    {
      termino: 'Fidelización del cliente',
      significado:
        'conjunto de estrategias y acciones orientadas a fortalecer la confianza, la preferencia y la continuidad de las relaciones comerciales, mediante experiencias satisfactorias, cumplimiento de compromisos y seguimiento a las necesidades del cliente.',
    },
  ],
  referencias: [
    {
      referencia:
        'Albrecht, K. (2006). La revolución del servicio. 3R Editores.',
    },
    {
      referencia:
        'Beetrack. (s. f.). Las características de un buen servicio al cliente.',
    },
    {
      referencia: 'Cámara de Comercio de Cartagena. (s. f.). PQRSD.',
    },
    {
      referencia:
        'Da Silva, D. (2020). Diferencia entre atención al cliente y servicio al cliente. Zendesk.',
    },
    {
      referencia:
        'Geinfor. (s. f.). Cómo implementar un sistema de trazabilidad en tu empresa.',
    },
    {
      referencia:
        'ISOTools. (2016). Cómo definir un proceso para gestionar las reclamaciones de los clientes.',
    },
    {
      referencia:
        'Organización Internacional de Normalización. (2018). Gestión de la calidad. Satisfacción del cliente. Directrices para el tratamiento de las quejas en las organizaciones (ISO 10002:2018).',
    },
    {
      referencia:
        'Prieto Herrera, J. E. (2014). Gerencia del servicio: La clave para ganar todos (3.ª ed.). Ecoe Ediciones.',
    },
    {
      referencia:
        'Siebold, M. (s. f.). Momentos de verdad en la administración del servicio. Mercadeo.com.',
    },
    {
      referencia:
        'Zendesk. (2024, 2 de abril). ¿Qué es la encuesta de satisfacción del cliente?',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Javier del Carmen Martínez Pérez',
          cargo: 'Experto temático',
          centro: 'Regional Bolívar - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñadora de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodriguez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Liliana Cristancho Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
