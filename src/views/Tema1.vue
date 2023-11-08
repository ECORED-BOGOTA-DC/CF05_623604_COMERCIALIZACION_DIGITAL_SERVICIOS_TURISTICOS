<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Mercadeo digital
    
    .bloque-texto-g.color-acento-contenido.BG01.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img01.jpg')})`}" alt="Imagen decorativa" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Son todos los esfuerzos que realiza una empresa o un profesional en plataformas #[em online], con el fin de capturar la atención de las personas y convertirlos en clientes potenciales, así nace la necesidad de estructurar un plan de mercadeo digital. Debe estar acorde con las tendencias del mercado y la visión estratégica del negocio, así como alineado a los patrones de conducta de los consumidores, con estos tres aspectos, permitirá tener una ventaja competitiva y comparativa frente al mercado.

    .row.justify-content-center.mb-5
      .col-lg-10
        .BGR01.p-4(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-sm-2.col-3.px-lg-4
              img(src="@/assets/curso/temas/img02.svg" alt="Imagen decorativa")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 La estrategia del océano azul
                  p.mb-0 Con el fin de tener mayor conocimiento sobre las estrategias de mercadeo, se invita a consultar el siguiente libro:
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.ucipfg.com/Repositorio/GSPM/manuales/Estrategia_Oceano_Azul.pdf" target="_blank")
                    span Descargar
                    i.fas.fa-link

    p(data-aos="fade-right") En ese sentido, el #[em marketing] digital está orientado a establecer una relación directa entre la empresa y el consumidor mediante el uso de los diferentes canales de comunicación, para lograr dicho objetivo esta disciplina, se apoya en diferentes técnicas para que el usuario de Internet tenga la información justa y necesaria de la empresa. 
    p.mb-5(data-aos="fade-right") En ese sentido, el #[em inbound] y el #[em outbound], a continuación, se explica en qué consiste cada una:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.BG02.p-5(data-aos="fade-right")
        .row.justify-content-center.mb-4
          .col-lg-4.col-6
            img(src='@/assets/curso/tema1/img02.svg' alt="Imagen decorativa")
        h3 #[em Inbound] de #[em marketing]
        p.mb-0 El objetivo es ser encontrado y capturar la atención del usuario produciendo contenido de valor.
      .col-md.tarjeta.BG03.p-5(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-lg-4.col-6
            img(src='@/assets/curso/tema1/img03.svg' alt="Imagen decorativa")
        h3 #[em Outbound] de #[em marketing]
        p.mb-0 El objetivo es encontrar usuarios y lanzarles mensajes, interrumpiendo de alguna forma su navegación para que conozcan el mensaje.

    p.mb-5(data-aos="fade-right") Si se quieren tomar decisiones basadas en los datos obtenidos de campañas publicitarias realizadas en medios como televisión, radio, medios impresos, patrocinios, activaciones de marca, entre otros; en el que no se tiene un dato exacto de cuántas personas vieron y se sintieron identificadas con el producto o servicio, y que solo para obtener esta información es necesaria la contratación de una agencia de investigación de mercados, la cual puede ser costosa y demorada en brindar #[em insights], caso contrario con el #[em marketing] digital, que ofrece beneficios como:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.order-lg-1.order-2
        ul.lista-ul--color.mb-0
          li(data-aos="fade-right")
            i.fas.fa-check-circle(style="color: #EB6F2D;")
            | Minimizar los costos de la inversión en promoción de la empresa.
          li(data-aos="fade-right")
            i.fas.fa-check-circle(style="color: #EB6F2D;")
            | Obtener en tiempo real la evolución de una estrategia y ajustarla de acuerdo con los resultados.
          li(data-aos="fade-right")
            i.fas.fa-check-circle(style="color: #EB6F2D;")
            | Aumentar la conversión del tráfico en acciones.
          li(data-aos="fade-right")
            i.fas.fa-check-circle(style="color: #EB6F2D;")
            | Construir la audiencia mediante la interacción con el público, humanizando la marca.
          li(data-aos="fade-right")
            i.fas.fa-check-circle(style="color: #EB6F2D;")
            | Ofrecer una experiencia personalizada con el cliente.
          li(data-aos="fade-right")
            i.fas.fa-check-circle(style="color: #EB6F2D;")
            | Implementar acciones para promocionar y generar confianza con la marca.
          li(data-aos="fade-right")
            i.fas.fa-check-circle(style="color: #EB6F2D;")
            | Mejorar la atención al cliente en los diferentes canales para lograr el reconocimiento y reputación de la marca.
          li(data-aos="fade-right")
            i.fas.fa-check-circle(style="color: #EB6F2D;")
            | Transformar a los clientes en embajadores de la marca.
          li(data-aos="fade-right")
            i.fas.fa-check-circle(style="color: #EB6F2D;")
            | Generar identidad de los clientes con la filosofía de la empresa.
      .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img04.jpg' alt="Imagen decorativa")

    .row.justify-content-center.mb-5
      .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img05.jpg' alt="Imagen decorativa")
      .col-lg-6
        p(data-aos="fade-left") Con el #[em marketing] digital, las empresas poseen más herramientas de información y comunicación que permiten interactuar con sus clientes meta, tener una conversación fluida, además que proporciona a los consumidores más control sobre la naturaleza y disposición en recibir y enviar mensajes, así los encargados del #[em marketing] recolectan información detallada de sus clientes y vigilan de cerca sus necesidades, de esta forma implementan de mejor manera diferentes estrategias como:
        .BGS04.p-3(data-aos="fade-left")
          ul.lista-ul--color.mb-0
            li
              i.fas.fa-check-circle(style="color: #EB6F2D;")
              p.mb-0 Construir y alimentar un #[em website].
            li
              i.fas.fa-check-circle(style="color: #EB6F2D;")
              | Generar contenido. 
            li
              i.fas.fa-check-circle(style="color: #EB6F2D;")
              p.mb-0 Implementar #[em email marketing].
            li
              i.fas.fa-check-circle(style="color: #EB6F2D;")
              p.mb-0 Preparar acciones de #[em social media].
            li
              i.fas.fa-check-circle(style="color: #EB6F2D;")
              p.mb-0 Identificar #[em influencer marketing].

    p.mb-5(data-aos="fade-right") Para lo cual, es necesario implementar prácticas como el #[em neuromarketing], permitiendo identificar de mejor manera hábitos, actitudes y comportamientos de consumo frente a los bienes y servicios de la empresa, para así recopilar, analizar y transformar la información en #[em insights] para la toma de decisiones, crear productos y servicios adaptados a las necesidades del #[em target].

    .BG06.p-4.mb-5(data-aos="flip-up")
      p.mb-0 Sin embargo, para llevar a cabo un plan de #[em marketing] digital es indispensable conocer el presupuesto, pues esto permitirá tener un margen y control sobre las acciones que debe realizar para conseguir los objetivos, así como el retorno esperado de esa inversión, de esta forma se logra una buena ejecución financiera de la empresa o de finanzas personales, garantizar procesos transparentes y claros a la hora de proponer y ejecutar un plan de mercadeo digital.
    
    p.mb-5(data-aos="fade-right") Con el siguiente video reflexione sobre las diferentes funciones del #[em marketing] digital:

    .row.justify-content-center.mb-4
      .col-lg-10
        .BGR01.p-4(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-sm-2.col-3.px-lg-4
              img(src="@/assets/curso/temas/img02.svg" alt="Imagen decorativa")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 ¿Cómo funciona el #[em marketing] digital?
                  p.mb-0 Con el fin de tener mayor conocimiento sobre cómo funciona el #[em marketing] digital, se invita a ver el siguiente video:
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://youtu.be/vNrxe5nJenU" target="_blank")
                    span Ver
                    i.fab.fa-youtube

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Del plan de mercadeo tradicional al plan de mercadeo digital
    
    .row.justify-content-center.mb-5
      .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img06.jpg' alt="Imagen decorativa")
      .col-lg-6(data-aos="fade-left")
        p El plan de mercadeo es un instrumento flexible que permite adaptar las necesidades y objetivos de la empresa, logrando optimizar y organizar los recursos de forma eficiente. Con base en esos recursos disponibles el plan puede concebirse breve y sencillo o extenso y complejo.
        p.mb-0 Ya se ha mencionado que Internet y los nuevos dispositivos tecnológicos han revolucionado el mundo del mercadeo, la comunicación y la publicidad; pero lo cierto es que las bases estratégicas y una multitud de acciones tácticas están profundamente ligadas con el #[em marketing] directo tradicional, una disciplina que cuenta con una trayectoria mucho más amplia y en la que se puede inspirar y aprender. Conozca en qué consiste el plan de #[em marketing] tradicional.

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .BG05.p-4.mb-5(data-aos="flip-up")
      p.mb-0 Pues bien, ya conoció cómo se estructura un plan de mercadeo tradicional y para poder entender las nuevas dinámicas es importante reconocer cómo funciona el #[em marketing] digital, para poder hacer un contraste entre los dos tipos de planes y tomar la mejor decisión para la comercialización del turismo.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
        p En este sentido, independientemente de las peculiaridades del mundo digital, cabe resaltar la similitud entre canales como el #[em emailing] y el tradicional correo directo que se recibe en el buzón, al igual que sucede entre los anuncios patrocinados en los buscadores y los anuncios por palabras de los diarios en papel o los anuncios en YouTube y los spots televisivos, que se complementan e influencian entre sí. Además de contemplar estos parecidos razonables, también es relevante destacar que existen expresiones propias del mercadeo digital que no tienen antecedentes directos en los medios tradicionales, como pueden ser los comparadores de precios, el posicionamiento orgánico en buscadores o la difusión viral de contenidos en redes sociales.
        .BG06.p-4
          p.mb-0 Por tanto, un primer propósito en este aparte es realzar la importancia de combinar la aplicación de métodos probados de planificación estratégica con un conocimiento extenso de los nuevos canales/tecnologías, logrando una combinación de lo mejor de ambos ambientes y así aprovechar al máximo las oportunidades derivadas de la innovación y la creatividad. Para ello, a continuación, se enumerarán algunas herramientas estratégicas tradicionales que serán de utilidad para dar solidez y congruencia al plan de mercadeo digital.
      .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img07.jpg' alt="Imagen decorativa")
    
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 #[em Neuromarketing]
    
    .row.justify-content-center.mb-5
      .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img08.jpg' alt="Imagen decorativa")
      .col-lg-6(data-aos="fade-left")
        p La neurociencia es en líneas muy generales el estudio del desarrollo y funcionamiento del sistema nervioso, y entre otros temas estudia el cerebro en relación con el comportamiento y sus funciones cognitivas. Es esta parte la que le interesa al mercadeo, ya que por medio del #[em neuromarketing] trata de explicar el proceso de toma de decisiones de los consumidores.
        p.mb-0 De esta forma, poder analizar los motivos que llevan a un cliente a elegir un determinado producto o marca, partiendo del conocimiento del cerebro humano. Para ello, utiliza técnicas objetivas que sirven para preguntar directamente al cerebro en qué basa sus preferencias.

    p.mb-5(data-aos="fade-right") En este aparte se pretende mostrar las bases del #[em neuromarketing], partiendo de conocimientos anatómicos, básicos y así entender mejor el proceso de toma de decisiones cerebrales, orientando estos conocimientos a las necesidades y exigencias de los clientes.

    .BGIMG01.px-md-5.px-4.mb-5(data-aos="zoom-in")
      .row.justify-content-center
        .col-lg-6
          ImagenInfografica.color-primario
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema1/img09.svg')

            .tarjeta.BG06.p-3(x="19%" y="7.25%" numero="01")
              p.mb-0 “En efecto, como lo demostraría los resultados del estudio del cerebro, los productos más exitosos son aquellos que tienen más cosas en común con la religión".
            .tarjeta.BG07.p-3(x="6.5%" y="44.5%" numero="02")
              p.text-white.mb-0 "Las advertencias de las carretillas de cigarrillos no solo no eran disuasiva, sino que activaban el núcleo de accumbens con lo cual inducir a los fumadores a encender un cigarrillo”.
            .tarjeta.BG08.p-3(x="19%" y="79%" numero="03")
              p.mb-0 "El olor activa muchas de las mismas regiones del cerebro que activa la vista de un producto, incluida la vista del logotipo de un producto”.
            .tarjeta.BG09.p-3(x="50.2%" y="93%" numero="04")
              p.text-white.mb-0 "British airways emplea un aroma llamado "meadow grass" para aromatizar la sala de espera donde recibe sus viajeros de negocios, para dar una sensación de frescura y "libertad" a sus clientes”.
            .tarjeta.BG10.p-3(x="82%" y="78.5%" numero="05")
              p.text-white.mb-0 "Al ver imágenes asociadas con las marcas fuertes como iPod, la Harley Davidson, el Ferrari y otras en el cerebro, registros que acata los mismos patrones de actividad que se producen con imágenes religiosas”.
            .tarjeta.BG11.p-3(x="93.6%" y="44.2%" numero="06")
              p.text-white.mb-0 Las neuronas espejo están muy involucradas en los procesos de "imitación" y "empatía “, con los cuales se pueden activar al percibir un touch point de marca; pero su importancia va más allá, ya que "envían señales al sistema límbico o región emocional del cerebro”.
            .tarjeta.BG12.p-3(x="81%" y="7.25%" numero="07")
              p.text-white.mb-0 "Las marcas y las religiones comparten muchas cosas en común, por ejemplo, son los símbolos religiosos los que aportan, evocan poder y misticismo en sus creyentes, y son los logotipos y visuales implicados en el branding de una marca lo que funciona como "símbolo" en la mente del consumidor“.
    
    .row.justify-content-start.mb-5
      .col-auto(data-aos="fade-right")
        .BGT03.p-2
          .h4.mx-3.mb-0 <em>Conceptualización del neuromarketing</em>
    
    p(data-aos="fade-right") El #[em neuromarketing] es una disciplina relativamente nueva, que como se mencionó estudia la toma de decisiones de los consumidores, se centra en el estudio de las decisiones asociadas al mercadeo, y en el cerebro como elemento fundamental de esa toma de decisiones.
    p.mb-5(data-aos="fade-right") Si lo piensa un momento, en e, la mayoría de estas decisiones se toman de manera inconsciente y son ordenadas por el cerebro, el cual evalúa todas las variables que tiene para emitir una decisión que define el patrón de conducta. Esos patrones de conducta son los que a la postre determinan que un cliente potencial elija su producto o el de la competencia.

    .row.justify-content-center.mb-5
      .col-auto(data-aos="fade-right")
        .BG10.p-3
          .h4.text-white.mx-5.mb-0 El inconsciente a partir de órdenes dadas por el cerebro
    
    .row.justify-content-center.mb-5
      .col-lg-4.col-md-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img10.png' alt="¿Dónde ir?")
      .col-lg-4.col-md-8.mb-lg-0.mb-4(data-aos="flip-up")
        img(src='@/assets/curso/tema1/img11.png' alt="¿Qué comer?")
      .col-lg-4.col-md-8(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img12.png' alt="¿Con quién hablar?")
    
    .BGM13.px-md-5.px-4.mb-5(data-aos="fade-right")
      .row.justify-content-center
        .col-lg-6.mb-4
          img(src='@/assets/curso/tema1/img13.svg' alt="Imagen decorativa")
        .col-12
          p.mb-5 Esto convierte el cerebro del cliente, concretamente su parte más inconsciente, en su principal objetivo de estudio en #[em neuromarketing], ya que cuanto mejor lo conoce más fácil será detectar sus necesidades y manufacturar sus productos para cubrirlas, al tiempo que se diseñan estrategias de mercadeo focalizadas en indicarle al cerebro que tome la decisión a su favor.
    
    .BGM13.px-md-5.px-4.mb-5(data-aos="fade-right")
      .row.justify-content-center
        .col-lg-6
          img(src='@/assets/curso/tema1/img14.svg' alt="Imagen decorativa")

    p.mb-5(data-aos="fade-right") En los últimos tiempos las investigaciones han entregado nuevas evidencias sobre cómo el cerebro humano toma estas decisiones, y se conoce ampliamente cómo se evalúan las recompensas, los riesgos y se calculan las probabilidades, esto ha llevado a poder casi predecir el comportamiento del consumidor y estudiarlo con base en sus fundamentos biológicos básicos.

    .BG14.pt-4.mb-5(data-aos="zoom-in")
      .row.justify-content-center
        .col-lg-10
          img(src='@/assets/curso/tema1/img15.svg' alt="Imagen decorativa")

    p.mb-5(data-aos="fade-right") Desde el rol de consumidores se gusta pensar que se sabe lo que se quiere y que de forma racional se utiliza la información disponible para comprender objetivamente las compras que se realizan.
    
    .row.justify-content-center.mb-5
      .col-lg-4.col-md-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img16.png' alt="Imagen decorativa")
        .h4.mx-4.text-center.mb-0 No se comprenden los riesgos, ni se tienen claros los objetivos
      .col-lg-4.col-md-8(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img17.png' alt="Imagen decorativa")
        .h4.mx-4.text-center.mb-0 Tomar decisiones ilógicas

    p.mb-5(data-aos="fade-right") Sin embargo, cada vez más se sabe que esto no es así y que los consumidores, aun con la información disponible normalmente no comprenden los riesgos a los que se someten y mucho menos tienen claros los objetivos.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
        p Y esto es así porque cuando el cerebro trata de realizar una determinada compra, en muchas ocasiones lleva a tomar decisiones ilógicas desde un punto de vista racional; pero no desde un punto de vista emocional.
        .BGS04.p-4 
          p.mb-0 Cada vez son más los estudios que prueban de forma irrefutable que las irracionalidades que se observan en el mercado por parte de los compradores están directamente relacionadas con el funcionamiento emocional del cerebro y no con su estructura racional. Esto per se, no lo convierte en un ser irracional, sino que demuestra que es un ser humano con emociones que escapan a la lógica. Para afianzar aún más este concepto revise este material audiovisual.
      .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img18.jpg' alt="Imagen decorativa")

    .row.justify-content-center.mb-5
      .col-lg-10.mb-4
        .BGR01.p-4(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-sm-2.col-3.px-lg-4
              img(src="@/assets/curso/temas/img02.svg" alt="Imagen decorativa")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 #[em Neuromarketing]: somos lo que nos emociona
                  p.mb-0 Con el fin de tener mayor conocimiento sobre #[em neuromarketing], se invita a ver el siguiente video:
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=tIAQtN8xer0" target="_blank")
                    span Ver
                    i.fab.fa-youtube
      .col-lg-10
        .BGR01.p-4(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-sm-2.col-3.px-lg-4
              img(src="@/assets/curso/temas/img02.svg" alt="Imagen decorativa")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 #[em Neuromarketing] para consumidores ¿compra racional?
                  p.mb-0 Con el fin de tener mayor conocimiento sobre #[em neuromarketing] para consumidores, se invita a ver el siguiente video:
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=vhrQ_npoLis" target="_blank")
                    span Ver
                    i.fab.fa-youtube
    
    .row.justify-content-start.mb-5
      .col-auto(data-aos="fade-right")
        .BGT03.p-2
          .h4.mx-3.mb-0 <em>Evolución histórica del neuromarketing</em>
    
    p(data-aos="fade-right") Seguramente cuando se habla de #[em neuromarketing] se tendrá la percepción de tratar con una disciplina emergente; pero si lo analiza en detalle, este concepto se ha utilizado desde que el ser humano usaba el trueque. 
    p.mb-5(data-aos="fade-right") Revise a continuación una breve evolución histórica del #[em neuromarketing].

    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="zoom-in")
        .BGIMG02.p-4
          LineaTiempoB.color-acento-botones(:datos="datosLineaTiempoB")

    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Auditoría de activos digitales
    
    p.mb-5(data-aos="fade-right") En este punto conocerá el planeamiento estratégico de la empresa, el modelo de negocio y se ha garantizado la coherencia del planteamiento general de la marca con los objetivos de negocio. También se ha revisado el concepto de #[em neuromarketing], por ende, el siguiente paso a seguir, es definir la situación actual en términos del entorno digital propiamente dicho. Para ello, se partirá de una auditoría de activos digitales en la que se analizará la situación de la competencia, el ciclo de vida de los clientes y los puntos de contacto en los que estos interactúan con la empresa.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img23.jpg')})`}" alt="Imagen decorativa" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0      En el plan de mercadeo digital se deben documentar los llamados activos digitales con los que cuenta la empresa: #[em web] corporativa, #[em blog], perfiles en redes sociales, aplicaciones móviles, etc. Tras este inventario se procederá a desglosar las funcionalidades que integran a cada uno (por ejemplo, asistente de compra, #[em chat], autoservicio para la contratación de nuevos productos, catálogo digital, tienda, etc.) y valorar la intensidad con que usan los clientes cada una de estas funcionalidades y su satisfacción al usarlas.

    .BG15.p-4.mb-4(data-aos="flip-up")
      .row.justify-content-end.align-items-center
        .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
          p Esta tarea permitirá ir perfilando el #[em Customer Journey Map] y los diferentes puntos de contacto que lo integran.
          p.mb-0 El siguiente paso será hacer un análisis comparativo respecto a la competencia para valorar la posición competitiva, definir puntos críticos de mejora y priorizar el desarrollo de nuevas funcionalidades y/o activos en función de su capacidad para captar nuevos clientes e incrementar la satisfacción de los actuales, superando sus expectativas.
        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema1/img24.svg' alt="Imagen decorativa")

    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 #[em Customer Journey Map]
    
    .row.justify-content-center.mb-5
      .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img25.jpg' alt="Imagen decorativa")
      .col-lg-6(data-aos="fade-left")
        p La clave del éxito empresarial se podría resumir en entregar la mejor oferta de valor a los clientes, con el menor costo posible. El problema surge al intentar medir un valor, que no siempre es objetivo y cuantificable, sino que es subjetivo y emocional, y que se desarrolla en cada una de las interacciones del cliente con la empresa.
        p.mb-0 Por este motivo, el poder analizar la experiencia del cliente y optimizar cada uno de los puntos de contacto ha tomado importancia capital, ya que allí se configura la percepción del cliente, respecto al valor que como empresa se le ofrece y el cual hace que esté dispuesto a elegir esa oferta frente a la competencia y/o a pagar un #[em plus] por el producto/servicio. El #[em Customer Journey Map] es una técnica de #[em Design Thinking], en la que se plasma gráficamente la experiencia de cliente en cada punto de contacto que una empresa tiene a su disposición.

    .row.justify-content-center.mb-5
      .col
        .tabla-a.color-secundario
          table(alt="Texto alternativo tabla")
            thead(style="border-color: transparent")
              tr(data-aos="fade-right")
                th(style="background-color: #FFF; width: 25%;").text-end Costumer<br>Journey<br>Map
                th(style="background-color: #3D672F; width: 15%;").text-white Awareness<br>(conciencia)
                th(style="background-color: #3D672F; width: 15%;").text-white Consideration<br>(consideración)
                th(style="background-color: #3D672F; width: 15%;").text-white Acquisition<br>(adquisición)
                th(style="background-color: #3D672F; width: 15%;").text-white Service<br>(servicio)
                th(style="background-color: #3D672F; width: 15%;").text-white Retention<br>(retención)
            tbody
              tr(data-aos="fade-right")
                th(style="background-color: #617A0B;").text-white Costumer Goals<br>(objetivos del cliente)
                td
                td
                td
                td
                td
              tr(data-aos="fade-right")
                th(style="background-color: #617A0B;").text-white Costumer Actions<br>(acciones del cliente)
                td(style="background-color: #F6F6F6;")
                td(style="background-color: #F6F6F6;")
                td(style="background-color: #F6F6F6;")
                td(style="background-color: #F6F6F6;")
                td(style="background-color: #F6F6F6;")
              tr(data-aos="fade-right")
                th(style="background-color: #617A0B;").text-white Touchpoints &amp; channels<br>(canales y puntos de contacto)
                td
                td
                td
                td
                td
              tr(data-aos="fade-right")
                th(style="background-color: #617A0B;").text-white Customers Thoughts/Emotions<br>(pensamientos y emociones del cliente)
                td(style="background-color: #F6F6F6;")
                td(style="background-color: #F6F6F6;")
                td(style="background-color: #F6F6F6;")
                td(style="background-color: #F6F6F6;")
                td(style="background-color: #F6F6F6;")
              tr(data-aos="fade-right")
                th(style="background-color: #617A0B;").text-white Pain points<br>(puntos sensibles)
                td
                td
                td
                td
                td
              tr(data-aos="fade-right")
                th(style="background-color: #617A0B;").text-white Opportunities to Improve<br>(oportunidades de mejora)
                td(style="background-color: #F6F6F6;")
                td(style="background-color: #F6F6F6;")
                td(style="background-color: #F6F6F6;")
                td(style="background-color: #F6F6F6;")
                td(style="background-color: #F6F6F6;")

    p(data-aos="fade-right") La clave de esta herramienta es dotarla de un enfoque emocional que refleje la reacción subjetiva del cliente al relacionarse con la empresa. Y su utilidad es dar coherencia a todos los puntos de contacto y ofrecer una respuesta unificada que maximice la satisfacción global del cliente y reduzca los puntos de fricción en los que pueda sentirse perdido o frustrado. Realizar este análisis para diferentes segmentos puede ayudar a incrementar el valor que se ofrece a los clientes (y, por tanto, a incrementar los ingresos y mejorar la rentabilidad), detectando nuevos nichos y oportunidades de negocio desatendidos por la competencia.
    p.mb-5(data-aos="fade-right") Para elaborar correctamente el #[em Customer Journey Map] se necesita tener muy claro el perfil del cliente. Dado que se habla de experiencias y percepciones subjetivas es fundamental precisar segmentos de clientes concretos. 

    .row.justify-content-center.mb-4
      .col-lg-10
        .BGR01.p-4(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-sm-2.col-3.px-lg-4
              img(src="@/assets/curso/temas/img02.svg" alt="Imagen decorativa")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Guía para elaborar Customer Jouney Map
                  p.mb-0 Con el fin de tener mayor conocimiento sobre cómo funciona el #[em marketing] digital, se invitamos a revisar el siguiente e-book:
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Guia_para_elaborar_Customer_Jouney_Map.pdf')" target="_blank" type="application/pdf")
                    span Descargar
                    i.fas.fa-link

    separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5 Embudo de ventas
    
    p.mb-5(data-aos="fade-right") En los negocios #[em online] es muy común el uso de modelos de conversión en embudo, también conocidos como #[em funnels]. Aunque las tipologías de estos varían en función del tipo de producto y modelo de negocio se puede ilustrar el concepto definiendo un embudo estándar en 8 pasos para entender las etapas en las que se divide una conversión:

    .row.justify-content-center.mb-5
      .col-lg-8
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema1/img26.svg' alt="Imagen decorativa")
    
    p.mb-5(data-aos="fade-right") Los #[em funnels] de conversión como el expuesto en el ejemplo se basan en el modelo AIDA (#[strong Atención, Interés, Deseo y Acción]), que ilustra el proceso y establece una secuencia para optimizar los contenidos de las páginas que soportan cada una las fases.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
        .BG06.p-4.mb-4
          p.mb-0 Esta herramienta tiene una larga trayectoria y su utilidad está más que validada. Cada una de las palabras que forman el acrónimo representa en orden secuencial las fases por las que transita un prospecto o #[em lead] (cliente potencial) antes de convertirse en cliente.
        p.mb-0 La argumentación de este modelo expresa que, si una marca no logra captar la #[strong atención] de su público objetivo a través de su comunicación, publicidad, distribuidores o de su red comercial, es muy improbable que ese público llegue a adquirir sus productos. En segundo lugar, esa primera conexión, deberá estimular el #[storng interés] de los #[em leads], (debe considerar la oferta de valor apropiada para satisfacer sus necesidades). Luego en el tercer nivel, el #[strong deseo], el #[em lead] valora la oferta con ofertas similares de los competidores y escoge su producto como el más adecuado para satisfacer sus necesidades. Finalmente, llega el momento culme, la #[strong acción], de nada sirve haber desarrollado de forma impecable los pasos anteriores si el #[em lead] por falta de oportunidad, de capacidad económica o pérdida de impulso no concluye la compra, es decir, no se convierte en cliente.
      .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img27.jpg' alt="Imagen decorativa")

    p(data-aos="fade-right") En esencia en el mundo digital el uso de los #[em funnel] se concentra en la producción de contenidos que despliegan el argumento de venta, adaptándolo a las mencionadas etapas y a los diferentes canales de captación, dirigiendo a nuestro público objetivo de un nivel al siguiente, alimentando el embudo y captando nuevos clientes.
    p.mb-5(data-aos="fade-right") En paralelo, el modelo AIDA puede complementarse y enriquecerse aplicando otro acrónimo que ayudará a concretar las motivaciones de compra de cada cliente: MICASO. A continuación, se enuncian las diferentes motivaciones que lo integran:

    SlyderF.mb-5(columnas="col-xl-4 col-lg-6" data-aos="zoom-in")
      .tarjeta.BG16.p-4
        .row.justify-content-center.mb-3
          .col-lg-5.col-6
            img(src='@/assets/curso/tema1/img28.svg' alt='Imagen decorativa')
        h4.text-center Moda
        p.text-center.mb-0 Deseo de cambio, sentimiento de pertenencia a un grupo, estar a la última.
      .tarjeta.BG16.p-4
        .row.justify-content-center.mb-3
          .col-lg-5.col-6
            img(src='@/assets/curso/tema1/img29.svg' alt='Imagen decorativa')
        h4.text-center Interés
        p.text-center.mb-0 Ahorro, miedo a perder una oferta.
      .tarjeta.BG16.p-4
        .row.justify-content-center.mb-3
          .col-lg-5.col-6
            img(src='@/assets/curso/tema1/img30.svg' alt='Imagen decorativa')
        h4.text-center Comodidad
        p.text-center.mb-0 Cercanía, horarios de apertura amplios, ahorro de tiempo.
      .tarjeta.BG16.p-4
        .row.justify-content-center.mb-3
          .col-lg-5.col-6
            img(src='@/assets/curso/tema1/img31.svg' alt='Imagen decorativa')
        h4.text-center Afecto
        p.text-center.mb-0 Vinculación emocional a la marca, a su establecimiento o empleados.
      .tarjeta.BG16.p-4
        .row.justify-content-center.mb-3
          .col-lg-5.col-6
            img(src='@/assets/curso/tema1/img32.svg' alt='Imagen decorativa')
        h4.text-center Seguridad
        p.text-center.mb-0 Servicio postventa, garantía, solidez, marca reconocida.
      .tarjeta.BG16.p-4
        .row.justify-content-center.mb-3
          .col-lg-5.col-6
            img(src='@/assets/curso/tema1/img33.svg' alt='Imagen decorativa')
        h4.text-center Orgullo
        p.text-center.mb-0 Love marks, estatus, prestigio, emulación, lujo.

    p.mb-5(data-aos="fade-right") De cara al plan de mercadeo es prudente mencionar que en cada caso estas motivaciones influirán en mayor o menor grado en la decisión de compra. Esto permite configurar un perfil específico de cliente que suele denominarse metafóricamente como “la llave” del cliente y puede representarse gráficamente otorgando un valor de 1 a 5 a cada una de las variables en función de su influencia en las decisiones de compra de un cliente concreto.

    .bloque-texto-g.color-acento-contenido.BG01.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img34.jpg')})`}" alt="Imagen decorativa" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Al desarrollar una matriz con base en ambos modelos (AIDA y MICASO) que integre las etapas del #[em funnel] de conversión y las motivaciones del cliente, se logrará el insumo necesario para que la creación de contenidos y mensajes sean lo suficientemente personalizados para optimizar la experiencia del cliente y maximizar las conversiones.
    
    p(data-aos="fade-right") Sin embargo, la proliferación de dispositivos y de los múltiples canales imperantes hoy en día hacen que en muchas oportunidades el usuario cuente con tantas opciones que es posible afirmar que no existe un único #[em funnel] posible o quizá no haya suficiente información para elaborarlo. Este fenómeno ha impulsado la adopción del mapa de ciclo de vida del cliente o #[em Customer Journey Map] como herramienta para superar las limitaciones del #[em funnel] de conversión o incluso como complemento y paso previo que ayude a visualizar todas las interacciones importantes que configuran microconversiones necesarias para llegar a la venta (macroconversión), desarrollando #[em funnels] con mayores garantías.
    p.mb-5(data-aos="fade-right") La mencionada multicanalidad, junto a los nuevos hábitos de compra desarrollados por los consumidores configuran nuevos perfiles de clientes, siendo los patrones más conocidos:

    .row.justify-content-center.mb-5
      .col-lg-4.col-md-8.mb-lg-0.mb-4(data-aos="fade-right")
        .BGS14.h-100.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-7
              img(src='@/assets/curso/tema1/img35.svg' alt='Imagen decorativa')
          h4.text-center ROPO (#[em Research Online, Purchase Offline])
          p.text-center.mb-0 Investiga las características técnicas y atributos diferenciales del producto en Internet para adquirirlo posteriormente en una tienda física.
      .col-lg-4.col-md-8.mb-lg-0.mb-4(data-aos="flip-up")
        .BGS14.h-100.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-7
              img(src='@/assets/curso/tema1/img36.svg' alt='Imagen decorativa')
          h4.text-center Showroomer
          p.text-center.mb-0 Investiga la experiencia de uso del producto en un punto de venta físico y después busca el punto de venta más económico en el canal #[em online].
      .col-lg-4.col-md-8.mb-lg-0.mb-4(data-aos="fade-left")
        .BGS14.h-100.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-7
              img(src='@/assets/curso/tema1/img37.svg' alt='Imagen decorativa')
          h4.text-center RTB (Research, Testing and Buying)
          p.text-center.mb-0 Investiga #[em online], prueba en tiendas físicas y compra #[em online].
    
    p Para satisfacer estos nuevos perfiles de clientes la experiencia de compra debe satisfacer todas sus expectativas, configurándose como un proceso abierto donde sea el propio cliente quien decida en qué canal dará el siguiente paso en función de sus preferencias y conveniencia.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosLineaTiempoB: [
      {
        titulo: 'Antes de los 90',
        texto:
          'Si se da un paseo por la historia de la humanidad, quizá verá que los primeros mercaderes sabían que, si lograban despertar la ilusión de los clientes con determinados productos, estos pagarían más dinero para adquirirlos, en aquella época la presentación de las mercancías o quizá una novedosa historia alrededor del producto lograba mejores tratos.',
        icono: require('@/assets/curso/tema1/img19.png'),
      },
      {
        titulo: 'Años 90',
        texto:
          'A partir de los años 90, la llamada década del cerebro, cuando la neurociencia dio un gran salto, en 1994 el autor Antonio Damásio en su obra “El error de Descartes”, describe cómo pacientes con daño en el área del cerebro conocida como corteza prefrontal tenían dificultades para planificar y tomar decisiones.',
        icono: require('@/assets/curso/tema1/img20.png'),
      },
      {
        titulo: '2002',
        texto:
          'En 2002 Ale Smidts, acuña el término “<em>neuromarketing</em>” para explicar la aplicación de técnicas neurocientíficas en el mundo del mercadeo.<br><br>También en el 2002, el psicólogo Daniel Kahneman, gana el premio Nobel de Economía, al integrar el estudio de la Psicología en la Economía, específicamente en lo que respecta al juicio humano y la toma de decisiones bajo incertidumbre. Kahneman es considerado el principal impulsor de esta ciencia y padre de la Neuroeconomía.',
        icono: require('@/assets/curso/tema1/img21.png'),
      },
      {
        titulo: 'Actualmente',
        texto:
          'Hoy en día gracias al estudio del <em>neuromarketing</em> las nuevas estrategias comerciales se centran en explorar las emociones y los sentidos del consumidor, para poder optimizar mejor los recursos y adelantarse a las decisiones.',
        icono: require('@/assets/curso/tema1/img22.png'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
