import React, { useEffect, useState } from 'react'
import { getTareas } from '../service/tareas'

export const TaskListComponent = ({tareas}) => {

    /*const [tareas, setTareas] = useState([])
    const getTareasComponent = () => {
        setTareas(getTareas())
    }*/

    useEffect(() => {
    }, [])
    

    useEffect(() => {
       // getTareasComponent  ();
    }, [tareas])

    
  return (
    <div>
        <h1>
            Lista de tareas
        </h1>
        <ul>
        {
            tareas.map((tarea, indice)=>(
                <li key={indice}>nombre: {tarea.nombre.value} descripcion: {tarea.desc.value}</li>
            ))
        }  

        </ul>
    </div>
  )
}
