<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Posicionamiento y publicidad
    
    .row.justify-content-center.mb-4
      .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema4/img01.jpg' alt="Imagen decorativa")
      .col-lg-6
        .BG06.p-4.mb-4(data-aos="fade-left")
          p.mb-0 Tras la definición del plan editorial ha llegado el momento de pensar qué servicios/productos, segmentos de clientes y ofertas de valor quiere destacar en su comunicación. Por tanto, este aparte se enfocará en comprender la forma en la que se organiza y localiza la información en la red, observando la principal puerta de entrada de personas y, por lo tanto, la primera fuente de potenciales clientes en un negocio #[em online], los buscadores.
        p.mb-0(data-aos="fade-left") En este módulo verá distintas acciones que puede llevar a cabo para conseguir que los sitios #[em web] que esté posicionando sean atractivos a los #[em robots] de búsqueda y, por tanto, sean lo suficientemente interesantes como para ser posicionados en los primeros resultados. Conocerá también algunas de las más destacadas herramientas que existen y que ayudarán a lograr el objetivo mencionado.

    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 SEO - #[em Search Engine Optimization]
    
    p.mb-5(data-aos="fade-right") El posicionamiento orgánico en buscadores (SEO) es probablemente la fuente de tráfico más importante para la generalidad de las empresas en Internet, dada la gran aceptación del uso de buscadores entre los usuarios y su relativo bajo costo respecto a otras fuentes de adquisición de tráfico.

    .row.justify-content-center.mb-5
      .col-lg-7.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema4/img02.jpg' alt="Imagen decorativa")
      .col-lg-5(data-aos="fade-left")
        p Seguramente, habrán escuchado la expresión popular “#[strong pregúntele a Google]”, que resume perfectamente el extendido uso de estas herramientas informáticas.
        p Haciendo hincapié en la gran importancia que tienen los buscadores de Internet, es prudente mencionar que el SEO (#[em Search Engine Optimization]) es un proceso de mejora continua, por lo que nunca concluye al 100%, ya que debe adaptarse a la demanda y sus resultados no son inmediatos.
        p.mb-0 Esto hace que deba contemplarse como una inversión estructural y fijarse objetivos a mediano y largo plazo.

    .BGS19.mb-5(data-aos="zoom-in")
      .row.justify-content-center.align-items-center
        .col-lg-5.order-lg-1.order-2
          .p-4
            p Este complejo proceso se subdivide en SEO #[em on page] y SEO #[em off page]. El primer ítem se refiere a aquellas acciones de optimización ejecutadas sobre la propia página #[em web]: estructura interna y arquitectura de la información, factores técnicos de la programación del #[em site], producción y optimización de contenidos.
            p.mb-0 Por el contrario, el SEO #[em off page] se refiere a las acciones vinculadas a la popularidad de la #[em Web] que por definición se desarrollan en páginas externas, fundamentalmente la adquisición de enlaces en #[em Web] de la misma temática. Vea esto con más detalle.
        .col-lg-7.col-10.py-4.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/curso/tema4/img03.svg' alt="Imagen decorativa")

    .row.justify-content-start.mb-5
      .col-auto(data-aos="fade-right")
        .BGT03.p-2
          .h4.mx-3.mb-0 <em>SEO on page</em>
    
    p.mb-5(data-aos="fade-right") En el proceso de posicionamiento orgánico o SEO se estima que el algoritmo de Google (el buscador más popular) tiene en cuenta cerca de 200 ítem para clasificar y organizar los sitios #[em web] en orden de relevancia para los usuarios.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img04.jpg')})`}" alt="Imagen decorativa" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Como se referenció previamente, el SEO on #[em page] corresponde a todos aquellos factores dentro de una página #[em web] que Google y en general los buscadores tienen en cuenta para posicionar las páginas en los resultados de búsquedas.<br><br>Dentro de este contenedor existen muchas variables que afectan el posicionamiento, revise los más relevantes; pero antes, el primer ítem a tener en cuenta es la indexación del sitio #[em web]. Estar indexado es estar dentro del índice de sitios #[em web] del buscador. Dicho de otra forma, para poder aparecer en los resultados se debe estar disponible. 

    p.mb-5(data-aos="fade-right") Ahora sí, vea cuáles son los elementos internos de las páginas que los buscadores tendrán en cuenta en el posicionamiento.

    .row.justify-content-center.mb-5
      .col-lg-10
        .BGR01.p-4(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-sm-2.col-3.px-lg-4
              img(src="@/assets/curso/temas/img02.svg" alt="Imagen decorativa")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Tu Dominio
                  p.mb-0 Para comprobar que un sitio #[em web] está siendo indexado se usa en el explorador la dirección. La consulta debe retornar como resultado el número de páginas internas de su #[em web] o uno similar.
                .col-sm-auto
                  a.boton.color-acento-botones(href="http://tudominio.com" target="_blank")
                    span Ingresar
                    i.fas.fa-link

    .BGM13.px-md-5.px-4.mb-5
      .row.justify-content-center
        .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema4/img05.jpg' alt="Imagen decorativa")
        .col-lg-6
          .cajon.color-primario.p-4.mb-4(data-aos="fade-left")
            p.mb-0 #[strong Semántica]: hace referencia al uso y diversificación de las palabras clave o #[em keywords]. Esto significa que el contenido (texto) sea rico en palabras clave y que haya una conexión entre todas ellas. Al elaborar el plan editorial se realiza una primera aproximación más superficial e intuitiva a estas palabras. 
          p.mb-0(data-aos="fade-left") En este momento se debe “concretar” y situarse en el nivel del cliente, y contestar la pregunta ¿Cómo me encontrarán los clientes?, identificando todas aquellas palabras que describen a la empresa, la marca, el producto/servicio, la oferta de valor, con el fin de destacarlas en el contenido. También se debe revisar las palabras clave/temáticas identificadas como críticas para el negocio, las tendencias y en general todo aquello que afecte el posicionamiento orgánico en buscadores.

    .row.justify-content-center.align-items-center.mb-5
      .col-xl-4.col-md-6.col-sm-8.order-xl-1.order-2.mb-sm-0.mb-4(data-aos="fade-right")
        .BG20.h-100.p-4
          p #[strong Optimización de etiqueta “título”]: Google utiliza los títulos para interpretar (y posicionar) el contenido y su uso genera impacto visual en los resultados de búsqueda; en la práctica, logra que las personas se fijen más en la #[em Web] cuando están buscando. Con esto en mente se puede inferir que cada artículo debe tener un título. Las recomendaciones para optimizar los títulos son:
          ul.lista-ul--color.mb-0
            li
              i.fas.fa-check-circle(style="color: #EB6F2D;")
              | Incluir la palabra clave principal lo antes posible. Si es al principio, mejor.
            li
              i.fas.fa-check-circle(style="color: #EB6F2D;")
              p.mb-0 Incluir el nombre de su tienda #[em online] o empresa (si cabe) al final o al principio. De esta forma también generará #[em branding].
            li
              i.fas.fa-check-circle(style="color: #EB6F2D;")
              | Uso de algunas palabras en mayúsculas para llamar la atención, siempre y cuando sea viable.
      .col-xl-4.col-sm-8.order-xl-2.order-1.mb-sm-0.mb-4(data-aos="flip-up")
        img(src='@/assets/curso/tema4/img06.jpg' alt="Imagen decorativa")
      .col-xl-4.col-md-6.col-sm-8.order-3.mb-sm-0.mb-4(data-aos="fade-left")
        .BG20.h-100.p-4
          p #[strong Optimización de etiqueta “descripción”]: así como el título, la descripción es un espacio en el que se puede destacar y optimizar las palabras clave y ayudar a la captación de tráfico, por lo que se recomienda:
          ul.lista-ul--color.mb-0
            li
              i.fas.fa-check-circle(style="color: #EB6F2D;")
              | Además de utilizar la palabra clave principal, usar variantes de la palabra clave o palabras clave secundarias.
            li
              i.fas.fa-check-circle(style="color: #EB6F2D;")
              p.mb-0 Animar al usuario a dar #[em clic], contándole en ese espacio temas de su interés.
            li
              i.fas.fa-check-circle(style="color: #EB6F2D;")
              | Las descripciones no deben ser demasiado cortas; pero tampoco superar el máximo de caracteres permitidos porque quedaría cortada en la SERPS.

    p(data-aos="fade-right") #[strong Encabezados]: son etiquetas de título que se utilizan dentro de la estructura de una página #[em web] para destacar el tema y subtemas del contenido. En SEO y experiencia de usuario estos encabezados son importantes, ya que ayudan tanto al buscador como al usuario a entender la estructura temática de una #[em Web]. 
    p.mb-5(data-aos="fade-right") En concreto le indican al buscador y al usuario que unas partes del contenido son más importantes que otras. Se indican en la estructura interna mediante etiquetas HTML muy simples. Su notación es la siguiente:

    .row.justify-content-center.mb-5
      .col-lg-10
        .BGR15.p-4(data-aos="flip-up")
          .h1.text-end &lt;h1&gt;encabezado&lt;/h1&gt;
          p.text-end.mb-0 El número posterior a la “h” es jerárquico y denota la importancia de dicho encabezado.

    p.mb-5(data-aos="fade-right") El Consorcio #[strong World Wide Web], entidad encargada de dar las directrices para el manejo #[em web] a nivel mundial, define seis niveles de encabezados en HTML, siendo &lt;h1&gt; el más importante y &lt;h6&gt; el menos importante. Una recomendación de uso que hace el blog de SE Ranking de los encabezados es la siguiente:

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .BGR15.p-4
          .h1.mb-2 &lt;h1&gt;Heading 1&lt;/h1&gt;
          .h2.mb-2 &lt;h2&gt;Heading 2&lt;/h2&gt;
          .h3.mb-2 &lt;h3&gt;Heading 3&lt;/h3&gt;
          .h4.mb-2 &lt;h4&gt;Heading 4&lt;/h4&gt;
          p.mb-2 &lt;h5&gt;Heading 5&lt;/h5&gt;
          p.text-small.mb-0 &lt;h6&gt;Heading 6&lt;/h6&gt;
      .col-lg-8(data-aos="fade-left")
        p #[strong H1]: es la etiqueta que sirve para resaltar el título del contenido de una página web. Es relevante en este punto delimitar de forma clara la diferencia entre sitio #[em web] y página web, ya que un título #[strong H1] debe hacer referencia a una página del sitio web, y no al sitio #[em web] en general. Ejemplo: panadería artesanal.
        p #[strong H2]: puede existir más de uno. Debe corresponderse con el nombre de las entradas. En el caso de estar dentro de una entrada se puede usar estratégicamente para abarcar palabras clave principales.
        p #[strong H3]: puede existir más de uno. Debe corresponderse con los títulos de los widgets de la página. En el caso de estar dentro de una entrada se pueden usar estratégicamente para indicar palabras clave secundarias dentro de un #[strong H2]. También se puede abarcar otras jerarquías menores como el H4 o H5, pero su uso por lo general es innecesario (Koller, 2021).
      .col-12(data-aos="fade-right")
        .BG15.px-4.py-2
          p.mb-0 #[strong Fuente]: Tomado de SE Ranking - <a href="https://seranking.com/es/blog/encabezados-html/" target="_blank" style="color: #2B95F9">#[strong seranking.com]</a> #[strong Nombre]: Niveles de encabezado #[em web].

    .BGM13.px-md-5.px-4.mb-5(data-aos="fade-right")
      p Otros aspectos importantes a tener en cuenta dentro del SEO #[em on page] son:
      p #[strong URL amigables]: la URL #[strong Uniform Resource Locator] es el localizador único y determinado, que se asigna para cada página disponible en la #[em World Wide Web]. En términos de optimización de búsqueda o SEO se debe privilegiar el uso para los sitios #[em web], de lo que se conoce como “#[strong URL amigables]” y, por ende, evitar URL que no lo sean, pero ¿qué es una URL amigable?
      p.mb-0 La manera más sencilla de explicarlo es decir que la URL, al ser leída, permita que el usuario comprenda su significado y que además describa el contenido de la página que contiene. A estas URL se les conoce también como URL semánticas.

    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema4/img07.svg' alt="Imagen decorativa")
      .col-lg-6(data-aos="fade-left")
        img(src='@/assets/curso/tema4/img08.svg' alt="Imagen decorativa")

    p.mb-5(data-aos="fade-right") Si se observa las URL de la imagen se puede apreciar que la primera URL es más fácil de leer, que la segunda, y es justamente esta facilidad de entender el contenido de la página con solo leer la URL de lo que se trata, esta facilidad se hace extensiva tanto a usuarios como a navegadores.
    
    .BGIMG01.px-md-5.px-4.mb-5(data-aos="fade-right")
      p #[strong #[em Breadcrumbs] (migas de pan)]: el concepto de migas de pan tiene su origen en el cuento infantil de Hansel &amp; Gretel, en el cual los protagonistas dejan una guía en el camino con migas de pan, para poder regresar a casa. 
      p.mb-5 La esencia de esta fábula trasladada al ambiente #[em web] se constituye en un elemento muy importante para la usabilidad de un sitio #[em web], porque de la misma forma que en el cuento le permite al usuario saber dónde está y le da al usuario la posibilidad de navegar fácilmente hacia otras páginas o de regresar al inicio.
      
      .row.justify-content-center
        .col-lg-6
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/tema4/img09.svg' alt="Imagen decorativa")

    p(data-aos="fade-right") El uso de esta herramienta es muy relevante para sitios #[em web] con un gran número de URL y de estructura compleja, como los sitios de comercio electrónico. A manera de ejemplo se ha tomado una imagen del sitio #[em web] del comercio electrónico Homecenter.com.co, en el que se evidencia el uso de esta herramienta, que además de servir para el posicionamiento #[em web] y la usabilidad del sitio, permite a los #[em robots] de búsqueda entender la estructura del sitio #[em web] más fácilmente.
    p.mb-5(data-aos="fade-right") #[strong Los #[em sitemaps]]: otra de las herramientas que brinda gran utilidad a la hora de posicionarse en los buscadores es el recurso conocido como mapa del sitio.

    .row.justify-content-center.mb-5
      .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema4/img10.svg' alt="Imagen decorativa")
          figcaption Fuente. <span style="font-weight: 400">Tomado de Seobility</span> Nombre: <span style="font-weight: 400">XLM Sitemap</span>
      .col-lg-6(data-aos="fade-left")
        p Este es un archivo de código donde se estructuran jerárquicamente las rutas de navegación del sitio, es decir, en este archivo, se indica al #[em crawler] el camino correcto que debe ser recorrido. Un #[em crawler] o araña de búsqueda es un robot que rastrea en Internet localizando páginas relevantes para cada búsqueda. 
        p Ahora, para entender esta función piense en la siguiente situación: un mensajero lleva correspondencia a un barrio de la ciudad donde no ha estado antes y en el que las direcciones son complejas, para entregar el correo tiene dos posibilidades, recorrer el barrio e ir ubicando direcciones; pero si alguien le entrega un mapa estructurado del recorrido que debe hacer seguramente todo le será más fácil ¿no es cierto?
        .cajon.color-primario.p-4
          p.mb-0 Pues bien, esa es exactamente la función del sitemap, ayudar en el trabajo del #[em robot] del buscador, al establecer una ruta óptima, esto hace que los procesos de indexación se vuelvan más rápidos y eficientes y, minimiza tanto el tiempo de rastreo como el tiempo de carga de la página.

    .row.justify-content-center.mb-5
      .col-lg-10.mb-4
        .BGR01.p-4(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-sm-2.col-3.px-lg-4
              img(src="@/assets/curso/temas/img02.svg" alt="Imagen decorativa")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 #[em Sistemap]
                  p.mb-0 Con el fin de tener mayor conocimiento sobre cómo funciona el #[em sistemap], se invita a revisar el siguiente PDF:
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Sistemap.pdf')" target="_blank" type="application/pdf")
                    span Ingresar
                    i.fas.fa-link

      .col-lg-10
        .BGR01.p-4(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-sm-2.col-3.px-lg-4
              img(src="@/assets/curso/temas/img02.svg" alt="Imagen decorativa")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Guía para principiantes para nombres de dominio
                  p.mb-0 Con el fin de tener mayor conocimiento sobre cómo crear nombres de dominio, se invita a revisar el siguiente PDF:
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Guia_para_principiantes_para_nombres_de_dominio.pdf')" target="_blank" type="application/pdf")
                    span Ingresar
                    i.fas.fa-link
    
    .row.justify-content-start.mb-5
      .col-auto(data-aos="fade-right")
        .BGT03.p-2
          .h4.mx-3.mb-0 <em>SEO off page</em>
      
    p.mb-5(data-aos="fade-right") Habiendo ya recorrido algunos de los elementos internos que los buscadores analizan a la hora de posicionar las páginas #[em web], ahora se va a poner la mirada en los elementos externos, que hacen referencia a promocionar y dotar de popularidad su #[em Web], a fin de que el buscador lo incluya en los primeros resultados. En esta labor resulta imprescindible el #[em link building].

    .bloque-texto-g.color-acento-contenido.BG01.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img11.jpg')})`}" alt="Imagen decorativa" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 En sentido extenso la construcción de enlaces o #[em link building] hace referencia a las técnicas empleadas para generar y aumentar el número y calidad de enlaces desde dominios externos hacia su página #[em web] y que tiene por objeto aumentar la puntuación que otorgan los motores de búsqueda de ese sitio #[em web].

    .BGS14.p-4.mb-4
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
          p A estos enlaces externos se les conoce como #[em backlinks] e indican a los #[em robots] de los buscadores que el contenido enlazado es de valor, lo que a la postre, junto a otros valores de referencia aumenta las métricas de SEO, conocidas como autoridad de página y autoridad de dominio. Este concepto se complejiza al considerar diferentes tipologías de enlaces (html, java, follow, nofollow), textos ancla (anchor text) que al enlazar su página a una palabra o frase clave, puede aumentar los riesgos de penalización de los buscadores por una sobreoptimización.
          p.mb-0 Por tal razón, este proceso de construcción de enlaces requiere una detallada planeación y un proceso de ejecución cuidadoso, en pos de alcanzar el objetivo deseado.
        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema4/img12.svg' alt="Imagen decorativa")

    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 SEM - #[em Search Engine Marketing]
    
    .BG06.p-4.mb-5(data-aos="flip-up")
      p.mb-0 En el contexto de la industria de la publicidad #[em online] se pueden identificar dos grandes bloques. El primero dirigido por los buscadores (Google, YouTube, Bing, Yandex, Baidu, por mencionar algunos) y, el segundo guiado por las redes sociales (Facebook, Instagram, Twitter, TikTok). Este apartado se centrará en el mercadeo de motores de búsqueda o #[em Search Engine Marketing] - SEM por sus siglas en inglés, brindando los conceptos necesarios para entenderlo, reconociendo las principales plataformas, y desmenuzando todos los elementos y factores que intervienen en esta técnica.

    .row.justify-content-center.mb-5
      .col-lg-7.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema4/img13.svg' alt="Imagen decorativa")
      .col-lg-5(data-aos="fade-left")
        p Entender estas técnicas, conocer sus posibilidades y entender cómo aplicarlas a la estrategia #[em online] se convertirá en una ventaja frente a los competidores, para obtener el anhelado lugar dentro del buscador que le permita contar con mayor visibilidad en la red y así aumentar sus posibilidades de convertir esas búsquedas en ventas.
        p.mb-0 Para lograr un entendimiento óptimo se iniciará desde la base. Previamente se definió lo que se conoce como buscador, la herramienta que permite al usuario de Internet encontrar una #[em Web] o un contenido determinado a partir de la introducción de un término o frase en el cuadro de búsqueda.

    p.mb-5(data-aos="fade-right") Estos resultados se muestran en las SERP “#[em Search Engine Results Page]”, mediante una serie de parámetros y algoritmos predefinidos, y que los buscadores filtran para entregar los enlaces que considera más relevantes en relación con la búsqueda realizada.

    figure.mb-5(data-aos="zoom-in")
      img(src='@/assets/curso/tema4/img14.svg' alt="Imagen decorativa")
      figcaption Nombre: <span style="font-weight: 400">SERP - Search Engine Results Page</span>

    p(data-aos="fade-right") Seguramente como cualquier persona ha realizado búsquedas en diferentes buscadores que hay en la red; pero se ha detenido a mirar cómo se muestran los resultados, ¿sería capaz de diferenciar los anuncios y la ubicación de estos, del resto de los resultados?
    p.mb-5(data-aos="fade-right") Para responder esta pregunta, primero distinga dos tipos de resultados:

    .row.justify-content-center.mb-5
      .col-lg-5.mb-lg-0.mb-4.zindex-1.px-4(data-aos="fade-right")
        .arrow-down-b.BGS06.p-4
          .h3.text-center.mb-0 Resultados orgánicos o <br>naturales
        .BGS17.hg-04.p-xl-5.p-4
          p Son aquellos que se muestran en el centro de la página y no implican pago por parte de la empresa. 
      .col-lg-1.zindex-3.img-01.d-lg-flex.d-none(data-aos="flip-up")
        img(src='@/assets/curso/tema4/img15.svg' alt="Imagen decorativa")
      .col-lg-5.zindex-2.px-4(data-aos="fade-left")
        .arrow-down-b.BGS10.p-4
          .h3.text-center.text-white.mb-0 Resultados de <br>pago
        .BGS17.hg-04.p-xl-5.p-4
          p Son anuncios que aparecen en la parte superior y en la derecha de la página, en las zonas habilitadas por los buscadores para anuncios patrocinados, ocupando espacios destacados dentro de la propia página de resultados.

    p.mb-5(data-aos="fade-right") Hay un error bastante común y es referirse al SEM única y exclusivamente como la optimización de los resultados de pago dentro de los buscadores, el SEM o #[em marketing] de buscadores es el resultado de la suma del posicionamiento natural o también llamado SEO (que recién se estudió) y el PPC o pago por #[em clic], que comprende las técnicas de manejo de (enlaces patrocinados, publicidad de #[em display], #[em mobile ads], campañas de video y social ads).

    .BGIMG05.px-md-5.px-4.mb-5
      .row.justify-content-center
        .col-lg-6
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/tema4/img16.png' alt="Imagen decorativa")
    
    p.mb-5(data-aos="fade-right") De esta forma se puede puntualizar que el SEM es la combinación de métodos y técnicas que contribuyen al óptimo posicionamiento de una página #[em web] o contenido en los resultados de los buscadores, con el objetivo de lograr que sean encontrados por los potenciales clientes o usuarios.

    .row.justify-content-start.mb-5
      .col-auto(data-aos="fade-right")
        .BGT03.p-2
          .h4.mx-3.mb-0 Características del SEM
    
    p.mb-5(data-aos="fade-right") Sabiendo que el #[em marketing] de buscadores es una poderosa herramienta, que debe estar incluida en cualquier estrategia digital, ahora va a hacer un barrido por las principales características de este, a fin de comprenderlo mejor.

    .BGIMG03.p-4.mb-5(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            .h4 Altamente medible
            p.mb-5 Esta técnica de mercadeo proporciona muchísima información acerca de los visitantes y su comportamiento al llegar a su sitio. Esta información es recomendada y estudiada por medio de herramientas de analítica de datos.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema4/img17.svg' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            .h4 Estructura y los contenidos
            p.mb-5 El contenido de la página #[em web] y la estructura cumple una función relevante en el propósito de colocarse en las primeras posiciones de los buscadores.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema4/img18.svg' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            .h4 Flexibilidad
            p.mb-5 Una de las características más apreciadas del SEM es que otorga capacidad de decisión sobre qué, cuánto y dónde, es decir, se puede decidir cuánto se desea invertir, cuáles serán las palabras clave con las que será identificado y localizado en la #[em web] y finalmente, a qué página de destino o #[em landing page] se dirigirá el usuario.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema4/img19.svg' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            .h4 Palabras clave
            p.mb-5 En SEM se puede posicionar un ilimitado número de palabras clave, siendo conveniente que estas tengan relación con su contenido o servicio, al mismo tiempo que habrá que definir las palabras negativas por las que no se quiere que lo identifiquen.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema4/img20.svg' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            .h4 Personalización del mensaje
            p.mb-5 Podrá decidir el tipo de mensaje que quiere que aparezca en los buscadores y crear tantas versiones como quiera.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema4/img21.svg' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            .h4 Previsión de resultados
            p.mb-5 Dependiendo de la inversión y el CPC (coste por #[em clic]) de cada palabra clave de la campaña, podrá determinar cuáles serán los posibles resultados o visitas que obtendrá.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema4/img22.svg' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            .h4 Retorno de inversión
            p.mb-5 En SEM, si las campañas se han planificado bien, es posible obtener un retorno de inversión bastante rápido.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema4/img23.svg' alt="Imagen decorativa")

    p.mb-5(data-aos="fade-right") Además de las características mencionadas es importante en este punto repasar algunos de los términos comunes en la estrategia SEM, con el propósito de comprender el contexto general de las campañas.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
        LineaTiempoD.color-acento-botones
          p.text-small(numero="1" titulo="<em>Clic</em>") Es la acción de pulsar cualquier botón o enlace con el puntero del #[em mouse]. Esta acción referida al SEM se da al pinchar un anuncio o resultado de búsqueda para ser redirigido a una página #[em web].
          p.text-small(numero="2" titulo="CPC") Esta es la sigla de “Costo por #[em Clic]”, y es el valor que se paga cada vez que el usuario hace #[em clic] en su anuncio.
          p.text-small(numero="3" titulo="CTR") Esta sigla corresponde a “#[em Clic Through Rate]”, y es el porcentaje de #[em clics] que consigue un anuncio frente al total de impresiones que ha tenido.
          p.text-small(numero="4" titulo="<em>Display</em>") Formato de anuncios de carácter visual que se muestran en #[em webs, blogs] y redes publicitarias.
          p.text-small(numero="5" titulo="<em>Landing page</em>") Es la página de destino de una campaña, en la que terminará el usuario que hace #[em clic] en un anuncio.
          p.text-small(numero="6" titulo="Optimización") Proceso de mejorar la calidad y rendimiento de las campañas en los resultados de los buscadores.
          p.text-small(numero="7" titulo="Palabra clave") Términos o frases que seleccionará con el objeto de vincular su #[em site] a un determinado contenido y por lo tanto, mostrar sus anuncios en materias relacionadas con estas.
          p.text-small(numero="8" titulo="RoI") Es el llamado retorno de la inversión, que resulta de comparar el beneficio obtenido con la inversión realizada.
      .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema4/img24.svg' alt="Imagen decorativa")

    .row.justify-content-start.mb-5
      .col-auto(data-aos="fade-right")
        .BGT03.p-2
          .h4.mx-3.mb-0 <em>Publicidad en buscadores</em>
    
    p(data-aos="fade-right") La publicidad en buscadores o SEM que se ha venido esbozando es denominada también PPC (pago por #[em clic]), debido al modelo de cobro utilizado por las plataformas. Esta hace referencia a que el anunciante paga por cada #[em clic] que los consumidores hacen en sus anuncios. 
    p.mb-5(data-aos="fade-right") Esta forma de recaudación tiene grandes ventajas, ya que supone que si alguien da #[em clic] a un anuncio es porque realmente está interesado en el producto y aunque no asegura la venta, impacta al posible cliente en el momento clave del ciclo de compra, lo que la convierte en un método bastante efectivo. Adicionalmente, brinda una gran facilidad para medir y evaluar el rendimiento de las campañas. Revise más información a continuación:

    TabsC.color-primario.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Google AdWords")
        .row.justify-content-center
          .col-lg-7.order-lg-1.order-2
            p.mb-0 La plataforma de PPC de Google se ha convertido en la plataforma de referencia debido al liderazgo que ejerce el buscador en casi todo el mundo. Su éxito ha forzado a la unión de sus dos principales competidores (Bing y Yahoo!), quienes han literalmente copiado el modelo Google.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema4/img25.jpg' alt="Imagen decorativa")
      .py-3.py-md-4(titulo="Palabras clave")
        .row.justify-content-center
          .col-lg-7.order-lg-1.order-2
            p.mb-0 Al igual que en el SEO, este modelo publicitario se basa en la elección de palabras clave relevantes y descriptivas del producto, las necesidades que satisface o sus momentos de consumo, a fin de captar la atención de todos los prospectos (#[em leads]) que están considerando comprar o explorando canales de distribución más baratos para adquirirlo.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema4/img26.jpg' alt="Imagen decorativa")
      .py-3.py-md-4(titulo="Similitud SEO")
        .row.justify-content-center
          .col-lg-7.order-lg-1.order-2
            p Otra similitud respecto al SEO se encuentra en el formato de los anuncios, textos breves similares a los anuncios por palabras tradicionales en la prensa, que también son muy parecidos a los títulos y las metadescripciones que se redactan para optimizar el posicionamiento orgánico de las páginas #[em web].
            p.mb-0 Y quizás la gran diferencia deriva del carácter pago del SEM, ya que a diferencia del SEO opera a corto plazo y ofrece resultados inmediatos.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema4/img27.jpg' alt="Imagen decorativa")
      .py-3.py-md-4(titulo="Sinergia entre SEM y SEO")
        .row.justify-content-center
          .col-lg-7.order-lg-1.order-2
            p Los contextos mencionados hacen que existan fuertes sinergias entre SEO y SEM, ya que el segundo da la posibilidad de probar de forma inmediata nuevas palabras clave que, de ser rentables, se pueden incorporar a su estrategia SEO a largo plazo, al mismo tiempo que permite superar las limitaciones del SEO cuando necesita reaccionar de forma rápida a un cambio de demanda o a una estacionalidad y no está posicionado en los resultados orgánicos.
            p.mb-0 Por tanto, se trata de un área crítica para cualquier proyecto de #[em marketing] #[em online] y debe estar perfectamente coordinado con el SEO para extraer el máximo valor de ambas fuentes de tráfico.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema4/img28.jpg' alt="Imagen decorativa")

    p.mb-5(data-aos="fade-right") Por tanto, se trata de un área crítica para cualquier proyecto de #[em marketing] #[em online] y debe estar perfectamente coordinado con el SEO para extraer el máximo valor de ambas fuentes de tráfico.

    .row.justify-content-start.mb-5
      .col-auto(data-aos="fade-right")
        .BGT03.p-2
          .h4.mx-3.mb-0 <em>Publicidad display</em>
    
    p.mb-5(data-aos="fade-right") El término #[em display] hace referencia a las campañas de publicidad #[em online], que se fundamentan en banners. Un banner es un formato digital que consiste en la inclusión de una pieza gráfica dentro de una sección específica de una página #[em web] externa, que tiene alto tráfico (#[em blogs], prensa, sitios de información). Esta característica permite lograr el objetivo de mostrar el anuncio y atraer la atención del prospecto hacia la marca del anunciante, para posteriormente dirigirlo hacia una página de destino en la que puedan realizar una conversión: comprar, suscribirse o solicitar información, entre otras posibilidades.

    .BGIMG01.px-md-5.px-4.mb-5
      .row.justify-content-center
        .col-lg-8
          .h4.text-center Tamaños #[em banner display]
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/tema4/img29.svg' alt="Imagen decorativa")
            figcaption Nombre: <span style="font-weight: 400">Tamaños avisos #[em display]</span>

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
        p Es comúnmente aceptado en el medio que la publicidad de #[em display] es una excelente herramienta para impulsar el conocimiento de marca y diferentes estudios vinculan las campañas de #[em branding], basadas en banners con incrementos de tráfico directo y las búsquedas de marca.
        p Una de las claves del éxito de este formato es la correcta segmentación de las audiencias, ya que su efectividad depende en gran medida de que el contenido sea altamente relevante con relación a los productos y servicios promocionados.
        .cajon.color-primario.p-4
          p De acuerdo con su diseño, se puede hablar de banners estáticos (texto, imágenes o una combinación de ambos) o dinámicos (video, audio, animaciones, también conocidos como #[strong Rich Media Ads]).
          p.mb-0 Su tamaño se mide en pixeles y dependiendo de su tamaño y ubicación tienen un mayor o menor coste y eficacia. Las medidas más utilizadas se muestran en la ilustración.
      .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema4/img30.jpg' alt="Imagen decorativa")

    p.mb-5(data-aos="fade-right") Por su ubicación y uso los más conocidos son:

    .BGIMG05.px-md-5.px-4.mb-4
      .row.justify-content-center
        .col-lg-8(data-aos="zoom-in")
          ImagenInfograficaB.color-primario
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema4/img31.svg')

            div(x="10%" y="1.5%" tooltip="Click para leer mas..." numero="1")
              img(src='@/assets/curso/tema4/img32.svg' alt="Imagen decorativa")
            div(x="48%" y="1.5%" tooltip="Click para leer mas..." numero="2")
              img(src='@/assets/curso/tema4/img33.svg' alt="Imagen decorativa")
            div(x="80.5%" y="1.5%" tooltip="Click para leer mas..." numero="3")
              img(src='@/assets/curso/tema4/img34.svg' alt="Imagen decorativa")
            div(x="26%" y="98%" tooltip="Click para leer mas..." numero="4")
              img(src='@/assets/curso/tema4/img35.svg' alt="Imagen decorativa")
            div(x="53%" y="98%" tooltip="Click para leer mas..." numero="5")
              img(src='@/assets/curso/tema4/img36.svg' alt="Imagen decorativa")
            div(x="76%" y="98%" tooltip="Click para leer mas..." numero="6")
              img(src='@/assets/curso/tema4/img37.svg' alt="Imagen decorativa")

    separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.3 #[em Social media]
    
    p.mb-5(data-aos="fade-right") Continuando con el recorrido por el escenario del plan de mercadeo digital otro de los componentes fundamentales es el conocido como “#[em social media]”. Lo primero que hay que puntualizar es que #[em social media] no es igual a redes sociales. Las redes sociales son una parte de este engranaje; pero este se complementa con blogs, foros, marcadores, geolocalización entre otros medios. Vea algunos de ellos.

    .row.justify-content-start.mb-5
      .col-auto(data-aos="fade-right")
        .BGT03.p-2
          .h4.mx-3.mb-0 <em>Medios sociales</em>
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
        p Se pueden describir los medios sociales como agrupaciones digitales en las que las personas interactúan acorde a relaciones como amistad, parentesco, conocimientos o intereses comunes. De alguna forma son réplicas del ámbito material que a través de una plataforma tecnológica recrean el vínculo entre individuos, facilitando la interacción y el florecimiento de nuevos contactos. A continuación, estudiaremos un poco sobre los medios sociales.
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Debido a su uso masivo, estas redes se han convertido en un efectivo canal de comunicación, promoción, ventas y atención al cliente. Plataformas como Facebook, Instagram, WhatsApp, Twitter o TikTok, por mencionar algunas se han convertido en elementos fundamentales de cualquier estrategia digital, tanto para la efectiva difusión de contenidos y mensajes corporativos, como para la gestión de la reputación #[em online].
        p.mb-0 En este punto es importante mencionar que la sola apertura de perfiles en redes sociales no constituye una parte de un plan de Mercadeo Digital, considerando importante en este apartado el manejo y el enfoque que se dé a las mismas, el cual debe obedecer a un objetivo claro para cada red social.
      .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema4/img38.jpg' alt="Imagen decorativa")

    .row.justify-content-center.mb-5
      .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema4/img39.jpg' alt="Imagen decorativa")
      .col-lg-6(data-aos="fade-left")
        p Al profesional encargado de esta labor se le conoce   como #[em Community manager] y será el encargado de establecer una estrategia de contenido clara, crear un plan de comunicación con un tono adecuado al público objetivo, y en líneas generales gestionar la comunidad de seguidores de la marca.
        p.mb-0 En este contexto cualquier servicio tecnológico que permita a los usuarios mantener estas relaciones e interactuar podría ser considerado una red social, en la que sus miembros pasan de ser consumidores pasivos de contenido a creadores y editores del mismo, logrando llegar a audiencias masivas. Aunque existen diferentes tipos de redes, se pueden identificar algunas características comunes como:

    .row.justify-content-center.mb-5
      .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema4/img40.svg' alt="Imagen decorativa")
      .col-lg-6(data-aos="fade-left")
        AcordionA.mb-5(tipo="b" clase-tarjeta="BGIMG04" data-aos="zoom-in")
          div(titulo="Comunidad")
            p.mb-0 Como se mencionó, estos medios sociales posibilitan y favorecen la formación de comunidades de usuarios que comparten intereses y objetivos comunes.
          div(titulo="Conectividad")
            p.mb-0 Los medios sociales en general, admiten publicar contenido de otros medios y que sus propios contenidos sean difundidos en otras plataformas, generando más conexión social.
          div(titulo="Conversación")
            p.mb-0 A diferencia de los medios tradicionales que aportan información unidireccionalmente, en los medios sociales la comunicación es instantánea y bidireccional.
          div(titulo="Participación")
            p.mb-0 Aunque el contexto es comunitario, estas redes promueven los aportes individuales, especialmente los que significan respuestas a asuntos planteados por la misma comunidad.
          div(titulo="Transparencia")
            p.mb-0 La participación de los usuarios es pública y fácil de consultar, replicar y compartir.

    .BG06.p-4.mb-5(data-aos="flip-up")
      p.mb-0 Establecer relaciones, comentar o cooperar en favor de una causa o interés común son actividades humanas que apenas han sufrido pequeños cambios desde el origen de los tiempos. Se puede, entonces, afirmar que los medios sociales al permitir que los seres humanos conecten entre sí de forma natural han permitido superar barreras y cerrar brechas. La tecnología ha ayudado también a su escalamiento a escala global, motivo por el cual las redes sociales han tenido un boom tan importante en los últimos años.
    
    p(data-aos="fade-right") En la actualidad, actos como consultar la opinión de otros usuarios antes de hacer una compra, expresar una queja pública por la mala atención al cliente que le han dispensado u opinar frente a un tema son acciones del diario vivir y que, por ende, se desarrollan de forma natural.
    p.mb-5(data-aos="fade-right") Las plataformas del ecosistema social evolucionan de forma acelerada; pero aún se puede citar las principales categorías que lo conforman. Revise a continuación las principales características de la publicidad en #[em display].

    .BGIMG03.p-4.mb-5(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            .h4 #[em Blogs]
            p Estos son los pioneros de los medios sociales y se basan en permitir a personas publicar contenido en Internet, sin necesidad de gran experticia técnica. Por lo general son temáticos y muestran al visitante las publicaciones en orden cronológico, con la más reciente primero.
            p.mb-0 Los #[em blogs] maduros logran contenidos curados y de gran calidad, que los convierten en referentes de un tema, lo que les permite monetizar la información. En esta categoría se puede incluir los videoblogs y los podcast, ya que sin tener en cuenta el formato de emisión, su concepto y forma comunicativa es prácticamente la misma. Las herramientas Blogger y Wordpress destacan como las más populares.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema4/img41.png' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            .h4 Comunidad de contenido
            p En esta categoría se clasifican sitios #[em web] que funcionan bajo la figura de colaboración comunitaria. Aquí se tiene como exponentes a portales como: 
            ul.lista-ul--color.mb-0
              li
                i.fas.fa-check-circle(style="color: #EB6F2D;")
                | Flirck: fotografías.
              li
                i.fas.fa-check-circle(style="color: #EB6F2D;")
                | YouTube o Vimeo: videos.
              li
                i.fas.fa-check-circle(style="color: #EB6F2D;")
                | Slideshare: presentaciones e infografías.
              li
                i.fas.fa-check-circle(style="color: #EB6F2D;")
                p.mb-0 Menéame o Delicious: noticias y #[em links].
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema4/img42.png' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            .h4 Foros
            p.mb-0 Estos fueron las primeras formas de comunidad #[em online], básicamente son páginas destinadas al debate y/o la información y asistencia mutua entre usuarios, que frecuentemente se agrupan alrededor de temas e intereses específicos. Precedieron a las redes sociales y pueden considerarse la semilla de estas. Hoy en día se usan más como repositorios de conocimiento.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema4/img43.png' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            .h4 #[em Microblogs]
            p.mb-0 Son #[em blogs] de formato ligero en los que la condición principal es que el número de caracteres en cada mensaje no supere los 280. Estas publicaciones pequeñas permiten fotos, videos, #[em links] (a través de URL acortadas). Son muy apreciadas debido a su brevedad e inmediatez, lo que les permite ser una fuente de información fresca y dinámica. Twitter es el líder indiscutible entre este tipo de servicios, que ha experimentado un rápido desarrollo de la mano de los #[em smartphones].
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema4/img44.png' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            .h4 Redes de localización
            p.mb-0 Una vez más de la mano de los #[em smartphones] han nacido estas redes que permiten compartir la ubicación mediante el GPS del dispositivo móvil, incluyendo la opinión del usuario y los consejos sobre dicha ubicación. En esta categoría Foursquare es el líder, aunque las grandes redes como Facebook e Instagram han incluido este formato.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema4/img45.png' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            .h4 Redes sociales
            p.mb-0 Plataformas de socialización que permiten crear perfiles personales y conectar su actividad con la de amigos, familiares o desconocidos con intereses comunes, para conversar y compartir contenidos. Las redes sociales pueden ser generalistas u horizontales como Facebook, profesionales como LinkedIn o Xing y verticales o de nicho como Minube o Unience.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema4/img46.png' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            .h4 #[em Wikis]
            p.mb-0 Se trata de #[em webs] colaborativas donde cualquier visitante puede editar la información para ampliarla o actualizarla, desarrollando en el proceso obras colaborativas y generando comunidades de editores. El ejemplo más conocido es Wikipedia.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema4/img47.png' alt="Imagen decorativa")

    .row.justify-content-center.mb-5
      .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema4/img48.jpg' alt="Imagen decorativa")
      .col-lg-6(data-aos="fade-left")
        p En este escenario, en el cada miembro de la red es a su vez un medio con capacidad de producir y difundir información entre su red de contactos, es recomendable que los materiales de comunicación sean planificados en su estructura y formato, para ser realmente eficaces. Para lograr visibilidad en redes sociales es necesario definir primero el área de relevancia en la que se quiere posicionar, a fin de elaborar mensajes, contenidos y objetos sociales que impacten y hagan que la gente quiera interactuar.
        p.mb-0 A continuación, se propone un esquema sencillo de la ruta que debería seguir un objeto social para causar el impacto deseado.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.order-lg-1.order-2
        .h4.mb-5(data-aos="fade-right") Ruta del objeto social
        ol.lista-ol--cuadro.lista-ol--separador
          li(data-aos="fade-right") 
            .lista-ol--cuadro__vineta(style="background-color: #EB6F2D")
              span 1
            | Analizar las tendencias en las conversaciones que ya se están produciendo y determinar qué es lo que funciona.
          li(data-aos="fade-right") 
            .lista-ol--cuadro__vineta(style="background-color: #EB6F2D")
              span 2
            | Combinar elementos racionales y emocionales, a fin de crear vínculos fuertes y fidelizar a la audiencia.
          li(data-aos="fade-right") 
            .lista-ol--cuadro__vineta(style="background-color: #EB6F2D")
              span 3
            p.mb-0 Establecer el aporte estimado a la consecución de los objetivos de #[em branding]. 
          li(data-aos="fade-right") 
            .lista-ol--cuadro__vineta(style="background-color: #EB6F2D")
              span 4
            | Identificar un atributo que le haga llamar la atención de la comunidad. ¿Qué reacción quiere provocar?, ¿cuál es la contribución para consolidar la relación entre la marca y la comunidad?
          li(data-aos="fade-right") 
            .lista-ol--cuadro__vineta(style="background-color: #EB6F2D")
              span 5
            | Determinar ¿cuál es la mejor forma de incentivar su difusión para que alcance viralidad?
          li(data-aos="fade-right") 
            .lista-ol--cuadro__vineta(style="background-color: #EB6F2D")
              span 6
            | Optimizar la estructura, formato y temática de los contenidos, adaptándolos al momento y contexto concretos para que satisfagan las necesidades y expectativas de su público. 
          li(data-aos="fade-right") 
            .lista-ol--cuadro__vineta(style="background-color: #EB6F2D")
              span 7
            | Localizar un influencer que puede amplificar el alcance de su mensaje, darle credibilidad y adaptarlo.
      .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema4/img49.svg' alt="Imagen decorativa")

    p.mb-5(data-aos="fade-right") Como se evidencia en el contenido anterior, el mensajero es importante, en pos de que el mensaje alcance la viralidad deseada. Por tanto, hay que concentrar esfuerzos en áreas clave y es preferible no atacar el mercado general, si no en su lugar, dirigirse a influenciadores que ayuden a amplificar la repercusión del mensaje, otorgando credibilidad y acondicionándolo para que tenga aceptación masiva. El siguiente paso, por tanto, será identificar a las personas adecuadas para impulsar la difusión del mensaje. 
    
    .BG06.p-4.m-5(data-aos="fade-right")
      p.mb-0 En el libro “La clave del éxito” de Malcolm Gladwell se definen tres perfiles que juegan un papel fundamental para que una idea, producto o contenido se convierta en un fenómeno viral, los cuales se presentan a continuación:

    TabsC.color-primario.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Conectores")
        .row.justify-content-center
          .col-lg-7.order-lg-1.order-2
            p.mb-0 Persona muy sociable e integrada en diversos círculos entre los que ejerce de vinculo común. Por tanto, no solo conoce mucha gente, sino que además conoce gente que se mueve en distintos círculos sociales.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema4/img50.jpg' alt="Imagen decorativa")
      .py-3.py-md-4(titulo="<em>Mavens</em>")
        .row.justify-content-center
          .col-lg-7.order-lg-1.order-2
            p.mb-0 La palabra procede del yiddish y significa “el que acumula conocimientos”. Se trata de una persona experta en alguna materia determinada, que disfruta demostrando su conocimiento y ayudando a los demás.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema4/img51.jpg' alt="Imagen decorativa")
      .py-3.py-md-4(titulo="Vendedores natos")
        .row.justify-content-center
          .col-lg-7.order-lg-1.order-2
            p.mb-0 Persona que respalda y transmite el mensaje a otras personas, persuadiendo a los indecisos para que den el paso.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema4/img52.jpg' alt="Imagen decorativa")

    p.mb-5(data-aos="fade-right") Otro ingrediente es el contexto, el cual influirá en el comportamiento y en la aceptación o rechazo de la propuesta. La presión social es un factor que, sin duda interviene en la toma de decisiones y, la aprobación social de una conducta impulsa a que otros la imiten, por lo que convertir un mensaje o un producto en una experiencia social logrará magnificar su difusión.

    .row.justify-content-start.mb-5
      .col-auto(data-aos="fade-right")
        .BGT03.p-2
          .h4.mx-3.mb-0 <em>Buzz marketing y reputación online</em>

    p(data-aos="fade-right") El #[em buzz marketing] en un contexto amplio consiste en hacer que la gente hable de la marca e incentivar que los usuarios descubran información de los productos y/o servicios mediante los comentarios y referencias de otros usuarios en plataformas sociales de Internet, es decir, se habla de fomentar la creación y difusión de contenido generado por usuarios (UGC) en relación con la marca. Esta naturaleza dispersa hace que el #[em buzz marketing] esté muy vinculado al monitoreo de la reputación #[em online] (ORM), ya que esta es la única forma de medirlo y analizarlo.

    .row.justify-content-center.mb-5
      .col-lg-10
        .BGR01.p-4(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-sm-2.col-3.px-lg-4
              img(src="@/assets/curso/temas/img02.svg" alt="Imagen decorativa")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Ejemplo de reputación #[em online]
                  p.mb-0 Con el fin de tener mayor conocimiento sobre reputación #[em online], se invita a revisar el siguiente PDF:
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Ejemplo_de_reputación_online.pdf')" target="_blank" type="application/pdf")
                    span Descargar
                    i.fas.fa-link

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
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
