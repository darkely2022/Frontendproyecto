import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useContext, useState, useEffect } from "react";
import foto_alumno from '../../assets/imgs/alumno1.jpg';
import ContextOrigin from "../../context/Context";
const { Context } = ContextOrigin;


const Datosalumno = (props) => {

    const { Alumnos, setAlumnos } = useContext(Context);
    //const [nombreAlumno, setNombreAlumno] = useState('');
    //const [apellidoAlumno, setApellidoAlumno] = useState('');
    //const [rutAlumno, setRutAlumno] = useState('');
    const [passwordAlumno, setPasswordAlumno] = useState('');
    const [emailAlumno, setEmailAlumno] = useState('');
    const [error, setError] = useState(false);


    const validarDatosAlumno = (e) => {
        e.preventDefault();
        //Validación;
        if (passwordAlumno === '' || emailAlumno === '') {
            setError(true);
            alert('Datos deben ser completados')
            return;

        }

    };

    const ActualizarAlumno = () => {
        if (error === 'false') {
            alert('Datos actualizados')
        }
    }

    useEffect(() => {
        const fetchDatos = async () => {
            const resp = await fetch(`https://backend-arriendo.up.railway.app/alumnos/${props.rutlogin}`);
            const { alumnos } = await resp.json();
            console.log('rutlogin', props.rutlogin)
            console.log('alumnos', alumnos);
            setAlumnos(alumnos);
        }
        fetchDatos();
    }, [])


    return (
        <>
            <Container fluid>
                <Row>
                    <Col><h2>Datos Estudiante</h2></Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <img src={foto_alumno} className="propietario_ini" alt="foto_alumno" />
                    </Col>
                    <Col xs={6}>
                        {Alumnos.map((dato, i) => (
                            <div className="form-group">

                                <label> Rut </label>
                                <input
                                    type="text"
                                    name="rutalumno"
                                    className="form-control"
                                    readOnly
                                    value={dato.rutalumno}
                                />
                                <label>Nombre </label>
                                <input
                                    type="text"
                                    name="nombrealumno"
                                    className="form-control"
                                    readOnly
                                    value={dato.nombrealumno}
                                />
                                <label>Apellido</label>
                                <input
                                    type="text"
                                    name="apellidoalumno"
                                    className="form-control"
                                    readOnly
                                    value={dato.apellidoalumno}
                                />
                                <label>Direccion</label>
                                <input
                                    type="text"
                                    name="direccionalumno"
                                    className="form-control"
                                    readOnly
                                    value={dato.direccionalumno}
                                />
                                <label>Correo</label>
                                <input
                                    type="text"
                                    name="correoalumno"
                                    className="form-control"
                                    readOnly
                                    value={dato.correoalumno}
                                />
                            </div>


                        ))}
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Datosalumno;