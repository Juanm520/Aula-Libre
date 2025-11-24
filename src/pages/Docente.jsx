import React from 'react'

const courses = [
  { id: 1, name: 'Ciencias Naturales 1', excerpt: '< Lorem ipsum >' },
  { id: 2, name: 'Ciencias Naturales 2', excerpt: '< Lorem ipsum >' },
  { id: 3, name: 'Matemáticas 5', excerpt: '< Lorem ipsum >' },
]

function IconMenu() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="6" width="18" height="2" rx="1" fill="#0f172a" /><rect x="3" y="11" width="18" height="2" rx="1" fill="#0f172a" /><rect x="3" y="16" width="18" height="2" rx="1" fill="#0f172a" /></svg>
}

function IconBook() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5H3z" fill="#0f172a" /><rect x="3" y="5" width="16" height="2" fill="#e9e9ea" /></svg>
}

function IconPencil() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z" fill="#0f172a" /><path d="M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="#0f172a" /></svg>
}

function IconGroup() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="4" fill="#0f172a" /><path d="M14 12c2.21 0 4-1.79 4-4s-1.79-4-4-4" fill="#0f172a" /><path d="M0 16c0-2.67 4-4 8-4s8 1.33 8 4v4H0v-4z" fill="#0f172a" /><path d="M14 13c-2.67 0-8 1.33-8 4v4h16v-4c0-2.67-5.33-4-8-4z" fill="#0f172a" /></svg>
}

function IconEdit() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z" fill="#555" /><path d="M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="#555" /></svg>
}

export default function Docente() {
  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <div className="dash-title">
          <h1>Aula Libre</h1>
          <p>Docente</p>
        </div>
        <div className="dash-icons">
          <span className="dash-icon">📚</span>
          <span className="dash-icon dash-avatar">👤</span>
        </div>
      </div>

      <div className="dashboard-container">
        {/* Sidebar */}
        <aside className="dashboard-sidebar">
          <nav className="sidebar-nav">
            <button className="sidebar-btn active">
              <IconMenu />
            </button>
            <button className="sidebar-btn">
              <span style={{ color: '#f0a' }}>📝</span>
            </button>
            <button className="sidebar-btn">
              <IconBook />
            </button>
            <button className="sidebar-btn">
              <IconPencil />
            </button>
            <button className="sidebar-btn">
              <IconGroup />
            </button>
          </nav>
        </aside>

        {/* Main content */}
        <main className="dashboard-main">
          <section className="courses-section">
            <h2>Cursos Asignados</h2>
            <div className="courses-grid teacher">
              {courses.map(course => (
                <article className="course-card teacher" key={course.id}>
                  <div className="course-header">
                    <h3>{course.name}</h3>
                    <p className="course-excerpt">{course.excerpt}</p>
                  </div>
                  <div className="course-actions">
                    <div className="course-image">📷</div>
                    <button className="course-edit-btn" aria-label="Editar">
                      <IconEdit />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>
      </div>

      <footer className="dashboard-footer">
        <p>Información de la aplicación.</p>
        <small>Última actualización del servicio: xx - xx - xxxx</small>
        <small>Última actualización en el cliente: xx - xx - xxxx</small>
      </footer>
    </div>
  )
}
