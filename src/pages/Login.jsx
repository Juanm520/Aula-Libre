import React, { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    console.log('Login attempt', { email, password })
    alert(`Intento de login:\nEmail: ${email}`)
  }

  return (
    <div className="page login-page">
      <div className="login-card">
        <h1>Iniciar sesión</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />

          <div className="login-actions">
            <button type="submit">Entrar</button>
          </div>
        </form>
      </div>
    </div>
  )
}
