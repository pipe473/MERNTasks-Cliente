import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';

const NuevaCuenta = () => {

// Extraer los valores del context
const alertaContext = useContext(AlertaContext);
const { alerta, mostrarAlerta } = alertaContext;

const authContext = useContext(AuthContext);
const { registrarUsuario } = authContext;

// State para iniciar sesión
const [ usuario, guardarUsuario ] = useState({
    nombre:'',
    email:'',
    password:'',
    confirmar:''
});

// Extraer de usuario
const { nombre, email, password, confirmar } = usuario;

const onChange = e => {
    guardarUsuario({
        ...usuario,
        [e.target.name] : e.target.value
    })
}

// Cuando el usuario quiere iniciar sesión
const onSubmit = e => {
    e.preventDefault();

// Validar que no hayan campos vacios
if( nombre.trim() === '' ||
     email.trim() === '' || 
     password.trim() === '' || 
     confirmar.trim() === '' ) {
         mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
         return;
     }

// Password mínimo de 6 caracteres
if(password.length < 6) {
    mostrarAlerta('El password debe tener almenos 6 carateres', 'alerta-error');
    return;
}

// Los 2 passwords son iguales
if(password !== confirmar) {
    mostrarAlerta('Los passwords no son iguales', 'alerta-error');
}

// Pasarlo al action
registrarUsuario({
    nombre,
    email,
    password
});


}

    return ( 
        <div className="form-usuario">
            { alerta ? ( <div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div> ) 
                : null }
            <div className="contenedor-form sombra-dark">
                <h1>Crear Cuenta</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={nombre}
                            placeholder="Escribe tu nombre"
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            placeholder="Escribe tu email"
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            placeholder="Password"
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar Password</label>
                        <input
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            value={confirmar}
                            placeholder="Repite tu Password"
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Registrarme"
                        />
                    </div>
                </form>
                <Link to={'/'} className="enlace-cuenta">
                    Inicia Sesión
                </Link>
            </div>
        </div>
     );
}
 
export default NuevaCuenta;