import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Table, Button } from 'react-bootstrap';
const Reservaalumno = () => {

    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <h2>Reservas realizadas</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Folio Reserva</th>
                                    <th>Nombre Propiedad</th>
                                    <th>Dirección</th>
                                    <th>Fecha Inicio</th>
                                    <th>Fecha Fin</th>
                                    <th>Monto pagado</th>
                                    
                                </tr>
                            </thead>

                        </Table>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Reservaalumno;