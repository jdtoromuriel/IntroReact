import React from "react"
import { ComponenteClase, ComponenteFuncional, ComponenteFlecha } from "./componentes";
let empleado = {
  nombre: "Manolo",
  salario: 450000,
  funciones: ["Diseñar", "Programar", "Testing"]
}
let saludar = saludo();
function App(){
  return (
    <>
        <ComponenteClase/>
        <ComponenteFuncional datos={empleado}/>
        <ComponenteFlecha saludo={ saludar }/>
    </>

  )
}

function saludo(){
  return "Holiiiiiiiii";

}

export default App
