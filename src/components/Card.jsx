import React from "react";
import Estilos from "../styles/Estilos.module.css";

const Card = ({ usuario }) => {
  const { nombre, apellido } = usuario;
  return (
    
      <div className={Estilos.card}>
        <h3>Nombre: {nombre}</h3>
        <h3>Apellido: {apellido}</h3>
      </div>
    
  );
};

export default Card;
