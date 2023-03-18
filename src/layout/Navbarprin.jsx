import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";


import ContextOrigin from "../context/Context";
const { Context } = ContextOrigin;

const Navbarprin = () => {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive");
    const [id, setId] = useState("");
    const [rutlogin, setRutlogin] = useState('');
    const [password, setPassword] = useState('');
    const { setSession, Propietarios } = useContext(Context);
    const { setSessionAlumnos, Alumnos } = useContext(Context);
    const [user, setUser] = useState({});
    const [tipo, setTipo] = useState('');
    const { Usuarios, setUsuarios } = useContext(Context)

    const navigate = useNavigate();
    const irARegistro = () => {
        navigate(`/registro`);
    };
    const irAHome = () => {
        navigate(`/`);
    };
    const irABuscapropiedades = () => {
        navigate(`/buscapropiedad`);
    };

    useEffect(() => {
        const fetchDatos = async () => {
            const resp = await fetch(`https://backend-arriendo.up.railway.app/usuarios/gettipo`,
                {
                    method: 'POST',
                    body: JSON.stringify(
                        {
                            "username": rutlogin,
                            "password": password
                        }
                    ),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            const data = await resp.json();
            setUsuarios(data);
            console.log('user', Usuarios);
            try {
                const tipoid = Usuarios['usuarios']
                const tipoid2 = tipoid[0]
                // console.log('tipoid', tipoid);
                // console.log('tipoid2', tipoid2);
                setTipo(tipoid2);
                return tipoid2
            } catch (error) {
                alert("Usuario no existe")
                return
            }
        }
        fetchDatos();
    }, [])

    const irAVistaperfilada = (e) => {
        let TipoUsuario;
        e.preventDefault();
        console.log('rut navbar logueado')
        console.log(rutlogin)

        const ObtenerUsuario = async () => {
            const resp = await fetch(`https://backend-arriendo.up.railway.app/usuarios/gettipo`,
                {
                    method: 'POST',
                    body: JSON.stringify(
                        {
                            "username": rutlogin,
                            "password": password
                        }
                    ),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            const data = await resp.json();
            setUsuarios(data);
            console.log('user', Usuarios);
            try {
                const tipoid = Usuarios['usuarios']
                const tipoid2 = tipoid[0]
                // console.log('tipoid', tipoid);
                // console.log('tipoid2', tipoid2);
                setTipo(tipoid2);
                return tipoid2
            } catch (error) {
                alert("Usuario no existe")
                //tipo['tipo_usuario_id'] =0
                return
            }

            /*  {Usuarios.map((dato) => (
               setTipo(dato.tipo_usuario_id)
            ))}
          console.log(tipo);*/
        }
        ObtenerUsuario();

        console.log('tipo', tipo)

        const ObtenerToken = async () => {
            const resp = await fetch(`https://backend-arriendo.up.railway.app/auth`,
                {
                    method: 'POST',
                    body: JSON.stringify(
                        {
                            "username": rutlogin,
                            "password": password
                        }
                    ),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            const token = await resp.json();
            console.log('token', token);
            setSession(token);
            localStorage.setItem('token', token)
        }


        ObtenerToken();
        //console.log('listado', Usuarios);


        // const listaFiltradaPro = Propietarios.filter(el => el.rutPropietario === rutlogin)
        //const listaFiltradaAlu = Alumnos.filter(el => el.rut === rutlogin)
        //if (listaFiltradaPro.length > 0) {
        try {
            if (tipo['tipo_usuario_id'] == 2) {
                alert("La persona ya existe")
                navigate(`/vistapropietario/${rutlogin}`);

            }
            else {
                //if (listaFiltradaAlu.length > 0) {
                if (tipo['tipo_usuario_id'] == 1) {
                    alert("la persona existe")
                    navigate(`/vistaalumno/${rutlogin}`);
                    return
                }
                else {
                    alert("la persona no existe")
                    return
                }
            }
        } catch (error) {
            alert("No se encontraron datos para esta persona")
        }

        /*const userExists =
            Propietarios.some((u) => u.rutPropietario == user.rutlogin && u.passwordPropietario == user.password) ||
            true;
        if (userExists) {
            setSession(user);
            alert("Usuario Propietario identificado con éxito");
            navigate(`/vistapropietario/${rutlogin}`);
        } else {
            alert("Email o contraseña incorrecta");
        }*/

    };

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand onClick={irARegistro} >Registro</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link onClick={irABuscapropiedades} >Alojamientos</Nav.Link>

                            <Nav.Link onClick={irAHome} >Home</Nav.Link>
                        </Nav>
                        {/* onChange={(e) => setRutlogin(e.target.value)}*/}
                        <Form className="d-flex">
                            <Form.Control
                                type="username"
                                placeholder="username"
                                className="me-2"
                                aria-label="Username"

                                onChange={({ target }) => {
                                    setUser({ ...user, ["rut"]: target.value })
                                    setRutlogin(target.value)
                                }
                                }

                            />
                            <Form.Control
                                type="search"
                                placeholder="password"
                                className="me-2"
                                aria-label="Search"
                                onChange={({ target }) => {
                                    setUser({ ...user, ["password"]: target.value })
                                    setPassword(target.value)
                                }
                                }
                            />


                            <Button onClick={irAVistaperfilada} variant="outline-success">Login</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )

}

export default Navbarprin