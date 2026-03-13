/* =============================================================
   historia.js — Línea del Tiempo Histórica
   Misión Bautista Jesús Príncipe de Paz
   ============================================================= */

// ─────────────────────────────────────────────────────────────
// Category definitions
// ─────────────────────────────────────────────────────────────

const TAGS = {
    biblia: {
        label: 'Versiones de la Biblia',
        icon: '📖',
        color: '#b45309',
        bg: '#fef3c7',
        border: '#f59e0b',
    },
    doctrina: {
        label: 'Teología y Doctrina',
        icon: '✝️',
        color: '#6d28d9',
        bg: '#ede9fe',
        border: '#8b5cf6',
    },
    historia: {
        label: 'Historia y Cultura',
        icon: '🏛️',
        color: '#065f46',
        bg: '#d1fae5',
        border: '#10b981',
    },
};

// ─────────────────────────────────────────────────────────────
// Timeline data
// ─────────────────────────────────────────────────────────────

/** @type {Array<{name: string, bgImage: string, events: Array}>} */
const eras = [
    {
        name: "Renacimiento y Pre-Reforma",
        bgImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/View_of_Santa_Maria_del_Fiore_in_Florence.jpg/1280px-View_of_Santa_Maria_del_Fiore_in_Florence.jpg",
        events: [
            {
                year: "1454 / 1455",
                title: "La Imprenta y la Biblia de Gutenberg",
                tags: ['historia', 'biblia'],
                shortDesc: "Gutenberg cambia la historia al usar tipos móviles para imprimir exitosamente la Biblia de 42 líneas.",
                fullDesc: "En Maguncia, Johannes Gutenberg utiliza su imprenta de tipos móviles para imprimir el primer libro importante en Occidente a gran escala: la <a href='https://es.wikipedia.org/wiki/Biblia_de_Gutenberg' target='_blank' class='inline-link' data-preview='Primer libro impreso a gran escala'>Biblia de 42 líneas</a> (la versión Vulgata Latina). Este avance revolucionó la sociedad, facilitó la difusión de ideas y proveyó los cimientos tecnológicos vitales para el esparcimiento global de la Biblia y la inminente Reforma.",
                image: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Gutenberg_Bible.jpg"
            },
            {
                year: "1516",
                title: "Erasmo compila el Textus Receptus",
                tags: ['biblia'],
                shortDesc: "Erasmo de Rotterdam publica el Novum Instrumentum omne, base de las traducciones bíblicas futuras.",
                fullDesc: "Desiderio Erasmo de Rotterdam compila y publica bajo el título de 'Novum Instrumentum omne' la primera versión publicada del Nuevo Testamento griego, acompañado de una nueva traducción al latín. Este magistral texto griego (que tiempo después fue denominado <a href='https://es.wikipedia.org/wiki/Textus_Receptus' target='_blank' class='inline-link' data-preview='Texto Recibido en latín'>Textus Receptus</a>) sirvió de base innegable para las traducciones bíblicas a idiomas vulgares durante la época de la Reforma.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Holbein-erasmus.jpg/1280px-Holbein-erasmus.jpg"
            }
        ]
    },
    {
        name: "La Reforma Protestante",
        bgImage: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Europe_religions_1560.jpg",
        events: [
            {
                year: "1517",
                title: "Martín Lutero y las 95 Tesis",
                tags: ['historia', 'doctrina'],
                shortDesc: "Lutero clava sus tesis en Wittenberg, encendiendo la chispa de la Reforma Protestante.",
                fullDesc: "<img src='https://upload.wikimedia.org/wikipedia/commons/9/9a/Ferdinand_Pauwels_-_Luther_hammers_his_95_theses_to_the_door.jpg' class='modal-inline-img' alt='Lutero clavando sus Tesis' title='Lutero clavando las 95 tesis'>El 31 de octubre de 1517, el monje Martín Lutero clava sus <a href='https://es.wikipedia.org/wiki/Las_95_tesis' target='_blank' class='inline-link' data-preview='Documento clave de protesta'>95 tesis</a> en la puerta de la iglesia del palacio en Wittenberg, Alemania. Con ellas protestaba firmemente contra la venta de indulgencias por parte de la Iglesia Católica y los abusos clericales, encendiendo así la irreversible chispa de la Reforma Protestante y recuperando la doctrina de la justificación por la fe sola (Sola Fide).",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Martin_Luther_by_Cranach-restoration.tif/lossy-page1-600px-Martin_Luther_by_Cranach-restoration.tif.jpg"
            },
            {
                year: "1536",
                title: "Calvino: La Doctrina Sistemática de la Reforma",
                tags: ['doctrina'],
                shortDesc: "Juan Calvino publica la 'Institución de la religión cristiana', sentando las bases sistemáticas de la fe reformada.",
                fullDesc: "En este año, Juan Calvino publica la primera edición de su obra fundamental: la <a href='https://es.wikipedia.org/wiki/Instituci%C3%B3n_de_la_religi%C3%B3n_cristiana' target='_blank' class='inline-link' data-preview='Magnum opus de Calvino'>Institución de la religión cristiana</a>. Esta obra monumental sistematizó de manera brillante la teología protestante esparcida, sentando el cuerpo doctrinal inquebrantable de la tradición reformada que históricamente originaría al famoso Calvinismo, basándose fuertemente en la Soberanía Absoluta de Dios y las Escrituras.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/John_Calvin_Museum_Catharijneconvent_RMCC_s84_cropped.png/1280px-John_Calvin_Museum_Catharijneconvent_RMCC_s84_cropped.png"
            },
            {
                year: "1545 – 1563",
                title: "Concilio de Trento",
                tags: ['doctrina', 'historia'],
                shortDesc: "La Iglesia Católica consolida sus dogmas y emite duras condenas en respuesta a la Reforma.",
                fullDesc: "Un influyente concilio ecuménico de la Iglesia Católica que abarcó varias décadas. Durante el <a href='https://es.wikipedia.org/wiki/Concilio_de_Trento' target='_blank' class='inline-link' data-preview='Inicio de la Contrarreforma'>Concilio de Trento</a> se trazaron condenas rigurosas en forma de anatemas contra los líderes protestantes y su teología de la fe inicial (como Sola Gratia o Sola Scriptura), a la vez que redefinieron y consolidaron todos sus dogmas católicos opuestos.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Tridentinum.jpg/1280px-Tridentinum.jpg"
            },
            {
                year: "1551",
                title: "Stephanus y la Purificación del Texto",
                tags: ['biblia'],
                shortDesc: "Robert Estienne (Stephanus) edita y mejora el Textus Receptus, añadiendo también los versículos.",
                fullDesc: "El impresor y erudito francés Robert Estienne (conocido como Stephanus) publica impresionantes y definitivas ediciones del Nuevo Testamento Griego, dedicadas fielmente a la purificación y consolidación de lo que constituiría el <a href='https://es.wikipedia.org/wiki/Robert_Estienne' target='_blank' class='inline-link' data-preview='Erudito y Tipógrafo bíblico'>Textus Receptus</a> estándar (su famosa edición de 1550 u 'O Mirificam'). Posteriormente, en 1551, sería la primera persona en la historia en dividir este texto fundamental en versículos numerados. Su obra es el eslabón directo entre Erasmo y Teodoro Beza, consolidando así la línea de transmisión que culminaría en la King James Version de 1611.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Portret_van_Robert_I_Estienne_Beroemde_hervormers_%28serietitel%29_Icones_virorum_nostra_patrumq._memoria_illustrium_%28serietitel%29%2C_RP-P-OB-55.218.jpg/1280px-Portret_van_Robert_I_Estienne_Beroemde_hervormers_%28serietitel%29_Icones_virorum_nostra_patrumq._memoria_illustrium_%28serietitel%29%2C_RP-P-OB-55.218.jpg"
            },
            {
                year: "1565 – 1598",
                title: "Beza y la cumbre del Textus Receptus",
                tags: ['biblia'],
                shortDesc: "Beza publica varias ediciones del Nuevo Testamento en griego, consolidando el texto de Erasmo y Stephanus conocido como Textus Receptus.",
                fullDesc: "El teólogo y reformador ginebrino <a href='https://es.wikipedia.org/wiki/Teodoro_Beza' target='_blank' class='inline-link' data-preview='Sucesor de Calvino en Ginebra'>Teodoro Beza</a> sucedió a Calvino y publicó nueve ediciones principales del Nuevo Testamento griego entre 1565 y 1598. Su trabajo continuó y refinó la obra anterior de Erasmo y Stephanus, ayudando a estandarizar y consolidar la lectura del texto bíblico que provenía de la gran mayoría de manuscritos bizantinos descubiertos hasta la fecha.<br><br>Estas ediciones de Beza representaron la forma final de lo que posteriormente llegó a conocerse históricamente como el <a href='https://es.wikipedia.org/wiki/Textus_Receptus' target='_blank' class='inline-link' data-preview='Conoce el origen del Texto Recibido'>Textus Receptus</a> o 'Texto Recibido' por la iglesia protestante. Su Nuevo Testamento griego, junto a sus rigurosas anotaciones y traducciones latinas, proveyó una base sólida y uniforme para los traductores de la Reforma en toda Europa.",
                image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Theodore_de_Beze.jpg"
            }
        ]
    },
    {
        name: "Ortodoxia Protestante",
        bgImage: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Synodedordrecht.jpg",
        events: [
            {
                year: "1569",
                title: "Casiodoro de Reina: La Biblia del Oso",
                tags: ['biblia'],
                shortDesc: "Casiodoro de Reina traduce la primera Biblia completa al español, basándose firmemente en la cadena pura del Textus Receptus.",
                fullDesc: "<img src='https://upload.wikimedia.org/wikipedia/commons/3/32/Biblia_del_Oso.png' class='modal-inline-img' alt='Portada de la Biblia del Oso' title='El famoso logotipo del oso que procuraba evadir a la Inquisición'>Publicada durante su duro exilio en Basilea, Suiza. Es la primera traducción de la Biblia completa directamente desde los idiomas originales al español, elaborada meticulosamente por <a href='https://es.wikipedia.org/wiki/Casiodoro_de_Reina' target='_blank' class='inline-link' data-preview='Traductor principal'>Casiodoro de Reina</a>. Para el Nuevo Testamento, confió plenamente en la línea inquebrantable del <strong>Textus Receptus (Erasmo → Stephanus)</strong>, y en el Texto Masorético para el Antiguo. Recibe el apodo de <a href='https://es.wikipedia.org/wiki/Biblia_del_oso' target='_blank' class='inline-link' data-preview='Conoce más sobre esta Biblia'>Biblia del Oso</a> por su histórico logotipo de portada utilizado para no revelar que era una Biblia y evitar ser quemada por la Inquisición.",
                image: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Casiodoro_de_Reina.jpg"
            },
            {
                year: "1602",
                title: "Cipriano de Valera: La Biblia del Cántaro",
                tags: ['biblia'],
                shortDesc: "Cipriano de Valera revisa la traducción de Casiodoro, consolidando la influencia del Textus Receptus en el mundo hispano.",
                fullDesc: "<img src='https://upload.wikimedia.org/wikipedia/commons/5/5f/Portada_de_la_Biblia_del_C%C3%A1ntaro_que_se_conserva_en_la_Biblioteca_Nacional_de_Espa%C3%B1a.jpg' class='modal-inline-img' alt='Portada de la Biblia del Cántaro' title='Dos hombres, uno planta y otro riega'><a href='https://es.wikipedia.org/wiki/Cipriano_de_Valera' target='_blank' class='inline-link' data-preview='Compañero reformador español'>Cipriano de Valera</a> publica en Ámsterdam la primera revisión exhaustiva a la <a href='https://es.wikipedia.org/wiki/Biblia_del_oso' target='_blank' class='inline-link' data-preview='Traducción original de Casiodoro'>Biblia del Oso</a>. Tras más de dos décadas de esfuerzo de revisión minuciosa, esta edición histórica de 1602 es la primera obra en ser llamada y constituida como la Biblia 'Reina-Valera'. Para sus ajustes en el Nuevo Testamento, dependió a plenitud en las estables ediciones del <strong>Textus Receptus (Erasmo → Stephanus)</strong>, pues las últimas revisiones de Teodoro Beza fueron muy contemporáneas a su arduo trabajo de veinte años.<br><br>Adoptó el apodo <a href='https://archive.org/details/BibliaDelCntaro1602/page/n467/mode/2up' target='_blank' class='inline-link' data-preview='Conoce más de su historia'>Del Cántaro</a> porque su famosa portada ilustra a dos hombres trabajando: uno plantando un árbol y otro regándolo con un cántaro de agua, en alusión directa a la doctrina impartida por Pablo en 1 Corintios 3:6.",
                image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Retrato_de_Cipriano_de_Valera_que_aparece_en_La_Biblia_del_Siglo_de_Oro_%289_x_13%29.jpg"
            },
            {
                year: "1610",
                title: "Artículos de los Remonstrantes",
                tags: ['doctrina'],
                shortDesc: "Los seguidores de Arminio expresan oficialmente sus desacuerdos y fuertes objeciones calvinistas.",
                fullDesc: "Los seguidores de Jacobo Arminio publicaron los <strong>Artículos de la Remonstrancia</strong>, oponiéndose a la ortodoxia calvinista con cinco puntos clave:<br><ul class='modal-list'><li><strong>1. Elección Condicional:</strong> Dios elige basándose en Su presciencia de la fe del hombre.</li><li><strong>2. Expiación Ilimitada:</strong> Cristo murió por toda la humanidad (potencialmente).</li><li><strong>3. Depravación Total:</strong> El hombre necesita la gracia preveniente para poder creer.</li><li><strong>4. Gracia Resistible:</strong> La voluntad humana puede rechazar el llamado de Dios.</li><li><strong>5. Seguridad Condicional:</strong> Posibilidad de caer de la gracia tras haber creído.</li></ul>",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Jacobus_Arminius_02_IV_13_2_0026_01_0309_a_Seite_1_Bild_0001.jpg/1280px-Jacobus_Arminius_02_IV_13_2_0026_01_0309_a_Seite_1_Bild_0001.jpg"
            },
            {
                year: "1611",
                title: "King James Version (Versión Autorizada)",
                tags: ['biblia'],
                shortDesc: "Culmina la histórica traducción al inglés apoyada en las ediciones de Beza, siendo la obra cumbre del Textus Receptus en habla inglesa.",
                fullDesc: "Impulsada y autorizada por el mismísimo <strong>Rey Jacobo I</strong> de Inglaterra (razón por la cual tomó el título de <i>King James Version</i> o <i>Versión Autorizada</i>), esta monumental obra fue traducida exhaustivamente por 54 prominentes eruditos bíblicos. Este comité no innovó el texto original, sino que dependió firmemente en las versiones griegas recién maduradas por Teodoro Beza (1589, 1598) al final del siglo, asaltando la cumbre magistral de la cadena purificadora del <strong>Textus Receptus (Erasmo → Stephanus → Beza)</strong>.<br><br>Su solemne precisión consolidó y forjó la moderna lengua del inglés e instituyó a su vez a todo el mundo anglosajón firmemente sobre el texto griego mayoritario y bizantino, abriendo paso a los avivamientos de los grandes siglos post-reforma.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/KJV-King-James-Version-Bible-first-edition-title-page-1611.jpg/1280px-KJV-King-James-Version-Bible-first-edition-title-page-1611.jpg"
            },
            {
                year: "1618–1619",
                title: "Sínodo de Dort y el TULIP",
                tags: ['doctrina'],
                shortDesc: "El Sínodo redacta los Cánones de Dort reafirmando las enseñanzas definitivas doctrinales de Juan Calvino.",
                fullDesc: "En respuesta a la Remonstrancia, el <a href='https://es.wikipedia.org/wiki/S%C3%ADnodo_de_Dort' target='_blank' class='inline-link' data-preview='Respuesta al arminianismo'>Sínodo de Dort</a> articuló los famosos cinco puntos del calvinismo (acróstico <strong>TULIP</strong>):<br><ul class='modal-list'><li><strong>T (Total Depravity):</strong> Depravación Total del hombre.</li><li><strong>U (Unconditional Election):</strong> Elección Incondicional soberana de Dios.</li><li><strong>L (Limited Atonement):</strong> Expiación Limitada (Particular).</li><li><strong>I (Irresistible Grace):</strong> Gracia Irresistible en el llamado.</li><li><strong>P (Perseverance of the Saints):</strong> Perseverancia y preservación de los santos.</li></ul>",
                image: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Synodedordrecht.jpg"
            },
            {
                year: "1620",
                title: "Los Peregrinos llegan a América",
                tags: ['historia'],
                shortDesc: "Los separatistas puritanos atracan el navío Mayflower en tierra americana buscando libertad.",
                fullDesc: "Un gran grupo de separatistas puritanos, hastiados de la persecución y ahogo forzado de una corrupta Iglesia de Inglaterra, atracan valientemente sobre las inexploradas costas de Plymouth en Massachusetts a bordo del famoso navío histórico 'Mayflower'. Buscando libertad absoluta establecieron una colonia en el nuevo mundo fuertemente cimentada en ideales y enseñanzas pías, conocidos y elogiados hoy en la historia americana como los verdaderos <a href='https://es.wikipedia.org/wiki/Padres_peregrinos' target='_blank' class='inline-link' data-preview='Padres Peregrinos'>Pilgrims</a> o Madres/Padres Peregrinos americanos.",
                image: "https://upload.wikimedia.org/wikipedia/commons/f/f1/George-Henry-Boughton-Pilgrims-Going-To-Church.jpg"
            }
        ]
    },
    {
        name: "Bautistas Primitivos y Revisiones Hispanas",
        bgImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/KJV-King-James-Version-Bible-first-edition-title-page-1611.jpg/1280px-KJV-King-James-Version-Bible-first-edition-title-page-1611.jpg",
        events: [
            {
                year: "1827",
                title: "Declaración de Kehukee",
                tags: ['doctrina', 'historia'],
                shortDesc: "La Asociación Bautista de Kehukee rechaza las misiones centralizadas, los seminarios y las sociedades bíblicas modernas, dando origen al movimiento Bautista Primitivo.",
                fullDesc: "La <a href='https://en.wikipedia.org/wiki/Kehukee_Primitive_Baptist_Church' target='_blank' class='inline-link' data-preview='Iglesia Primitiva Bautista de Kehukee'>Asociación Bautista de Kehukee</a> adoptó en octubre de 1827 la histórica <a href='https://baptiststudiesonline.com/wp-content/uploads/2007/02/the-kehukee-declaration.pdf' target='_blank' class='inline-link' data-preview='Texto original de la Declaración'>Declaración de Kehukee</a> en Halifax, Carolina del Norte. Cimentados en la doctrina calvinista de la soberanía absoluta de Dios, los bautistas primitivos rechazaron enfáticamente las misiones centralizadas, los seminarios y las sociedades bíblicas modernas por considerarlos innovaciones humanas contrarias a la Regla Reguladora de la iglesia. Esta declaración marcó el nacimiento formal del movimiento Bautista Primitivo en América. La iglesia de Kehukee aún existe y puede verse en su <a href='https://maps.app.goo.gl/KMk9AFqRkBHoyNoL8' target='_blank' class='inline-link' data-preview='Ver iglesia en Google Maps'>ubicación histórica original en Carolina del Norte</a>.",
                image: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=fL4X7WbmKHZ4liXyya7lsw&cb_client=search.gws-prod.gps&w=408&h=240&yaw=56.005978&pitch=0&thumbfov=100"
            },
            {
                year: "1909",
                title: "Reina-Valera 1909 (La Antigua)",
                tags: ['biblia'],
                shortDesc: "Revisión histórica muy apreciada, criticada modernamente por permitir lecturas del Texto Crítico.",
                fullDesc: "Publicada por la Sociedad Bíblica Americana y la Británica, la <strong>RV 1909</strong> actualizó la ortografía. Sin embargo, incorporó sutilmente algunas influencias del <strong>Texto Crítico</strong> en su NT, apartándose del Textus Receptus puro. Esta mezcla motivó los futuros esfuerzos de purificación independiente.",
                image: "https://i.ebayimg.com/images/g/e14AAOSw7U1iYaRZ/s-l1200.jpg"
            },
            {
                year: "1960",
                title: "Reina-Valera 1960",
                tags: ['biblia'],
                shortDesc: "Las Sociedades Bíblicas Unidas publican la revisión que se convertiría en la Biblia más amada en el mundo de habla hispana contemporáneo.",
                fullDesc: "<img src='https://assets.lifeway.com/image/upload/v1739331613/rvr1960_en_negro_700x465.png' class='modal-inline-img' alt='Biblia RVR 1960' title='Reina-Valera 1960'>Coordinada por las <a href='https://es.wikipedia.org/wiki/Sociedades_B%C3%ADblicas_Unidas' target='_blank' class='inline-link' data-preview='Unión bíblica global'>Sociedades Bíblicas Unidas (SBU)</a>, esta histórica magna revisión actualizó la gramática y el lenguaje de la Biblia para los hispanohablantes modernos mientras conservaba impecablemente la majestad y el estilo rítmico de la antigua traducción.<br><br>Gozando de una impresionante aceptación inmediata, la <strong>Reina-Valera 1960</strong> se estandarizó en casi todas las denominaciones evangélicas, siendo memorizada por innumerables generaciones. Sin embargo, en términos de pureza manuscrita, el comité revisor tomó una decisión trascendental: no se limitaron exclusivamente al <strong>Textus Receptus</strong>. En su lugar, decidieron incorporar en el Nuevo Testamento diversas lecturas provenientes de los <strong>Textos Críticos</strong> (manuscritos alejandrinos de corte minoritario). Esta separación del fundamento original estricto de Casiodoro de Reina y Valera se convirtió en la razón principal por la que, décadas después, los firmes defensores del Texto Recibido iniciarían grandes proyectos de revisión para restaurar fielmente la línea tradicional.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Biblia_Reina_Valera_1960.jpg/600px-Biblia_Reina_Valera_1960.jpg"
            },
            {
                year: "2001 – 2008",
                title: "Reina Valera 1602 Purificada",
                tags: ['biblia'],
                shortDesc: "Revisión bautista completada en Monterrey que purifica el antiguo texto de 1602 hacia la línea pura.",
                fullDesc: "Realizada por la Iglesia Bautista Bíblica de la Gracia en Monterrey (bajo la guía del pastor Raúl Reyes), la <a href='https://valera1602.org/' target='_blank' class='inline-link' data-preview='Sitio Oficial 1602 Purificada'>Biblia 1602 Purificada</a> surgió como un proyecto solemne para restaurar las bases de la histórica <strong>Biblia de Cipriano de Valera (1602)</strong>. Su propósito primordial es purificar al español moderno de todas las incrustaciones críticas que contaminaron las biblias posteriores a 1865, apelando directamente a la autoridad del <strong>Textus Receptus</strong> griego y al Texto Masorético hebreo, verificando meticulosamente las lecturas a la par del referente inglés de la <strong>King James Bible (1611)</strong>.",
                image: "https://static.wixstatic.com/media/804ef4_e1108eec0c9247f9bd18c77efe0bcc5d~mv2.png/v1/fill/w_310,h_353,al_c,lg_1,q_85,enc_avif,quality_auto/804ef4_e1108eec0c9247f9bd18c77efe0bcc5d~mv2.png"
            },
            {
                year: "2004 – 2010",
                title: "Reina Valera Gómez (RVG)",
                tags: ['biblia'],
                shortDesc: "El Dr. Humberto Gómez lidera un esfuerzo de traducción para ser el paralelo léxico unánime de la histórica King James Version, apoyándose fuertemente en ella.",
                fullDesc: "Coordinada y respaldada cooperativamente por varios ministerios conservadores e iglesias independientes, la <a href='https://reinavaleragomez.com/' target='_blank' class='inline-link' data-preview='Sitio Oficial RV Gómez'>RVG</a> fue un esfuerzo dirigido por el Dr. Humberto Gómez. Tomando como base y estructura la histórica RV 1909, el equipo de traductores tuvo como norte alinear majestuosamente cada pasaje en el Nuevo Testamento para ser la máxima correspondencia léxica y doctrinal paralela en español a la <strong>King James Version (KJV)</strong> inglesa, apoyándose fuertemente en ella en su traducción. Para este noble propósito, la RVG garantizó su completa y exclusiva cimentación sobre el incondicional <strong>Textus Receptus</strong>.",
                image: "https://static.wixstatic.com/media/11062b_e769f4593dac4a98834be659eaaca4fd~mv2.jpg/v1/fill/w_2403,h_690,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_e769f4593dac4a98834be659eaaca4fd~mv2.jpg"
            },
            {
                year: "2020+",
                title: "Reina Valera SBT",
                tags: ['biblia'],
                shortDesc: "La Sociedad Bíblica Trinitaria somete la antigua RV 1909 a una revisión magistral amparada en los puros textos originales.",
                fullDesc: "El proyecto histórico liderado por la <a href='https://sociedadbiblicatrinitaria.org/' target='_blank' class='inline-link' data-preview='Página Oficial SBT Hispana'>Sociedad Bíblica Trinitaria (SBT)</a> persigue entregar a la esfera hispanohablante una depurada Reina-Valera de altísima calidad tomando como texto primario estructural a la venerable <strong>Reina-Valera 1909</strong>. Enmendando todas las infiltraciones del Texto Crítico que dicha versión albergó por un siglo, este esfuerzo institucional asegura depender de forma leal y exclusiva del <strong>Textus Receptus</strong> histórico y del Texto Masorético tradicional hebreo; coronando un inmenso frente erudito con el fin de preservar intacta la equivalencia formal de las palabras originales.",
                image: "https://sociedadbiblicatrinitaria.org/wp-content/uploads/2025/11/Store01-400x400.jpg"
            }
        ]
    }
];

// ─────────────────────────────────────────────────────────────
// State — two independent controls
// ─────────────────────────────────────────────────────────────

/** Highlight: single tag key, or null (no highlight) */
let activeHighlight = null;

/** Filter: set of tag keys. Initially all are active to prevent empty */
const activeFilters = new Set(Object.keys(TAGS));

// ─────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────

function primaryTag(event) {
    return event.tags && event.tags.length > 0 ? event.tags[0] : null;
}

function buildTagPillsHTML(tags) {
    return tags.map(key => {
        const t = TAGS[key];
        if (!t) return '';
        return `<span class="card-tag card-tag--${key}" title="${t.label}">${t.icon} ${t.label}</span>`;
    }).join('');
}

// ─────────────────────────────────────────────────────────────
// Core display logic — called after any state change
// ─────────────────────────────────────────────────────────────

function applyDisplay() {
    const items = document.querySelectorAll('.timeline-item');

    items.forEach(item => {
        const tags = JSON.parse(item.dataset.tags || '[]');

        // ── Filter: hide if item matches none of the active filters ──
        const passesFilter = tags.some(t => activeFilters.has(t));
        item.classList.toggle('tag-hidden', !passesFilter);

        // ── Highlight: glow only if item is visible AND matches highlight ──
        item.classList.remove('tag-highlighted-biblia', 'tag-highlighted-doctrina', 'tag-highlighted-historia');
        const isHighlighted = !!activeHighlight
            && passesFilter
            && tags.includes(activeHighlight);
        if (isHighlighted) {
            item.classList.add(`tag-highlighted-${activeHighlight}`);
        }
    });

    // Hide era sections where every item is now hidden
    document.querySelectorAll('.era-section').forEach(section => {
        const hasVisible = section.querySelector('.timeline-item:not(.tag-hidden)');
        section.classList.toggle('era-empty', !hasVisible);
    });

    updateStatusLine();
}

// ─────────────────────────────────────────────────────────────
// Highlight control — single selection, toggle off by re-click
// ─────────────────────────────────────────────────────────────

function setHighlight(key) {
    activeHighlight = (activeHighlight === key) ? null : key;

    document.querySelectorAll('.super-chip').forEach(chip => {
        const cKey = chip.dataset.tag;
        const isActiveHl = cKey === activeHighlight;
        chip.classList.toggle(`is-hl-${cKey}`, isActiveHl);
    });

    applyDisplay();
}

// ─────────────────────────────────────────────────────────────
// Filter control — multi-selection, independent of highlight
// ─────────────────────────────────────────────────────────────

function toggleFilter(key) {
    if (activeFilters.has(key)) {
        activeFilters.delete(key);
    } else {
        activeFilters.add(key);
    }
    updateFilterChips();
    applyDisplay();
}

function updateFilterChips() {
    document.querySelectorAll('.super-chip').forEach(chip => {
        const key = chip.dataset.tag;
        const isActiveFilter = activeFilters.has(key);
        chip.classList.toggle(`is-filtered-${key}`, isActiveFilter);
        chip.querySelector('.sc-filter').classList.toggle('active', isActiveFilter);
    });
}

// ─────────────────────────────────────────────────────────────
// Status line beneath the legend
// ─────────────────────────────────────────────────────────────

function updateStatusLine() {
    const el = document.getElementById('tag-count');
    if (!el) return;

    const parts = [];

    if (activeFilters.size > 0) {
        const labels = [...activeFilters].map(k => TAGS[k]?.label ?? k).join(', ');
        const count = document.querySelectorAll('.timeline-item:not(.tag-hidden)').length;
        parts.push(`Mostrando ${count} eventos · Filtro: ${labels}`);
    }

    if (activeHighlight) {
        const label = TAGS[activeHighlight]?.label ?? activeHighlight;
        parts.push(`Resaltando: ${label}`);
    }

    el.textContent = parts.join('   |   ');
}

// ─────────────────────────────────────────────────────────────
// Build legend bar (Super Chips)
// ─────────────────────────────────────────────────────────────

function buildLegend(container) {
    const legend = document.createElement('div');
    legend.className = 'tag-legend';
    legend.id = 'tag-legend';

    const row = document.createElement('div');
    row.className = 'tag-legend__row';

    // Build the super chips
    Object.entries(TAGS).forEach(([key, def]) => {
        const chip = document.createElement('div');
        chip.className = `super-chip super-chip--${key} is-filtered-${key}`;
        chip.dataset.tag = key;
        
        // Left side: Filter toggle (Funnel)
        const filterBtn = document.createElement('div');
        filterBtn.className = 'sc-filter active';
        filterBtn.title = `Alternar filtro de ${def.label}`;
        filterBtn.innerHTML = `
            <svg class="filter-icon" viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path class="filter-solid" d="M3 4c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v1.5c0 .28-.11.54-.3.73L15 12.5v7c0 .42-.26.79-.65.93l-4 1.43c-.61.22-1.25-.24-1.25-.89v-8.47L3.3 4.73C3.11 4.54 3 4.28 3 4z"/>
                <path class="filter-outline" d="M4.25 5.61C6.57 8.59 10 13 10 13v5.5c0 .28.22.5.5.5h3c.28 0 .5-.22.5-.5V13s3.43-4.41 5.75-7.39c.51-.66-.04-1.61-.92-1.61H5.17c-.88 0-1.43.95-.92 1.61zM6.4 6h11.2l-4.6 5.9v4.1h-2v-4.1L6.4 6z"/>
            </svg>
        `;
        filterBtn.addEventListener('click', () => toggleFilter(key));

        // Right side: Highlight toggle (Text)
        const hlBtn = document.createElement('div');
        hlBtn.className = 'sc-highlight';
        hlBtn.title = `Resaltar ${def.label} (Clic para encender/apagar)`;
        hlBtn.innerHTML = `${def.icon} ${def.label}`;
        hlBtn.addEventListener('click', () => setHighlight(key));

        chip.appendChild(filterBtn);
        chip.appendChild(hlBtn);
        row.appendChild(chip);
    });

    legend.appendChild(row);

    // Status line
    const countLine = document.createElement('p');
    countLine.className = 'tag-legend__count';
    countLine.id = 'tag-count';
    legend.appendChild(countLine);

    container.prepend(legend);
    // NOTE: Print-only logic removed as requested (imprimir limpia sin categorias).
}

// ─────────────────────────────────────────────────────────────
// DOM Initialization
// ─────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
    const erasContainer = document.getElementById('eras-container');
    const modal = document.getElementById('event-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const modalImg = document.getElementById('modal-img');

    // QR code for print view
    const qrContainerImg = document.getElementById('qr-code-img');
    qrContainerImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(window.location.href)}`;

    // ── Build Legend ─────────────────────────────────────────
    buildLegend(erasContainer);

    // ── Build Era Sections ───────────────────────────────────
    eras.forEach((era) => {
        const section = document.createElement('section');
        section.className = 'era-section';
        section.style.setProperty('--era-bg', `url('${era.bgImage}')`);

        const content = document.createElement('div');
        content.className = 'era-content';

        const title = document.createElement('h2');
        title.className = 'era-title';
        title.textContent = era.name;
        content.appendChild(title);

        const timeline = document.createElement('div');
        timeline.className = 'era-timeline';

        era.events.forEach((event) => {
            const item = document.createElement('div');
            item.className = 'timeline-item';

            const tags = event.tags || [];
            item.dataset.tags = JSON.stringify(tags);

            const pTag = primaryTag(event);
            const eventDataStr = encodeURIComponent(JSON.stringify({
                year: event.year,
                title: event.title,
                fullDesc: event.fullDesc,
                image: event.image,
                tagsHtml: buildTagPillsHTML(tags)
            }));

            item.innerHTML = `
                <div class="timeline-card" data-event="${eventDataStr}">
                    <div class="card-header">
                        <span class="card-year">${event.year}</span>
                        <h3 class="card-title">${event.title}</h3>
                    </div>
                    <div class="card-tags">${buildTagPillsHTML(tags)}</div>
                    <p class="card-excerpt">${event.shortDesc}</p>
                    <div class="print-desc">${event.fullDesc}</div>
                    <div class="click-hint">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                        Detalles
                    </div>
                </div>
            `;
            timeline.appendChild(item);
        });

        content.appendChild(timeline);
        section.appendChild(content);
        erasContainer.appendChild(section);
    });

    // ── IntersectionObserver: Animate on Scroll ──────────────
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { root: null, rootMargin: '0px', threshold: 0.15 });

    document.querySelectorAll('.timeline-item').forEach(item => observer.observe(item));

    // ── Modal: Open ──────────────────────────────────────────
    document.querySelectorAll('.timeline-card').forEach(card => {
        card.addEventListener('click', () => {
            const data = JSON.parse(decodeURIComponent(card.getAttribute('data-event')));
            modalImg.style.display = 'block';
            modalImg.src = data.image;
            
            // Adjust background position if it's a known portrait
            if (data.image.includes('erasmus') || data.image.includes('John_Calvin') || data.image.includes('Martin_Luther')) {
                modalImg.style.objectPosition = 'center top';
            } else {
                modalImg.style.objectPosition = 'center center';
            }
            
            document.getElementById('modal-year').textContent = data.year;
            document.getElementById('modal-title').textContent = data.title;
            document.getElementById('modal-desc').innerHTML = `
                <div class="modal-tags" style="margin-bottom: 1rem; display: flex; gap: 0.4rem; flex-wrap: wrap;">
                    ${data.tagsHtml}
                </div>
                ${data.fullDesc}
            `;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // ── Modal: Close ─────────────────────────────────────────
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        setTimeout(() => { modalImg.src = ''; }, 300);
    }

    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', closeModal);
    document.querySelector('.modal-content').addEventListener('click', e => e.stopPropagation());
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
    });
});
