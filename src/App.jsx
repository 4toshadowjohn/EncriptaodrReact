import { useState } from 'react'
import { Decodificador } from './components/decodificador'
import { Codificador } from './components/codificador'
import './App.css'


function App() {
  const [mostrarcod, Setmostrarcod] = useState(false)

  const ChangeRadius1 = () =>  {
    Setmostrarcod(true)
    
  }
 const ChangeRadius2 = () =>  {
    Setmostrarcod(false)
  }

  return (
    <>
    <label htmlFor="codificar">CODIFICADOR: <input id='codificar' type='radio' name='opcionem' onChange={ChangeRadius1}/></label>
     <label htmlFor='decodificador'>DECODIFICADOR: <input id='decodificar' type='radio' name='opcionem' onChange={ChangeRadius2}/></label>
    if {mostrarcod ? <Codificador /> : <Decodificador/>}
    </> 
  )
}

export default App
