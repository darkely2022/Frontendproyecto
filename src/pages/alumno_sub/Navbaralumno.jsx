import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

const Navbaralumno =({setIntervalRoute})=>{

    return(
        <>
        <Container Fluid>
                <Row>
                    <Col xs={12}>
                        <ListGroup horizontal defaultActiveKey="#link1">
                            <ListGroup.Item action href="#link1" onClick={()=>setIntervalRoute('datos-alumno')}>
                                Datos personales
                            </ListGroup.Item>
                           
                            <ListGroup.Item action onClick={()=>setIntervalRoute('alojamientos')}>
                                Alojamientos
                            </ListGroup.Item>
                            <ListGroup.Item action onClick={()=>setIntervalRoute('reservas-realizadas')}>
                                Propiedades reservadas
                            </ListGroup.Item>
                            <ListGroup.Item action onClick={()=>setIntervalRoute('home')}>
                                Cerrar Sesion
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    
                </Row>
               
            </Container>
        </>
    )
}

export default Navbaralumno;