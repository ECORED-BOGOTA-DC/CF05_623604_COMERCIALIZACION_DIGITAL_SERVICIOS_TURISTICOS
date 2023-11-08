export default {
  global: {
    componenteFormativo: 'Plan de mercadeo digital I',
    descripcionCurso:
      'Internet desde su nacimiento ha permeado la sociedad, en ese sentido una empresa o emprendimiento como miembro del ecosistema social y económico debe evolucionar con él. Esta evolución en el estricto sentido promocional enfocado a la red se guía por el Plan de mercadeo digital.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
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
        titulo: 'Mercadeo digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Del plan de mercadeo tradicional al plan de mercadeo digital',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Neuromarketing',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Auditoría de activos digitales',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Customer Journey Map',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Embudo de ventas',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Segmentación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: '¿Para qué segmentar?',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: '¿Qué debo segmentar?',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Estrategias de segmentación',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Buyer persona',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Definición de buyer persona',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Importancia',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Tipos de buyer persona',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Delimitar buyer persona',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Posicionamiento y publicidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'SEO - Search Engine Optimization',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'SEM - Search Engine <em>Marketing</em>',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Social Media',
            hash: 't_4_3',
          },
        ],
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
  complementario: [
    {
      tema: 'Mercadeo digital',
      referencia:
        'Kim, W. y Mauborgne, R. (2008). La estrategia del océano azul. Grupo Editorial Norma.',
      tipo: 'Libro digital',
      link:
        'https://books.google.es/books?hl=es&lr=&id=1CjcHjyuvssC&oi=fnd&pg=PA9&dq=La+estrategia+del+oc%C3%A9ano+azul+de+Ren%C3%A9e+Mauborgne+y+W.+Chan+Kim&ots=MbrO3OfNCt&sig=D_tQudGYGYU76j8naeyYeP-wBH4',
    },
    {
      tema: 'Los sitemaps',
      referencia:
        'ICANN (2023). Guía del Usuario del Portal de Servicios de Nombres para Registros.',
      tipo: 'Libro digital',
      link:
        'https://www.icann.org/es/system/files/files/nsp-registries-user-guide-13jul23-es.pdf',
    },
    {
      tema: 'Evolución histórica del neuromarketing',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA.  (2021). Evolución concepto de mercado [video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/DgLQ5jA1pIw',
    },
    {
      tema: 'Evolución histórica del neuromarketing',
      referencia:
        'Merodio, J. ( 2017). ¿Cómo funciona el marketing digital? [video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/vNrxe5nJenU DI_CF08',
    },
    {
      tema: 'Segmentación',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). Plan de marketing digital [video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/owxaHr0-5kQ',
    },
    {
      tema: 'Customer Journey Map',
      referencia: 'Ideapuerto. (2020). Customer journey map [video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/4V6TuNn5cbQ _1.1.',
    },
  ],
  glosario: [
    {
      termino: '<em>Copy</em>',
      significado:
        'es el texto de los anuncios publicitarios de Internet, también se refiere al profesional que dentro de los equipos de mercadeo digital redacta estos textos.',
    },
    {
      termino: '<em>Keywords</em>',
      significado:
        'las palabras clave son aquellas palabras o frases que contienen descriptores y el mensaje que se quiere transmitir a los consumidores, por tanto, son también la vía por la cual los buscadores de Internet podrán encontrar una página y mostrarla como un resultado.',
    },
    {
      termino: '<em>Oversharing</em>',
      significado:
        'el término responde a una conducta que la Agencia Española de Protección de Datos (AEPD) ha definido como la sobreexposición de información personal en Internet.',
    },
    {
      termino: 'Página web',
      significado:
        'documento electrónico escrito normalmente en un lenguaje llamado HTML, que permite la visualización de contenidos de Internet, contiene enlaces y datos multimedia.',
    },
    {
      termino: '<em>Smartphone</em>',
      significado:
        'teléfono celular inteligente, con la posibilidad de actualizar, instalar programas y ser altamente productivo por las aplicaciones que contiene.',
    },
    {
      termino: 'SERPS',
      significado:
        'es la sigla de <em>Search Engine Results Page</em>, es decir, son los resultados de búsqueda de los buscadores como Google, Yahoo, Bing, Yandex, por mencionar algunos.',
    },
    {
      termino: 'URL',
      significado:
        'Uniform Resource Locator es la dirección única y específica que se asigna a los recursos web disponibles en la <em>World Wide Web</em>.',
    },
  ],
  referencias: [
    {
      referencia:
        'Corporación de Medios de Andalucía. (2021). Algoritmo de Google. CMA.',
      link: 'https://cmacomunicacion.com/que-es/algoritmo-de-google/',
    },
    {
      referencia:
        'Gladwell, M. (2007). <em>La clave del éxito. Alfaguara</em>.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Harbey Enrique Castelblanco Muñoz',
          cargo: 'Experto técnico',
          centro: 'Regional Atlántico - Centro Nacional Colombo Alemán',
        },
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gloria Alexandra Orejarena Barrios',
          cargo: 'Diseñadora instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora metodológica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo desarrollo curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Correctora de estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabián Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
