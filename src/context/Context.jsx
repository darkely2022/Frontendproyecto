import { createContext, useState } from "react";

const Context = createContext(null);

function Provider({ children }) {
  const [Comunas, setComunas] = useState([]);
  //const [publicaciones, setPublicaciones]= useState([]);
  const [Alumnos, setAlumnos] = useState([]);
  const [Propietarios, setPropietarios] = useState([])
  const [session, setSession] = useState(null);
  const [sessionAlumnos, setSessionAlumnos] = useState(null);


  const ListComunas = async () => {
    try {

      const resp = await fetch('https://backend-arriendo.up.railway.app/comunas');
      const data = await resp.json();
      setComunas(data);
      console.log(data);
    } catch (error) {
      console.log(error)
    }

  }
  /*
  const ListPropiedades = async () => {
    try {

      const resp = await fetch('https://backend-arriendo.up.railway.app/propiedades');
      const {propiedades} = await resp.json();
      setPublicaciones(propiedades);
      console.log('propiedades',propiedades);
    } catch (error) {
      console.log(error)
    }

  }*/

  
  const [publicaciones, setPublicaciones] = useState([
    {
      folio: "1",
      nombrepropiedad: "Departamento",
      direccionpropiedad: "Barrio las tarrias",
      comunaid: "Providencia",
      numhabitacion: 3,
      metrospropiedad: 100,
      valorpropiedad: 200000,
      src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg"
    },
    {
      folio: "2",
      nombrepropiedad: "Departamento",
      direccionpropiedad: "Eleuterio Ramirez",
      comunaid: "Santiago",
      numhabitacion: 1,
      metrospropiedad: 50,
      valorpropiedad: 15000,
      src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg"
    },
    {
      folio: "3",
      nombrepropiedad: "Departamento",
      direccionpropiedad: "Guardia Vieja",
      comunaid: "Providencia",
      numhabitacion: 3,
      metrospropiedad: 80,
      valorpropiedad: 250000,
      src: "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg"
    }
  ]);


  const state = {
    Alumnos,
    setAlumnos,
    Propietarios,
    setPropietarios,
    session,
    setSession,
    sessionAlumnos,
    setSessionAlumnos,
    publicaciones,
    setPublicaciones,
    Comunas,
    setComunas,
    ListComunas
  };
  return <Context.Provider value={state}>{children}</Context.Provider>;
}

export default { Provider, Context };