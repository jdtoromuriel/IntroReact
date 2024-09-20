import React from 'react'

// Componente de clase
export class ComponenteClase extends React.Component{
    render(){
        return(
            <h1>Componente de clase</h1>
        )
    }
}

// Componente funcional
export function ComponenteFuncional(){
    return(
        <h1>Componente funcional</h1>
    )
}

// Componente flecha

export let ComponenteFlecha = () => {
    return(
        <h1>Componente Flecha</h1>
    )
}