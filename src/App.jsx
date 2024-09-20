import React from "react"
import { ComponenteClase, ComponenteFuncional, ComponenteFlecha } from "./componentes";

let saludar = saludo();
function App(){
  return (
    <>
        <ComponenteClase/>
        <ComponenteFuncional/>
        <ComponenteFlecha/>
    </>

  )
}

function saludo(){
  return "Holiiiiiiiii";

}

export default App
