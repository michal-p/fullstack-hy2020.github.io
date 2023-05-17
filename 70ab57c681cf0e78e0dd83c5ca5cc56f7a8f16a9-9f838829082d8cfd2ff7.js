(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{CKG8:function(e){e.exports=JSON.parse('{"fi":{"name":"Yleistä","intro":["Kurssilla tutustutaan JavaScriptilla tapahtuvaan moderniin websovelluskehitykseen. Pääpaino on React-kirjaston avulla toteutettavissa single page -sovelluksissa, ja niitä tukevissa Node.js:llä toteutetuissa REST-rajapinnoissa. Kurssilla tutustutaan myös GraphQL:n eli REST:ille vaihtoehtoiseen rajapintojen toteutusperiaatteeseen","Kurssilla käsitellään myös sovellusten testaamista, konfigurointia ja suoritusympäristöjen hallintaa sekä tietokantojen käyttöä sovelluksen tietojen tallettamiseen","Kurssin laajuus on 5-14 opintopistettä, sisältö on sama kun Helsingin yliopiston tietojenkäsittelytieteen osaston keväällä 2022 pidetyllä kurssilla <a href=\'https://fullstack-hy2020.github.io/\'>Full stack -websovelluskehitys</a>. Kurssiin liittyy myös 1-10 opintopisteen laajuinen <a href=\'/osa0/yleista#full-stack-harjoitustyo\'>harjoitustyö</a>.","Yhteistyökumppaneina kurssilla on <a href=\'https://www.houston-inc.com/\'>Houston Inc</a>, <a href=\'https://www.terveystalo.com/fi/Yritystietoa/Terveystalo-tyontantajana/Digital-Health/\'>Terveystalo</a>, <a href=\'https://elisa.fi/\'>Elisa</a>, <a href=\'https://www.instagram.com/unitytechnologies/?hl=en\'>Unity Technologies</a>, <a href=\'https://careers.konecranes.com/Konecranes/\'>Konecranes</a> ja <a href=\'https://www.smartly.io/\'>Smartly.io</a>. Katso <a href=\'https://www.youtube.com/playlist?list=PLumQiZ25uijis31zaRL7rhzLalSwLqUtm\'>täältä</a> yhteistyökumppaniemme asiantuntijoiden vierailuluentoja kurssin aihepiireistä.","Osallistujilta edellytetään vahvaa ohjelmointirutiinia, web-ohjelmoinnin ja tietokantojen perustuntemusta, git-versionhallintajärjestelmän peruskäytön hallintaa, kykyä pitkäjänteiseen työskentelyyn sekä valmiutta omatoimiseen tiedonhakuun ja ongelmanratkaisuun. Osallistuminen ei kuitenkaan edellytä kurssilla käsiteltävien tekniikoiden tai JavaScript-kielen hallintaa.","Kurssin sisällöstä ja suoritustavasta kerrotaan materiaalissa osassa 0, lue ne huolella.","Kurssiin liittyvää keskustelua Discordissa, kanavalla <a target=\'_blank\' href=\'https://study.cs.helsinki.fi/discord/join/fullstack\'>https://study.cs.helsinki.fi/discord/join/fullstack</a> sekä Telegramissa, kanavalla <a target=\'_blank\' href=\'https://t.me/fullstackcourse\'>https://t.me/fullstackcourse</a>, tule mukaan! <ul><li>Huom: kaikki epäasialliset, halventavat ja jotain ihmisryhmää syrjivät kommentit kanavalla ovat kiellettyjä ja tällaisten kommenttien esittäjät poistetaan kanavalta.</li></ul>"],"info":[{"title":"Kurssimateriaali","content":["Kurssimateriaali on tarkoitettu luettavaksi osa kerrallaan \\"alusta loppuun\\". Materiaalin seassa on tehtäviä, jotka on sijoitettu siten, että kunkin tehtävän tekemiseen pitäisi olla riittävät tekniset valmiudet sitä edeltävässä materiaalissa. Voit siis tehdä tehtäviä sitä mukaan kun niitä tulee materiaalissa vastaan. Voi myös olla, että koko osan tehtävät kannattaa tehdä vasta luettuaan ensin osan alusta loppuun kertaalleen. Useissa osissa tehtävät ovat samaa ohjelmaa laajentavia pienistä osista koostuvia kokonaisuuksia. Muutamia tehtävien ohjelmia kehitetään eteenpäin useamman osan aikana.","Materiaali perustuu muutamien osasta osaan vaihtuvien esimerkkiohjelmien asteittaiseen laajentamiseen. Materiaali toiminee parhaiten, jos kirjoitat samalla koodin myös itse ja teet koodiin myös pieniä modifikaatioita. Materiaalin käyttämien ohjelmien koodin eri vaiheiden tilanteita on tallennettu GitHubiin."]},{"title":"Suoritustapa","content":["Kurssi koostuu kahdeksasta osasta, joista ensimmäinen on historiallisista syistä numero nolla. Kunkin osan tekemiseen kannattaa varata aikaa noin 5-25 tuntia.","Materiaalissa osasta n osaan n+1 eteneminen ei ole mielekästä ennen kuin riittävä osaaminen osan n asioista on saavutettu. Kurssilla sovelletaankin pedagogisin termein tavoiteoppimista, engl. mastery learning ja on tarkoitus, että etenet seuraavaan osaan vasta, kun riittävä määrä edellisen osan tehtävistä on tehty.","Oletuksena on, että teet kunkin osan tehtävistä ainakin ne jotka eivät ole merkattu tähdellä. Myös tähdellä merkatut tehtävät vaikuttavat arvosteluun, mutta niiden tekemättäjättäminen ei aiheuta liian suuria esteitä seuraavan osan (tähdellä merkkaamattomien) tehtävien tekemiseen.","Etenemisnopeus kurssilla on vapaa. Lue suorittamisesta tarkemmin <a href=\'/osa0\'>osasta 0</a>.","Tämän kurssin eri osiin jo tehtyjen palautusten ajankäyttöstatistiikan näet tehtävien palautussivulta."]},{"title":"Arvosteluperusteet","content":["Kurssi voidaan suorittaa 5-13 opintopisteen laajuisena.","Laajuus ja arvosana määräytyy kaikkien tehtyjen tehtävien perusteella, myös tähdellä merkityt tehtävät siis vaikuttavat arvosanaan. Kurssin lopussa on koe, joka on suoritettava hyväksytysti. Koe ei kuitenkaan vaikuta arvosanaan.","Jos haluat kurssilta suorituksen, tallenna opiskelijanumerosi palautussovelluksen näkymään my submissions."]},{"title":"Alkutoimet","content":["Tällä kurssilla suositellaan Chrome-selaimen käyttöä, sillä se tarjoaa parhaan välineistön web-sovelluskehitystä ajatellen.","Kurssin tehtävät palautetaan GitHubiin, joten Git tulee olla asennettuna ja sitä on syytä osata käyttää. Ohjeita Gitin käyttämiseen löytyy muunmuassa täältä.","Asenna myös joku järkevä webkoodausta tukeva tekstieditori, enemmän kuin suositeltava valinta on Visual studio code.","Älä koodaa nanolla, Notepadilla tai Geditillä. NetBeanskaan ei ole omimmillaan Web-koodauksessa ja se on myös turhan raskas verrattuna esim. Visual Studio Codeen.","Asenna koneeseesi heti myös Node.js. Materiaali on tehty versiolla 8.6, älä asenna mitään sitä vanhempaa versiota.","Asennusohjeita on koottu tänne.","Noden myötä koneelle asentuu myös Node package manager npm, jota tulemme tarvitsemaan kurssin aikana aktiivisesti. Tuoreen noden kera asentuu myös npx, jota tarvitaan myös muutaman kerran."]},{"title":"Typoja materiaalissa","content":["Kurssilla on paljon materiaalia ja se on olosuhteiden pakosta kirjoitettu todella nopeasti. Materiaalissa on betatestauksesta ja oikoluvuista huolimatta kirjoitusvirheitä. Jos löydät kirjoitusvirheen tai joku asia on sanottu epäselvästi tai kielioppisääntöjen vastaisesti, tee pull request repositoriossa https://github.com/fullstack-hy2020/fullstack-hy2020.github.io olevaan kurssimateriaaliin.","Pull requestin tekeminen on helppoa. Esim. jos tällä sivulla on typo, mene sivun “lähdekoodiin” https://github.com/fullstack-hy2019/fullstack-hy2019.github.io/edit/source/src/content/pages/about.json klikkaa kynän kuvaa oikealta, tee muutokset ja klikkaa muutama kerta “vihreää” Ohtu-kurssin ohjeen mukaan."]}]},"en":{"name":"General","intro":["<em>Questions about the course? Read carefully <a href=\'/en/part0/general_info\'>Part 0</a>, that has an answer to most of them...</em>","This course serves as an introduction to modern web application development with JavaScript. The main focus is on building single page applications with ReactJS that use REST APIs built with Node.js. The course also contains a section on GraphQL, a modern alternative to REST APIs.","The course covers testing, configuration and environment management, the use of databases for storing the application’s data amongst other things.","The course is totally free of charge. You can get a certificate and even the University of Helsinki ECTS credits for free.","The course is worth 5-14 credits, and the content is the same as in the  <a href=\'https://fullstack-hy2020.github.io/\'>Full stack course</a> held at the <a href=\'https://www.helsinki.fi/en/computer-science\'>Department of Computer Science</a> at the University of Helsinki in Spring 2023. There is also an associated <a href=\'/en/part0/general_info#full-stack-project\'>project</a> that is worth 1-10 credits.","Partners and affiliates of the course include <a href=\'https://www.houston-inc.com/\'>Houston Inc</a>, <a href=\'https://www.terveystalo.com/fi/Yritystietoa/Terveystalo-tyontantajana/Digital-Health/\'>Terveystalo</a>, <a href=\'https://elisa.fi/\'>Elisa</a>, <a href=\'https://www.instagram.com/unitytechnologies/?hl=en\'>Unity Technologies</a> and <a href=\'https://careers.konecranes.com/Konecranes/\'>Konecranes</a>. See <a href=\'https://www.youtube.com/watch?v=BZexOyQZMMc&list=PLumQiZ25uijis31zaRL7rhzLalSwLqUtm\'>here for guest lectures</a> on course-related topics given by various experts from our partners and affiliates.","Participants are expected to have good programming skills, basic knowledge of web programming and databases, and to know the basics of working with the Git version-control system. You are also expected to have perseverance and the ability for independent problem solving and information seeking.","<a href=\'/en/part0/general_info\'>Part 0</a> of the course material goes through the content and conduct of the course in more detail. Make sure to read the material and instructions thoroughly.","You can discuss the course and related topics in our dedicated group on Discord <a target=\'_blank\' href=\'https://study.cs.helsinki.fi/discord/join/fullstack\'>https://study.cs.helsinki.fi/discord/join/fullstack</a> and on Telegram: <a target=\'_blank\' href=\'https://t.me/fullstackcourse\'>https://t.me/fullstackcourse</a>. Please join the conversation!"],"info":[{"title":"Course Material","content":["The course material is meant to be read \\"part by part\\" from the beginning to the end. it may also be worthwhile to do the whole part of the tasks only after reading the first part of the piece once and for all.","The material is based on the gradual extension of some of the sample programs that change part of the material. The material works best if you also type the code yourself and make small modifications to the code."]},{"title":"Performance","content":["The course consists of eight parts, the first of which is zero for historical reasons.","In the material, from part n to n + 1, advancement is not meaningful until sufficient knowledge of some of n\'s has been achieved.","It is assumed that you are doing at least some of the tasks that have not been marked with an asterisk. The tasks marked with an asterisk will also affect the review, but their failure to do so will not cause too many obstacles to doing the next section (unmarked).","The speed of the course on the course is free, tasks can be returned until 10.12020 until 23:59.","The time usage statistics for the returns already made in different parts of this course can be found on the task return page."]},{"title":"Rating Criteria","content":["The course can be completed in either 3 or 5-8 credits.","The scope and grade are determined by all the tasks performed, so the tasks marked with an asterisk will also affect the grade.","If you want to complete the course, save your student number recovery application to my submissions."]},{"title":"Types of material","content":["There is a lot of material in the course and it has been written very fast about the circumstances. Despite the beta testing and proofreading, the material has spelling mistakes. /fullstackopen-2020.github.iok in course material. ","Making pull request is easy. For example, if this page has typo, go to the \\"source code\\" page https://github.com/fullstack-hy2019/fullstack-hy2019.github.io/edit/source/src/content/pages/about.json click on the pen image to the right, make the changes and click a few times \\"green\\" according to the Danger course. "]}]},"es":{"name":"General","intro":["Este curso sirve como una introducción al desarrollo de aplicaciones web modernas con JavaScript. El enfoque principal es crear aplicaciones de una sola página con ReactJS que utilizan API REST creadas con Node.js. El curso también contiene una sección sobre GraphQL, una alternativa moderna a REST API.","El curso cubre las pruebas, la configuración y la gestión del entorno, y el uso de MongoDB para almacenar los datos de la aplicación","La edición del curso de este año contiene una parte nueva sobre <a href=\'/en/part9\'>TypeScript</a>. El contenido de esta parte lo proporciona <a href=\'https://www.terveystalo.com/fi/Yritystietoa/Terveystalo-tyontantajana/Digital-Health/\'>Terveystalo</a>","El curso tiene un valor de entre 3 y 9 créditos y el contenido es el mismo que el del <a href=\'https://fullstack-hy2020.github.io/\'> curso de full stack </a> que se lleva a cabo en el <a href=\'https://www.helsinki.fi/en/computer-science\'>Departamento de Ciencias de la Computación</a> en la Universidad de Helsinki en la primavera de 2020. También hay un <a href=\'/es/part0/informacion_general#proyecto-full-stack\'>proyecto</a> asociado que vale entre 1 y 10 créditos.","Los socios y afiliados del curso incluyen <a href=\'https://www.houston-inc.com/\'>HoustonInc </a>, <a href=\'https://www.terveystalo.com/fi/Yritystietoa/Terveystalo-tyontantajana/Digital-Health/\'>Terveystalo</a>, <a href=\'https://elisa.fi/\'>Elisa</a>, <a href=\'https://www.instagram.com/unitytechnologies/?hl=en\'>Unity Technologies</a> y <a href=\'https://careers.konecranes.com/Konecranes/\'>Konecranes</a>. Consulta <a href=\'https://www.youtube.com/watch?v=BZexOyQZMMc&list=PLumQiZ25uijis31zaRL7rhzLalSwLqUtm\'>aquí para las conferencias de los invitados</a> sobre temas relacionados con el curso impartidos por varios expertos de nuestros socios y afiliados."],"information":[{"title":"Material del curso","content":["El material del curso debe leerse \\"parte por parte\\" desde el principio hasta el final. También puede ser útil hacer la parte completa de las tareas solo después de leer la primera parte del artículo de una vez por todas.","El material se basa en la extensión gradual de algunos de los programas de muestra que cambian parte del material. El material funciona mejor si también escribe el código usted mismo y hace pequeñas modificaciones en el código."]},{"title":"Rendimiento","content":["El curso consta de ocho partes, la primera de las cuales es cero por razones históricas.","En el material, de la parte n a n + 1, el avance no es significativo hasta que se haya alcanzado el conocimiento suficiente de algunas de las n.","Se supone que está realizando al menos algunas de las tareas que no han sido marcadas con un asterisco. Las tareas marcadas con un asterisco también afectarán la revisión, pero si no lo hacen no causará demasiados obstáculos para realizar la siguiente sección (sin marcar).","La velocidad del curso en el curso es libre, las tareas se pueden entregar hasta el 10.1.2021 a las 23:59.","Las estadísticas de uso del tiempo para las entregas ya realizadas en diferentes partes de este curso se pueden encontrar en la página de devolución de tareas "]},{"title":"Criterios de calificación","content":["El curso se puede completar en 3 o 5-8 créditos.","El alcance y la calificación están determinados por todas las tareas realizadas, por lo que las tareas marcadas con un asterisco también afectarán la calificación.","Si desea completar el curso, guarde su solicitud de recuperación de número de estudiante en mis presentaciones-."]},{"title":"Tipos de material","content":["Hay una gran cantidad de material en el curso y se ha escrito muy rápido por las circunstancias. A pesar de las pruebas beta y la corrección, el material tiene errores de ortografía. /Fullstackopen-2020.github.iok en el material del curso.","Hacer un pull request es fácil. Por ejemplo, si esta página tiene un error tipográfico, vaya a la página de \'código fuente\' https://github.com/fullstack-hy2019/fullstack-hy2019.github.io/edit/source/src/content/pages/about.json haga clic en la imagen del lápiz a la derecha, realice los cambios y haga clic varias veces en \\"green\\" de acuerdo con el curso de Peligro"]}]},"zh":{"name":"General","intro":["本课程是介绍如何使用JavaScript开发现代Web应用程序。 课程的重点是使用ReactJS构建单页面应用程序（SPA），并使用由Node.js构建REST API。 该课程还包含介绍GraphQL的部分，这是REST API的现代替代方案。","课程还包括测试、配置和环境管理，以及使用 MongoDB 来存储应用的数据","今年（2020）的课程还包含了一个新的章节—— <a href=\'/zh/part9\'>TypeScript</a>，这部分课程内容是由<a href=\'https://www.terveystalo.com/fi/Yritystietoa/Terveystalo-tyontantajana/Digital-Health/\'>Terveystalo</a>提供的","本门课程价值5~12个学分，课程内容与赫尔辛基大学<a href=\'https://www.helsinki.fi/en/computer-science\'>计算机科学系</a>的2021春季课程<a href=\'https://fullstack-hy2020.github.io/\'>【全栈课程】</a>相同，这门课附带一个相关的<a href=\'/zh/part0/基础知识#full-stack-project\'>项目作业</a>，价值1~10个学分","本门课的合作伙伴和友情机构包括<a href=\'https://www.houston-inc.com/\'>Houston Inc</a>, <a href=\'https://www.terveystalo.com/fi/Yritystietoa/Terveystalo-tyontantajana/Digital-Health/\'>Terveystalo</a>, <a href=\'https://elisa.fi/\'>Elisa</a>, <a href=\'https://www.instagram.com/unitytechnologies/?hl=en\'>Unity Technologies</a> 以及 <a href=\'https://careers.konecranes.com/Konecranes/\'>Konecranes</a>。<a href=\'https://www.youtube.com/watch?v=BZexOyQZMMc&list=PLumQiZ25uijis31zaRL7rhzLalSwLqUtm\'>这里</a>可以观看由我们的合作伙伴和友情机构的多位专家提供的与本门课程主题相关的客座讲座。","上课的同学需要具备良好的编程技能、基本的网络编程和数据库知识，并且了解使用 Git 这个版本控制系统的基础知识。 你还需要有坚持不懈的精神以及独立解决问题和搜索信息的能力","课程的第0部分更详细地介绍了课程的内容和教学方法。 因此一定要仔细阅读材料和课程说明。"],"info":[{"title":"Course Material","content":["The course material is meant to be read \\"part by part\\" from the beginning to the end. it may also be worthwhile to do the whole part of the tasks only after reading the first part of the piece once and for all.","The material is based on the gradual extension of some of the sample programs that change part of the material. The material works best if you also type the code yourself and make small modifications to the code."]},{"title":"Performance","content":["The course consists of eight parts, the first of which is zero for historical reasons.","In the material, from part n to n + 1, advancement is not meaningful until sufficient knowledge of some of n\'s has been achieved.","It is assumed that you are doing at least some of the tasks that have not been marked with an asterisk. The tasks marked with an asterisk will also affect the review, but their failure to do so will not cause too many obstacles to doing the next section (unmarked).","The speed of the course on the course is free, tasks can be returned until 10.12020 until 23:59.","The time usage statistics for the returns already made in different parts of this course can be found on the task return page."]},{"title":"Rating Criteria","content":["The course can be completed in either 3 or 5-8 credits.","The scope and grade are determined by all the tasks performed, so the tasks marked with an asterisk will also affect the grade.","If you want to complete the course, save your student number recovery application to my submissions."]},{"title":"Types of material","content":["There is a lot of material in the course and it has been written very fast about the circumstances. Despite the beta testing and proofreading, the material has spelling mistakes. /fullstackopen-2020.github.iok in course material. ","Making pull request is easy. For example, if this page has typo, go to the \\"source code\\" page https://github.com/fullstack-hy2019/fullstack-hy2019.github.io/edit/source/src/content/pages/about.json click on the pen image to the right, make the changes and click a few times \\"green\\" according to the Danger course. "]}]},"fr":{"name":"Général","intro":["Ce cours sert d\'introduction au développement d\'applications Web modernes avec JavaScript. L\'accent est mis sur la création d\'applications à page unique avec ReactJS qui utilisent des API REST construites avec Node.js. Le cours contient également une section sur GraphQL, une alternative moderne aux API REST.","Le cours couvre les tests, la configuration et la gestion de l\'environnement, ainsi que l\'utilisation de MongoDB pour stocker les données de l\'application.","Le cours vaut de 5 à 13 crédits et son contenu est le même que dans le <a href=\'https://fullstack-hy2020.github.io/\'>Full stack course</a> enseigné au <a href =\'https://www.helsinki.fi/en/computer-science\'>Département d\'informatique</a> à l\'Université d\'Helsinki au printemps 2020. Il existe également un <a href=\'/fr/part0/informations_generales#projet-full-stack\'>projet</a> qui vaut de 1 à 10 crédits.","Les partenaires et affiliés du cours incluent <a href=\'https://www.houston-inc.com/\'>Houston Inc</a>, <a href=\'https://www.terveystalo.com/fi/Yritystietoa/Terveystalo-tyontantajana/Digital-Health/\'>Terveystalo</a>, <a href=\'https://elisa.fi/\'>Elisa</a>, <a href=\'https://www.instagram.com/unitytechnologies/?hl=en\'>Unity Technologies</a> et <a href=\'https://careers.konecranes.com/Konecranes/\'>Konecranes</a>. Voir <a href=\'https://www.youtube.com/watch?v=BZexOyQZMMc&list=PLumQiZ25uijis31zaRL7rhzLalSwLqUtm\'>ici pour des conférences</a> sur des sujets liés aux cours donnés par divers experts de nos partenaires et affiliés.","Les participants doivent avoir de bonnes compétences en programmation, des connaissances de base en programmation Web et en bases de données, et connaître les bases du travail avec le système de contrôle de version Git. Vous devez également faire preuve de persévérance et être capable de résoudre des problèmes de manière indépendante et de rechercher des informations.","La partie 0 du support de cours détaille plus en détail le contenu et le déroulement du cours. Assurez-vous de lire attentivement le matériel et les instructions.","Vous pouvez discuter du cours et des sujets connexes dans notre groupe dédié sur <a target=\'_blank\' href=\'https://study.cs.helsinki.fi/discord/join/fullstack\'>Discord</a> et sur <a target=\'_blank\' href=\'https://t.me/fullstackcourse\'>Telegram</a>. Rejoignez la conversation !"]},"ptbr":{"name":"Geral","intro":["<em>Têm perguntas sobre o curso? Leia cuidadosamente a <a href=\'/ptbr/part0/informacoes_gerais\'>Parte 0</a>, pois lá é possível encontrar a resposta para a maioria delas...</em>","Este curso é uma introdução ao desenvolvimento de aplicações <em>web</em> modernas com JavaScript. O objetivo principal é construir aplicações SPA (Single-Page Applications) com ReactJS, as quais utilizam APIs REST construídas em Node.js. O curso também contém uma seção sobre GraphQL, uma alternativa moderna às APIs REST.","O curso abrange testes, gerenciamento de configuração e ambiente, uso de bancos de dados para armazenamento dos dados da aplicação, entre outras coisas.","O curso vale de 5 a 14 créditos e o conteúdo é o mesmo do <a href=\'https://fullstack-hy2020.github.io/\'>curso Full stack</a> realizado no <a href=\'https://www.helsinki.fi/en/computer-science\'>Departamento de Ciência da Computação</a> na Universidade de Helsinki na primavera de 2022. Este também é um <a href=\'/osa0/yleista#full-stack-harjoitustyo\'>projeto</a> associado que vale de 1 a 10 créditos.","Incluem-se como parceiros e afiliados do curso: <a href=\'https://www.houston-inc.com/\'>Houston Inc</a>, <a href=\'https://www.terveystalo.com/fi/Yritystietoa/Terveystalo-tyontantajana/Digital-Health/\'>Terveystalo</a>, <a href=\'https://elisa.fi/\'>Elisa</a>, <a href=\'https://www.instagram.com/unitytechnologies/?hl=en\'>Unity Technologies</a> e <a href=\'https://careers.konecranes.com/Konecranes/\'>Konecranes</a>. Entre <a href=\'https://www.youtube.com/watch?v=BZexOyQZMMc&list=PLumQiZ25uijis31zaRL7rhzLalSwLqUtm\'>aqui</a> para ver palestras ministradas por vários especialistas de nossos parceiros e afiliados sobre tópicos relacionados ao curso.","É esperado que os participantes tenham boas habilidades de programação, conhecimento básico de programação web e banco de dados e saibam os conceitos básicos práticos do sistema de controle de versão Git. Também é esperado que você tenha perseverança e habilidade para resolução de problemas e busca de informações de forma independente.","A <a href=\'/ptbr/part0/informacoes_gerais\'>Parte 0</a> do material do curso explica o conteúdo e a conduta do curso com mais detalhes. Certifique-se de ler todo o material e as suas instruções.","Você também pode discutir sobre o curso e os tópicos relacionados em nosso grupo dedicado no Discord <a target=\'_blank\' href=\'https://study.cs.helsinki.fi/discord/join/fullstack\'>https://study.cs.helsinki.fi/discord/join/fullstack</a> e no Telegram: <a target=\'_blank\' href=\'https://t.me/fullstackcourse\'>https://t.me/fullstackcourse</a>. Venha conversar conosco!"],"info":[{"title":"Material do Curso","content":["O material do curso é para ser lido \\"parte por parte\\" do início ao fim. Também pode ser vantajoso fazer todos os exercícios da parte em que se está estudando somente depois de ler todo o material da parte.","O material é baseado no desenvolvimento gradual de algumas aplicações que são usados como exemplo que vão mudando em cada parte do material. O material é melhor aproveitado se você escrever e fazer pequenas modificações no código por si mesmo."]},{"title":"Desempenho","content":["O curso consiste em oito partes. A primeira começa como \'Parte 0 (zero)\' por razões históricas.","No material, da parte <em>n</em> para <em>n + 1</em>, o avanço não é significativo até que se tenha alcançado conhecimento suficiente de alguns dos Ns.","Assume-se que você esteja fazendo pelo menos algumas das tarefas que não foram marcadas com um asterisco (*). As tarefas marcadas com um asterisco também afetarão a revisão, mas não fazê-las também não criará maiores dificuldades para que se consiga fazer a próxima seção (não marcada).","A velocidade para o término do curso é livre.","As estatísticas do tempo gasto para o envio das soluções dos exercícios já feitos em diferentes partes deste curso podem ser encontradas na página de envio de exercícios."]},{"title":"Critérios de Classificação","content":["O curso pode ser concluído com 3 ou com 5 a 8 créditos.","A abrangência e a nota são determinadas por todas os exercícios realizadas, então exercícios indicados com um asterisco também afetarão a nota.","Se você quiser concluir o curso, salve sua solicitação de recuperação de número de estudante na opção \'my submissions\'."]},{"title":"Tipos de conteúdo","content":["Há muitos conteúdos no curso, e ele foi escrito muito rápido devido às circunstâncias. Apesar dos testes \'beta\' e da revisão, o material tem erros de ortografia. /fullstackopen-2020.github.iok no material do curso.","Fazer uma solicitação \'pull\' é fácil. Por exemplo, se essa página tiver algum erro de digitação, vá até a página de \\"código-fonte\\" https://github.com/fullstack-hy2019/fullstack-hy2019.github.io/edit/source/src/content/pages/about.json, clique na imagem de lápis à direita, faça as alterações e clique algumas vezes em \\"verde\\" de acordo com o curso de Perigo."]}]}}')},Q7S0:function(e,a,t){"use strict";var s=t("KQm4"),i=t("q1tI"),o=t.n(i),n=t("9Koi"),r=t("mt4B"),l=t("gcgQ"),c=t("jsr+"),u=t("AxK6"),d=t("Bl7J"),m=t("/o+D"),h=t("vrFN"),p=t("CKG8"),f=t("wmEe"),k=t.n(f),g=t("gqR3"),v=t.n(g),y=t("5I0T"),b=t.n(y);a.a=function(e){var a=e.title,t=e.lang,i=Object(n.a)().t,f=(p[t]||p.en).intro,g=v.a[t]||v.a.en;return o.a.createElement(d.a,null,o.a.createElement(h.a,{lang:t,title:a,description:g,keywords:[].concat(Object(s.a)(b.a),["Avoin yliopisto","Full stack harjoitustyö"])}),o.a.createElement(r.a,{style:{paddingBottom:0,overflow:"hidden"}},o.a.createElement("div",{style:{display:"flex",justifyContent:"center",marginBottom:"-70px"},className:"container"},o.a.createElement(u.a,{className:"col-4 push-right-2",contain:!0,style:{margin:0},alt:"Stacked cubes with React logo and JavaScript text",src:k.a}))),o.a.createElement(c.a,{className:"container spacing spacing--mobile--large"},o.a.createElement(c.a,{className:"col-8 push-right-1"},o.a.createElement(l.a,{heading:{level:"h1",title:i("aboutPage:generalTitle")},headingFontSize:"2.3rem"}),o.a.createElement(c.a,{flex:!0,spaceBetween:!0},o.a.createElement("div",{className:"col-10 spacing--after"},o.a.createElement(l.a,{text:f,className:"link",headingFont:!0}))))),o.a.createElement(m.a,{lang:t}))}},gcgQ:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var s=t("zLVn"),i=(t("zXXn"),t("76ZC")),o=t.n(i),n=t("q1tI"),r=t.n(n),l=["text","className","heading","headingFontSize","bold","centered","noPadding","headingFont"],c=function(e){var a=e.text,t=e.className,i=e.heading,n=e.headingFontSize,c=e.bold,u=e.centered,d=e.noPadding,m=e.headingFont,h=Object(s.a)(e,l),p=[];u&&p.push("centered"),c&&p.push("bold"),d&&p.push("body-text--no-padding"),m&&p.push("heading-font");return r.a.createElement("div",Object.assign({className:"body-text "+t},h),i.title&&function(){if(i){var e=i.level;return r.a.createElement(e,{className:"body-text__title",style:n?{fontSize:n}:{}},i.title)}return null}(),a&&"string"==typeof a?r.a.createElement("p",{className:"body-text__content "+p.join(" ")},a):a&&a.map((function(e){return r.a.createElement("div",{key:e,className:"body-text__content "+p.join(" ")},o()(e))})))};c.defaultProps={heading:{title:"",level:"h2"},text:"",className:"",centered:!1,bold:!1,noPadding:!1}},zXXn:function(e,a,t){}}]);
//# sourceMappingURL=70ab57c681cf0e78e0dd83c5ca5cc56f7a8f16a9-9f838829082d8cfd2ff7.js.map