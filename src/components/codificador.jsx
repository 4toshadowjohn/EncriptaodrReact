import './codificador.css'
import { encryptar } from '../hooks/codificar' 
import { useState } from 'react'


export function Codificador () {
    const [codp , setCodp] = useState('')
    const [coden , setCoden] = useState('')

    const handleinputchange = (event) => {
        setCodp(event.target.value)
    }

    const handleSubmit = (event) => {
    event.preventDefault()
    setCoden(encryptar(codp))
    } 



    return (
        <>
            <form onSubmit={handleSubmit}>
                <p><label htmlFor='codigo'> Ingrese codifo a codificar: </label></p>
                <p><input id='codigo' value={codp} onChange={handleinputchange}/></p>
                <p><input id='codigoe' value={coden} disabled /></p>
                <button type='submit'>Emcryptar</button>
            </form>
        </>
    )
}

export default Codificador