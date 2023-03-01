import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Publicacion({
  publicacion: { nombrepropiedad, direccionpropiedad, src, comuna, numhabitacion,metrospropiedad,valorpropiedad }
}) {
  return (
    <Card  style={{ width: '18rem' }}>
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title>{nombrepropiedad}</Card.Title>
        <Card.Text className="fw-bold">{direccionpropiedad}</Card.Text>
        <Card.Text>Habitaciones: {numhabitacion}</Card.Text>
        <Card.Text>Valor : {valorpropiedad}</Card.Text>
        <Button variant="primary">Reservar</Button>
      </Card.Body>
    </Card>
  );
}
