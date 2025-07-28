import { useState } from 'react'
import { Decodificador } from './components/decodificador'
import { Codificador } from './components/codificador'
import './App.css'


function App() {

  return (
    <>
       <Decodificador />
        <Codificador />
    </> 
  )
}

export default App
