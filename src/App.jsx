import { useState } from "react";
import styles from './button.module.css'

function App() {

  const [contador, setContador] = useState(0)

  function aumentar(){
    setContador(contador + 1)
  }
  function diminuir(){
    setContador(contador - 1)
  }
  return (
    <div className="container">
      <h1>Meu Contador: </h1>
      { contador > 9 ? <h1>Valor muito grande</h1> : null}
      <h3>{contador}</h3>
      <button className={styles.myButton} onClick={aumentar}>Aumentar</button>
      <button className={styles.myButton} onClick={diminuir}>Diminuir</button>
    </div>
    
  )
}



export default App
