import React from "react";

const Card = ({usuario}) => {
  const {nombre, apellido} = usuario
  return (
    <>
      <h3>Nombre: {nombre}</h3>
      <h3>Apellido: {apellido}</h3>
    </>
  );
};

export default Card;
