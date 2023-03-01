import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Filtropropiedad from '../components/Filtropropiedades';
import Publicacion from '../components/Publicacion';
import Departamento from '../assets/imgs/depto1.jpg';
import { useContext, useState } from "react";
import ContextOrigin from "../context/Context";
const { Context } = ContextOrigin;

const Buscapropiedad = () => {
    const { publicaciones } = useContext(Context);
    const [Listado, setListado] = useState([]);

    const Filtros = (Parametros) => {
        const { comuna, numhabitacion } = Parametros

        const publicacionesFiltradas = publicaciones.filter((p) =>
            p.numhabitacion == numhabitacion
        );
        setListado([...Listado, publicacionesFiltradas]);
        console.log('publicaciones filtradas')
        console.log(publicacionesFiltradas)
        console.log(numhabitacion)
    }


    //const publicacionesFiltradas = publicaciones.filter((p) =>
    // p.numhabitacion ===numhabitacion);
    return (
        <>
            <Container fluid>

                <Row>
                    <Col xs={12}>
                        <Filtropropiedad onSubmit={Filtros} ></Filtropropiedad>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={4}>
                        <h3>Filtros Avanzados</h3>
                        <Row>
                            <Col>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Metros Cuadrados</Form.Label>
                                        <Form.Control type="metro" placeholder="Ingresar solo números" />
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Check
                                    type={'checkbox'}
                                    id={`default-${'checkbox'}`}
                                    label={`Lavandería ${''}`}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Check
                                    type={'checkbox'}
                                    id={`default-${'checkbox'}`}
                                    label={`Bicicletero`}
                                />
                            </Col>
                        </Row>
                    </Col>

                    <Col xs={12} md={8}>
                        <h1 >Arriendo de Propiedades</h1>
                        <h5>A continuación te presentamos las mejores ofertas para arrendar, recuerda revisar el detalle de las descripciones para realizar la reserva</h5>
                        <Row>
                            <Col className='col-sm-3'>
                                <Row>
                                    <Col>
                                        <div className="publicaciones">
                                            {publicaciones.map((p, i) => {
                                                return <Publicacion publicacion={p} key={i} />;
                                            })}
                                        </div>
                                        {/*<Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={Departamento} />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Descripción</Button>
                                    </Card.Body>
                                </Card>*/}
                                    </Col>
                                </Row>
                            </Col>
                        </Row>


                    </Col>

                </Row>

            </Container>
        </>
    )

}
export default Buscapropiedad;    