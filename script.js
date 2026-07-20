/* ==========================================================================
   DATOS DEL NEGOCIO — editá acá para actualizar contenido, precios y textos
   Los precios y estadísticas marcados como EJEMPLO son estimados: reemplazar
   por cifras reales de la empresa antes de publicar el sitio.
   ========================================================================== */

const EMPRESA = {
  nombre:'Schumacher',
  direccion:'43X4+834, Ruta 39, 20400 Maldonado, Uruguay',
  telefono:'+598 93 719 334',
  horario:'Lunes a viernes, 9:00 a 17:00 hs',
  mailComercial:'comercial@schumacheraberturas.com',
  contactos:[
    {nombre:'Matías Schumacher', rol:'Dirección', tel:'+598 98 095 603', mail:'matias.schumacher@schumacheraberturas.com'},
    {nombre:'Victoria Techera', rol:'Comercial', tel:'+598 99 203 543', mail:'victoria.techera@schumacheraberturas.com'}
  ]
};

// PROMOCIONES — banner rotativo (EJEMPLO, reemplazar por promociones reales vigentes)
const PROMOS = [
  'Financiación en cuotas para tu proyecto — consultá condiciones con nuestro equipo comercial.',
  'Bonificación en instalación combinando ventanas con pisos o decks en la misma obra.',
  'Fabricación 100% propia con perfilería alemana REHAU, VEKA y GEALAN.',
  'Visitá nuestra fábrica y showroom en Ruta 39, Maldonado.'
];

// ESTADÍSTICAS DEL HERO (EJEMPLO — reemplazar por cifras reales de la empresa)
const HERO_STATS = [
  {valor:'+15', label:'años fabricando aberturas'},
  {valor:'+300', label:'obras entregadas'},
  {valor:'3', label:'líneas: ventanas, pisos y decks'},
  {valor:'100%', label:'instalación con equipo propio'}
];

// SERVICIOS — precios EJEMPLO en USD por m², reemplazar por valores reales
const SERVICIOS = {
  pvc:{
    label:'Ventanas PVC',
    lineas:[
      {id:'slim70', nombre:'Línea Slim 70mm', badge:'Más elegida', precio:320,
        desc:'Sistema corredizo de perfil PVC REHAU de 70mm, ideal para grandes paños con excelente aislación.',
        incluye:['Perfil PVC REHAU 70mm','DVH 4/12/4','Herrajes de deslizamiento reforzado','Instalación profesional']},
      {id:'kompakt', nombre:'Línea Kompakt Oscilobatiente', badge:'', precio:360,
        desc:'Apertura oscilobatiente para máxima ventilación y seguridad, con cierre perimetral.',
        incluye:['Perfil PVC REHAU','DVH 4/12/4','Herraje oscilobatiente','Instalación profesional']},
      {id:'premium5c', nombre:'Línea Premium 5 cámaras', badge:'Alta gama', precio:410,
        desc:'Perfil de 5 cámaras para climas exigentes, con máxima performance térmica y acústica.',
        incluye:['Perfil PVC REHAU 5 cámaras','DVH reforzado (opcional con argón)','Herrajes premium','Instalación profesional']}
    ]
  },
  aluminio:{
    label:'Ventanas de aluminio',
    lineas:[
      {id:'a30', nombre:'Línea A30 Corrediza', badge:'Más elegida', precio:280,
        desc:'Sistema corredizo de aluminio liviano, resistente y de bajo mantenimiento.',
        incluye:['Perfil aluminio línea A30','Vidrio simple o DVH','Rodamientos reforzados','Instalación profesional']},
      {id:'a40', nombre:'Línea A40 Batiente', badge:'', precio:310,
        desc:'Apertura batiente de aluminio con sello perimetral para mayor hermeticidad.',
        incluye:['Perfil aluminio línea A40','DVH 4/12/4','Herrajes batientes','Instalación profesional']},
      {id:'rpt', nombre:'Línea Premium RPT', badge:'Alta gama', precio:380,
        desc:'Ruptura de puente térmico para mejor aislación en sistemas de aluminio.',
        incluye:['Perfil aluminio con RPT','DVH 4/12/4','Herrajes premium','Instalación profesional']}
    ]
  },
  pisos:{
    label:'Pisos',
    lineas:[
      {id:'natural', nombre:'Línea Natural', badge:'', precio:45,
        desc:'Piso de ingeniería con terminación símil madera natural, para interiores.',
        incluye:['Tabla ingenieril multicapa','Instalación flotante','Zócalo incluido','Garantía de fabricación']},
      {id:'resistente', nombre:'Línea Resistente', badge:'Más elegida', precio:55,
        desc:'Mayor resistencia al tránsito, ideal para living, comedor y áreas comunes.',
        incluye:['Tabla ingenieril alto tránsito','Instalación flotante','Zócalo incluido','Garantía de fabricación']},
      {id:'premiumpiso', nombre:'Línea Premium', badge:'Alta gama', precio:68,
        desc:'Terminación superior con texturizado realista y mayor espesor de capa de uso.',
        incluye:['Tabla ingenieril premium','Instalación flotante','Zócalo incluido','Garantía extendida']}
    ]
  },
  decks:{
    label:'Decks',
    lineas:[
      {id:'classicwpc', nombre:'Línea Classic WPC', badge:'', precio:38,
        desc:'Deck compuesto de madera y polímero, bajo mantenimiento, para exteriores.',
        incluye:['Tablas WPC','Estructura de soporte','Clips de fijación','Instalación profesional']},
      {id:'premiumwpc', nombre:'Línea Premium WPC Coextruido', badge:'Más elegida', precio:52,
        desc:'Capa coextruida que mejora resistencia UV y color en el tiempo.',
        incluye:['Tablas WPC coextruidas','Estructura de soporte','Clips de fijación','Instalación profesional']},
      {id:'bpctropical', nombre:'Línea BPC Tropical', badge:'Alta gama', precio:60,
        desc:'Máxima resistencia a la humedad y exposición directa, para climas exigentes.',
        incluye:['Tablas BPC','Estructura de soporte reforzada','Clips de fijación','Instalación profesional']}
    ]
  }
};

// TIPOS DE VISITA
const TIPOS_VISITA = [
  {id:'domicilio', label:'Visita técnica a domicilio'},
  {id:'showroom', label:'Visita a showroom / fábrica'}
];
const HORARIOS = {
  domicilio:['09:00','11:00','14:00','16:00'],
  showroom:['09:00','10:00','11:00','12:00','14:00','15:00','16:00']
};

// PLANES DE SERVICIO POST-VENTA (precios EJEMPLO en USD/mes)
const PLANES = [
  {id:'basico', nombre:'Básico', precioMensual:15, recomendado:false,
    beneficios:['Revisión anual de herrajes','Ajuste de burletes y sellos','Reporte de estado por email']},
  {id:'integral', nombre:'Integral', precioMensual:29, recomendado:true,
    beneficios:['Todo lo del plan Básico','Limpieza de rieles y guías (2 veces al año)','Prioridad de agenda','10% off en repuestos']},
  {id:'premium', nombre:'Premium', precioMensual:45, recomendado:false,
    beneficios:['Todo lo del plan Integral','Visita técnica semestral','Garantía extendida de sellos','Atención prioritaria en 48 hs']}
];
const DESCUENTO_ANUAL = 0.20;

// SCHUMACHER PLUS — niveles por m² acumulados
const NIVELES = [
  {id:'bronce', nombre:'Bronce', min:0, max:49, beneficios:['Acceso a promociones exclusivas','Newsletter con novedades']},
  {id:'plata', nombre:'Plata', min:50, max:149, beneficios:['5% off en tu próxima compra','Prioridad de agenda para visitas']},
  {id:'oro', nombre:'Oro', min:150, max:299, beneficios:['8% off en tu próxima compra','Instalación bonificada en accesorios','Invitación a showroom']},
  {id:'platino', nombre:'Platino', min:300, max:Infinity, beneficios:['12% off en tu próxima compra','Atención prioritaria dedicada','Beneficios especiales para arquitectos y estudios']}
];
const PASOS_FIDELIDAD = [
  'Sumás m² por cada compra o proyecto instalado con nosotros.',
  'Subís de nivel automáticamente al alcanzar el umbral de m².',
  'Canjeás beneficios en tu próxima cotización o compra.'
];
const CANJES = ['5% off en tu próxima compra','Instalación bonificada','Kit de mantenimiento de cortesía','Visita técnica prioritaria'];

// GALERÍA (placeholders visuales — reemplazar por fotos reales de obras)
const GALERIA = [
  {cat:'ventanas', titulo:'Ventana corrediza PVC — Línea Slim'},
  {cat:'ventanas', titulo:'Ventana oscilobatiente — Línea Kompakt'},
  {cat:'ventanas', titulo:'Paño fijo con DVH'},
  {cat:'ventanas', titulo:'Fachada con perfil de aluminio A30'},
  {cat:'pisos', titulo:'Piso ingenieril — Línea Resistente'},
  {cat:'pisos', titulo:'Piso símil madera — Línea Natural'},
  {cat:'decks', titulo:'Deck WPC — Línea Premium'},
  {cat:'decks', titulo:'Deck perimetral de piscina'}
];
const FILTROS_GALERIA = [{id:'todos',label:'Todos'},{id:'ventanas',label:'Ventanas'},{id:'pisos',label:'Pisos'},{id:'decks',label:'Decks'}];

// CATÁLOGO TÉCNICO
const CATALOGO = {
  pvc:[
    {nombre:'Línea Slim 70mm', badge:'Más elegida', camaras:'3 cámaras', vidrio:'DVH 4/12/4 hasta 6/20/6', aislacion:'hasta 32 dB', colores:['#ffffff','#4b4b4b','#8a5a34']},
    {nombre:'Línea Kompakt', badge:'', camaras:'3 cámaras', vidrio:'DVH 4/12/4', aislacion:'hasta 30 dB', colores:['#ffffff','#2f2f2f']},
    {nombre:'Línea Premium 5 cámaras', badge:'Alta gama', camaras:'5 cámaras', vidrio:'DVH hasta 6/16/6 + argón', aislacion:'hasta 38 dB', colores:['#ffffff','#4b4b4b','#8a5a34']}
  ],
  aluminio:[
    {nombre:'Línea A30 Corrediza', badge:'Más elegida', camaras:'Pared 1.2 mm', vidrio:'Simple o DVH 4/12/4', aislacion:'hasta 26 dB', colores:['#ffffff','#1c1c1c','#b7b7b7']},
    {nombre:'Línea A40 Batiente', badge:'', camaras:'Sello perimetral', vidrio:'DVH 4/12/4', aislacion:'hasta 28 dB', colores:['#ffffff','#1c1c1c']},
    {nombre:'Línea Premium RPT', badge:'Alta gama', camaras:'Ruptura de puente térmico', vidrio:'DVH 4/12/4', aislacion:'hasta 32 dB', colores:['#ffffff','#1c1c1c','#b7b7b7']}
  ],
  pisos:[
    {nombre:'Línea Natural', badge:'', camaras:'Espesor 8 mm', vidrio:'Capa de uso 0.3 mm', aislacion:'Instalación flotante', colores:['#c9a876','#a97e4a']},
    {nombre:'Línea Resistente', badge:'Más elegida', camaras:'Espesor 10 mm', vidrio:'Capa de uso 0.5 mm', aislacion:'Instalación flotante', colores:['#c9a876','#8a5a34','#5c3d24']},
    {nombre:'Línea Premium', badge:'Alta gama', camaras:'Espesor 12 mm', vidrio:'Capa de uso 0.7 mm', aislacion:'Instalación flotante', colores:['#c9a876','#8a5a34','#5c3d24']}
  ],
  decks:[
    {nombre:'Línea Classic WPC', badge:'', camaras:'60% madera / 40% polímero', vidrio:'Tabla 140x23mm', aislacion:'Bajo mantenimiento', colores:['#8a5a34','#5c3d24']},
    {nombre:'Línea Premium WPC', badge:'Más elegida', camaras:'Capa coextruida UV', vidrio:'Tabla 140x23mm', aislacion:'Resistencia UV reforzada', colores:['#8a5a34','#5c3d24','#3b2a1c']},
    {nombre:'Línea BPC Tropical', badge:'Alta gama', camaras:'Bambú-plástico compuesto', vidrio:'Alta densidad', aislacion:'Máxima resistencia a humedad', colores:['#5c3d24','#3b2a1c']}
  ]
};

// NOSOTROS — pilares y estadísticas (estadísticas EJEMPLO)
const PILARES = [
  {icono:'F', titulo:'Fabricación propia', texto:'Producimos nuestras aberturas en nuestra propia fábrica de Maldonado.'},
  {icono:'A', titulo:'Perfilería alemana', texto:'Trabajamos con sistemas REHAU, VEKA y GEALAN de origen alemán.'},
  {icono:'I', titulo:'Instalación propia', texto:'Equipo técnico propio, capacitado, sin subcontratar la instalación.'},
  {icono:'S', titulo:'Servicio post-venta', texto:'Seguimiento real después de la entrega, con atención personalizada.'}
];
const ABOUT_STATS = [
  {valor:'+15', label:'años en el mercado'},
  {valor:'1', label:'fábrica y showroom propios'},
  {valor:'3', label:'marcas alemanas certificadas'},
  {valor:'100%', label:'equipo técnico propio'}
];

/* ==========================================================================
   ESTADO Y LÓGICA — no hace falta editar de acá para abajo
   ========================================================================== */
let toastId = 0;
function showToast(msg, type){
  const c = document.getElementById('toastContainer');
  const el = document.createElement('div');
  el.className = 'toast' + (type==='error' ? ' error' : '');
  el.textContent = msg;
  c.appendChild(el);
  setTimeout(()=>{ el.style.opacity='0'; el.style.transition='opacity .3s ease'; setTimeout(()=>el.remove(),300); }, 4200);
}

/* ---- NAV ---- */
const navBurger = document.getElementById('navBurger');
const navLinks = document.getElementById('navLinks');
navBurger.addEventListener('click', ()=>{
  navBurger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>{
  navBurger.classList.remove('open'); navLinks.classList.remove('open');
}));

const sections = document.querySelectorAll('main section[id], header#inicio');
const navLinkEls = document.querySelectorAll('.nav-link');
const navObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const id = entry.target.getAttribute('id');
      navLinkEls.forEach(a=>{
        a.classList.toggle('active', a.getAttribute('href') === '#'+id);
      });
    }
  });
},{rootMargin:'-45% 0px -50% 0px'});
sections.forEach(s=>navObserver.observe(s));

/* ---- REVEAL ON SCROLL ---- */
const revealObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{ if(entry.isIntersecting){ entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); } });
},{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));

/* ---- PROMO BANNER ---- */
(function initBanner(){
  const track = document.getElementById('promoTrack');
  const dots = document.getElementById('promoDots');
  const banner = document.getElementById('promoBanner');
  let current = 0, timer;
  PROMOS.forEach((p,i)=>{
    const s = document.createElement('div');
    s.className = 'promo-slide' + (i===0?' active':'');
    s.textContent = p;
    track.appendChild(s);
    const d = document.createElement('button');
    d.type = 'button';
    d.className = i===0 ? 'active' : '';
    d.addEventListener('click', ()=>goTo(i));
    dots.appendChild(d);
  });
  function goTo(i){
    track.children[current].classList.remove('active');
    dots.children[current].classList.remove('active');
    current = i;
    track.children[current].classList.add('active');
    dots.children[current].classList.add('active');
  }
  function next(){ goTo((current+1) % PROMOS.length); }
  function start(){ timer = setInterval(next, 5000); }
  banner.addEventListener('mouseenter', ()=>clearInterval(timer));
  banner.addEventListener('mouseleave', start);
  requestAnimationFrame(()=>banner.classList.add('ready'));
  start();
})();

/* ---- HERO STATS ---- */
(function(){
  const wrap = document.getElementById('heroStats');
  HERO_STATS.forEach(s=>{
    const d = document.createElement('div');
    d.className = 'stat';
    d.innerHTML = `<b>${s.valor}</b><span>${s.label}</span>`;
    wrap.appendChild(d);
  });
})();

/* ---- SERVICIOS: tabs + selector + calculadora ---- */
(function(){
  const tabsWrap = document.getElementById('serviceTabs');
  const pickerWrap = document.getElementById('linePicker');
  const cardWrap = document.getElementById('serviceCard');
  const keys = Object.keys(SERVICIOS);
  let activeCat = keys[0];
  let activeLinea = SERVICIOS[activeCat].lineas[0].id;
  let qty = 20;

  keys.forEach(k=>{
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'tab-btn' + (k===activeCat?' active':'');
    b.textContent = SERVICIOS[k].label;
    b.addEventListener('click', ()=>{
      activeCat = k;
      activeLinea = SERVICIOS[k].lineas[0].id;
      renderTabs(); renderPicker(); renderCard();
    });
    tabsWrap.appendChild(b);
  });

  function renderTabs(){
    [...tabsWrap.children].forEach((b,i)=>b.classList.toggle('active', keys[i]===activeCat));
  }

  function renderPicker(){
    pickerWrap.innerHTML = '';
    SERVICIOS[activeCat].lineas.forEach(l=>{
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'line-option' + (l.id===activeLinea?' active':'');
      b.innerHTML = `<div class="name">${l.nombre}</div><div class="price-mini">Desde USD ${l.precio}/m²</div>`;
      b.addEventListener('click', ()=>{ activeLinea = l.id; renderPicker(); renderCard(); });
      pickerWrap.appendChild(b);
    });
  }

  function renderCard(){
    const linea = SERVICIOS[activeCat].lineas.find(l=>l.id===activeLinea);
    const total = (linea.precio * qty).toLocaleString('es-UY');
    cardWrap.innerHTML = `
      <div class="top">
        <h3>${linea.nombre}</h3>
        ${linea.badge ? `<span class="badge badge-alt">${linea.badge}</span>` : ''}
      </div>
      <p class="desc">${linea.desc}</p>
      <ul>${linea.incluye.map(i=>`<li>${i}</li>`).join('')}</ul>
      <div class="price-box">
        <div class="price">USD ${linea.precio}<span> / m² desde</span></div>
        <div class="qty-calc">
          <label for="qtyInput">m² estimados</label>
          <input type="number" id="qtyInput" min="1" max="500" value="${qty}">
        </div>
      </div>
      <div class="qty-total" style="margin-top:14px">Total estimado para ${qty} m²: <b>USD ${total}</b></div>
    `;
    document.getElementById('qtyInput').addEventListener('input', (e)=>{
      const v = parseFloat(e.target.value);
      qty = isNaN(v) || v < 1 ? 1 : v;
      renderCard();
    });
  }

  renderPicker(); renderCard();
})();

/* ---- VISITA: tabs + calendario + horarios + form ---- */
(function(){
  const tabsWrap = document.getElementById('visitTabs');
  let activeTipo = TIPOS_VISITA[0].id;
  TIPOS_VISITA.forEach(t=>{
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'tab-btn' + (t.id===activeTipo?' active':'');
    b.textContent = t.label;
    b.addEventListener('click', ()=>{
      activeTipo = t.id;
      [...tabsWrap.children].forEach(c=>c.classList.remove('active'));
      b.classList.add('active');
      selectedSlot = null;
      renderSlots();
      document.getElementById('f-direccion').style.display = activeTipo==='domicilio' ? 'flex' : 'none';
    });
    tabsWrap.appendChild(b);
  });

  const dowNames = ['D','L','M','M','J','V','S'];
  const calDow = document.getElementById('calDow');
  dowNames.forEach(d=>{ const el=document.createElement('div'); el.className='cal-dow'; el.textContent=d; calDow.appendChild(el); });

  const monthNames = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  let viewDate = new Date();
  let selectedDate = null;
  let selectedSlot = null;
  const calGrid = document.getElementById('calGrid');
  const calMonthLabel = document.getElementById('calMonthLabel');
  const slotsGrid = document.getElementById('slotsGrid');

  // Disponibilidad de ejemplo: determinística según el día, para simular un calendario real.
  // Reemplazar por disponibilidad real conectada a un sistema de agenda.
  function getAvailability(date){
    const day = date.getDay();
    if(day===0 || day===6) return 'sin-cupo';
    const seed = (date.getDate() * 7 + date.getMonth() * 3) % 10;
    if(seed < 5) return 'disponible';
    if(seed < 8) return 'limitada';
    return 'sin-cupo';
  }

  function renderCalendar(){
    calGrid.innerHTML = '';
    const year = viewDate.getFullYear(), month = viewDate.getMonth();
    calMonthLabel.textContent = `${monthNames[month]} ${year}`;
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month+1, 0).getDate();
    const today = new Date(); today.setHours(0,0,0,0);

    for(let i=0;i<firstDay;i++){ const e=document.createElement('div'); e.className='cal-day empty'; calGrid.appendChild(e); }
    for(let d=1; d<=daysInMonth; d++){
      const date = new Date(year, month, d);
      const el = document.createElement('div');
      const isPast = date < today;
      const status = isPast ? 'sin-cupo' : getAvailability(date);
      el.className = 'cal-day ' + status;
      el.textContent = d;
      if(selectedDate && date.toDateString()===selectedDate.toDateString()) el.classList.add('selected');
      if(status !== 'sin-cupo'){
        el.addEventListener('click', ()=>{
          selectedDate = date; selectedSlot = null;
          renderCalendar(); renderSlots();
        });
      }
      calGrid.appendChild(el);
    }
  }

  function renderSlots(){
    slotsGrid.innerHTML = '';
    if(!selectedDate){
      slotsGrid.innerHTML = '<span style="font-size:.82rem;color:var(--text-faint)">Elegí una fecha disponible para ver horarios.</span>';
      return;
    }
    const status = getAvailability(selectedDate);
    const horarios = HORARIOS[activeTipo];
    const limite = status==='limitada' ? Math.ceil(horarios.length/2) : horarios.length;
    horarios.forEach((h,i)=>{
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'slot-btn' + (selectedSlot===h?' selected':'');
      b.textContent = h;
      if(i >= limite){ b.disabled = true; }
      else{ b.addEventListener('click', ()=>{ selectedSlot = h; renderSlots(); }); }
      slotsGrid.appendChild(b);
    });
  }

  document.getElementById('calPrev').addEventListener('click', ()=>{ viewDate = new Date(viewDate.getFullYear(), viewDate.getMonth()-1, 1); renderCalendar(); });
  document.getElementById('calNext').addEventListener('click', ()=>{ viewDate = new Date(viewDate.getFullYear(), viewDate.getMonth()+1, 1); renderCalendar(); });

  renderCalendar(); renderSlots();

  /* form validation + envío por WhatsApp */
  const form = document.getElementById('visitForm');
  const waFallback = document.getElementById('waFallback');
  const calendarBox = document.querySelector('.calendar-box');

  function openWhatsApp(url){
    // Técnica de <a> + click: más confiable contra bloqueadores de pop-ups que window.open()
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    // Fallback visible por si el navegador igual bloqueó la apertura
    waFallback.href = url;
    waFallback.style.display = 'flex';
  }

  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let valid = true;
    const nombre = document.getElementById('v-nombre');
    const tel = document.getElementById('v-telefono');
    const email = document.getElementById('v-email');
    const direccion = document.getElementById('v-direccion');
    const productoSelect = document.getElementById('v-producto');
    const mensaje = document.getElementById('v-mensaje');

    toggleError('f-nombre', nombre.value.trim().length < 3); if(nombre.value.trim().length<3) valid=false;
    const telOk = /^[0-9+\s()-]{7,}$/.test(tel.value.trim());
    toggleError('f-telefono', !telOk); if(!telOk) valid=false;
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
    toggleError('f-email', !emailOk); if(!emailOk) valid=false;

    if(!selectedDate || !selectedSlot){
      showToast('Te falta elegir fecha y horario arriba, en el calendario.', 'error');
      calendarBox.classList.add('attention');
      calendarBox.scrollIntoView({behavior:'smooth', block:'center'});
      setTimeout(()=>calendarBox.classList.remove('attention'), 2200);
      valid = false;
    }
    if(!valid) return;

    // Arma el mensaje con todos los datos del formulario y lo manda por WhatsApp
    // al teléfono definido en EMPRESA.telefono (no hay backend: esto abre WhatsApp
    // con el mensaje ya escrito, y la persona solo tiene que tocar enviar).
    const tipoLabel = TIPOS_VISITA.find(t=>t.id===activeTipo).label;
    const productoLabel = productoSelect.options[productoSelect.selectedIndex].text;
    const fechaTexto = selectedDate.toLocaleDateString('es-UY', {weekday:'long', day:'numeric', month:'long', year:'numeric'});

    const lineas = [
      'Solicitud de visita — Schumacher',
      `Tipo de visita: ${tipoLabel}`,
      `Nombre: ${nombre.value.trim()}`,
      `Teléfono: ${tel.value.trim()}`,
      `Email: ${email.value.trim()}`
    ];
    if(direccion.value.trim()) lineas.push(`Dirección: ${direccion.value.trim()}`);
    lineas.push(`Producto de interés: ${productoLabel}`);
    lineas.push(`Fecha solicitada: ${fechaTexto}`);
    lineas.push(`Horario: ${selectedSlot}`);
    if(mensaje.value.trim()) lineas.push(`Mensaje: ${mensaje.value.trim()}`);

    const textoWa = encodeURIComponent(lineas.join('\n'));
    const telefonoWa = EMPRESA.telefono.replace(/[^0-9]/g,'');
    openWhatsApp(`https://wa.me/${telefonoWa}?text=${textoWa}`);

    showToast('Te llevamos a WhatsApp con tu solicitud completa: solo tenés que confirmar el envío.');
    form.reset();
    selectedDate = null; selectedSlot = null;
    renderCalendar(); renderSlots();
  });

  function toggleError(fieldId, hasError){
    document.getElementById(fieldId).classList.toggle('error', hasError);
  }
})();

/* ---- PLANES ---- */
(function(){
  const grid = document.getElementById('plansGrid');
  const sw = document.getElementById('planSwitch');
  const lblM = document.getElementById('lblMensual');
  const lblA = document.getElementById('lblAnual');
  let anual = false;

  sw.addEventListener('click', ()=>{
    anual = !anual;
    sw.classList.toggle('on', anual);
    lblM.classList.toggle('active', !anual);
    lblA.classList.toggle('active', anual);
    render();
  });

  function render(){
    grid.innerHTML = '';
    PLANES.forEach(p=>{
      const mensualTotal = p.precioMensual * 12;
      const anualTotal = Math.round(mensualTotal * (1-DESCUENTO_ANUAL));
      const ahorro = mensualTotal - anualTotal;
      const precioMostrado = anual ? Math.round(anualTotal/12) : p.precioMensual;
      const card = document.createElement('div');
      card.className = 'plan-card card-frame' + (p.recomendado ? ' recommended' : '');
      card.innerHTML = `
        ${p.recomendado ? '<span class="rec-badge">Recomendado</span>' : ''}
        <h3>${p.nombre}</h3>
        <div class="plan-price">USD ${precioMostrado}<span> / mes</span></div>
        <div class="plan-save">${anual ? `Facturado anual · ahorrás USD ${ahorro} al año` : '&nbsp;'}</div>
        <ul>${p.beneficios.map(b=>`<li>${b}</li>`).join('')}</ul>
        <button type="button" data-plan="${p.nombre}" class="btn ${p.recomendado?'btn-primary':'btn-secondary'} btn-block">Elegir plan ${p.nombre}</button>
      `;
      card.querySelector('button[data-plan]').addEventListener('click', ()=>{
        const modalidad = anual ? 'anual' : 'mensual';
        const mensajeField = document.getElementById('c-mensaje');
        mensajeField.value = `Me interesa el plan ${p.nombre} (USD ${precioMostrado}/mes, facturación ${modalidad}). Quisiera más información.`;
        document.getElementById('contacto').scrollIntoView({behavior:'smooth'});
        mensajeField.focus();
      });
      grid.appendChild(card);
    });
  }
  render();
})();

/* ---- SCHUMACHER PLUS ---- */
(function(){
  const tiersGrid = document.getElementById('tiersGrid');
  const stepsRow = document.getElementById('stepsRow');
  const redeemGrid = document.getElementById('redeemGrid');
  const range = document.getElementById('simRange');
  const pcLevel = document.getElementById('pcLevel');
  const pcPoints = document.getElementById('pcPoints');
  const pcProgress = document.getElementById('pcProgress');
  const pcProgressLabel = document.getElementById('pcProgressLabel');

  function renderTiers(m2){
    tiersGrid.innerHTML = '';
    NIVELES.forEach(n=>{
      const isCurrent = m2 >= n.min && m2 <= n.max;
      const card = document.createElement('div');
      card.className = 'tier-card' + (isCurrent?' current':'');
      card.innerHTML = `
        <div class="tier-icon">${n.nombre[0]}</div>
        <h4>${n.nombre}</h4>
        <div class="tier-range">${n.max===Infinity ? `+${n.min} m²` : `${n.min}–${n.max} m²`}</div>
        <ul>${n.beneficios.map(b=>`<li>${b}</li>`).join('')}</ul>
      `;
      tiersGrid.appendChild(card);
    });
  }

  function updatePoints(){
    const m2 = parseInt(range.value,10);
    pcPoints.textContent = m2;
    const nivel = NIVELES.find(n=>m2>=n.min && m2<=n.max);
    pcLevel.textContent = nivel.nombre;
    const next = NIVELES[NIVELES.indexOf(nivel)+1];
    if(next){
      const pct = Math.min(100, Math.round(((m2-nivel.min)/(next.min-nivel.min))*100));
      pcProgress.style.width = pct+'%';
      pcProgressLabel.textContent = `Te faltan ${next.min-m2 > 0 ? next.min-m2 : 0} m² para nivel ${next.nombre}`;
    }else{
      pcProgress.style.width='100%';
      pcProgressLabel.textContent = 'Alcanzaste el nivel más alto';
    }
    renderTiers(m2);
  }
  range.addEventListener('input', updatePoints);
  updatePoints();

  PASOS_FIDELIDAD.forEach((p,i)=>{
    const d = document.createElement('div');
    d.className = 'step-item';
    d.innerHTML = `<div class="step-num">${i+1}</div><p>${p}</p>`;
    stepsRow.appendChild(d);
  });

  CANJES.forEach(c=>{
    const d = document.createElement('div');
    d.className = 'redeem-card';
    d.textContent = c;
    redeemGrid.appendChild(d);
  });
})();

/* ---- GALERÍA (solo texto, sin fotos) ---- */
(function(){
  const filtersWrap = document.getElementById('galleryFilters');
  const grid = document.getElementById('galleryGrid');
  let activeFilter = 'todos';

  FILTROS_GALERIA.forEach(f=>{
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'tab-btn' + (f.id==='todos'?' active':'');
    b.textContent = f.label;
    b.addEventListener('click', ()=>{
      activeFilter = f.id;
      [...filtersWrap.children].forEach(c=>c.classList.remove('active'));
      b.classList.add('active');
      renderGrid();
    });
    filtersWrap.appendChild(b);
  });

  function renderGrid(){
    grid.innerHTML = '';
    GALERIA.forEach(g=>{
      const hide = activeFilter!=='todos' && g.cat!==activeFilter;
      const item = document.createElement('div');
      item.className = 'gallery-item' + (hide?' hidden':'');
      item.innerHTML = `<span class="gallery-cat-tag">${g.cat}</span><div class="gallery-title">${g.titulo}</div>`;
      grid.appendChild(item);
    });
  }
  renderGrid();
})();

/* ---- CATÁLOGO ---- */
(function(){
  const tabsWrap = document.getElementById('catalogTabs');
  const grid = document.getElementById('catalogGrid');
  const keys = Object.keys(CATALOGO);
  const labels = {pvc:'Ventanas PVC', aluminio:'Ventanas de aluminio', pisos:'Pisos', decks:'Decks'};
  let active = keys[0];

  keys.forEach(k=>{
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'tab-btn' + (k===active?' active':'');
    b.textContent = labels[k];
    b.addEventListener('click', ()=>{
      active = k;
      [...tabsWrap.children].forEach(c=>c.classList.remove('active'));
      b.classList.add('active');
      render();
    });
    tabsWrap.appendChild(b);
  });

  function render(){
    grid.innerHTML = '';
    CATALOGO[active].forEach(c=>{
      const card = document.createElement('div');
      card.className = 'catalog-card card-frame';
      card.innerHTML = `
        <div class="cc-top"><h4>${c.nombre}</h4>${c.badge?`<span class="badge">${c.badge}</span>`:''}</div>
        <div class="spec-row"><span>Estructura</span><span>${c.camaras}</span></div>
        <div class="spec-row"><span>Vidrio</span><span>${c.vidrio}</span></div>
        <div class="spec-row"><span>Performance</span><span>${c.aislacion}</span></div>
        <div class="swatches">${c.colores.map(col=>`<span class="swatch" style="background:${col}"></span>`).join('')}</div>
      `;
      grid.appendChild(card);
    });
  }
  render();
})();

/* ---- NOSOTROS ---- */
(function(){
  const pillars = document.getElementById('pillarsGrid');
  PILARES.forEach(p=>{
    const d = document.createElement('div');
    d.className = 'pillar-card card-frame';
    d.innerHTML = `<div class="pi">${p.icono}</div><h4>${p.titulo}</h4><p>${p.texto}</p>`;
    pillars.appendChild(d);
  });
  const stats = document.getElementById('aboutStats');
  ABOUT_STATS.forEach(s=>{
    const d = document.createElement('div');
    d.className = 'stat';
    d.innerHTML = `<b>${s.valor}</b><span>${s.label}</span>`;
    stats.appendChild(d);
  });
})();

/* ---- CONTACTO: tarjetas + form ---- */
(function(){
  const wrap = document.getElementById('contactCards');
  wrap.innerHTML = `
    <div class="contact-card"><div class="ci">T</div><div><b>Teléfono</b><span>${EMPRESA.telefono}</span></div></div>
    <div class="contact-card"><div class="ci">@</div><div><b>Email comercial</b><span>${EMPRESA.mailComercial}</span></div></div>
    ${EMPRESA.contactos.map(c=>`
      <div class="contact-card"><div class="ci">${c.nombre[0]}</div><div><b>${c.nombre} — ${c.rol}</b><span>${c.tel}</span><span>${c.mail}</span></div></div>
    `).join('')}
    <div class="contact-card"><div class="ci">H</div><div><b>Horario</b><span>${EMPRESA.horario}</span></div></div>
  `;

  const form = document.getElementById('contactForm');
  const waFallbackContact = document.getElementById('waFallbackContact');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let valid = true;
    const nombre = document.getElementById('c-nombre');
    const apellido = document.getElementById('c-apellido');
    const email = document.getElementById('c-email');
    const mensaje = document.getElementById('c-mensaje');

    const checks = [
      ['cf-nombre', nombre.value.trim().length < 2],
      ['cf-apellido', apellido.value.trim().length < 2],
      ['cf-email', !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())],
      ['cf-mensaje', mensaje.value.trim().length < 5]
    ];
    checks.forEach(([id,err])=>{ document.getElementById(id).classList.toggle('error', err); if(err) valid=false; });
    if(!valid) return;

    // Igual que en Visita: sin backend, así que abrimos WhatsApp con el mensaje
    // ya armado al teléfono general de EMPRESA.telefono.
    const lineas = [
      'Consulta desde la web — Schumacher',
      `Nombre: ${nombre.value.trim()} ${apellido.value.trim()}`,
      `Email: ${email.value.trim()}`,
      `Mensaje: ${mensaje.value.trim()}`
    ];
    const textoWa = encodeURIComponent(lineas.join('\n'));
    const telefonoWa = EMPRESA.telefono.replace(/[^0-9]/g,'');
    const waUrl = `https://wa.me/${telefonoWa}?text=${textoWa}`;

    const link = document.createElement('a');
    link.href = waUrl; link.target = '_blank'; link.rel = 'noopener';
    document.body.appendChild(link); link.click(); document.body.removeChild(link);
    waFallbackContact.href = waUrl;
    waFallbackContact.style.display = 'flex';

    showToast('Te llevamos a WhatsApp con tu consulta lista: solo tenés que confirmar el envío.');
    form.reset();
  });
})();

/* ---- MODAL T&C ---- */
(function(){
  const modal = document.getElementById('tycModal');
  ['openTyc1','openTyc2','openTyc3'].forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.addEventListener('click', ()=>modal.classList.add('open'));
  });
  document.getElementById('closeTyc').addEventListener('click', ()=>modal.classList.remove('open'));
  modal.addEventListener('click', (e)=>{ if(e.target===modal) modal.classList.remove('open'); });
  document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') modal.classList.remove('open'); });
})();

document.getElementById('year').textContent = new Date().getFullYear();