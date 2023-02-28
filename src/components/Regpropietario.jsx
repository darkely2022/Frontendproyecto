import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import ContextOrigin from "../context/Context";
const { Context } = ContextOrigin;


const Regpropietario = () => {
    const { setPropietarios, Propietarios } = useContext(Context);

    const [user, setUser] = useState({});

    const [idvistaalumno, setIdvistaalumno] = useState('');
    const navigate = useNavigate();

    const addUser = () => {
        setPropietarios([...Propietarios, user]);
        alert("Usuario Creado con éxito, intente iniciar sesión");
        console.log('propietario');
        console.log(user)
        console.log('lista');
        console.log(Propietarios);
        navigate(`/vistapropietario/${rutPropietario}`);
    };
    const irAVistaPropietario = () => {
        navigate(`/vistapropietario/${rutPropietario}`);
    };

    const [nombrePropietario, setNombrePropietario] = useState('');
    const [apellidoPropietario, setApellidoPropietario] = useState('');
    const [rutPropietario, setRutPropietario] = useState('');
    const [passwordPropietario, setPasswordPropietario] = useState('');
    const [emailPropietario, setEmailPropietario] = useState('');
    const [direccionPropietario, setDireccionPropietario] = useState('');
    const [comunaPropietario, setComunaPropietario] = useState('');
    //Estado para los errores
    const [error, setError] = useState(false);

    const validarDatos = (e) => {
        e.preventDefault();
        //Validación;
        if (nombrePropietario === '' || apellidoPropietario === '' || rutPropietario === '' || emailPropietario === '' || passwordPropietario === '' || direccionPropietario === '' || comunaPropietario === '') {
            setError(true);
            return;
        }
        addUser();
    };

    return (
        <>
            <form className="formulario" onSubmit={validarDatos}>
                {error ? <p>Todos los campos son obligatorios</p> : null}
                <div className="form-group">
                    <label>Nombre</label>
                    <input
                        type="text"
                        name="nombre"
                        className="form-control"
                        onChange={({ target }) => {
                            setUser({ ...user, ["nombrePropietario"]: target.value })
                            setNombrePropietario(target.value)
                        }
                        }

                    />
                </div>
                <div className="form-group">
                    <label>Apellido</label>
                    <input
                        type="text"
                        name="apellido"
                        className="form-control"
                        onChange={({ target }) => {
                            setUser({ ...user, ["apellidoPropietario"]: target.value })
                            setApellidoPropietario(target.value)
                        }
                        }
                    />
                </div>
                <div className="form-group">
                    <label>Rut</label>
                    <input
                        type="text"
                        name="rut"
                        className="form-control"
                        onChange={({ target }) => {
                            setUser({ ...user, ["rutPropietario"]: target.value })
                            setRutPropietario(target.value)
                        }
                        }

                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="text"
                        name="password"
                        className="form-control"
                        onChange={({ target }) => {
                            setUser({ ...user, ["passwordPropietario"]: target.value })
                            setPasswordPropietario(target.value)
                        }
                        }
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        onChange={({ target }) => {
                            setUser({ ...user, ["emailPropietario"]: target.value })
                            setEmailPropietario(target.value)
                        }
                        }
                    />
                </div>
                <div className="form-group">
                    <label>Direccion</label>
                    <input
                        type="direccion"
                        name="direccionpropietario"
                        className="form-control"
                        onChange={({ target }) => {
                            setUser({ ...user, ["direccionPropietario"]: target.value })
                            setDireccionPropietario(target.value)
                        }
                        }
                    />
                </div>
                <div className="form-group">
                    <label>Comuna</label>
                    <select
                        type="comuna"
                        name="comuna"
                        className="form-control"
                        onChange={({ target }) =>
                          {  setUser({ ...user, ["comunaPropietario"]: target.value })
                          setComunaPropietario(target.value)
                        }
                        }>
                        <option>Seleccionar comuna</option>
                        <option value="1">Providencia</option>
                        <option value="2">Santiago</option>
                        <option value="3">Macul</option>
                    </select>
                </div>
                <button onClick={validarDatos} type="submit" className="btn btn-primary">
                    Grabar
                </button>
            </form>


        </>
    );

}
export default Regpropietario;