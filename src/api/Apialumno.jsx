

const mockAlumno = [
    {
        rutAlumno: "19",
        nombreAlumno: "Juan",
        apellidoAlumno:"Perez",
        direccionAlumno:"La luna",
        comunaAlumno: "1",
        correoAlumno:"prueba@correo.cl"
    }
]

const mockApoderado = [
    {
        rutApoderado: "78599200",
        nombreApoderado: "Victoria",
        apellidoApoderado: "Lara",
        direccionApoderado:"El sol",
        comunaApoderado: "2",
        correoApoderado:"victoria@correo.cl"
    }
]

const mockRelacion = [
    {
        rutApoderado: "78599200",
        rutAlumno: "19",
        relacion_economica:"Madre"
    }
]

export const CrearAlumnoApi = (AlumnoporCrear) => {
    /* const resp = await fetch('/propiedades');
    const data = await resp.json(); */
   
    
    const{rut,nombre,apellido,direccion,comuna,correo,rutApoderado,nombreApoderado,apellidoApoderado,direccionApoderado,comunaApoderado,mailApoderado,relacion}=AlumnoporCrear
    mockAlumno.push(
      {rutAlumno:rut,nombreAlumno:nombre,apellidoAlumno:apellido,direccionAlumno:direccion, comunaAlumno:comuna,correoAlumno:correo}
    )
    mockApoderado.push(
        {rutApoderado:rutApoderado,nombreApoderado:nombreApoderado,apellidoApoderado:apellidoApoderado,direccionApoderado:direccionApoderado,comunaApoderado:comunaApoderado}
    )
    mockRelacion.push(
        {rutApoderado:rutApoderado, rutAlumno:rut, relacion_economica:relacion}
    )
    
    //console.log(mockAlumno)
    //console.log(mockApoderado)
    //console.log(mockRelacion)
    
}
