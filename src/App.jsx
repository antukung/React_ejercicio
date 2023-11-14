import { useEffect, useState } from 'react';
import './App.css';

const API =[ "https://pokeapi.co/api/v2/pokemon/ditto"]

function App() {
  const [contador, setContador] = useState (0);
  const [nombre, setNombre] = useState("def nombre");
  const [imagen, setImagen] = useState("def imagen");

  function aumentar() {
    setContador(contador+1)
  }

  useEffect( ()=>{
    async function fetchApi(){
      const res = await fetch(API);
      let info ="def info";
      if(res.ok){
        info = await res.json();
        setNombre(info.name);
        setImagen(info.sprites.front_default)
      }
    }
    fetchApi();
  })

  return (
    <>
    <p>dame un click</p>
    <h5>TE HACE COMUNISTA</h5>
    <button onClick={aumentar}>CLICK AL COMUNISMO</button>
    <h2>{contador}</h2>
    <h3>{nombre}</h3>
    <img src={imagen} alt={imagen}/>
    </>
  )
}

export default App
