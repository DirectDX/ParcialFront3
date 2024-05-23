import React, { useState } from "react";
import Card from "./Card";
import Estilos from "../styles/Estilos.module.css";

const Form = () => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    apellido: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleSumbit = (e) => {
    e.preventDefault();
    if (
      usuario.nombre.length >= 3 &&
      usuario.nombre.charAt(0) !== " " &&
      usuario.apellido.length >= 6
    ) {
      setError(false);
      setShow(true);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <form className={Estilos.form} onSubmit={handleSumbit}>
        <label className={Estilos.labels}>Nombre</label>
        <input
          className={Estilos.inputs}
          disabled={show}
          type="text"
          value={usuario.nombre}
          onChange={(event) =>
            setUsuario({ ...usuario, nombre: event.target.value })
          }
        />
        <label className={Estilos.labels}>Apellido</label>
        <input
          className={Estilos.inputs}
          type="text"
          value={usuario.apellido}
          disabled={show}
          onChange={(event) =>
            setUsuario({ ...usuario, apellido: event.target.value })
          }
        />
        <button>Enviar</button>
      </form>
      {error && <p style={{color: "red"}}>Por favor chequea que la información sea correcta</p>}
      {show && <Card usuario={usuario} />}
    </>
  );
};

export default Form;
