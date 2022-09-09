export default {
  global: {
    componenteFormativo:
      'Diseño de la estructura visual del proyecto multimedia',
    descripcionCurso:
      'Al determinar el alcance de un proyecto multimedia se pasará a definir aquellos elementos gráficos que conformarán su estructura, teniendo como base la retroalimentación obtenida de los usuarios, para elaborar una maqueta de alta fidelidad del producto, incorporando las funcionalidades que permitan una óptima experiencia de usuario.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Estilo gráfico del proyecto multimedia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Fundamentos y principios de diseño gráfico',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Elementos visuales de diseño gráfico',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Imagen corporativa',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'La línea gráfica',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Lenguaje audiovisual ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: '¿Qué es el lenguaje audiovisual?',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Plano',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Encuadre',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Video',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Estructura narrativa del texto',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Sistema de navegación del proyecto multimedia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tipos de navegación',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Mapa de navegación',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: '<em>Wireframe</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Herramientas para elaborar <em>Wireframe</em>',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Tipos de <em>Wireframe</em>',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: '<em>Mockup</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Experiencia de Usuario (UX)',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   icono: 'fas fa-sitemap',
      //   titulo: 'Síntesis',
      //   nombreRuta: 'sintesis',
      //   desarrolloContenidos: true,
      // },
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
      tema: 'Elementos visuales de diseño gráfico',
      referencia:
        'Marco Creativo. (2016). Psicología del color ¿Qué transmiten los colores? Diseño Gráfico ',
      tipo: 'video',
      link: 'https://www.youtube.com/watch?v=X8kbrAzV6BM',
    },
    {
      tema: 'Plano',
      referencia: 'Aprendercine.com. (2019). Escena y secuencia, plano y toma.',
      tipo: 'video',
      link: 'https://www.youtube.com/watch?v=8M2AvxsnP7o',
    },
    {
      tema: 'Plano',
      referencia:
        'Aprendercine.com (s.f.). Tipos de planos más usados en cine y televisión.',
      tipo: 'video',
      link: 'https://www.youtube.com/watch?v=WsCETCsKkGE',
    },
    {
      tema: 'Encuadre',
      referencia:
        'Aprendercine.com (2020). 15 movimientos de cámara cinematográficos.',
      tipo: 'video',
      link: 'https://www.youtube.com/watch?v=iN0rf5vUfxc',
    },
    {
      tema: 'Encuadre',
      referencia:
        'Aprendercine.com (2020). ÁNGULOS DE CÁMARA en fotografía y VÍDEO Lenguaje del cine',
      tipo: 'video',
      link: 'https://www.youtube.com/watch?v=0qf1svMgbrw',
    },
    {
      tema: 'Video',
      referencia:
        'IVANEVSKY tutoriales de Dibujo Cartoon. (2018). Cómo Hacer un <em>Storyboard.</em>',
      tipo: 'video',
      link: 'https://www.youtube.com/watch?v=lLcok2OfnCA',
    },
    {
      tema: 'Video',
      referencia:
        'Gámez, J. (2019). Los planos narrativos para <em>comic, storyboard</em> o ilustración',
      tipo: 'video',
      link: 'https://www.youtube.com/watch?v=HQN0h3yOWR4',
    },
  ],
  glosario: [
    {
      termino: 'Accesibilidad',
      significado:
        'Acceso universal a la <em>web</em>, independientemente del tipo de hardware, software, infraestructura de red, idioma, cultura, localización o capacidad de los usuarios. (Fundación Sidar - Acceso Universal, 2008)',
    },
    {
      termino: 'Composición gráfica',
      significado:
        'Es la disposición de los distintos elementos dentro del espacio visual de manera equilibrada y ordenada, con el fin de transmitir un mensaje al público objetivo. (Estudio Mique, 2020)',
    },
    {
      termino: 'Diagramación',
      significado:
        'Es un oficio del diseño editorial que se encarga de organizar en un espacio contenidos escritos, visuales y en algunos casos audiovisuales (multimedia). Estos elementos pueden estar en medios impresos y electrónicos, como libros, diarios y revistas. (¿Qué es la diagramación y cuál es su importancia dentro del Diseño Editorial?, 2017)',
    },
    {
      termino: 'Encuadre',
      significado:
        'El encuadre es el acto y el resultado de encuadrar: ajustar a un marco, fijar límites, encajar. En el ámbito de la fotografía, la televisión y el cine, se denomina encuadre al escenario registrado por el objetivo (lente) de la cámara en cada toma. (Pérez, J. y Gardey, 2017)',
    },
    {
      termino: 'Guion literario',
      significado:
        'Un guion literario es un documento que contiene una narración que ha sido pensada para ser filmada. En él se especifican las acciones y diálogos de los personajes, se da información sobre los escenarios y se incluyen acotaciones para los actores. (Sánchez, s.f.)',
    },
    {
      termino: 'Ilustración',
      significado:
        'Ilustración es acción y efecto de ilustrar. También, es aclarar un punto o materia con palabras, imágenes, o de otro modo, asimismo, es adornar un impreso con láminas o grabados para hacerlo más atractivo a la vista o explicar de mejor manera su contenido. ',
    },
    {
      termino: '<em>Mockup</em>',
      significado:
        'Representación visual de alta fidelidad del diseño visual del proyecto multimedia, en forma de maqueta estática. (Salgado, 2015)',
    },
    {
      termino: 'Prototipo',
      significado:
        'Representación del producto multimedia final que permite probar la interfaz con la cual interactúan los usuarios. (Salgado, 2015)',
    },
    {
      termino: 'Sistema de navegación',
      significado:
        'Enlaces que permiten la ubicación y el desplazamiento a través de estructuras de información (Linares, 2004).',
    },
    {
      termino: 'Tipografía',
      significado:
        'La tipografía es la técnica de escribir, utilizando diferentes diseños de letras y caligrafía, con la finalidad de resaltar lo que se desea comunicar. (Adrián, 2021)',
    },
    {
      termino: 'Usabilidad',
      significado:
        'Medida en que un producto puede ser utilizado por los usuarios para el alcance de sus objetivos en determinado contexto (ISO 9241). (Alve y Mariño, 2014)',
    },
    {
      termino: 'UX',
      significado:
        'Experiencia de Usuario que se puede definir como una metodología para el diseño de proyectos digitales (Aguirre, 2019).',
    },
    {
      termino: '<em>Wireframe</em>',
      significado:
        'Representación visual de baja fidelidad del diseño visual del proyecto multimedia, en forma de maqueta estática. (Salgado, 2015)',
    },
  ],
  referencias: [
    {
      referencia: 'Adrián, R. (2021). Tipografía. Tipografía',
      link: 'https://conceptodefinicion.de/tipografia/',
    },
    {
      referencia:
        'Aguirre, E., Ferrer, M., Bustos, B., y Méndez, R. (2020). UX Design: una metodología para el diseño de proyectos digitales eficientes centrados en los usuarios. Revista ESPACIOS, Vol. 41 (05) 2020',
      link: 'https://www.revistaespacios.com/a20v41n05/20410509.html',
    },
    {
      referencia:
        'Alve, S. y Mariño, S. (2014). Guía de evaluación de la usabilidad para herramientas de minería de datos. no solo usabilidad: revista sobre personas, diseño y tecnología. ',
      link:
        'http://www.nosolousabilidad.com/articulos/usabilidad_mineria_datos.htm',
    },
    {
      referencia:
        'Aprendercine. (s.f.). Tipos de plano en cine según el tamaño. ',
      link: 'https://aprendercine.com/tipos-de-plano-en-cine-segun-el-tamano/',
    },
    {
      referencia:
        'Belloch, C. (s.f.). Aplicaciones Multimedia (Prototipo). Unidad de Tecnología Educativa (UTE). Universidad de Valencia',
      link: 'https://www.uv.es/bellochc/logopedia/NRTLogo4.pdf',
    },
    {
      referencia:
        'Esdesign - Escuela Superior de Diseño de Barcelona (2019) ¿Qué es y cómo crear un <em>storyboard</em>?',
      link: '',
    },
    {
      referencia:
        'Estudio Mique. (2020). ¿Qué es la composición en diseño gráfico?. Estudio Mique. ',
      link: 'https://www.mique.es/que-es-composicion-diseno-grafico/',
    },
    {
      referencia:
        'Fundación Sidar - Acceso Universal. (2008). Pautas de Accesibilidad para el Contenido Web (WCAG) 2.0. Web Content Accessibility Guidelines (WCAG) 2.0. ',
      link: 'http://www.sidar.org/traducciones/wcag20/es/',
    },
    {
      referencia:
        'Linares, V. (2004). Análisis de sistemas de navegación de sitios Web. Openacess Universidad Abierta de Catalunya. ',
      link:
        'http://openaccess.uoc.edu/webapps/o2/bitstream/10609/447/1/27698tfc.pdf',
    },
    {
      referencia: 'Madrid, N. (2020). Definición de Experiencia de Usuario.',
      link:
        'https://www.nachomadrid.com/2020/01/definicion-de-experiencia-de-usuario/ ',
    },
    {
      referencia:
        'Martin, F. (2017). ¿Qué es la diagramación y cuál es su importancia dentro del Diseño Editorial?. ',
      link:
        'http://agenciachan.com/la-diagramacion-importancia-dentro-del-diseno-editorial/',
    },
    {
      referencia:
        'Monjo, T. (2011). Diseño de Interfaces. Universidad Abierta de Catalunya. ',
      link:
        'http://cv.uoc.edu/annotation/77847c78a26395a6bb77f8e08b504b8a/485065/PID_00159828/index.html',
    },
    {
      referencia: 'Morville, P. (2004). User Experience Design. ',
      link: 'http://semanticstudios.com/user_experience_design/',
    },
    {
      referencia:
        'Nielsen, J. (2017). Principios de usabilidad Web de Jakob Nielsen: la base del diseño user friendly. Área W3. ',
      link:
        'https://www.areaw3.com/diseno-web/principios-de-usabilidad-web-de-jakob-nielsen/',
    },
    {
      referencia: 'Pérez, J., & Gardey, A. (2017). Encuadre. ',
      link: 'https://definicion.de/encuadre/',
    },
    {
      referencia:
        'Ronda, R. (2013). Diseño de Experiencia de Usuario: etapas, actividades, técnicas y herramientas. no solo usabilidad: revista sobre personas, diseño y tecnología. ',
      link:
        'http://www.nosolousabilidad.com/articulos/uxd.htm?utm_source=twitterfeed&utm_medium=linkedin&_escaped_fragment_=',
    },
    {
      referencia:
        'Salgado, C. (2015). Sketchs, mockups, wireframes y prototipos. Mosaic. ',
      link:
        'http://mosaic.uoc.edu/2015/09/15/proceso-de-desarrollo-de-un-proyecto-digital/',
    },
    {
      referencia:
        'Sánchez, C. (s. f.). El guion literario. Taller de escritores',
      link: 'https://www.tallerdeescritores.com/el-guion-literario',
    },
    {
      referencia:
        'Significados. (2017). Significado de Ilustración. Significados.',
      link: 'https://www.significados.com/ilustracion/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
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
