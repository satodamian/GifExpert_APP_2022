import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { GifExpertAppF } from './GifExpertApp'


ReactDOM.createRoot(document.getElementById('root')).render(
  // El modo estrcto de react ayuda a verificar errores de ciclo, solo se aplica en desarrollo
  
  <React.StrictMode>
    <GifExpertAppF />
  </React.StrictMode>
)
