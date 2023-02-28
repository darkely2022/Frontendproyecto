
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Table, Button } from 'react-bootstrap';

const Vistaproreservada = () => {

    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <h2>Propiedades reservadas</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Folio</th>
                                    <th>Nombre</th>
                                    <th>Dirección</th>
                                    <th>Comuna</th>
                                    <th>N°Habitaciones</th>
                                    <th>Metros</th>
                                    <th>Valor</th>
                                </tr>
                            </thead>

                        </Table>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
export default Vistaproreservada;