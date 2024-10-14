import { useEffect, useState } from "react"
import axios from "axios";


function App() {

  const [lista, setLista] = useState([])

useEffect(() => {
  api()
}, []);

  const api = async () => {
    const url = `http://localhost:3000/listar`
    const resultado = await axios.get(url);
    console.log(resultado.data);
    setLista(resultado.data);
  }

  return (
    <>
     <ul>

      {lista.map((evento, key) => 
        <li key={key}>
          <p>{evento.titulo}</p>
        </li>
      )}

      </ul>
    </>
  )
}

export default App
