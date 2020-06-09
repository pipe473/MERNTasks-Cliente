import React, { useReducer } from 'react';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { 
    FORMULARIO_PROYECTO, 
    OBTENER_PROYECTOS 
} from '../../types';

const proyectos = [
    { id:1, nombre: 'Tienda Virtual' },
    { id:2, nombre: 'Intranet' },
    { id:3, nombre: 'Diseño de Sitio Web' },
    { id:4, nombre: 'MERN' }
]

const ProyectoState = props => {

    const initialState = {
         proyectos : [],
        formulario : false
    }

    // Dispatch para ejecutar las acciones
    const [ state, dispatch ] = useReducer(proyectoReducer, initialState)

    // Serie de funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    // Obtener los proyectos
    const obtenerProyectos = proyectos => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }

    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                mostrarFormulario
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;