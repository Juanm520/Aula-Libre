import React from 'react'

function IconImage() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" fill="#e9e9ea"/><circle cx="9" cy="9" r="1.5" fill="#0f172a"/><path d="M3 15l6-6 12 12V5" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round"/></svg>
}

function IconEdit() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z" fill="#555" /><path d="M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="#555" /></svg>
}

function IconSync() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 7v10c0 1.1.9 2 2 2h10m-8-12H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-8" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 4v3m6-3v3" stroke="#555" strokeWidth="1.5" strokeLinecap="round"/></svg>
}

export default function Administrador() {
  return (
    <div className="admin-page">
      <div className="admin-header">
        <div className="admin-title">
          <h1>Administrador</h1>
        </div>
        <div className="admin-avatar">👤</div>
      </div>

      <main className="admin-main">
        {/* Cursos */}
        <section className="admin-section">
          <h2>Cursos</h2>
          <div className="admin-card">
            <p className="admin-card-label">Acciones para cursos</p>
            <div className="admin-actions">
              <div className="action-item">
                <IconImage />
              </div>
              <button className="action-item"><IconEdit /></button>
              <button className="action-item"><IconEdit /></button>
              <button className="action-item"><IconEdit /></button>
            </div>
          </div>
        </section>

        {/* Usuarios */}
        <section className="admin-section">
          <h2>Usuarios</h2>
          <div className="admin-card">
            <p className="admin-card-label">Acciones para Usuarios</p>
            <div className="admin-actions">
              <div className="action-item">
                <IconImage />
              </div>
              <button className="action-item"><IconEdit /></button>
              <button className="action-item"><IconEdit /></button>
              <button className="action-item"><IconEdit /></button>
            </div>
          </div>
        </section>

        {/* Plataforma */}
        <section className="admin-section">
          <h2>Plataforma</h2>
          <div className="admin-card">
            <p className="admin-card-label">Acciones para la plataforma</p>
            <div className="admin-actions">
              <div className="action-item">
                <IconImage />
              </div>
              <button className="action-item"><IconEdit /></button>
              <button className="action-item"><IconEdit /></button>
              <button className="action-item"><IconSync /></button>
            </div>
          </div>
        </section>
      </main>

      <footer className="admin-footer">
        <p>Información de la aplicación.</p>
        <small>Última actualización del servicio: xx - xx - xxxx</small>
        <small>Última actualización en el cliente: xx - xx - xxxx</small>
      </footer>
    </div>
  )
}
