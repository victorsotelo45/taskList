import React, { useEffect, useState } from 'react'
import { TaskFormComponent } from './TaskFormComponent'
import { TaskListComponent } from './TaskListComponent'
import { getTareas } from '../service/tareas'

export const TaskMain = () => {
    const [tareas, setTareas] = useState([])
    const getTareasComponent = async () => {
        const tareasResponse = await getTareas()
        console.log('tareasResponse: ', tareasResponse)
        setTareas(tareasResponse)
    }
    
    useEffect(() => {
      getTareasComponent()
    }, [])
    
    
  return (
    <div>
        <TaskFormComponent getTareasComponent={getTareasComponent}/>
        <TaskListComponent tareas={tareas}/>
    </div>
  )
}
