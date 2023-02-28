import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect, useContext } from "react";
import ContextOrigin from "../../context/Context";
import foto_propietario from '../../assets/imgs/propietario.jpg';
const { Context } = ContextOrigin;

const Datospropietario = (props) => {

    const { Propietarios, setPropietarios } = useContext(Context)
    const listaFiltradaPro = Propietarios.filter(el => el.rutPropietario === props.idPropietario)
    const [nombrePropietario, setNombrePropietario] = useState('');
    const [apellidoPropietario, setApellidoPropietario] = useState('');
    const [rutPropietario, setRutPropietario] = useState(props.idPropietario);
    const [passwordPropietario, setPasswordPropietario] = useState('');
    const [emailPropietario, setEmailPropietario] = useState('');

    const [error, setError] = useState(false);

    const validarDatosPropietario = (e) => {
        e.preventDefault();
        //Validación;


        if (passwordPropietario === '' || emailPropietario === '') {
            setError(true);
            console.log('idpro')
            console.log(props.idPropietario)
            alert('Datos deben ser completados')
            return;

        }

    };




    const ActualizarPropietario = () => {
        if (error === 'false') {
            alert('Datos actualizados')
        }
    }



    return (
        <>
            <Container fluid>
                <Row>
                    <Col><h2>Datos propietario</h2></Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <img src={foto_propietario} className="propietario_ini" alt="propietario" />
                    </Col>
                    {listaFiltradaPro.map((dato) => (

                        <tr key={dato.rutPropietario}>
                            <label>{dato.nombrePropietario}</label>
                            <label>{dato.apellidoPropietario}</label>
                            <label>{dato.rutPropietario}</label>


                        </tr>


                    ))}
                    <Col xs={6}>
                        <form className="formulario" onSubmit={validarDatosPropietario}>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="text"
                                    name="password"
                                    className="form-control"
                                    onChange={(e) => setPasswordPropietario(e.target.value)}
                                    value={passwordPropietario}
                                />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    onChange={(e) => setEmailPropietario(e.target.value)}
                                    value={emailPropietario}
                                />
                            </div>

                            <button onClick={ActualizarPropietario} type="submit" className="btn btn-primary">
                                Modificar
                            </button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Datospropietario;