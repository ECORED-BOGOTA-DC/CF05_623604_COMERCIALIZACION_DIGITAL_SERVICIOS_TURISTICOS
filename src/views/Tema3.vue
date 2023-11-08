<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 #[em Buyer] persona

    .row.justify-content-center.mb-4
      .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img01.jpg' alt="Imagen decorativa")
      .col-lg-6(data-aos="fade-left")
        p Hasta ahora este recorrido se ha centrado en el análisis de la empresa tanto interno, como externo, en determinar objetivos y alrededor de ellos, crear estrategias con base en nuestras fortalezas. También se ha logrado ver cómo esbozar un plan de negocio de forma sintética, pero clara. Y ahora ha llegado el momento más importante para el éxito de cualquier empresa o emprendimiento y es conocer al cliente.
        p.mb-0 Después de todo se puede tener una empresa con el mejor producto, los mejores recursos; pero si no hay clientes no habrá éxito. La buena noticia es que, con seguridad, el cliente que se quiere y se necesita está tal vez más cerca de lo que se cree, lo imperante aquí es poder definirlo para encontrarlo y conquistarlo. Y para esto la industria del mercadeo ha acuñado el término “#[em buyer] persona”, va a ver de qué se trata.

    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Definición de #[em buyer] persona
    
    p.mb-5(data-aos="fade-right") Hay múltiples definiciones de este concepto, pero la más interesante es la que propone Siqueira, en el #[em blog] de RD Station, y que dice “#[em buyer] persona es la representación ficticia de tu cliente ideal. Está basada en datos reales sobre el comportamiento y las características demográficas de tus clientes, así como en una creación de sus historias personales, motivaciones, objetivos, retos y preocupaciones” (Siqueira, 2021).

    .row.justify-content-center.mb-5
      .col-lg-10
        .BGR01.p-4(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-sm-2.col-3.px-lg-4
              img(src="@/assets/curso/temas/img02.svg" alt="Imagen decorativa")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Generador de #[em buyer] personas
                  p.mb-0 Con el fin de tener mayor conocimiento sobre el generador #[em buyer] personas, se invita a revisar el siguiente sitio web:
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.hubspot.es/make-my-persona" target="_blank")
                    span Ingresar
                    i.fas.fa-link
    
    p.mb-5(data-aos="fade-right") De igual forma, se hace relevante en este punto hacer diferencia entre #[em buyer] persona y público objetivo. Estos dos términos de mercadeo suelen confundirse muy a menudo, pero no son lo mismo. Vea por qué en un ejemplo.

    .row.justify-content-center.mb-4
      .col-lg-5.mb-lg-0.mb-4.zindex-1.px-4(data-aos="fade-right")
        .arrow-down-a.BGS06.p-4
          .h3.text-center.mx-5.mb-0 Público objetivo
        .BGS17.h-100.p-xl-5.p-4
          p Hombres y mujeres.
          p #[strong Edad]: 25 a 60 años.
          p Solteros.
          p Profesionales.
          p #[strong Ingresos]: promedios mensuales de $3.500.000.
          p.mb-5 #[strong Perfil]: disfrutan de una gastronomía bien elaborada, que trabajan o residen en el área de la tienda física.
          p El producto o servicio va dirigido a un público amplio.
          .h5 Definición específica
          .h5 Detalla hábitos
          .h5.mb-0 Consumidor ideal
      .col-lg-1.zindex-3.img-01.d-lg-flex.d-none(data-aos="flip-up")
        img(src='@/assets/curso/tema3/img02.svg' alt="Imagen decorativa")
      .col-lg-5.zindex-2.px-4(data-aos="fade-left")
        .arrow-down-a.BGS10.p-4
          .h3.text-center.text-white.mx-5.mb-0 #[em Buyer] persona
        .BGS17.h-100.p-xl-5.p-4
          p Pedro tiene 30 años
          p #[strong Profesión]: médico
          p #[strong Trabaja]: en una clínica cerca de la tienda física. 
          p.mb-5 #[strong Perfil]: por su ocupación tiene tiempo limitado; pero le preocupa alimentarse bien. Está buscando un establecimiento en el cual pueda encontrar alimentos elaborados de forma natural, que ofrezca menús balanceados y en el que pueda disfrutar sus alimentos de forma ágil y rápida.
          p Representación gráfica de un cliente ideal, basado en el comportamiento y las características del público objetivo.
          .h5 Grupo amplio
          .h5.mb-0 No describe hábito

    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Importancia
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.order-lg-1.order-2
        p(data-aos="fade-right") La determinación de #[em buyer] persona es fundamental dentro de una estrategia de mercadeo digital y en la creación de contenido. Se establece #[em buyer] persona a fin de enviar el mensaje correcto a los individuos correctos y así generar mayores posibilidades de éxito.
        p(data-aos="fade-right") De otro lado, si el #[em buyer] persona no está definido puede suceder cosas como: 
        ul.lista-ul--color.mb-0
          li(data-aos="fade-right")
            i.fas.fa-check-circle(style="color: #EB6F2D;")
            | Enviar mensajes en español a personas que hablan inglés.
          li(data-aos="fade-right")
            i.fas.fa-check-circle(style="color: #EB6F2D;")
            | Promocionar cortes de carne a personas vegetarianas.
          li(data-aos="fade-right")
            i.fas.fa-check-circle(style="color: #EB6F2D;")
            | Ofrecer un producto pensado a personas del grupo A, a personas del grupo C.
          li(data-aos="fade-right")
            i.fas.fa-check-circle(style="color: #EB6F2D;")
            | Postear publicaciones en ubicaciones equivocadas.
      .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema3/img03.jpg' alt="Imagen decorativa")
      
    p.mb-5(data-aos="fade-right") En esencia, al entender y personalizar su #[em buyer] persona se puede comunicar eficazmente el producto correcto, en la ubicación correcta y a los clientes que realmente lo requieren. Esto hará que las campañas sean más efectivas, para ello es importante saber cómo etiquetar imágenes, tal como se presenta en el siguiente recurso:

    .BGM13.px-md-5.px-4.mb-4(data-aos="zoom-in")
      .row.justify-content-center.align-items-center
        .col-lg-7
          .tabla-a.color-secundario
            table(alt="Texto alternativo tabla")
              thead(style="border-color: transparent")
                tr
                  th(style="background-color: #3D672F;" colspan="2").text-white Cómo etiquetar imágenes
              tbody
                tr
                  td(style="background-color: #E6F4FD;" colspan="2").text-bold ¿La imagen contiene texto?
            table
              thead(style="border-color: transparent") 
                tr
                  td(style="background-color: #F5FDDC; width: 32%;" rowspan="4") #[strong No]
                    p.mb-0 Continue
                  td(style="background-color: #FFF; width: 68%;") #[strong Sí]
                    p … Y el texto también está presente como texto real cercano. 
                    p.mb-0 Utilice un atributo #[strong #[em alt]] vacío.
                tr
                  td(style="background-color: #F6F6F6;") … Y el texto solo se muestra para efectos visuales.
                    p.mb-0 Utilice un atributo #[strong #[em alt]] vacío.
                tr
                  td(style="background-color: #FFF;") … Y el texto tiene una función específica, por ejemplo, es un icono. 
                    p.mb-0 Utilice el atributo #[strong #[em alt]] para comunicar la función de la imagen.
                tr
                  td(style="background-color: #F6F6F6;") … Y el texto de la imagen no está presente de otra manera. 
                    p.mb-0 Utilice el atributo #[strong #[em alt]] para incluir el texto de la imagen. 
              tbody
                tr
                  td(style="background-color: #E6F4FD;" colspan="2").text-bold ¿Se utiliza la imagen en un enlace o en un botón?, ¿sería difícil o imposible entender qué hace el enlace o el botón si la imagen no estuviera allí?
                tr
                  td(style="background-color: #F5FDDC;") #[strong No]
                    p.mb-0 Continue
                  td(style="background-color: #FFF;") Sí 
                    p.mb-0 Utilice el atributo #[strong #[em alt]] para comunicar el destino del enlace o la acción realizada.
                tr
                  td(style="background-color: #E6F4FD;" colspan="2").text-bold ¿La imagen aporta significado a la página o al contexto actual?
                tr
                  td(style="background-color: #F5FDDC;" rowspan="4") #[strong No]
                    p.mb-0 Continue
                tr
                  td(style="background-color: #FFF;") Sí
                    p ... y es un simple gráfico o fotografía. 
                    p.mb-0 Utilice una breve descripción de la imagen de una manera que transmita ese significado en el atributo #[strong #[em alt]].
                tr
                  td(style="background-color: #F6F6F6;") … y es un gráfico o información compleja. 
                    p.mb-0 Incluya la información contenida en la imagen en otra parte de la página.
                tr
                  td(style="background-color: #FFF;") … y muestra contenido que es redundante al texto real cercano. 
                    p.mb-0 Utilice un atributo #[strong #[em alt]] vacío.
                tr
                  td(style="background-color: #E6F4FD;" colspan="2").text-bold ¿La imagen es puramente decorativa o no está pensada para el usuario?
                tr
                  td(style="background-color: #F5FDDC;") #[strong No]
                    p.mb-0 Continue
                  td(style="background-color: #FFF;") Sí
                    p.mb-0 Utilice un atributo #[strong #[em alt]] vacío.
                tr
                  td(style="background-color: #F5FDDC;" colspan="2") ¿El uso de la imagen no se menciona arriba o no está claro qué texto alternativo utilizar?
                tr
                  td(style="background-color: #F5FDDC;")
                  td(style="background-color: #FFF;") Este árbol de decisiones no cubre todos los casos.
                
    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Tipos de #[em buyer] persona

    p.mb-5(data-aos="fade-right") Bien, antes de aprender cómo delimitar los #[em buyer] persona es pertinente mencionar que ellos no son siempre los que toman la decisión de compra del producto o servicio y en este sentido, se han identificado tres perfiles que se verán a continuación.         

    TabsA.color-acento-botones.mb-4(data-aos="zoom-in")
      .tarjeta.BG18.p-4(titulo="Influenciador")
        .row.justify-content-center
          .col-lg-8.order-lg-1.order-2
            p.mb-0 Es una persona que contribuye positiva o negativamente en la decisión de compra con base en su opinión. Es, por ende, de gran importancia conocer quiénes son los influenciadores del #[em buyer] persona, ya que esto ayudará a decidir con qué #[em blogs] y perfiles en las redes sociales vale la pena contactar para conseguir algún tipo de colaboración.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema3/img04.svg' alt="Imagen decorativa")
      .tarjeta.BG18.p-4(titulo="Decisor")
        .row.justify-content-center
          .col-lg-8.order-lg-1.order-2
            p.mb-0 Es en quien recae la decisión final de compra. Es el caso más común, especialmente en los procesos B2C (Business to costumer).
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema3/img05.svg' alt="Imagen decorativa")
      .tarjeta.BG18.p-4(titulo="Prescriptor")
        .row.justify-content-center
          .col-lg-8.order-lg-1.order-2
            p.mb-0 Es una persona que recomienda el producto. Es una persona que recomienda el producto. Un ejemplo clásico es el de un médico, quien es prescriptor de un determinado medicamento.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema3/img06.svg' alt="Imagen decorativa")
                  
    separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.4 Delimitar #[em buyer] persona

    .row.justify-content-center.mb-5
      .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img07.svg' alt="Imagen decorativa")
      .col-lg-6
        p(data-aos="fade-left") Cuando se define un #[em buyer] persona se está determinando lo que hace y/o piensa un consumidor al momento de enfrentar su necesidad o motivación de compra, y si se parte de la base de que cada persona en su individualidad piensa y actúa de forma diferente, entonces, se puede inferir que definir a ese cliente ideal no será un proceso fácil.
        .BGS04.p-4(data-aos="fade-left")
          p.mb-0 A continuación, se proponen unos pasos posteados en el blog “#[strong #[em We are marketing]]”, que permiten construir un #[em buyer] persona de una forma sencilla (Peñalver, 2020).

    AcordionA.mb-5(tipo="b" clase-tarjeta="BGIMG04" data-aos="zoom-in")
      .row.justify-content-center(titulo="Nombrar al <em>buyer</em> persona")
        .col-lg-7.order-lg-1.order-2
          p Es importante ponerle nombre por dos motivos:
          ol.lista-ol--cuadro.mb-4
            li 
              .lista-ol--cuadro__vineta(style="background-color: #EB6F2D")
                span 1
              | Ayudará a una mejor identificación.
            li 
              .lista-ol--cuadro__vineta(style="background-color: #EB6F2D")
                span 2
              | La marca tendrá más de un arquetipo de cliente ideal.
          p.mb-0 Una campaña de mercadeo puede ir dirigida a varios tipos de #[em buyer] persona que, aunque de diferentes características, pueden estar ambos interesados en el producto o servicio que ofrece la empresa. Por ello, designarlos con un nombre diferente le ayudará a identificarlos mejor.
        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/curso/tema3/img08.svg' alt="Imagen decorativa")
      .row.justify-content-center(titulo="Determina su situación laboral y familiar")
        .col-lg-7.order-lg-1.order-2
          p A la hora de construir un #[em buyer] persona también hay que responder ciertas preguntas:
          ul.lista-ul--color.mb-0
            li
              i.fas.fa-check-circle(style="color: #EB6F2D;")
              | Está activo, es desempleado/a o aún sigue estudiando.
            li
              i.fas.fa-check-circle(style="color: #EB6F2D;")
              | Si trabaja, ¿qué tipo de actividad ejerce?
            li
              i.fas.fa-check-circle(style="color: #EB6F2D;")
              | ¿Cuánto gana mensual y anualmente?
            li
              i.fas.fa-check-circle(style="color: #EB6F2D;")
              | ¿Qué trayectoria laboral ha tenido?
          p Otras cuestiones importantes son las de índole familiar:
          ul.lista-ul--color.mb-0
            li
              i.fas.fa-check-circle(style="color: #EB6F2D;")
              | ¿Tiene hijos y de qué edades?
            li
              i.fas.fa-check-circle(style="color: #EB6F2D;")
              | ¿Está casado/a, separado/a, soltero/a?
            li
              i.fas.fa-check-circle(style="color: #EB6F2D;")
              | ¿Tiene padres mayores?
          p.mb-0 Este tipo de preguntas ayudarán a entender mejor las necesidades del #[em buyer] persona y a definirlo mejor.
        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/curso/tema3/img09.svg' alt="Imagen decorativa")
      .row.justify-content-center(titulo="Define sus datos demográficos")
        .col-lg-7.order-lg-1.order-2
          p Los datos demográficos son un recurso habitual a la hora de crear perfiles en mercadeo. En este apartado deberá incluir datos como la edad, el sexo, la clase social y su ubicación geográfica (¿vive en una gran ciudad o en pueblo?).
          p.mb-0 Esto resulta de utilidad, por ejemplo, a la hora de hacer segmentaciones para poder cualificar mejor a los #[em leads] y hacer estrategias de mercadeo posteriores.
        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/curso/tema3/img10.svg' alt="Imagen decorativa")
      .row.justify-content-center(titulo="Comportamiento en Internet")
        .col-lg-7.order-lg-1.order-2
          p.mb-0 Analizar las conductas habituales de su #[em buyer] persona en entornos digitales es crucial para entender a través de qué canales puede conectar con él. Cuáles son sus intereses, qué tipo de contenido consume. Trate de responder a estas preguntas:
        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/curso/tema3/img11.svg' alt="Muestra texto de las siguientes preguntas:<br>-¿Cómo se comporta en Internet? <br>-¿Es lector/a asiduo/a de blogs? <br>-¿Prefiere contenido multimedia? <br>-¿Usa habitualmente el correo electrónico?<br>-¿Prefiere acciones más directas como llamadas telefónicas?<br>-¿A qué redes sociales, grupos o comunidades pertenece? ")
      .row.justify-content-center(titulo="Define objetivos, retos y sueños")
        .col-lg-7.order-lg-1.order-2
          p.mb-0 El verdadero valor de este arquetipo de cliente ideal reside en que analiza aspectos que, muchas veces, en los perfiles de mercadeo tradicionales se obvian. Se hablan, por ejemplo, de los objetivos, preocupaciones, sueños e ilusiones del usuario o consumidor. Estos aspectos son los que permitirán conectar con él y construir un vínculo más fuerte; por lo tanto, debe trabajar sobre ellos y tratar de definirlos al máximo. Para ello, responda estas preguntas:
        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/curso/tema3/img12.svg' alt="Muestra texto con las siguientes preguntas:<br>¿Qué persigue el buyer persona?<br>¿Qué objetivos pretende alcanzar?<br>¿A que retos ha de enfrentarse?<br>¿Qué sueños no ha podido cumplir aún?<br>¿Pueden los productos o servicios de la empresa hacerle la vida más fácil?<br>¿Qué sueños no ha podido cumplir aún?")
      .row.justify-content-center(titulo="Pasa de las preguntas a la acción")
        .col-lg-7.order-lg-1.order-2
          p.mb-0 Una vez conoce sus motivaciones. Entender cómo su producto o servicio puede ayudarle, ya sea resolviendo el problema, cubriendo una necesidad o mejorando su día a día. Algunas preguntas que debe hacerse en este punto son:
        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/curso/tema3/img13.svg' alt="Muestra texto con preguntas<br>-¿Cómo puede la marca o empresa ayudar al cliente a conseguir sus objetivos?<br>-¿Qué bloqueantes puede tener el potencial cliente a la hora de comprar su producto o servicio?<br>-¿Qué le puede ofrecer la competencia para que elija su producto o servicio en lugar del suyo? <br>-¿Cuál de los productos que ofrece es el que más se adapta al buyer persona? <br>-¿Se puede crear o adaptar un producto o servicio a las necesidades del cliente?")
      .row.justify-content-center(titulo="Póngase en la piel del cliente")
        .col-lg-7.order-lg-1.order-2
          p.mb-0 Al definir y redactar el retrato del #[em buyer] persona hay que incluir sus preocupaciones o pensamientos que la empresa podría solucionar. Algunas ideas pueden ser:
        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/curso/tema3/img14.svg' alt="Muestra texto:<br>-No consigo adelgazar<br>-No encuentro un buen profesor de inglés para mi<br>-Mi ecommerce no está bien posicionado ")
      .row.justify-content-center(titulo="Define las expectativas sobre el producto del <em>buyer</em> persona")
        .col-lg-7.order-lg-1.order-2
          p Si el cliente ideal pudiera formular alguna duda o queja sobre el producto, ¿cuál sería?, ¿el precio?, ¿la calidad?
          p.mb-0 Anticiparse a los posibles inconvenientes o interrogantes del #[em buyer] persona hará que las campañas estén más afinadas y acordes a sus expectativas.
        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/curso/tema3/img15.svg' alt="Imagen decorativa")

    .row.justify-content-start.mb-5
      .col-auto(data-aos="fade-right")
        .BGT03.p-2
          .h4.mx-3.mb-0 <em>Fuentes y herramientas para ayudar a crear a un #[em buyer] persona</em>

    p.mb-5(data-aos="fade-right") Seguramente en este momento, la siguiente pregunta es ¿de dónde se puede obtener la información que se necesita para crear un #[em buyer] persona? Y antes de contestar esa pregunta el mejor consejo es obtener la información de fuentes verificables, ya que, de no ser así, el trabajo efectuado no cumplirá su objetivo. En ese sentido existen varias fuentes fiables que se analizarán a continuación.        

    figure.mb-5(data-aos="zoom-in")
      img(src='@/assets/curso/tema3/img16.svg' alt="Imagen decorativa")            

    p.mb-5(data-aos="fade-right") En el párrafo anterior se revisaron las fuentes primarias o directas de recopilación de información, además de estas existen herramientas tecnológicas que ayudan a recaudar datos. Revíselas a continuación:

    .BGIMG03.p-4.mb-5(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            .h4 Make my persona
            p.mb-5 Es una herramienta de uso gratuito de la plataforma Hubspot, que guía en la creación del perfil de cliente ideal a partir de preguntas concretas. El resultado es un documento de procesador de texto que se puede imprimir y compartir.
            .row.justify-content-center
              .col-auto
                a.boton.color-acento-botones.indicador__container(href="https://www.hubspot.es/make-my-persona" target="_blank")
                  span Hubspot
                  .indicador--click(v-if="mostrarIndicador")
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema3/img17.png' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            .h4 Up close &amp; persona
            p.mb-5 Esta es una herramienta desarrollada por Ardath Albee un líder en la industria, conferencista y consultor en colaboración con MLT Creative una empresa de mercadeo enfocada en el segmento B2B. Esta puede ayudar a crear una imagen de los tipos de clientes más importantes para su negocio.
            .row.justify-content-center
              .col-auto
                a.boton.color-acento-botones.indicador__container(href="https://www.upcloseandpersona.com/" target="_blank")
                  span Upcloseandpersona
                  .indicador--click(v-if="mostrarIndicador")
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema3/img18.png' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            .h4 Personapp
            p.mb-5 Este aplicativo utiliza un marco de referencia sencillo que permite crear y compartir personas de una forma rápida y ligera. Luego, se puede personalizar aún más las creaciones con detalles demográficos, comportamiento de clientes y objetivos de compra a largo plazo. 
            .row.justify-content-center
              .col-auto
                a.boton.color-acento-botones.indicador__container(href="http://personapp.io/" target="_blank")
                  span Personapp
                  .indicador--click(v-if="mostrarIndicador")
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema3/img19.png' alt="Imagen decorativa")

    p.mb-5(data-aos="fade-right") Además de estas y que quizá son también las más conocidas, existen otras herramientas que se conocen como escucha social o #[em social listening], entre ellas se pueden destacar:

    .row.justify-content-center.mb-5
      .col-lg-6.col-sm-10.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta.tarjeta-flip.color-acento-botones.BG19(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/img20.png')})`}")
            .tarjeta-flip__contenido.p-xl-5.p-4
              .row.mb-4
                .col-lg-5.col-auto
                  img(src='@/assets/curso/tema3/img20.svg' alt="Imagen decorativa")
              p Con esta herramienta se puede saber lo que las personas comentan sobre su marca, esta plataforma ofrece acceso en tiempo real a las menciones sobre su marca en Internet, desde redes sociales hasta publicaciones de influencer.
              .row.justify-content-center
                .col-auto
                  a.boton.color-acento-botones.indicador__container(href="https://brand24.com/" target="_blank")
                    span Brand24
                    .indicador--click(v-if="mostrarIndicador")
      .col-lg-6.col-sm-10.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta.tarjeta-flip.color-acento-botones.BG19(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/img21.png')})`}")
            .tarjeta-flip__contenido.p-xl-5.p-4
              .row.mb-4
                .col-lg-5.col-auto
                  img(src='@/assets/curso/tema3/img21.svg' alt="Imagen decorativa")
              p Es una herramienta que genera ideas de contenido y a la vez analiza el contenido que funciona, tanto para nosotros como para los competidores, al facilitar conocer qué es lo que se comparte con base en una temática y lo más compartido, se pueden ver perfiles de personas que han compartido ese contenido.
              .row.justify-content-center
                .col-auto
                  a.boton.color-acento-botones.indicador__container(href="https://buzzsumo.com/" target="_blank")
                    span Buzzsumo
                    .indicador--click(v-if="mostrarIndicador")

    p.mb-5(data-aos="fade-right") Con el uso de estas fuentes y herramientas se podrá recolectar la información necesaria para perfilar los #[em buyer] persona, lo cual es fantástico; pero también lleva al punto donde se tiene mucha información y es hora de que esa información se vuelva relevante. Es por esta razón que el último grupo de herramientas ayuda con la construcción en sí de los perfiles. Vea algunas de ellas.

    TabsC.color-primario.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="CRM y bases de datos")
        .row.justify-content-center
          .col-lg-7.order-lg-1.order-2
            p.mb-0 Si el sistema CRM - Customer Relationship Manager y las bases de datos están suficientemente nutridas, desde allí podrá obtener datos sobre segmentación, perfiles demográficos básicos, preferencias, productos y servicios de interés de los clientes.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema3/img22.jpg' alt="Imagen decorativa")
      .py-3.py-md-4(titulo="Facebook")
        .row.justify-content-center
          .col-lg-7.order-lg-1.order-2
            p.mb-5 Es claro que la plataforma social tiene mucha información sobre todos y su herramienta para la creación de anuncios llamada Facebook Audience Insights, brinda información global sobre dos grupos de personas, los conectados a su página y los que no, desde allí fácilmente se puede buscar personas con intereses y motivaciones similares a las de su público actual. 
            .row.justify-content-center
              .col-auto
                a.boton.color-acento-botones.indicador__container(href="https://facebook.com" target="_blank")
                  span Facebook
                  .indicador--click(v-if="mostrarIndicador")
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema3/img23.jpg' alt="Imagen decorativa")
      .py-3.py-md-4(titulo="LinkedIn")
        .row.justify-content-center
          .col-lg-7.order-lg-1.order-2
            p.mb-5 Esta compañía ha ido mejorando su capacidad de análisis de datos. Allí, los administradores de páginas disponen de análisis detallados que permiten evaluar las tendencias en función de indicadores y periodos de tiempo de los visitantes y seguidores. Esta podría ser útil en algunas industrias y en el segmento B2B.
            .row.justify-content-center
              .col-auto
                a.boton.color-acento-botones.indicador__container(href="https://linkedin.com" target="_blank")
                  span Linkedin
                  .indicador--click(v-if="mostrarIndicador")
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema3/img24.jpg' alt="Imagen decorativa")
      .py-3.py-md-4(titulo="Google Ads")
        .row.justify-content-center
          .col-lg-7.order-lg-1.order-2
            p.mb-5 Además de utilizarse para crear los anuncios pagos de Google, esta herramienta tiene una función muy útil a la hora de analizar de palabras clave. En ella se pueden ver búsquedas asociadas y nuevas formas de llegar al #[em buyer] persona.
            .row.justify-content-center
              .col-auto
                a.boton.color-acento-botones.indicador__container(href="https://ads.google.com/" target="_blank")
                  span Google ads 
                  .indicador--click(v-if="mostrarIndicador")
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema3/img25.jpg' alt="Imagen decorativa")
      .py-3.py-md-4(titulo="Google Trends")
        .row.justify-content-center
          .col-lg-7.order-lg-1.order-2
            p.mb-5 Dentro del abanico de herramientas del gigante informático, esta herramienta permite realizar análisis de tendencias dentro de un determinado sector.
            .row.justify-content-center
              .col-auto
                a.boton.color-acento-botones.indicador__container(href="https://trends.google.es" target="_blank")
                  span Google trends
                  .indicador--click(v-if="mostrarIndicador")
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema3/img26.jpg' alt="Imagen decorativa")
      .py-3.py-md-4(titulo="Google Analytics")
        .row.justify-content-center
          .col-lg-7.order-lg-1.order-2
            p.mb-5 Esta herramienta permite analizar el tráfico que llega a su página web, con ella puede conocer las visitas, procedencia, términos de búsqueda, dispositivos usados, tiempo de permanencia del usuario en la página #[em web], porcentaje de rebote y muchos datos más que le permiten perfilar las personas que lo buscan.
            .row.justify-content-center
              .col-auto
                a.boton.color-acento-botones.indicador__container(href="https://analytics.google.com/" target="_blank")
                  span Google Analytics
                  .indicador--click(v-if="mostrarIndicador")
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema3/img27.jpg' alt="Imagen decorativa")
    
    p.mb-5(data-aos="fade-right") Hasta aquí se tiene un gran cúmulo de información y herramientas que permiten su adecuado manejo. Se ha mencionado solo algunas, por tanto, la invitación es a profundizar el conocimiento de ellas en pos de lograr una visión más clara y holística del cliente ideal; pero este no es el fin de la jornada. Una vez preparada esta visión quedan aún dos acciones imprescindibles:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.BG02.p-5(data-aos="fade-right")
        .row.justify-content-center.mb-4
          .col-lg-4.col-6
            img(src='@/assets/curso/tema3/img28.svg' alt="Imagen decorativa")
        h3 Crear el mensaje
        p.mb-0 Es decir, un #[em copy] que defina el producto enfocado al cliente ideal.
      .col-md.tarjeta.BG03.p-5(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-lg-4.col-6
            img(src='@/assets/curso/tema3/img29.svg' alt="Imagen decorativa")
        h3 Crear un #[em elevator pitch]
        p.mb-0 Este recurso es bastante útil y se trata de un discurso o exposición de producto muy breve y que resalta en qué aporta el producto o servicio al #[em buyer] persona.

    p.mb-5(data-aos="fade-right") Con el fin de tener mayor conocimiento sobre ¿cómo se proyecta un #[em pitch] empleando técnicas verbales y no verbales? y los tipos de #[em pitch], se invita a consultar los siguientes videos:

    .row.justify-content-center.mb-4
      .col-lg-10.mb-4
        .BGR01.p-4(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-sm-2.col-3.px-lg-4
              img(src="@/assets/curso/temas/img02.svg" alt="Imagen decorativa")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 ¿Cómo se proyecta un #[em pitch] empleando técnicas verbal y no verbal?
                  p.mb-0 Con el fin de tener mayor conocimiento sobre las estrategias de mercadeo, se invita a consultar el siguiente link:
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://youtu.be/767vTiYvnyo" target="_blank")
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
                  h4.mb-1 Tipos de #[em pitch]
                  p.mb-0 Con el fin de tener mayor conocimiento sobre las estrategias de mercadeo, se invita a consultar el siguiente link:
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://youtu.be/aZon_yknh3A" target="_blank")
                    span Ver
                    i.fab.fa-youtube

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    mostrarIndicador: true,
    indicadorTarjetaFlip: true,
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
