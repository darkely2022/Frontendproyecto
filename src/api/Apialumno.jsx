const baseUrl = 'https://backend-arriendo.up.railway.app/alumnos';

const mockAlumno = [
    {
        rutAlumno: "19",
        nombreAlumno: "Juan",
        apellidoAlumno: "Perez",
        direccionAlumno: "La luna",
        comunaAlumno: "1",
        correoAlumno: "prueba@correo.cl"
    }
]

const mockApoderado = [
    {
        rutApoderado: "78599200",
        nombreApoderado: "Victoria",
        apellidoApoderado: "Lara",
        direccionApoderado: "El sol",
        comunaApoderado: "2",
        correoApoderado: "victoria@correo.cl"
    }
]

const mockRelacion = [
    {
        rutApoderado: "78599200",
        rutAlumno: "19",
        relacion_economica: "Madre"
    }
]

export const CrearAlumnoApi = async (AlumnoporCrear) => {
    try {
        const { rut, nombre, apellido, direccion, comuna, correo, rutApoderado, nombreApoderado, apellidoApoderado, direccionApoderado, comunaApoderado, mailApoderado, relacion } = AlumnoporCrear

        const resp = await fetch('https://backend-arriendo.up.railway.app/alumnos',
            {
                method: 'post',
                body: JSON.stringify(
                    {
                        "rutalumno": rut,
                        "nombrealumno": nombre,
                        "apellidoalumno": apellido,
                        "direccionalumno": direccion,
                        "comunaalumno": comuna,
                        "correoalumno": correo,
                        "password": "test"
                    }
                ),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        // const data = await JSON.stringify(resp); 
        console.log('API ALUMNO')

        const Aceptante = await fetch('https://backend-arriendo.up.railway.app/apoderados',
            {
                method: 'post',
                body: JSON.stringify(
                    {
                        "rutapoderado": rutApoderado,
                        "nombreapoderado": nombreApoderado,
                        "apellidoapoderado": apellidoApoderado,
                        "direccionapoderado": direccionApoderado,
                        "comunaapoderado": comunaApoderado,
                        "correoapoderado": mailApoderado
                    }
                ),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const Usuario = await fetch('https://backend-arriendo.up.railway.app/usuarios',
            {
                method: 'post',
                body: JSON.stringify(
                    {
                        "id": rut,
                        "tipo_usuario_id": 1,
                        "password": "test"
                    }
                ),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

        

        try {
            const Relacion = await fetch('https://backend-arriendo.up.railway.app/relaciones',
                {
                    method: 'post',
                    body: JSON.stringify(
                        {
                            "rutapoderadoid": rutApoderado,
                            "rutalumnoid": rut,
                            "relacion_economica": relacion
                        }
                    ),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            console.log(Relacion);
        } catch (error) {
            alert(error)
        }
        // const{rut,nombre,apellido,direccion,comuna,correo,rutApoderado,nombreApoderado,apellidoApoderado,direccionApoderado,comunaApoderado,mailApoderado,relacion}=AlumnoporCrear
        mockAlumno.push(
            { rutAlumno: rut, nombreAlumno: nombre, apellidoAlumno: apellido, direccionAlumno: direccion, comunaAlumno: comuna, correoAlumno: correo }
        )
        mockApoderado.push(
            { rutApoderado: rutApoderado, nombreApoderado: nombreApoderado, apellidoApoderado: apellidoApoderado, direccionApoderado: direccionApoderado, comunaApoderado: comunaApoderado }
        )
        mockRelacion.push(
            { rutApoderado: rutApoderado, rutAlumno: rut, relacion_economica: relacion }
        )

        //console.log(mockAlumno)
        //console.log(mockApoderado)
        //console.log(mockRelacion)

    } catch (error) {
        console.log(error)
    }

}
