
import React, { useEffect, useState } from "react";


export default function App() {


    // bugbugbgubgu

  const [textos, setTextos] = useState([]);

  useEffect(() => {
    fetch("https://baconipsum.com/api/?type=meat-and-filler")
       .then((response) => {
         console.log(response);
         setTextos(response)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, []);
  return (
    <div>
      <h3>
      {textos.map((texto) => <li>{texto}</li>)}
      </h3>
    </div>
  );
}