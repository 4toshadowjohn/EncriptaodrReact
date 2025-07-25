import { useState } from "react"
import { desemcriptar } from '../hooks/decodificar'


export function Decodificador () {
    
    const [cod, setCod] = useState('')
    const [decod, setDecod] = useState('')

    const handleInputChange = (event) => {
        setCod(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setDecod(desemcriptar(cod))
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Ingrese codigo para decodificar</label>
                </p>
                <p>
                    <input id="cod" type="text" value={cod} onChange={handleInputChange}/>
                </p>
                <p>
                    <input id="resul" disabled value={decod}/>
                </p> 
                    <button id="miboton" type="submit">desemcryptar</button>
            </form>
        </>
    )
}

export default Decodificador