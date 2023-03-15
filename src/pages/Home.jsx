import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//import InputGroup from 'react-bootstrap/InputGroup';
//import Buscapropiedad from '../pages/Buscapropiedad';
import { useState, useEffect, useContext } from 'react';
import alumno from '../assets/imgs/alumno.jpg';

//import { ListComunas } from "../api/Apicomuna";
import { useNavigate } from "react-router-dom";

import ContextOrigin from "../context/Context";
//import { Card } from 'react-bootstrap';
const { Context } = ContextOrigin;

const Home = () => {
    const navigate = useNavigate();
    const { setComunas, Comunas, ListComunas } = useContext(Context);

/*
    useEffect(() => {
        // console.log(ListComunas());
        ListComunas();
    }, []);*/

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
                        
                            <div >
                                <br></br>
                                <h5 style={{color:'#1976d2'}}>Hola, para realizar una reserva te invitamos a ingresar tus datos en nuestro sitio en la opción "Registro"</h5>
                            </div>
                       
                        <div>
                            <br></br> <br></br>
                            <h5 style={{color:'#1976d2'}}>En la opción de alojamientos puedes revisar todas las ofertas disponibles o pincha aquí en botón "Buscar"</h5>
                        </div>

                        <div>
                            <Button onClick={irAVistaPropiedad} variant="outline-secondary" id="button-addon3">
                                Buscar
                            </Button>
                        </div>
                        <div>
                            <br></br>
                            <br></br>
                            <h5 style={{color:'#1976d2'}}> Si eres propietario puedes publicar tus propiedades realizando tu registro</h5>
                        </div>
                    </Col>
                </Row>

            </Container>
        </>
    )

}

export default Home