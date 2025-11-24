import React, { useState } from 'react'

export default function Contacto(){
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [asunto, setAsunto] = useState('')
  const [mensaje, setMensaje] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    console.log('Contacto enviado', { nombre, email, asunto, mensaje })
    alert('Mensaje enviado. Gracias!')
  }

  return (
    <div className="page contacto-page">
      <section className="contact-hero">
        <div className="contact-hero-inner">
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="nombre">Nombre</label>
            <input id="nombre" value={nombre} onChange={e=>setNombre(e.target.value)} placeholder="Nombre" />

            <label htmlFor="email">Email</label>
            <input id="email" type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" />

            <label htmlFor="asunto">Asunto</label>
            <input id="asunto" value={asunto} onChange={e=>setAsunto(e.target.value)} placeholder="Asunto" />

            <label htmlFor="mensaje">Mensaje</label>
            <textarea id="mensaje" rows={4} value={mensaje} onChange={e=>setMensaje(e.target.value)} placeholder="Mensaje a enviar" />

            <div className="contact-actions">
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
