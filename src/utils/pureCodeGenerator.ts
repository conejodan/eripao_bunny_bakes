import { pastriesList, scheduleData, contactData } from '../data/pastryData';

export function generatePureHtmlAndCss(): { html: string; css: string; combined: string } {
  const css = `/* ==========================================================================
   PASTELERÍA ARTESANAL - CSS PURO, MINIMALISTA Y RESPONSIVO
   Paleta: Neutros cálidos (#FAF7F2, #2D2422, #B26A4D, #EADBCE)
   ========================================================================== */

:root {
  --color-bg: #FAF7F2;
  --color-surface: #FFFFFF;
  --color-surface-alt: #F5EFEB;
  --color-text-main: #2D2422;
  --color-text-muted: #736561;
  --color-border: #EADBCE;
  --color-accent: #B26A4D;
  --color-accent-hover: #985438;
  --font-serif: 'Cormorant Garamond', Georgia, serif;
  --font-sans: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  --nav-height: 72px;
  --container-max: 1200px;
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 18px;
  --shadow-subtle: 0 4px 20px rgba(45, 36, 34, 0.04);
  --shadow-hover: 0 10px 30px rgba(45, 36, 34, 0.08);
}

/* Reset y Base */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: calc(var(--nav-height) + 16px);
}

body {
  font-family: var(--font-sans);
  background-color: var(--color-bg);
  color: var(--color-text-main);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease;
}

.container {
  width: 100%;
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 24px;
}

.font-serif {
  font-family: var(--font-serif);
}

/* 1. NAVEGACIÓN FIJA */
.fixed-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--nav-height);
  background-color: rgba(250, 247, 242, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-border);
  z-index: 1000;
  display: flex;
  align-items: center;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.logo {
  display: flex;
  flex-direction: column;
}

.logo-brand {
  font-family: var(--font-serif);
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: var(--color-text-main);
}

.logo-tagline {
  font-size: 0.65rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-accent);
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 32px;
  align-items: center;
}

.nav-link {
  font-size: 0.92rem;
  font-weight: 500;
  color: var(--color-text-main);
  position: relative;
  padding: 6px 0;
}

.nav-link:hover {
  color: var(--color-accent);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-accent);
  transition: width 0.25s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 22px;
  font-size: 0.88rem;
  font-weight: 600;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 0.25s ease;
  border: 1px solid transparent;
}

.btn-primary {
  background-color: var(--color-accent);
  color: #FFFFFF;
}

.btn-primary:hover {
  background-color: var(--color-accent-hover);
}

.btn-outline {
  background-color: transparent;
  color: var(--color-text-main);
  border-color: var(--color-border);
}

.btn-outline:hover {
  border-color: var(--color-text-main);
  background-color: var(--color-surface);
}

/* 2. SECCIÓN HERO */
.hero-section {
  padding-top: calc(var(--nav-height) + 60px);
  padding-bottom: 70px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 56px;
  align-items: center;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  background-color: var(--color-surface-alt);
  border: 1px solid var(--color-border);
  border-radius: 999px;
  font-size: 0.8rem;
  color: var(--color-text-muted);
  margin-bottom: 20px;
}

.hero-title {
  font-family: var(--font-serif);
  font-size: 3.4rem;
  line-height: 1.1;
  font-weight: 600;
  color: var(--color-text-main);
  margin-bottom: 20px;
}

.hero-desc {
  font-size: 1.08rem;
  color: var(--color-text-muted);
  max-width: 520px;
  margin-bottom: 32px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.hero-image-wrap {
  position: relative;
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-subtle);
  border: 1px solid var(--color-border);
}

.hero-image {
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
}

.hero-pills {
  display: flex;
  gap: 24px;
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid var(--color-border);
}

.pill-item {
  display: flex;
  flex-direction: column;
}

.pill-num {
  font-family: var(--font-serif);
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-accent);
}

.pill-label {
  font-size: 0.78rem;
  color: var(--color-text-muted);
}

/* 3. SECCIÓN GALERÍA PRODUCTOS ESTRELLA */
.section {
  padding: 80px 0;
}

.section-alt {
  background-color: var(--color-surface-alt);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.section-header {
  text-align: center;
  max-width: 680px;
  margin: 0 auto 50px auto;
}

.section-subtitle {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--color-accent);
  margin-bottom: 10px;
  font-weight: 600;
}

.section-title {
  font-family: var(--font-serif);
  font-size: 2.6rem;
  line-height: 1.2;
  font-weight: 600;
  color: var(--color-text-main);
  margin-bottom: 14px;
}

.section-desc {
  font-size: 1rem;
  color: var(--color-text-muted);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.star-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-subtle);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.star-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-hover);
}

.star-thumb {
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
}

.star-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.star-card:hover .star-thumb img {
  transform: scale(1.04);
}

.badge-star {
  position: absolute;
  top: 12px;
  left: 12px;
  background-color: rgba(45, 36, 34, 0.85);
  color: #FAF7F2;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  padding: 4px 10px;
  border-radius: 999px;
  text-transform: uppercase;
  font-weight: 600;
}

.star-body {
  padding: 22px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.star-name {
  font-family: var(--font-serif);
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-text-main);
  margin-bottom: 8px;
}

.star-desc {
  font-size: 0.88rem;
  color: var(--color-text-muted);
  margin-bottom: 16px;
  flex-grow: 1;
}

.star-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 14px;
  border-top: 1px solid var(--color-border);
}

.price {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-accent);
}

.portion {
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

/* 4. MENÚ DE PASTELES */
.menu-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.menu-item {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 20px;
  display: flex;
  gap: 18px;
  transition: border-color 0.2s ease;
}

.menu-item:hover {
  border-color: var(--color-accent);
}

.menu-item-img {
  width: 90px;
  height: 90px;
  border-radius: var(--radius-sm);
  object-fit: cover;
  flex-shrink: 0;
}

.menu-item-content {
  flex-grow: 1;
}

.menu-item-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 6px;
}

.menu-item-title {
  font-family: var(--font-serif);
  font-size: 1.15rem;
  font-weight: 600;
}

.menu-item-desc {
  font-size: 0.82rem;
  color: var(--color-text-muted);
  margin-bottom: 8px;
}

.menu-item-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tag-pill {
  font-size: 0.7rem;
  background-color: var(--color-surface-alt);
  padding: 2px 8px;
  border-radius: 999px;
  color: var(--color-text-muted);
  border: 1px solid var(--color-border);
}

/* 5. HORARIO Y CONTACTO */
.info-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.info-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 32px;
  box-shadow: var(--shadow-subtle);
}

.card-title {
  font-family: var(--font-serif);
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.schedule-table {
  width: 100%;
  border-collapse: collapse;
}

.schedule-table tr {
  border-bottom: 1px solid var(--color-border);
}

.schedule-table tr:last-child {
  border-bottom: none;
}

.schedule-table td {
  padding: 12px 0;
  font-size: 0.92rem;
}

.schedule-day {
  font-weight: 600;
  color: var(--color-text-main);
}

.schedule-time {
  text-align: right;
  color: var(--color-text-muted);
}

.contact-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 0.92rem;
}

.contact-label {
  font-weight: 600;
  display: block;
}

.contact-val {
  color: var(--color-text-muted);
}

/* Formulario */
.form-group {
  margin-bottom: 16px;
}

.form-label {
  display: block;
  font-size: 0.82rem;
  font-weight: 600;
  margin-bottom: 6px;
  color: var(--color-text-main);
}

.form-input, .form-textarea {
  width: 100%;
  padding: 10px 14px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  background: var(--color-bg);
  font-family: inherit;
  font-size: 0.9rem;
  color: var(--color-text-main);
}

.form-input:focus, .form-textarea:focus {
  outline: none;
  border-color: var(--color-accent);
}

/* 6. FOOTER */
.site-footer {
  background-color: #261E1C;
  color: #EDE4DC;
  padding: 50px 0 30px 0;
  border-top: 1px solid var(--color-border);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.footer-brand {
  font-family: var(--font-serif);
  font-size: 1.5rem;
}

.footer-copy {
  text-align: center;
  padding-top: 24px;
  font-size: 0.78rem;
  color: #A99B95;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .info-columns {
    grid-template-columns: 1fr;
  }
  .hero-title {
    font-size: 2.6rem;
  }
}

@media (max-width: 640px) {
  .nav-links {
    display: none;
  }
  .gallery-grid {
    grid-template-columns: 1fr;
  }
  .menu-grid {
    grid-template-columns: 1fr;
  }
  .hero-title {
    font-size: 2.2rem;
  }
  .hero-pills {
    flex-direction: column;
    gap: 12px;
  }
}
`;

  const starProducts = pastriesList.filter((p) => p.isStar);

  const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pastelería Artesanal</title>
  <meta name="description" content="Pastelería artesanal con ingredientes nobles, menú de pasteles, productos estrella y atención personalizada.">
  <!-- Fuentes Google -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <!-- 1. NAVEGACIÓN FIJA -->
  <header class="fixed-nav" id="encabezado-fijo">
    <div class="container nav-container">
      <a href="#inicio" class="logo" id="enlace-logo">
        <span class="logo-brand">PASTELERÍA ARTESANAL</span>
        <span class="logo-tagline">Atelier & Repostería Fina</span>
      </a>
      <nav>
        <ul class="nav-links" id="menu-navegacion">
          <li><a href="#inicio" class="nav-link">Inicio</a></li>
          <li><a href="#galeria-estrella" class="nav-link">Productos Estrella</a></li>
          <li><a href="#menu-pasteles" class="nav-link">Menú</a></li>
          <li><a href="#horario" class="nav-link">Horario</a></li>
          <li><a href="#contacto" class="nav-link">Contacto</a></li>
          <li><a href="https://wa.me/34600123456" target="_blank" class="btn btn-primary" id="btn-encargos">Hacer Encargo</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <!-- 2. SECCIÓN INICIO / HERO -->
  <main>
    <section class="hero-section" id="inicio">
      <div class="container hero-grid">
        <div class="hero-text">
          <div class="hero-badge">
            <span>✦</span>
            <span>Elaboración diaria · Ingredientes 100% nobles</span>
          </div>
          <h1 class="hero-title">El arte del dulce en su forma más pura y honesta</h1>
          <p class="hero-desc">
            En nuestra pastelería horneamos con pasión matutina: mantequilla pura, cacaos seleccionados y frutos frescos de temporada, respetando las técnicas tradicionales de la repostería artesana.
          </p>
          <div class="hero-actions">
            <a href="#galeria-estrella" class="btn btn-primary" id="btn-ver-estrella">Ver Productos Estrella</a>
            <a href="#menu-pasteles" class="btn btn-outline" id="btn-ver-menu">Consultar Menú Completo</a>
          </div>
          <div class="hero-pills">
            <div class="pill-item">
              <span class="pill-num">100%</span>
              <span class="pill-label">Mantequilla Pura AOP</span>
            </div>
            <div class="pill-item">
              <span class="pill-num">0%</span>
              <span class="pill-label">Conservantes Artificiales</span>
            </div>
            <div class="pill-item">
              <span class="pill-num">Diario</span>
              <span class="pill-label">Horneado Cada Mañana</span>
            </div>
          </div>
        </div>
        <div class="hero-image-wrap">
          <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=80" alt="Pastel Ópera artesanal" class="hero-image" referrerpolicy="no-referrer">
        </div>
      </div>
    </section>

    <!-- 3. GALERÍA VISUAL DE PRODUCTOS ESTRELLA -->
    <section class="section section-alt" id="galeria-estrella">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">Selección Insignia</span>
          <h2 class="section-title">Nuestras Creaciones Estrella</h2>
          <p class="section-desc">Las recetas predilectas de nuestros clientes, elaboradas pacientemente capa por capa para ofrecer una experiencia sensorial inigualable.</p>
        </div>
        <div class="gallery-grid" id="cuadricula-galeria">
${starProducts
  .map(
    (item) => `          <article class="star-card" id="card-${item.id}">
            <div class="star-thumb">
              <img src="${item.imageUrl}" alt="${item.name}" loading="lazy" referrerpolicy="no-referrer">
              <span class="badge-star">Firma de la Casa</span>
            </div>
            <div class="star-body">
              <h3 class="star-name">${item.name}</h3>
              <p class="star-desc">${item.description}</p>
              <div class="star-footer">
                <span class="price">${item.price} pesos</span>
                <span class="portion">${item.portions}</span>
              </div>
            </div>
          </article>`
  )
  .join('\n')}
        </div>
      </div>
    </section>

    <!-- 4. MENÚ DE PASTELES -->
    <section class="section" id="menu-pasteles">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">Carta Artesanal</span>
          <h2 class="section-title">Menú de Pasteles & Dulces</h2>
          <p class="section-desc">Descubre todas nuestras elaboraciones disponibles para encargo y compra directa en tienda.</p>
        </div>
        <div class="menu-grid" id="lista-menu">
${pastriesList
  .map(
    (item) => `          <div class="menu-item" id="menu-item-${item.id}">
            <img src="${item.imageUrl}" alt="${item.name}" class="menu-item-img" loading="lazy" referrerpolicy="no-referrer">
            <div class="menu-item-content">
              <div class="menu-item-header">
                <h3 class="menu-item-title">${item.name}</h3>
                <span class="price">${item.price} pesos</span>
              </div>
              <p class="menu-item-desc">${item.description}</p>
              <div class="menu-item-tags">
                <span class="tag-pill">${item.portions}</span>
                ${item.tags.map((t) => `<span class="tag-pill">${t}</span>`).join(' ')}
              </div>
            </div>
          </div>`
  )
  .join('\n')}
        </div>
      </div>
    </section>

    <!-- 5. HORARIO Y CONTACTO -->
    <section class="section section-alt" id="horario">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">Visítanos & Encarga</span>
          <h2 class="section-title">Horario de Atención & Contacto</h2>
          <p class="section-desc">Ven a degustar nuestros postres recién horneados o escríbenos para coordinar tu pedido personalizado.</p>
        </div>
        <div class="info-columns" id="contacto">
          <!-- Columna Horarios -->
          <div class="info-card" id="tarjeta-horarios">
            <h3 class="card-title">🕒 Horario de Apertura</h3>
            <table class="schedule-table">
              <tbody>
${scheduleData
  .map(
    (s) => `                <tr>
                  <td class="schedule-day">${s.day}</td>
                  <td class="schedule-time">${s.hours}</td>
                </tr>`
  )
  .join('\n')}
              </tbody>
            </table>
            <div style="margin-top: 24px; padding: 14px; background-color: var(--color-bg); border-radius: var(--radius-sm); border: 1px solid var(--color-border); font-size: 0.85rem; color: var(--color-text-muted);">
              💡 <strong>Nota para encargos:</strong> Recomendamos encargar pasteles completos para celebraciones con 48 horas de antelación.
            </div>
          </div>

          <!-- Columna Contacto -->
          <div class="info-card" id="tarjeta-contacto">
            <h3 class="card-title">📍 Encuéntranos</h3>
            <ul class="contact-list">
              <li class="contact-item">
                <div>
                  <span class="contact-label">Dirección</span>
                  <span class="contact-val">${contactData.address}, ${contactData.city} (${contactData.neighborhood})</span>
                </div>
              </li>
              <li class="contact-item">
                <div>
                  <span class="contact-label">Teléfono & WhatsApp</span>
                  <span class="contact-val">${contactData.phone} / ${contactData.whatsapp}</span>
                </div>
              </li>
              <li class="contact-item">
                <div>
                  <span class="contact-label">Correo Electrónico</span>
                  <span class="contact-val">${contactData.email}</span>
                </div>
              </li>
            </ul>

            <form id="formulario-contacto" onsubmit="event.preventDefault(); alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');">
              <div class="form-group">
                <label for="nombre" class="form-label">Tu Nombre</label>
                <input type="text" id="nombre" name="nombre" class="form-input" required placeholder="Ej. Clara Fernández">
              </div>
              <div class="form-group">
                <label for="email" class="form-label">Correo o Teléfono</label>
                <input type="text" id="email" name="email" class="form-input" required placeholder="Ej. clara@email.com">
              </div>
              <div class="form-group">
                <label for="mensaje" class="form-label">Pastel o consulta</label>
                <textarea id="mensaje" name="mensaje" rows="3" class="form-textarea" required placeholder="¿Qué pastel deseas o para qué fecha necesitas tu pedido?"></textarea>
              </div>
              <button type="submit" class="btn btn-primary" style="width: 100%;" id="btn-enviar-formulario">Enviar Consulta</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- 6. PIE DE PÁGINA -->
  <footer class="site-footer" id="pie-pagina">
    <div class="container">
      <div class="footer-content">
        <div>
          <span class="footer-brand">PASTELERÍA ARTESANAL</span>
          <p style="font-size: 0.85rem; color: #A99B95; margin-top: 4px;">Atelier de pastelería fina, horneado honesto y materias primas de excelencia.</p>
        </div>
        <div>
          <a href="https://wa.me/34600123456" target="_blank" class="btn btn-outline" style="color: #FFFFFF; border-color: rgba(255,255,255,0.2);">
            Escríbenos por WhatsApp
          </a>
        </div>
      </div>
      <p class="footer-copy">© 2026 Pastelería Artesanal. Todos los derechos reservados. Diseño puro, moderno y responsivo.</p>
    </div>
  </footer>

</body>
</html>`;

  const combined = `<!-- ==========================================================================
   PASTELERÍA ARTESANAL - ARCHIVO ÚNICO CON HTML Y CSS PURO
   Puedes guardar este archivo directamente como "index.html" en tu computadora
   o en cualquier servidor web sin necesidad de compiladores ni dependencias.
   ========================================================================== -->
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pastelería Artesanal</title>
  <meta name="description" content="Pastelería artesanal con ingredientes nobles, menú de pasteles, productos estrella y atención personalizada.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
${css}
  </style>
</head>
<body>
${html.split('<body>')[1]}`;

  return { html, css, combined };
}
