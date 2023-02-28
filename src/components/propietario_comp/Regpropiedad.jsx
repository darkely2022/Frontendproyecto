import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import foto_propiedad from '../../assets/imgs/propiedad.jpg';
const Regpropiedad = ({onSubmit}) => {

    const [nombrepropiedad, setNombrePropiedad] = useState('');
    const [direccionpropiedad, setDireccionPropiedad] = useState('');
    const [comunapropiedad, setComunaPropiedad]=useState('');
    const [numhabitacion,setNumHabitacion] =useState('');
    const [metrospropiedad, setMetrosPropiedad] = useState('');
    const [valorpropiedad, setValorPropiedad] = useState('');
    const [error, setError] = useState(false);

    const validarDatos = (e) => {
        e.preventDefault();
        //Validación;
        if (nombrepropiedad === '') {
            setError(true);
            return;
        }
        onSubmit({
            nombrepropiedad:nombrepropiedad,
            direccionpropiedad:direccionpropiedad,
            comuna: 1,
            numhabitacion: numhabitacion,
            metrospropiedad: metrospropiedad,
            valorpropiedad: valorpropiedad
        })
    };
    return (


        <>
            <Container fluid>
                <Row>
                    <Col><h2>Datos de la propiedad</h2></Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <img src={foto_propiedad} className="propiedad_ini" alt="propiedad" />
                    </Col>
                    <Col xs={6}>
                        <form className="formulario" onSubmit={validarDatos}>
                            {error ? <p>Todos los campos son obligatorios</p> : null}
                            <div className="form-group">
                                <label>Nombre Propiedad</label>
                                <input
                                    type="text"
                                    name="nombrepropiedad"
                                    className="form-control"
                                    onChange={(e) => setNombrePropiedad(e.target.value)}
                                    value={nombrepropiedad}
                                />
                            </div>
                            <div className="form-group">
                                <label>Direccion Propiedad</label>
                                <input
                                    type="text"
                                    name="direccionpropiedad"
                                    className="form-control"
                                    onChange={(e) => setDireccionPropiedad(e.target.value)}
                                    value={direccionpropiedad}
                                />
                            </div>
                            <div>
                                <Form.Label htmlFor="inputcomunapropiedad">Comuna</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Seleccionar comuna</option>
                                    <option value="1">Providencia</option>
                                    <option value="2">Santiago</option>
                                </Form.Select>
                            </div>
                            <div>
                                <Form.Label htmlFor="inputhabpropiedad">Número de habitaciones</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Seleccionar cantidad habitaciones</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </Form.Select>
                            </div>
                            <div className="form-group">
                                <label>Metros cuadrados</label>
                                <input
                                    type="text"
                                    name="metrospropiedad"
                                    className="form-control"
                                    onChange={(e) => setMetrosPropiedad(e.target.value)}
                                    value={metrospropiedad}
                                />
                            </div>
                            <div className="form-group">
                                <label>Valor</label>
                                <input
                                    type="text"
                                    name="valorpropiedad"
                                    className="form-control"
                                    onChange={(e) => setValorPropiedad(e.target.value)}
                                    value={valorpropiedad}
                                />
                            </div>
                            <button onClick={validarDatos} type="submit" className="btn btn-primary">
                                Grabar
                            </button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Regpropiedad;