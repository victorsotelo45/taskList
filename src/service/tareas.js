const tareas = []

export const addTarea = (nombre, desc) => {
    console.log('Tarea adicionada')
    console.log({nombre, desc})
    tareas.push({nombre, desc})
}

export const getTareas = () => {
    console.log(tareas)
    return tareas;
}