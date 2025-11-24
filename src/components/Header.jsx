import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="nav-item">
            <div className="logo">Aula Libre</div>
          </Link>
        <nav className="nav-links">
          <Link to="/login" className="nav-item">
            <span className="nav-icon">🔑</span>
            <span className="nav-text">Iniciar Sesión</span>
          </Link>
          <Link to="/estudiante" className="nav-item">
            <span className="nav-icon">📚</span>
            <span className="nav-text">Aprendizaje</span>
          </Link>
          <Link to="/docente" className="nav-item">
            <span className="nav-icon">👨‍🏫</span>
            <span className="nav-text">Docente</span>
          </Link>
          <Link to="/administrador" className="nav-item">
            <span className="nav-icon">⚙️</span>
            <span className="nav-text">Administrador</span>
          </Link>
          <Link to="/tutoriales" className="nav-item">
            <span className="nav-icon">▶</span>
            <span className="nav-text">Tutoriales</span>
          </Link>
          <Link to="/contacto" className="nav-item">
            <span className="nav-icon">✉️</span>
            <span className="nav-text">Contacto</span>
          </Link>
        </nav>
      </div>
    </header>
  )
}
