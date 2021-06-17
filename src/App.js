import React, {useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Letra from './components/Letra';
import Datos from './components/Datos';



function App() {

  const [search, setSearch] = useState({})
  const [letra, setLetra] = useState('');
  const [datos, setDatos] = useState({})
  

  useEffect(()=>{
    const { artista, cancion } = search;
    if (Object.keys(search).length === 0) return;
    const consultarAPI = async () =>{
      const urlLetra = `https://api.lyrics.ovh/v1/${artista}/${cancion}`

      const respuestaLetra = await fetch(urlLetra);
      const letra = await respuestaLetra.json();

      const ulrDatos = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`

      const respuestaDatos = await fetch(ulrDatos);
      const datos = await respuestaDatos.json();

      setLetra(letra.lyrics)
      setDatos(datos.artists[0])

      setSearch({})
    }
    consultarAPI()
  }, [search])

  return (
    <>
      <Formulario
      setSearch={setSearch}
      />
      {letra.trim() === '' ? null :
      <div className="container">
          <div className="row">
              <Letra
              letra={letra}
              />
              <Datos
              datos={datos}
              />
          </div>
      </div>
      }
    </>
  );
}

export default App;
