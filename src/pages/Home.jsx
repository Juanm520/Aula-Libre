import React from 'react'

export default function Home() {
  return (
    <div className="page home-page">
      <section className="info-box">
        <div className="info-text">
          <strong>Información de la aplicación.</strong>
          <div>Última actualización del servicio: xx - xx - xxxx</div>
          <div>Última actualización en el cliente: xx - xx - xxxx</div>
        </div>
      </section>

      <section className="hero">
        <div className="hero-inner">
          <div className="hero-title">Plataforma digital educativa de baja conectividad.</div>

          <div className="hero-body">
            <div className="update-card">
              <div className="image-placeholder">📷</div>
            </div>

            <div className="updates">
              <h2>Actualizaciones</h2>
              <p className="update-item">&lt;Lorem ipsum text &gt;</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
