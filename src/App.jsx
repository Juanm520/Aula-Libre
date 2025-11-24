import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import Tutoriales from './pages/Tutoriales'
import Contacto from './pages/Contacto'
import Estudiante from './pages/Estudiante'
import Docente from './pages/Docente'
import Administrador from './pages/Administrador'

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/tutoriales" element={<Tutoriales />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/estudiante" element={<Estudiante />} />
            <Route path="/docente" element={<Docente />} />
            <Route path="/administrador" element={<Administrador />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
