import Regpropiedad from '../components/propietario_comp/Regpropiedad';
import Datospropietario from '../components/propietario_comp/Datospropietario';
import Vistapropublicada from '../components/propietario_comp/Vistapropublicada';
import Vistaproreservada from '../components/propietario_comp/Vistaproreservada';
import { useState, useEffect , useContext } from "react";
import { useParams , useNavigate  } from "react-router-dom";
import Navbarpropietario from './propietario_sub/Navbarpropietario';
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Contextpropiedad from "../context/Context";
import { CrearPropiedadApi, ListarpropiedadesApi } from '../api/Apipropiedad';
const { Context } = Contextpropiedad;

const Vistapropietario = () => {

  const [internalRoute, setIntervalRoute] = useState('ingresar-propiedad');
  const { idPropietario } = useParams();
  const navigate = useNavigate();

  const { setPublicaciones , publicaciones} = useContext(Context);
  const [listaprop] = ListarpropiedadesApi();

  const CrearPropiedadContext=(PropiedadporCrear)=>{

    const{nombrepropiedad,direccionpropiedad,comuna,numhabitacion,metrospropiedad,valorpropiedad}=PropiedadporCrear
    const Propiedad={
      folio:10,
      nombrepropiedad:nombrepropiedad,
      direccionpropiedad:direccionpropiedad,
      comuna : comuna,
      numhabitacion: numhabitacion,
      metrospropiedad:metrospropiedad,
      valorpropiedad:valorpropiedad,
      src:"https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg"
    }

    setPublicaciones([...publicaciones, Propiedad])
  }

  const CrearPropiedad = (PropiedadporCrear) => {
    try {
      const propiedadCreada = CrearPropiedadApi(PropiedadporCrear)
      CrearPropiedadContext(PropiedadporCrear)
      console.log('idpropietario al crear propiedad')
      console.log(idPropietario)
      alert('Datos Grabados');
    } catch (error) {
      console.log(error)
      alert('Datos no grabados, verificar completar todos los datos')
     
    }
  }


  const PropiedadesView = () => {

    const [propiedades, setPropiedades] = useState([]);

    // PropiedadesContext

    useEffect(() => {
      const propiedades = ListarpropiedadesApi();
      setPropiedades(propiedades);
    }, []);

    return (
      <Vistapropublicada propiedades />
    )
  };

  const irAHome = () => {
    navigate(`/`);
    //return redirect("/");
  };

  return (
    <>
      <Container fluid>
        {/*{userContex_rol==='estudiante'
            (<Navbarpropietario/>)
          } */}
        <Row>
          <Col>
            <Navbarpropietario setIntervalRoute={setIntervalRoute} />
          </Col>
        </Row>
        {internalRoute === 'ingresar-propiedad' && (
          <Row>
            <Col>
              <Regpropiedad onSubmit={CrearPropiedad} />
            </Col>
          </Row>
        )
        }
        {internalRoute === 'datos-propietario' && (
          <Row>
            <Col>
              
              <Datospropietario idPropietario={idPropietario} />

            </Col>
          </Row>
        )
        }
        {internalRoute === 'propiedades-publicadas' && (
         /* PropiedadesView()*/
           <Row>
             <Col>
               <Vistapropublicada />
             </Col>
           </Row>
        )
        }
        {internalRoute === 'propiedades-reservadas' && (

          <Row>
            <Col>
              <Vistaproreservada />
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
export default Vistapropietario;