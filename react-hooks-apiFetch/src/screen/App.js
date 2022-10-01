import {useEffect, useState} from 'react'



function App() {
  const [textos, setTextos] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  const getTextos = async () => {

    try {
      setIsLoading(true)
      const response = await fetch("https://baconipsum.com/api/?type=meat-and-filler");
      const txts = await response.json();
      setTextos(txts)
    }catch(e){
      console.log(e.message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect( ()=> {
    getTextos();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {
          isLoading ? <p>Carregando textos...</p> : 
          <>
            <button onClick={getTextos}>Carregar textos</button>
            <h2>Textos aleatórios</h2>
            <ul className='Texto'>
             {textos.map((texto) => <li>{texto}</li>)}
             </ul>
          </>
        }
      
      </header>
    </div>
  );
}

export default App;
