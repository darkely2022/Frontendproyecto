import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Publicacion({
  t,
  publicacion: { nombrepropiedad, direccionpropiedad, src, comunaid, numhabitacion,metrospropiedad,valorpropiedad }
  
}) {

  const Reservar=()=>{
    console.log('props',t);
    if (t.value =='1'){
      alert('puedes reservar')
    } 
    else
    {
      alert('Debes estar autenticado para realizar reserva');
      return
    }
  }
  return (
    <Card  style={{ width: '18rem' }}>
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title>{nombrepropiedad}</Card.Title>
        <Card.Text className="fw-bold">{direccionpropiedad}</Card.Text>
        <Card.Text>Habitaciones: {numhabitacion}</Card.Text>
        <Card.Text>Valor : {valorpropiedad}</Card.Text>
        <Button variant="primary" onClick={Reservar}>Reservar</Button>
      </Card.Body>
    </Card>
  );
}
