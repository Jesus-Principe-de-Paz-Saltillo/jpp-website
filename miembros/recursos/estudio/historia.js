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
                fullDesc: "El 31 de octubre de 1517, el monje Martín Lutero clava sus <a href='https://es.wikipedia.org/wiki/Las_95_tesis' target='_blank' class='inline-link' data-preview='Documento clave de protesta'>95 tesis</a> en la puerta de la iglesia del palacio en Wittenberg, Alemania. Con ellas protestaba firmemente contra la venta de indulgencias por parte de la Iglesia Católica y los abusos clericales, encendiendo así la irreversible chispa de la Reforma Protestante y recuperando la doctrina de la justificación por la fe sola (Sola Fide).",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Martin_Luther_by_Cranach-restoration.tif/lossy-page1-1000px-Martin_Luther_by_Cranach-restoration.tif.jpg"
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
                fullDesc: "El impresor y erudito francés Robert Estienne (conocido como Stephanus) publica impresionantes y definitivas ediciones del Nuevo Testamento Griego, dedicadas fielmente a la purificación y consolidación de lo que constituiría el <a href='https://es.wikipedia.org/wiki/Robert_Estienne' target='_blank' class='inline-link' data-preview='Erudito y Tipógrafo bíblico'>Textus Receptus</a> estándar (su famosa edición de 1550 u 'O Mirificam'). Posteriormente, en 1551, sería la primera persona en la historia en dividir este texto fundamental en versículos numerados.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Portret_van_Robert_I_Estienne_Beroemde_hervormers_%28serietitel%29_Icones_virorum_nostra_patrumq._memoria_illustrium_%28serietitel%29%2C_RP-P-OB-55.218.jpg/1280px-Portret_van_Robert_I_Estienne_Beroemde_hervormers_%28serietitel%29_Icones_virorum_nostra_patrumq._memoria_illustrium_%28serietitel%29%2C_RP-P-OB-55.218.jpg"
            }
        ]
    },
    {
        name: "Ortodoxia Protestante",
        bgImage: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Synodedordrecht.jpg",
        events: [
            {
                year: "1569",
                title: "Se traduce la 'Biblia del Oso'",
                tags: ['biblia'],
                shortDesc: "Casiodoro de Reina traduce la primera Biblia completa al idioma español basada en los textos originales.",
                fullDesc: "Publicada durante su duro exilio en Basilea, Suiza. Es la primera traducción de la Biblia completa directamente desde los idiomas originales al español, elaborada meticulosamente por Casiodoro de Reina, la cual dependía fundamentalmente del Textus Receptus para el Nuevo Testamento y del Texto Masorético para el Antiguo. Recibe el apodo de <a href='https://es.wikipedia.org/wiki/Biblia_del_oso' target='_blank' class='inline-link' data-preview='Logotipo del impresor'>Biblia del Oso</a> por su histórico logotipo.",
                image: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Casiodoro_de_Reina.jpg"
            },
            {
                year: "1602",
                title: "Biblia de Valera (Del Cántaro)",
                tags: ['biblia'],
                shortDesc: "Cipriano de Valera publica la gran revisión, consolidando la sagrada e influyente Reina-Valera.",
                fullDesc: "En Ámsterdam, <a href='https://es.wikipedia.org/wiki/Cipriano_de_Valera' target='_blank' class='inline-link' data-preview='Compañero reformador español'>Cipriano de Valera</a>, un valiente reformador español, publica la primera y extensa revisión formal a la Biblia del Oso, dando origen tras más de dos décadas de esfuerzo y apego fiel al Textus Receptus a lo que se transformaría en la sagrada Biblia 'Reina-Valera'. Esta histórica edición editada por Valera, en su tiempo se apodó 'Del Cántaro' por poseer a un sembrador bíblico en su arte de portada.",
                image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Retrato_de_Cipriano_de_Valera_que_aparece_en_La_Biblia_del_Siglo_de_Oro_%289_x_13%29.jpg"
            },
            {
                year: "1610",
                title: "Artículos de los Remonstrantes",
                tags: ['doctrina'],
                shortDesc: "Los seguidores de Arminio expresan oficialmente sus desacuerdos y fuertes objeciones calvinistas.",
                fullDesc: "En la región de Holanda, los seguidores de Jacobo Arminio elaboran un documento para estructurar su rechazo formal a ciertos puntos establecidos en la teología reformada sistemática expuestos por la Institución de Juan Calvino. Ellos publicaron los <a href='https://es.wikipedia.org/wiki/Arminianismo' target='_blank' class='inline-link' data-preview='Fundamentos del arminianismo'>Artículos de la Remonstrancia</a>, documento base objetante que desató una gran contienda teológica en toda Europa y la historia del Protestantismo.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Jacobus_Arminius_02_IV_13_2_0026_01_0309_a_Seite_1_Bild_0001.jpg/1280px-Jacobus_Arminius_02_IV_13_2_0026_01_0309_a_Seite_1_Bild_0001.jpg"
            },
            {
                year: "1611",
                title: "Se publica la King James Version",
                tags: ['biblia'],
                shortDesc: "En Inglaterra, 54 eruditos concluyen una de las obras angloparlantes más importantes guiados por el Textus Receptus.",
                fullDesc: "Financiada e impulsada por el rey Jacobo I de Inglaterra, cincuenta y cuatro eminentes eruditos e intérpretes trabajaron arduamente durante siete años para crear la <a href='https://es.wikipedia.org/wiki/Biblia_del_rey_Jacobo' target='_blank' class='inline-link' data-preview='Versión Autorizada KJV'>Versión Autorizada o King James Version</a>. Esta obra fue traducida estrictamente utilizando el texto de la familia mayoritaria bizantina (originador del Textus Receptus) como base incorruptible para su majestuoso Nuevo Testamento.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/KJV-King-James-Version-Bible-first-edition-title-page-1611.jpg/1280px-KJV-King-James-Version-Bible-first-edition-title-page-1611.jpg"
            },
            {
                year: "1618–1619",
                title: "Sínodo de Dort y el TULIP",
                tags: ['doctrina'],
                shortDesc: "El Sínodo redacta los Cánones de Dort reafirmando las enseñanzas definitivas doctrinales de Juan Calvino.",
                fullDesc: "La Iglesia Reformada Holandesa se reunió ordenadamente y magistralmente en respuesta a las objeciones de la Remonstrancia arminiana expuesta en 1610. Tras examinar debidamente toda la evidencia bíblica, el <a href='https://es.wikipedia.org/wiki/S%C3%ADnodo_de_Dort' target='_blank' class='inline-link' data-preview='Respuesta al arminianismo'>Sínodo de Dort</a> articuló los vigorosos y profundos 'Cánones de Dort', argumentando incisivamente para el sostén inamovible de las doctrinas de gracia previamente enseñadas y esparcidas por Juan Calvino. (Bases Bíblicas conocidas posteriormente en el habla inglesa como los famosos y compactos Cinco Puntos del Calvinismo, el acróstico T-U-L-I-P).",
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
