import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from "react";
import foto_alumno from '../../assets/imgs/alumno1.jpg'

const Datosalumno = () => {

    const [nombreAlumno, setNombreAlumno] = useState('');
    const [apellidoAlumno, setApellidoAlumno] = useState('');
    const [rutAlumno, setRutAlumno] = useState('');
    const [passwordAlumno, setPasswordAlumno] = useState('');
    const [emailAlumno, setEmailAlumno] = useState('');
    const [comunaAlumno, setComunaAlumno] = useState('');
    const [error, setError] = useState(false);

    const validarDatosAlumno = (e) => {
        e.preventDefault();
        //Validación;
        if (passwordAlumno === '' || emailAlumno === '' || comunaAlumno === '') {
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
                        <form className="formulario" onSubmit={validarDatosAlumno}>
                            {/*{error ? <p>Todos los campos son obligatorios</p> : null}*/}
                            <div className="form-group">
                                <label>Nombre</label>
                                <input
                                    type="text"
                                    name="nombreAlumno"
                                    className="form-control"
                                    readOnly
                                    onChange={(e) => setNombreAlumno(e.target.value)}
                                    value={nombreAlumno}
                                />
                            </div>
                            <div className="form-group">
                                <label>Apellido</label>
                                <input
                                    type="text"
                                    name="apellidoAlumno"
                                    className="form-control"
                                    readOnly
                                    onChange={(e) => setApellidoAlumno(e.target.value)}
                                    value={apellidoAlumno}
                                />
                            </div>
                            <div className="form-group">
                                <label>Rut</label>
                                <input
                                    type="text"
                                    name="rutAlumno"
                                    className="form-control"
                                    readOnly
                                    onChange={(e) => setRutAlumno(e.target.value)}
                                    value={rutAlumno}
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="text"
                                    name="passwordAlumno"
                                    className="form-control"
                                    onChange={(e) => setPasswordAlumno(e.target.value)}
                                    value={passwordAlumno}
                                />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="emailAlumno"
                                    className="form-control"
                                    onChange={(e) => setEmailAlumno(e.target.value)}
                                    value={emailAlumno}
                                />
                            </div>
                            <button onClick={ActualizarAlumno} type="submit" className="btn btn-primary">
                                Modificar
                            </button>
                        </form>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Datosalumno;