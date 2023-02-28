import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Buscapropiedad from '../pages/Buscapropiedad';

import alumno from '../assets/imgs/alumno.jpg';

import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const irAVistaPropiedad = () => {
        navigate(`/buscapropiedad`);
    };
    return (
        <>
            <Container >
                <Row bg="light">
                    <Col xs={6}>
                        <img src={alumno} className="alumno_ini" alt="alumno" />
                    </Col>
                    <Col xs={6}>
                        <div>
                            <Form.Label htmlFor="inputPassword5">Comuna</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Selecciona la comuna</option>
                                <option value="1">Providencia</option>
                                <option value="2">Santiago</option>
                                <option value="3">Macul</option>
                            </Form.Select>
                        </div>
                        <div>
                            <Form.Label >Fecha de Inicio</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    placeholder="DD-MM-YYYY"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <Button variant="outline-secondary" id="button-addon2">
                                    Button
                                </Button>
                            </InputGroup>
                        </div>
                        <div>
                            <Form.Label >Fecha de Fin</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    placeholder="DD-MM-YYYY"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <Button variant="outline-secondary" id="button-addon2">
                                    Button
                                </Button>
                            </InputGroup>
                        </div>
                        <div>
                            <Form.Label >Número de Personas</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Selecciona cantidad</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </Form.Select>

                            <Button onClick={ irAVistaPropiedad } variant="outline-secondary" id="button-addon3">
                                Buscar
                            </Button>
                        </div>
                    </Col>
                </Row>

            </Container>
        </>
    )

}

export default Home