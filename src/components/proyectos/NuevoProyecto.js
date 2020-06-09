import React, { Fragment, useState } from "react";

const NuevoProyecto = () => {

// State para proyecto
const [proyecto, guardarProyecto] = useState({
    nombre: ''
});

// Extraer nombre de proyecto
const { nombre } = proyecto;


// Lee los contenidos del input
const onchangeProyecto = e => {
    guardarProyecto({
        ...proyecto,
        [e.target.name] : e.target.value
    });
}

// Cuando el usuario envia un proyecto
e.preventDefault();

// Validar el proyecto

// Agregar al state

// Reiniciar el form

  return (
    <Fragment>
      <button type="button" className="btn btn-block btn-primario">
        Nuevo Proyecto
      </button>
      <form
        className="formulario-nuevo-proyecto"
        onSubmit={onSubmitProyecto}
      >
          <input
            type="text"
            className="input-text"
            placeholder="Nombre de Proyecto"
            name="nombre"
            value={nombre}
            onChange={onchangeProyecto}
          />

          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Agregar Proyecto"
          />
      </form>
    </Fragment>
  );
};

export default NuevoProyecto;
