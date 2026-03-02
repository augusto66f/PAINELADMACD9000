/* ================================================
   IRON FORGE — PAINEL ADM — admin.js
   ================================================ */

'use strict';

/* ════════════════════════════════════════════════
   1. DADOS DEMO — simulam registros reais
   Em produção, estes dados viriam de um backend/API
════════════════════════════════════════════════ */
const DEMO_DATA = {
  experimentais: [
    { id:'e1', nome:'Carlos Souza',      cpf:'123.456.789-00', tel:'(62) 99111-2233', email:'carlos@email.com',    data:'2024-03-15', horario:'09:00', criado:'2024-03-10 14:22', status:'confirmado' },
    { id:'e2', nome:'Ana Lima',          cpf:'987.654.321-00', tel:'(62) 98222-3344', email:'ana@email.com',       data:'2024-03-16', horario:'10:00', criado:'2024-03-11 09:15', status:'confirmado' },
    { id:'e3', nome:'Pedro Alves',       cpf:'111.222.333-44', tel:'(62) 97333-4455', email:'pedro@email.com',     data:'2024-03-18', horario:'07:00', criado:'2024-03-12 11:30', status:'pendente'   },
    { id:'e4', nome:'Carlos Souza',      cpf:'123.456.789-00', tel:'(62) 99111-2233', email:'carlos@email.com',    data:'2024-03-22', horario:'08:00', criado:'2024-03-17 10:00', status:'confirmado' },
    { id:'e5', nome:'Fernanda Costa',    cpf:'555.666.777-88', tel:'(62) 96444-5566', email:'fernanda@email.com',  data:'2024-03-19', horario:'11:00', criado:'2024-03-13 16:45', status:'cancelado'  },
    { id:'e6', nome:'Ricardo Mendes',    cpf:'222.333.444-55', tel:'(62) 95555-6677', email:'ricardo@email.com',   data:'2024-03-20', horario:'14:00', criado:'2024-03-14 08:20', status:'confirmado' },
    { id:'e7', nome:'Ana Lima',          cpf:'987.654.321-00', tel:'(62) 98222-3344', email:'ana@email.com',       data:'2024-04-02', horario:'09:00', criado:'2024-03-28 13:00', status:'pendente'   },
    { id:'e8', nome:'Carlos Souza',      cpf:'123.456.789-00', tel:'(62) 99111-2233', email:'carlos@email.com',    data:'2024-04-08', horario:'10:00', criado:'2024-04-01 09:50', status:'confirmado' },
    { id:'e9', nome:'Julia Nascimento',  cpf:'333.444.555-66', tel:'(62) 94666-7788', email:'julia@email.com',     data:'2024-04-10', horario:'15:00', criado:'2024-04-03 11:15', status:'confirmado' },
  ],
  bioimpedancia: [
    { id:'b1', nome:'Pedro Alves',     cpf:'111.222.333-44', tel:'(62) 97333-4455', dataAgendada:'2024-03-20', horario:'09:00', criado:'2024-03-15 10:00', status:'realizado'  },
    { id:'b2', nome:'Fernanda Costa',  cpf:'555.666.777-88', tel:'(62) 96444-5566', dataAgendada:'2024-03-21', horario:'10:00', criado:'2024-03-16 09:30', status:'realizado'  },
    { id:'b3', nome:'Carlos Souza',    cpf:'123.456.789-00', tel:'(62) 99111-2233', dataAgendada:'2024-03-22', horario:'14:00', criado:'2024-03-17 08:45', status:'agendado'   },
    { id:'b4', nome:'Ricardo Mendes',  cpf:'222.333.444-55', tel:'(62) 95555-6677', dataAgendada:'2024-03-28', horario:'16:00', criado:'2024-03-22 14:00', status:'agendado'   },
    { id:'b5', nome:'Ana Lima',        cpf:'987.654.321-00', tel:'(62) 98222-3344', dataAgendada:'2024-04-05', horario:'08:00', criado:'2024-03-30 10:20', status:'agendado'   },
  ],
  matriculas: [
    { id:'m1', nome:'Pedro Alves',    cpf:'111.222.333-44', tel:'(62) 97333-4455', email:'pedro@email.com',    plano:'Plano Plus Trimestral', valor:'R$ 225,00', pagamento:'pix',     criado:'2024-03-18 12:00' },
    { id:'m2', nome:'Fernanda Costa', cpf:'555.666.777-88', tel:'(62) 96444-5566', email:'fernanda@email.com', plano:'Plano Elite Anual',      valor:'R$ 660,00', pagamento:'cartao',  criado:'2024-03-20 15:30' },
    { id:'m3', nome:'Ricardo Mendes', cpf:'222.333.444-55', tel:'(62) 95555-6677', email:'ricardo@email.com',  plano:'Plano Básico Mensal',    valor:'R$ 89,00',  pagamento:'pix',     criado:'2024-03-21 09:15' },
    { id:'m4', nome:'Julia N.',       cpf:'333.444.555-66', tel:'(62) 94666-7788', email:'julia@email.com',    plano:'Plano Pro Semestral',    valor:'R$ 390,00', pagamento:'boleto',  criado:'2024-04-01 10:00' },
  ],
  contatos: [
    { id:'c1', nome:'Marcos Vieira',  email:'marcos@email.com',   tel:'(62) 93777-8899', msg:'Gostaria de saber mais sobre os planos e horários de funcionamento.',  criado:'2024-03-17 11:20', status:'respondido' },
    { id:'c2', nome:'Letícia Rocha',  email:'leticia@email.com',  tel:'(62) 92888-9900', msg:'Tenho 16 anos, posso me matricular? Preciso de autorização dos pais?',  criado:'2024-03-19 14:55', status:'pendente'   },
    { id:'c3', nome:'Bruno Ferreira', email:'bruno@email.com',    tel:'',                msg:'Qual é o valor do personal trainer? Quero saber sobre pacotes mensais.', criado:'2024-03-22 09:30', status:'respondido' },
    { id:'c4', nome:'Camila Santos',  email:'camila@email.com',   tel:'(62) 91999-0011', msg:'Vocês têm estacionamento? Vou todo dia de carro.',                      criado:'2024-03-25 16:40', status:'pendente'   },
    { id:'c5', nome:'Diego Moraes',   email:'diego@email.com',    tel:'(62) 90111-2233', msg:'Tenho hipertensão, posso fazer musculação? Preciso de laudo médico?',   criado:'2024-04-01 08:15', status:'pendente'   },
  ]
};

/* ════════════════════════════════════════════════
   2. ESTADO GLOBAL
════════════════════════════════════════════════ */
let DB = loadDB();    // Dados do LocalStorage ou demo
let currentSection = 'dashboard';

/* Carrega dados do LocalStorage, inicializa com demo se vazio */
function loadDB() {
  try {
    const saved = localStorage.getItem('ironforge_adm');
    if (saved) {
      const parsed = JSON.parse(saved);
      // Merge: mantém demo + novos dados reais do site principal
      return parsed;
    }
  } catch(e) {}
  return JSON.parse(JSON.stringify(DEMO_DATA)); // Cópia dos dados demo
}

/* Salva no LocalStorage */
function saveDB() {
  try {
    localStorage.setItem('ironforge_adm', JSON.stringify(DB));
  } catch(e) {
    console.warn('localStorage cheio.');
  }
}

/* ════════════════════════════════════════════════
   3. LOGIN
════════════════════════════════════════════════ */
const CREDENTIALS = { user: 'admin', pass: 'ironforge123' };

document.getElementById('loginForm').addEventListener('submit', e => {
  e.preventDefault();
  const user = document.getElementById('loginUser').value.trim();
  const pass = document.getElementById('loginPass').value;
  const errEl = document.getElementById('loginError');

  if (user === CREDENTIALS.user && pass === CREDENTIALS.pass) {
    errEl.classList.remove('show');
    sessionStorage.setItem('ironforge_auth', '1');
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('admWrapper').style.display = 'flex';
    initAdmin();
  } else {
    errEl.classList.add('show');
    document.getElementById('loginPass').value = '';
    document.getElementById('loginPass').focus();
  }
});

/* Verifica sessão ao carregar */
window.addEventListener('DOMContentLoaded', () => {
  if (sessionStorage.getItem('ironforge_auth') === '1') {
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('admWrapper').style.display = 'flex';
    initAdmin();
  }
});

/* Mostrar/ocultar senha */
document.getElementById('togglePass').addEventListener('click', () => {
  const inp = document.getElementById('loginPass');
  const icon = document.querySelector('#togglePass i');
  inp.type = inp.type === 'password' ? 'text' : 'password';
  icon.className = inp.type === 'password' ? 'fas fa-eye' : 'fas fa-eye-slash';
});

/* Logout */
document.getElementById('logoutBtn').addEventListener('click', () => {
  sessionStorage.removeItem('ironforge_auth');
  location.reload();
});

/* ════════════════════════════════════════════════
   4. INICIALIZAÇÃO DO PAINEL
════════════════════════════════════════════════ */
function initAdmin() {
  setupSidebar();
  setupMobileMenu();
  startClock();
  updateGymStatus();
  setInterval(updateGymStatus, 60000);
  navigateTo('dashboard');
  setupSearches();
  setupCpfSearch();
  syncFromMainSite();  // Puxa dados do site principal se existirem
}

/* ════════════════════════════════════════════════
   5. SINCRONIZA COM O SITE PRINCIPAL
   Lê dados que o site principal gravou no LocalStorage
════════════════════════════════════════════════ */
function syncFromMainSite() {
  // Tenta ler bookings do calendário do site principal
  try {
    const siteData = localStorage.getItem('ironforge_leads');
    if (siteData) {
      const leads = JSON.parse(siteData);
      leads.forEach(lead => {
        if (!DB.experimentais.find(e => e.id === lead.id)) {
          DB.experimentais.push(lead);
        }
      });
    }
    const bioData = localStorage.getItem('ironforge_bio');
    if (bioData) {
      const bios = JSON.parse(bioData);
      bios.forEach(b => {
        if (!DB.bioimpedancia.find(e => e.id === b.id)) {
          DB.bioimpedancia.push(b);
        }
      });
    }
    const matData = localStorage.getItem('ironforge_mat');
    if (matData) {
      const mats = JSON.parse(matData);
      mats.forEach(m => {
        if (!DB.matriculas.find(e => e.id === m.id)) {
          DB.matriculas.push(m);
        }
      });
    }
    const contData = localStorage.getItem('ironforge_cont');
    if (contData) {
      const conts = JSON.parse(contData);
      conts.forEach(c => {
        if (!DB.contatos.find(e => e.id === c.id)) {
          DB.contatos.push(c);
        }
      });
    }
  } catch(e) {}
  saveDB();
}

/* ════════════════════════════════════════════════
   6. SIDEBAR — TOGGLE E NAVEGAÇÃO
════════════════════════════════════════════════ */
function setupSidebar() {
  const sidebar = document.getElementById('sidebar');
  const main    = document.querySelector('.adm-main');

  document.getElementById('sbToggle').addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    main.classList.toggle('expanded');
  });

  // Links de navegação
  document.querySelectorAll('.sb-link[data-section]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      navigateTo(link.dataset.section);
      // Fecha menu no mobile
      sidebar.classList.remove('mob-open');
    });
  });
}

function setupMobileMenu() {
  const sidebar = document.getElementById('sidebar');
  document.getElementById('mobMenuBtn').addEventListener('click', () => {
    sidebar.classList.toggle('mob-open');
  });
}

function navigateTo(section) {
  currentSection = section;

  // Atualiza links ativos
  document.querySelectorAll('.sb-link').forEach(l => l.classList.remove('active'));
  const active = document.querySelector(`.sb-link[data-section="${section}"]`);
  if (active) active.classList.add('active');

  // Troca seção visível
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(`sec-${section}`);
  if (target) target.classList.add('active');

  // Atualiza título
  const titles = {
    dashboard:     'Dashboard',
    experimentais: 'Aulas Experimentais',
    bioimpedancia: 'Bioimpedância',
    matriculas:    'Matrículas',
    contatos:      'Contatos',
    busca:         'Busca por CPF',
    relatorios:    'Relatórios'
  };
  document.getElementById('topbarTitle').textContent = titles[section] || section;

  // Renderiza o conteúdo da seção
  const renders = {
    dashboard:     renderDashboard,
    experimentais: () => renderTable('experimentais'),
    bioimpedancia: () => renderTable('bioimpedancia'),
    matriculas:    () => renderTable('matriculas'),
    contatos:      () => renderTable('contatos'),
    relatorios:    renderRelatorios,
  };

  if (renders[section]) renders[section]();
  updateBadges();
}

/* ════════════════════════════════════════════════
   7. RELÓGIO E STATUS DA ACADEMIA
════════════════════════════════════════════════ */
function startClock() {
  function tick() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2,'0');
    const m = String(now.getMinutes()).padStart(2,'0');
    const s = String(now.getSeconds()).padStart(2,'0');
    document.getElementById('topbarTime').textContent = `${h}:${m}:${s}`;
  }
  tick();
  setInterval(tick, 1000);
}

function updateGymStatus() {
  const el  = document.getElementById('topbarStatus');
  const now = new Date();
  const day = now.getDay();
  const t   = now.getHours() * 60 + now.getMinutes();

  let open = false;
  if      (day === 0) open = false;
  else if (day === 6) open = t >= 420 && t < 720;
  else                open = t >= 360 && t < 1320;

  el.textContent = open ? '🟢 Aberta' : '🔴 Fechada';
  el.className   = `topbar-status ${open ? 'open' : 'closed'}`;
}

/* ════════════════════════════════════════════════
   8. BADGES DA SIDEBAR
════════════════════════════════════════════════ */
function updateBadges() {
  document.getElementById('badgeExp').textContent  = DB.experimentais.length;
  document.getElementById('badgeBio').textContent  = DB.bioimpedancia.length;
  document.getElementById('badgeMat').textContent  = DB.matriculas.length;
  document.getElementById('badgeCont').textContent = DB.contatos.length;
}

/* ════════════════════════════════════════════════
   9. DASHBOARD
════════════════════════════════════════════════ */
function renderDashboard() {
  // MÉTRICAS
  animCount('mExp',  DB.experimentais.length);
  animCount('mBio',  DB.bioimpedancia.length);
  animCount('mMat',  DB.matriculas.length);
  animCount('mCont', DB.contatos.length);

  // ATIVIDADE RECENTE
  renderActivity();

  // CPF FREQUENTES
  renderFrequentes();

  // GRÁFICO
  renderBarChart();

  // RESUMO RELATÓRIOS
  renderRelatorios();
}

/* Animação de contagem */
function animCount(id, target) {
  const el = document.getElementById(id);
  let cur = 0;
  const step = Math.max(1, Math.ceil(target / 30));
  const timer = setInterval(() => {
    cur = Math.min(cur + step, target);
    el.textContent = cur;
    if (cur >= target) clearInterval(timer);
  }, 40);
}

/* Atividade recente: últimos 8 registros de todos os módulos */
function renderActivity() {
  const list = document.getElementById('activityList');
  const all  = [];

  DB.experimentais.forEach(r => all.push({ tipo:'exp',  label:'Aula Experimental', nome: r.nome, time: r.criado || '' }));
  DB.bioimpedancia.forEach(r => all.push({ tipo:'bio',  label:'Bioimpedância',      nome: r.nome, time: r.criado || '' }));
  DB.matriculas.forEach(r    => all.push({ tipo:'mat',  label:'Matrícula',          nome: r.nome, time: r.criado || '' }));
  DB.contatos.forEach(r      => all.push({ tipo:'cont', label:'Contato',            nome: r.nome, time: r.criado || '' }));

  // Ordena por data decrescente
  all.sort((a,b) => b.time.localeCompare(a.time));

  const recent = all.slice(0, 8);

  list.innerHTML = recent.length ? recent.map(a => `
    <div class="activity-item">
      <div class="act-dot ${a.tipo}"></div>
      <div class="act-info">
        <div class="act-name">${esc(a.nome)}</div>
        <div class="act-type">${a.label}</div>
      </div>
      <div class="act-time">${formatDateTime(a.time)}</div>
    </div>
  `).join('') : '<p style="color:var(--cinza);padding:16px">Sem atividade ainda</p>';
}

/* CPFs que apareceram mais de uma vez */
function renderFrequentes() {
  const el      = document.getElementById('freqList');
  const counter = {};

  DB.experimentais.forEach(r => {
    if (!counter[r.cpf]) counter[r.cpf] = { cpf: r.cpf, nome: r.nome, count: 0 };
    counter[r.cpf].count++;
  });
  DB.bioimpedancia.forEach(r => {
    if (!counter[r.cpf]) counter[r.cpf] = { cpf: r.cpf, nome: r.nome, count: 0 };
    counter[r.cpf].count++;
  });
  DB.matriculas.forEach(r => {
    if (!counter[r.cpf]) counter[r.cpf] = { cpf: r.cpf, nome: r.nome, count: 0 };
    counter[r.cpf].count++;
  });

  const sorted = Object.values(counter)
    .filter(c => c.count > 1)
    .sort((a,b) => b.count - a.count)
    .slice(0, 6);

  el.innerHTML = sorted.length ? sorted.map((c,i) => `
    <div class="freq-item" onclick="searchByCPF('${esc(c.cpf)}')">
      <div class="freq-rank">#${i+1}</div>
      <div class="freq-info">
        <div class="freq-name">${esc(c.nome)}</div>
        <div class="freq-cpf mono">${esc(c.cpf)}</div>
      </div>
      <div>
        <div class="freq-count">${c.count}</div>
        <div class="freq-label">registros</div>
      </div>
    </div>
  `).join('') : '<p style="color:var(--cinza);padding:16px;font-size:13px">Nenhum CPF recorrente ainda</p>';
}

/* Gráfico de barras por dia da semana */
function renderBarChart() {
  const chart  = document.getElementById('barChart');
  const days   = ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];
  const counts = [0,0,0,0,0,0,0];

  [...DB.experimentais, ...DB.bioimpedancia].forEach(r => {
    const d = new Date(r.data || r.dataAgendada || r.criado || '');
    if (!isNaN(d)) counts[d.getDay()]++;
  });

  const max = Math.max(...counts, 1);

  chart.innerHTML = days.map((day, i) => {
    const pct = Math.round((counts[i] / max) * 100);
    return `
      <div class="bar-col">
        <div class="bar-fill" style="height:${Math.max(pct,4)}%" data-val="${counts[i]}"></div>
        <div class="bar-day">${day}</div>
      </div>
    `;
  }).join('');
}

/* ════════════════════════════════════════════════
   10. TABELAS GENÉRICAS
════════════════════════════════════════════════ */
function renderTable(tipo) {
  switch(tipo) {
    case 'experimentais': renderExperimentais(); break;
    case 'bioimpedancia': renderBioimpedancia(); break;
    case 'matriculas':    renderMatriculas();    break;
    case 'contatos':      renderContatos();      break;
  }
}

/* ─── AULAS EXPERIMENTAIS ─── */
function renderExperimentais(filter = '') {
  const tbody  = document.getElementById('bodyExp');
  const empty  = document.getElementById('emptyExp');
  const f      = filter.toLowerCase();

  const rows = DB.experimentais.filter(r =>
    !f ||
    r.nome.toLowerCase().includes(f)  ||
    r.cpf.includes(f)                 ||
    (r.tel||'').includes(f)
  );

  if (!rows.length) {
    tbody.innerHTML = '';
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';

  // Conta visitas por CPF
  const visitCount = {};
  DB.experimentais.forEach(r => {
    visitCount[r.cpf] = (visitCount[r.cpf] || 0) + 1;
  });

  tbody.innerHTML = rows.map(r => {
    const visits = visitCount[r.cpf] || 1;
    const visitClass = visits >= 3 ? 'visit-vip' : visits > 1 ? 'visit-return' : 'visit-first';
    const visitLabel = visits >= 3 ? '⭐ VIP' : visits > 1 ? '↩ Retorno' : '✦ Novo';
    return `
      <tr>
        <td><strong>${esc(r.nome)}</strong></td>
        <td class="mono">${esc(r.cpf)}</td>
        <td>${esc(r.tel||'—')}</td>
        <td>${esc(r.email||'—')}</td>
        <td>${formatDate(r.data)}</td>
        <td><strong>${esc(r.horario)}</strong></td>
        <td>
          <span class="visit-badge ${visitClass}">
            ${visitLabel} &nbsp;${visits}x
          </span>
        </td>
        <td>${statusPill(r.status)}</td>
        <td>
          <div class="action-btns">
            <button class="action-btn view-btn" title="Ver detalhes" onclick="viewRecord('experimentais','${r.id}')"><i class="fas fa-eye"></i></button>
            <button class="action-btn call-btn" title="Ligar" onclick="callClient('${esc(r.tel)}')"><i class="fas fa-phone"></i></button>
            <button class="action-btn msg-btn"  title="WhatsApp" onclick="whatsApp('${esc(r.tel)}','${esc(r.nome)}')"><i class="fab fa-whatsapp"></i></button>
            <button class="action-btn done-btn" title="Marcar confirmado" onclick="updateStatus('experimentais','${r.id}','confirmado')"><i class="fas fa-check"></i></button>
            <button class="action-btn del-btn"  title="Excluir" onclick="deleteRecord('experimentais','${r.id}')"><i class="fas fa-trash"></i></button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

/* ─── BIOIMPEDÂNCIA ─── */
function renderBioimpedancia(filter = '') {
  const tbody = document.getElementById('bodyBio');
  const empty = document.getElementById('emptyBio');
  const f     = filter.toLowerCase();

  const rows = DB.bioimpedancia.filter(r =>
    !f || r.nome.toLowerCase().includes(f) || r.cpf.includes(f) || (r.dataAgendada||'').includes(f)
  );

  if (!rows.length) { tbody.innerHTML=''; empty.style.display='block'; return; }
  empty.style.display = 'none';

  tbody.innerHTML = rows.map(r => `
    <tr>
      <td><strong>${esc(r.nome)}</strong></td>
      <td class="mono">${esc(r.cpf)}</td>
      <td>${esc(r.tel||'—')}</td>
      <td>${formatDate(r.dataAgendada)}</td>
      <td><strong>${esc(r.horario)}</strong></td>
      <td>${formatDateTime(r.criado)}</td>
      <td>${statusPill(r.status)}</td>
      <td>
        <div class="action-btns">
          <button class="action-btn view-btn" onclick="viewRecord('bioimpedancia','${r.id}')"><i class="fas fa-eye"></i></button>
          <button class="action-btn call-btn" onclick="callClient('${esc(r.tel)}')"><i class="fas fa-phone"></i></button>
          <button class="action-btn done-btn" onclick="updateStatus('bioimpedancia','${r.id}','realizado')"><i class="fas fa-check"></i></button>
          <button class="action-btn del-btn"  onclick="deleteRecord('bioimpedancia','${r.id}')"><i class="fas fa-trash"></i></button>
        </div>
      </td>
    </tr>
  `).join('');
}

/* ─── MATRÍCULAS ─── */
function renderMatriculas(filter = '') {
  const tbody = document.getElementById('bodyMat');
  const empty = document.getElementById('emptyMat');
  const f     = filter.toLowerCase();

  const rows = DB.matriculas.filter(r =>
    !f || r.nome.toLowerCase().includes(f) || r.cpf.includes(f) || (r.plano||'').toLowerCase().includes(f)
  );

  if (!rows.length) { tbody.innerHTML=''; empty.style.display='block'; return; }
  empty.style.display = 'none';

  const payIcon = { pix:'fa-qrcode', cartao:'fa-credit-card', boleto:'fa-barcode' };

  tbody.innerHTML = rows.map(r => `
    <tr>
      <td><strong>${esc(r.nome)}</strong></td>
      <td class="mono">${esc(r.cpf)}</td>
      <td>${esc(r.tel||'—')}</td>
      <td>${esc(r.email||'—')}</td>
      <td>${esc(r.plano)}</td>
      <td style="color:var(--verde);font-weight:700">${esc(r.valor)}</td>
      <td><span class="status-pill pill-blue"><i class="fas ${payIcon[r.pagamento]||'fa-money-bill'}"></i> ${esc(r.pagamento||'—')}</span></td>
      <td>${formatDateTime(r.criado)}</td>
      <td>
        <div class="action-btns">
          <button class="action-btn view-btn" onclick="viewRecord('matriculas','${r.id}')"><i class="fas fa-eye"></i></button>
          <button class="action-btn call-btn" onclick="callClient('${esc(r.tel)}')"><i class="fas fa-phone"></i></button>
          <button class="action-btn del-btn"  onclick="deleteRecord('matriculas','${r.id}')"><i class="fas fa-trash"></i></button>
        </div>
      </td>
    </tr>
  `).join('');
}

/* ─── CONTATOS ─── */
function renderContatos(filter = '') {
  const tbody = document.getElementById('bodyCont');
  const empty = document.getElementById('emptyCont');
  const f     = filter.toLowerCase();

  const rows = DB.contatos.filter(r =>
    !f || r.nome.toLowerCase().includes(f) || r.email.toLowerCase().includes(f) || r.msg.toLowerCase().includes(f)
  );

  if (!rows.length) { tbody.innerHTML=''; empty.style.display='block'; return; }
  empty.style.display = 'none';

  tbody.innerHTML = rows.map(r => `
    <tr>
      <td><strong>${esc(r.nome)}</strong></td>
      <td>${esc(r.email)}</td>
      <td>${esc(r.tel||'—')}</td>
      <td style="max-width:280px">
        <span title="${esc(r.msg)}">${esc(r.msg.length > 60 ? r.msg.slice(0,60)+'…' : r.msg)}</span>
      </td>
      <td>${formatDateTime(r.criado)}</td>
      <td>${statusPill(r.status)}</td>
      <td>
        <div class="action-btns">
          <button class="action-btn view-btn" onclick="viewRecord('contatos','${r.id}')"><i class="fas fa-eye"></i></button>
          <button class="action-btn msg-btn"  onclick="replyEmail('${esc(r.email)}')"><i class="fas fa-reply"></i></button>
          <button class="action-btn done-btn" onclick="updateStatus('contatos','${r.id}','respondido')"><i class="fas fa-check"></i></button>
          <button class="action-btn del-btn"  onclick="deleteRecord('contatos','${r.id}')"><i class="fas fa-trash"></i></button>
        </div>
      </td>
    </tr>
  `).join('');
}

/* ════════════════════════════════════════════════
   11. PESQUISA EM TABELAS
════════════════════════════════════════════════ */
function setupSearches() {
  const map = {
    searchExp:  v => renderExperimentais(v),
    searchBio:  v => renderBioimpedancia(v),
    searchMat:  v => renderMatriculas(v),
    searchCont: v => renderContatos(v),
  };

  Object.entries(map).forEach(([id, fn]) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', e => fn(e.target.value));
    }
  });
}

/* ════════════════════════════════════════════════
   12. BUSCA POR CPF
════════════════════════════════════════════════ */
function setupCpfSearch() {
  const inp = document.getElementById('cpfBuscaInput');
  const btn = document.getElementById('cpfBuscaBtn');

  if (inp) {
    inp.addEventListener('input', e => {
      e.target.value = formatCPF(e.target.value);
    });
    inp.addEventListener('keypress', e => {
      if (e.key === 'Enter') btn.click();
    });
  }

  btn?.addEventListener('click', () => {
    const cpf = inp.value.trim();
    if (!cpf || cpf.length < 11) { showToast('Digite um CPF válido', 'error'); return; }
    searchByCPF(cpf);
  });
}

/* Faz a busca e preenche o painel de resultado */
function searchByCPF(cpf) {
  // Navega para a seção de busca
  navigateTo('busca');

  const input = document.getElementById('cpfBuscaInput');
  if (input) input.value = cpf;

  const result = document.getElementById('cpfResult');
  const empty  = document.getElementById('cpfEmpty');

  // Coleta registros
  const exps  = DB.experimentais.filter(r => r.cpf === cpf);
  const bios  = DB.bioimpedancia.filter(r => r.cpf === cpf);
  const mats  = DB.matriculas.filter(r => r.cpf === cpf);
  const total = exps.length + bios.length + mats.length;

  if (total === 0) {
    result.style.display = 'none';
    empty.style.display  = 'block';
    return;
  }

  result.style.display = 'block';
  empty.style.display  = 'none';

  // Dados do perfil (pega do primeiro registro encontrado)
  const perfil = exps[0] || bios[0] || mats[0];

  // Determina tag de visitante
  const totalVisitas = exps.length + bios.length;
  let visitTag = '<span class="status-pill pill-green">✦ Novo</span>';
  if (totalVisitas >= 5) visitTag = '<span class="status-pill pill-purple">⭐ VIP</span>';
  else if (totalVisitas > 1) visitTag = '<span class="status-pill pill-gold">↩ Retorno</span>';

  result.innerHTML = `
    <!-- PERFIL DO ALUNO -->
    <div class="cpf-profile">
      <div class="cpf-avatar"><i class="fas fa-user"></i></div>
      <div class="cpf-profile-info">
        <div class="cpf-profile-name">${esc(perfil.nome)}</div>
        <div class="cpf-profile-cpf">${esc(cpf)}</div>
        <div class="cpf-profile-tel">${esc(perfil.tel||'Telefone não informado')} &nbsp; ${visitTag}</div>
      </div>
      <div class="cpf-summary-stats">
        <div class="cpf-stat">
          <div class="cpf-stat-val">${exps.length}</div>
          <div class="cpf-stat-lbl">Aulas Exp.</div>
        </div>
        <div class="cpf-stat">
          <div class="cpf-stat-val">${bios.length}</div>
          <div class="cpf-stat-lbl">Bioimpedâncias</div>
        </div>
        <div class="cpf-stat">
          <div class="cpf-stat-val">${mats.length}</div>
          <div class="cpf-stat-lbl">Matrículas</div>
        </div>
        <div class="cpf-stat">
          <div class="cpf-stat-val">${totalVisitas}</div>
          <div class="cpf-stat-lbl">Total Visitas</div>
        </div>
      </div>
    </div>

    <!-- HISTÓRICO DE AULAS EXPERIMENTAIS -->
    <div class="cpf-sections">
      ${exps.length ? `
        <h4><i class="fas fa-dumbbell"></i> Aulas Experimentais (${exps.length})</h4>
        <div class="table-wrap">
          <table class="adm-table">
            <thead><tr><th>Data</th><th>Horário</th><th>Agendado em</th><th>Status</th></tr></thead>
            <tbody>
              ${exps.map(r => `
                <tr>
                  <td>${formatDate(r.data)}</td>
                  <td><strong>${esc(r.horario)}</strong></td>
                  <td>${formatDateTime(r.criado)}</td>
                  <td>${statusPill(r.status)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      ` : ''}

      <!-- HISTÓRICO BIOIMPEDÂNCIA -->
      ${bios.length ? `
        <h4><i class="fas fa-weight"></i> Bioimpedâncias (${bios.length})</h4>
        <div class="table-wrap">
          <table class="adm-table">
            <thead><tr><th>Data Agendada</th><th>Horário</th><th>Agendado em</th><th>Status</th></tr></thead>
            <tbody>
              ${bios.map(r => `
                <tr>
                  <td>${formatDate(r.dataAgendada)}</td>
                  <td><strong>${esc(r.horario)}</strong></td>
                  <td>${formatDateTime(r.criado)}</td>
                  <td>${statusPill(r.status)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      ` : ''}

      <!-- HISTÓRICO MATRÍCULAS -->
      ${mats.length ? `
        <h4><i class="fas fa-id-card"></i> Matrículas (${mats.length})</h4>
        <div class="table-wrap">
          <table class="adm-table">
            <thead><tr><th>Plano</th><th>Valor</th><th>Pagamento</th><th>Data</th></tr></thead>
            <tbody>
              ${mats.map(r => `
                <tr>
                  <td>${esc(r.plano)}</td>
                  <td style="color:var(--verde);font-weight:700">${esc(r.valor)}</td>
                  <td>${esc(r.pagamento||'—')}</td>
                  <td>${formatDateTime(r.criado)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      ` : ''}

      <!-- BOTÃO WHATSAPP -->
      ${perfil.tel ? `
        <div style="margin-top:24px">
          <button class="btn-rel" onclick="whatsApp('${esc(perfil.tel)}','${esc(perfil.nome)}')">
            <i class="fab fa-whatsapp" style="color:#25d366"></i>
            Contatar via WhatsApp
          </button>
        </div>
      ` : ''}
    </div>
  `;
}

/* ════════════════════════════════════════════════
   13. MODAL DE DETALHES DO REGISTRO
════════════════════════════════════════════════ */
function viewRecord(tipo, id) {
  const record = DB[tipo]?.find(r => r.id === id);
  if (!record) return;

  const labels = {
    experimentais: {
      nome:'Nome', cpf:'CPF', tel:'Telefone', email:'E-mail',
      data:'Data da Aula', horario:'Horário', criado:'Agendado em', status:'Status'
    },
    bioimpedancia: {
      nome:'Nome', cpf:'CPF', tel:'Telefone',
      dataAgendada:'Data Agendada', horario:'Horário', criado:'Agendado em', status:'Status'
    },
    matriculas: {
      nome:'Nome', cpf:'CPF', tel:'Telefone', email:'E-mail',
      plano:'Plano', valor:'Valor', pagamento:'Pagamento', criado:'Data'
    },
    contatos: {
      nome:'Nome', email:'E-mail', tel:'Telefone',
      msg:'Mensagem', criado:'Recebido em', status:'Status'
    }
  };

  const map   = labels[tipo] || {};
  const title = { experimentais:'Aula Experimental', bioimpedancia:'Bioimpedância', matriculas:'Matrícula', contatos:'Contato' };

  const fields = Object.entries(map).map(([key, label]) => {
    let val = record[key] || '—';
    if (key === 'status') val = statusPill(val);
    else if (key === 'cpf') val = `<span class="mono">${esc(val)}</span>`;
    else if (key === 'data' || key === 'dataAgendada') val = formatDate(val);
    else if (key === 'criado') val = formatDateTime(val);
    else val = esc(String(val));
    return `
      <div class="modal-field">
        <div class="modal-field-key">${label}</div>
        <div class="modal-field-val">${val}</div>
      </div>
    `;
  }).join('');

  document.getElementById('modalContent').innerHTML = `
    <div class="modal-title">${title[tipo] || 'Registro'}</div>
    ${fields}
    <div style="margin-top:20px;display:flex;gap:10px;flex-wrap:wrap">
      ${record.tel ? `<button class="btn-rel" onclick="whatsApp('${esc(record.tel)}','${esc(record.nome||'')}')"><i class="fab fa-whatsapp" style="color:#25d366"></i> WhatsApp</button>` : ''}
      ${record.tel ? `<button class="btn-rel" onclick="callClient('${esc(record.tel)}')"><i class="fas fa-phone"></i> Ligar</button>` : ''}
      ${record.email ? `<button class="btn-rel" onclick="replyEmail('${esc(record.email)}')"><i class="fas fa-envelope"></i> E-mail</button>` : ''}
      <button class="btn-rel btn-rel--danger" onclick="deleteRecord('${tipo}','${id}');closeModal()"><i class="fas fa-trash"></i> Excluir</button>
    </div>
  `;

  document.getElementById('detailModal').classList.add('open');
}

function closeModal() {
  document.getElementById('detailModal').classList.remove('open');
}

window.closeModal = closeModal;

document.getElementById('detailModal').addEventListener('click', e => {
  if (e.target === document.getElementById('detailModal')) closeModal();
});

/* ════════════════════════════════════════════════
   14. AÇÕES NAS LINHAS DA TABELA
════════════════════════════════════════════════ */
/* Atualiza status de um registro */
function updateStatus(tipo, id, novoStatus) {
  const record = DB[tipo]?.find(r => r.id === id);
  if (!record) return;
  record.status = novoStatus;
  saveDB();
  renderTable(tipo);
  showToast(`Status atualizado: ${novoStatus}`, 'success');
}

/* Remove um registro */
function deleteRecord(tipo, id) {
  if (!confirm('Confirmar exclusão deste registro?')) return;
  DB[tipo] = DB[tipo].filter(r => r.id !== id);
  saveDB();
  navigateTo(currentSection);
  showToast('Registro excluído', 'info');
}

/* Abre WhatsApp com mensagem pré-preenchida */
function whatsApp(tel, nome) {
  const num = tel.replace(/\D/g,'');
  const msg = encodeURIComponent(`Olá ${nome}, tudo bem? Aqui é da Iron Forge Academia!`);
  window.open(`https://wa.me/55${num}?text=${msg}`, '_blank');
}

/* Discagem telefônica */
function callClient(tel) {
  window.location.href = `tel:${tel.replace(/\D/g,'')}`;
}

/* Reply por e-mail */
function replyEmail(email) {
  window.location.href = `mailto:${email}?subject=Iron Forge Academia - Resposta`;
}

// Expõe globalmente
window.viewRecord    = viewRecord;
window.updateStatus  = updateStatus;
window.deleteRecord  = deleteRecord;
window.whatsApp      = whatsApp;
window.callClient    = callClient;
window.replyEmail    = replyEmail;
window.searchByCPF   = searchByCPF;

/* ════════════════════════════════════════════════
   15. EXPORTAR CSV
════════════════════════════════════════════════ */
function exportCSV(tipo) {
  const configs = {
    experimentais: {
      data: DB.experimentais,
      headers: ['id','nome','cpf','tel','email','data','horario','criado','status'],
      filename: 'aulas_experimentais'
    },
    bioimpedancia: {
      data: DB.bioimpedancia,
      headers: ['id','nome','cpf','tel','dataAgendada','horario','criado','status'],
      filename: 'bioimpedancia'
    },
    matriculas: {
      data: DB.matriculas,
      headers: ['id','nome','cpf','tel','email','plano','valor','pagamento','criado'],
      filename: 'matriculas'
    },
    contatos: {
      data: DB.contatos,
      headers: ['id','nome','email','tel','msg','criado','status'],
      filename: 'contatos'
    }
  };

  const cfg = configs[tipo];
  if (!cfg || !cfg.data.length) { showToast('Nenhum dado para exportar', 'error'); return; }

  const rows = [
    cfg.headers.join(';'),
    ...cfg.data.map(r => cfg.headers.map(h => `"${String(r[h]||'').replace(/"/g,'""')}"`).join(';'))
  ];

  const csv  = '\uFEFF' + rows.join('\n'); // BOM para Excel
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = `ironforge_${cfg.filename}_${new Date().toISOString().slice(0,10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
  showToast(`CSV exportado: ${cfg.filename}`, 'success');
}

/* Exporta todos os módulos */
function exportAll() {
  ['experimentais','bioimpedancia','matriculas','contatos'].forEach((t,i) => {
    setTimeout(() => exportCSV(t), i * 400);
  });
}

window.exportCSV = exportCSV;
window.exportAll = exportAll;

/* ════════════════════════════════════════════════
   16. RELATÓRIOS — RESUMO ESTATÍSTICO
════════════════════════════════════════════════ */
function renderRelatorios() {
  const el = document.getElementById('statsResumo');
  if (!el) return;

  const totalReceita = DB.matriculas.reduce((acc, r) => {
    const v = parseFloat((r.valor||'0').replace(/[^\d,]/g,'').replace(',','.'));
    return acc + (isNaN(v) ? 0 : v);
  }, 0);

  const cpfsUnicos = new Set([
    ...DB.experimentais.map(r=>r.cpf),
    ...DB.bioimpedancia.map(r=>r.cpf),
    ...DB.matriculas.map(r=>r.cpf)
  ]).size;

  const taxaConversao = DB.experimentais.length
    ? Math.round((DB.matriculas.length / DB.experimentais.length) * 100)
    : 0;

  const pendentes = DB.contatos.filter(r => r.status !== 'respondido').length;

  const stats = [
    { label: 'Total de Alunos Únicos', val: cpfsUnicos },
    { label: 'Aulas Experimentais',    val: DB.experimentais.length },
    { label: 'Bioimpedâncias',         val: DB.bioimpedancia.length },
    { label: 'Matrículas',             val: DB.matriculas.length },
    { label: 'Taxa de Conversão',      val: `${taxaConversao}%` },
    { label: 'Receita Total',          val: `R$ ${totalReceita.toFixed(2).replace('.',',')}` },
    { label: 'Contatos Pendentes',     val: pendentes },
    { label: 'Total de Contatos',      val: DB.contatos.length },
  ];

  el.innerHTML = stats.map(s => `
    <div class="stats-item">
      <div class="stats-item-label">${s.label}</div>
      <div class="stats-item-val">${s.val}</div>
    </div>
  `).join('');
}

/* Limpa todos os dados (exceto demo) */
function clearAllData() {
  if (!confirm('⚠️ ATENÇÃO: Isso irá apagar TODOS os dados. Tem certeza absoluta?')) return;
  if (!confirm('Última confirmação: todos os registros serão removidos permanentemente!')) return;
  DB = { experimentais:[], bioimpedancia:[], matriculas:[], contatos:[] };
  saveDB();
  navigateTo(currentSection);
  showToast('Todos os dados foram removidos', 'info');
}

window.clearAllData = clearAllData;
window.renderRelatorios = renderRelatorios;

/* ════════════════════════════════════════════════
   17. TOAST DE NOTIFICAÇÃO
════════════════════════════════════════════════ */
function showToast(msg, type = 'info') {
  const toast = document.getElementById('toast');
  const icons = { success:'fa-check-circle', error:'fa-exclamation-circle', info:'fa-info-circle' };
  toast.innerHTML = `<i class="fas ${icons[type]||'fa-info-circle'}"></i> ${msg}`;
  toast.className = `toast show ${type}`;
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

/* ════════════════════════════════════════════════
   18. UTILITÁRIOS
════════════════════════════════════════════════ */
/* Escapa HTML */
function esc(str) {
  return String(str||'')
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;');
}

/* Formata data YYYY-MM-DD → DD/MM/YYYY */
function formatDate(str) {
  if (!str) return '—';
  const parts = str.split('-');
  if (parts.length === 3) return `${parts[2]}/${parts[1]}/${parts[0]}`;
  return str;
}

/* Formata datetime "YYYY-MM-DD HH:MM" → "DD/MM HH:MM" */
function formatDateTime(str) {
  if (!str) return '—';
  const [date, time] = str.split(' ');
  if (!date) return str;
  const parts = date.split('-');
  if (parts.length === 3) return `${parts[2]}/${parts[1]} ${time||''}`.trim();
  return str;
}

/* Formata CPF durante digitação */
function formatCPF(v) {
  return v.replace(/\D/g,'')
    .replace(/(\d{3})(\d)/,'$1.$2')
    .replace(/(\d{3})(\d)/,'$1.$2')
    .replace(/(\d{3})(\d{1,2})$/,'$1-$2')
    .slice(0,14);
}

/* Badge de status colorido */
function statusPill(status) {
  const map = {
    confirmado: ['pill-green',  'fas fa-check-circle', 'Confirmado'],
    pendente:   ['pill-gold',   'fas fa-clock',        'Pendente'],
    cancelado:  ['pill-red',    'fas fa-times-circle', 'Cancelado'],
    realizado:  ['pill-blue',   'fas fa-check-double', 'Realizado'],
    agendado:   ['pill-purple', 'fas fa-calendar',     'Agendado'],
    respondido: ['pill-green',  'fas fa-reply',        'Respondido'],
  };
  const [cls, icon, label] = map[status] || ['pill-gray','fas fa-circle', status||'—'];
  return `<span class="status-pill ${cls}"><i class="${icon}"></i> ${label}</span>`;
}

/* Fecha modal com Escape */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});