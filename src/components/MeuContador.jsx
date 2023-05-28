import { useState } from "react";

export default function MeuContador() {
    
    const [contador, setContador] = useState(0)

    function aumentar(){
        setContador(contador + 1)
    }
    function diminuir() {
        setContador(contador - 1)
    }
    
    if (contador > 5 ) {
        return(
        <div>
            <h1>Contador muito alto!</h1>
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={diminuir}>Diminuir</button>
        </div>

        )
    }

    return (
        <div>
            <h1>Meu Contador: </h1>
            { contador > 9 ? <h1>Valor muito grande</h1> : null}
            <h3>{contador}</h3>
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={diminuir}>Diminuir</button>
        </div>
    )
}