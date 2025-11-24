import React from 'react'

const tutorials = [
  { id: 1, title: 'Como utilizar las herramientas en los cursos.', excerpt: '< Lorem ipsum >' },
  { id: 2, title: 'Como inscribirse a un curso.', excerpt: '< Lorem ipsum >' },
  { id: 3, title: 'Como crear un curso.', excerpt: '< Lorem ipsum >' },
]

function IconMenu() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="6" width="18" height="2" rx="1" fill="#0f172a" />
      <rect x="3" y="11" width="18" height="2" rx="1" fill="#0f172a" />
      <rect x="3" y="16" width="18" height="2" rx="1" fill="#0f172a" />
    </svg>
  )
}

function IconWifi() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 8.5C7 4 17 4 22 8.5" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 11.5C8 9.5 16 9.5 19 11.5" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 14.5C10 13.2 14 13.2 16 14.5" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="18" r="1" fill="#0f172a" />
    </svg>
  )
}

export default function Tutoriales() {
  return (
    <div className="page tutoriales-page">
      <section className="tutorials-list">
        {tutorials.map(t => (
          <article className="tutorial-row" key={t.id}>
            <div className="tutorial-content">
              <h3 className="tutorial-title">{t.title}</h3>
              <p className="tutorial-excerpt">{t.excerpt}</p>
            </div>

            <div className="tutorial-actions">
              <button className="action-btn" aria-label="Detalles"><IconMenu /></button>
              <button className="action-btn" aria-label="Modo baja conectividad"><IconWifi /></button>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}
