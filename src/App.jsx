import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Thanks from './components/Thanks'

function App() {
  const [puntuacion, Setpuntuacion] =useState(0)
  const [mostrarOcultar, SetmostrarOcultar] = useState(false)

  return (
    <div className='grid place-items-center justify-items-center h-screen'>
    {mostrarOcultar? <Thanks puntuacion = {puntuacion} SetmostrarOcultar={SetmostrarOcultar} /> : <Card Setpuntuacion = {Setpuntuacion} SetmostrarOcultar={SetmostrarOcultar}/>  }
    </div>
  )
}

export default App
