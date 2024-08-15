import React, { useState } from 'react'
import { addTarea } from '../service/tareas'

export const TaskFormComponent = ({getTareasComponent}) => {
    const [nombreTarea, setNombreTarea] = useState('')
    const [descTarea, setDescTarea] = useState('')
    const adicionarTarea = async (event) => {
        event.preventDefault();
        await addTarea(nombreTarea, descTarea)
        getTareasComponent()
    }

    const setNombre = (event) => {
        setNombreTarea({value: event.target.value})
    }

    const setDescripcion = (event) => {
        setDescTarea({value: event.target.value})
    }
  return (
    <div>
        <h1>Agregar tarea</h1>
        <form onSubmit={adicionarTarea}>
            <label>Nombre Tarea</label>
            <input type='text' name='descTarea' onChange={setNombre}></input>
            <br/>
            <label>Descripción Tarea</label>
            <input type='text' name='descTarea' onChange={setDescripcion}></input>
            <button type='submit'>Adicionar</button>
        </form>
    </div>
  )
}
