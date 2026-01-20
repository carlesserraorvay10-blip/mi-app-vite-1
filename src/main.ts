import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="page">
    <header class="hero">
      <div class="hero-text">
        <p class="eyebrow">Pulseboard</p>
        <h1>Monitor rapido para tu app.</h1>
        <p class="lead">
          Vista clara de actividad, rendimiento y tareas. Un panel liviano para
          decidir rapido y actuar mejor.
        </p>
        <div class="hero-actions">
          <button class="btn primary">Crear informe</button>
          <button class="btn ghost">Ver eventos</button>
        </div>
      </div>
      <div class="hero-card">
        <div class="card-header">
          <div>
            <p class="card-title">Estado del sistema</p>
            <p class="card-subtitle">Ultimos 30 minutos</p>
          </div>
          <span class="chip ok">Operativo</span>
        </div>
        <div class="stats">
          <div class="stat">
            <p class="stat-value">98.7%</p>
            <p class="stat-label">Disponibilidad</p>
          </div>
          <div class="stat">
            <p class="stat-value">142 ms</p>
            <p class="stat-label">Latencia media</p>
          </div>
          <div class="stat">
            <p class="stat-value">1.2k</p>
            <p class="stat-label">Sesiones activas</p>
          </div>
        </div>
        <div class="mini-chart" aria-hidden="true"></div>
      </div>
    </header>

    <section class="grid">
      <article class="panel">
        <h2>Actividad reciente</h2>
        <ul class="timeline">
          <li><span class="dot"></span>Build 298 desplegado en 2m 18s</li>
          <li><span class="dot"></span>Pago procesado para Plan Pro</li>
          <li><span class="dot"></span>Nuevo registro: diana@demo.com</li>
          <li><span class="dot"></span>Alerta mitigada en region EU</li>
        </ul>
      </article>
      <article class="panel highlight">
        <h2>Acciones rapidas</h2>
        <div class="quick-actions">
          <button class="btn ghost">Pausar despliegue</button>
          <button class="btn ghost">Limpiar cache</button>
          <button class="btn ghost">Exportar datos</button>
        </div>
        <p class="note">
          Configura reglas automaticas para reducir trabajo manual.
        </p>
      </article>
      <article class="panel">
        <h2>Riesgos</h2>
        <div class="risk">
          <p class="risk-title">Uso de API externo</p>
          <p class="risk-desc">Se detecto un aumento de errores 500.</p>
          <button class="btn primary small">Abrir incidente</button>
        </div>
      </article>
    </section>
  </div>
`
