import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from "react";

const Filtropropiedad = ({onSubmit}) => {
    const [comunapropiedad, setComunaPropiedad] = useState('');
    const [numhabitacion, setNumHabitacion] = useState('');
    const validarDatos = (e) => {
        e.preventDefault();
        if (comunapropiedad === '') {
            alert('Seleccione comuna')
            return;
        }

        if (numhabitacion === '') {

            alert('Ingrese Número de Habitaciones')
            return;
        }
        onSubmit({
            comuna: comunapropiedad,
            numhabitacion: numhabitacion
        })
    }

    return (
        <>
            <Container fluid>
                <Form className="formulario" onSubmit={validarDatos}>
                    <Row className="bg-dark text-white mb-3">

                        <Col xs={3} >

                            <Form.Label htmlFor="inputPassword7">Comuna</Form.Label>

                            <Form.Select aria-label="Default select example" onChange={(e) => {
                                setComunaPropiedad(e.target.value)
                                console.log(e.target.value)
                            }}>
                                <option>Selecciona la comuna</option>
                                <option value="1">Providencia</option>
                                <option value="2">Santiago</option>
                                <option value="3">Macul</option>
                            </Form.Select>


                        </Col>
                        <Col xs={3}>
                            <Form.Label >Fecha de Inicio</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    placeholder="DD-MM-YYYY"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <Button onClick={validarDatos} variant="outline-secondary" id="button-addon2">
                                    Button
                                </Button>
                            </InputGroup>
                        </Col>
                        <Col xs={3}>
                            <Form.Label >Fecha de Fin</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    placeholder="DD-MM-YYYY"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <Button onClick={validarDatos} variant="outline-secondary" id="button-addon2">
                                    Button
                                </Button>
                            </InputGroup>
                        </Col>
                        <Col xs={2}>

                            <Form.Label >N°Habitacion</Form.Label>
                            <div className='filtroderecha'>
                                <Form.Select aria-label="Default select example" onChange={(e) => {
                                    setNumHabitacion(e.target.value)
                                    console.log(e.target.value)
                                }}>
                                    <option>Seleccionar</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </Form.Select>

                                <Button onClick={validarDatos} variant="outline-secondary" id="button-addon3">
                                    Buscar
                                </Button>
                            </div>

                        </Col>

                    </Row>
                </Form>
            </Container>
        </>
    )

}
export default Filtropropiedad;  