import './codificador.css'



export function Codificador () {

    const handleSubmit = (event) => {
    event.preventDefault()
} 

    return (
        <>
            <form onSubmit={handleSubmit}>
                <p><label for='codigo'> Ingrese codifo a codificar: </label></p>
                <p><input id='codigo' /></p>
                <p><input id='codigoe' disabled /></p>
                <button type='submit'>boton</button>
            </form>
        </>
    )
}

export default Codificador