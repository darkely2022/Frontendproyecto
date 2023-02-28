import { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";

import Navbaralumno from "./alumno_sub/Navbaralumno";

import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Datosalumno from "../components/alumno_comp/Datosalumno";
import Buscapropiedad from "./Buscapropiedad";
import Reservaalumno from "../components/alumno_comp/Reservaalumno";


const Vistaalumno = () => {

    const [internalRoute, setIntervalRoute] = useState('datos-alumno');
   

    const navigate = useNavigate();
    const irAHome = () => {
        navigate(`/`);
        //return redirect("/");
    };

   

    return (
    <>
        <Container fluid ="md">
        {/*{userContex_rol==='estudiante'
            (<Navbarpropietario/>)
          } */}
        <Row>
          <Col>
            <Navbaralumno setIntervalRoute={setIntervalRoute} />
          </Col>
        </Row>
        {internalRoute === 'datos-alumno' && (
          <Row>
            <Col>
              <Datosalumno />
            </Col>
          </Row>
        )
        }
        {internalRoute === 'alojamientos' && (
          <Row>
            <Col>
              <Buscapropiedad />
            </Col>
          </Row>
        )
        }
         {internalRoute === 'reservas-realizadas' && (
          <Row>
            <Col>
              <Reservaalumno />
            </Col>
          </Row>
        )
        }
        {internalRoute === 'home' && (
          
            irAHome()
          
        )
        }
        </Container>
    </>
    )
}    
export default Vistaalumno;