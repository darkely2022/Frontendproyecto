import { useState } from "react";

const mockPropiedades = 
    [
        {
            nombrepropiedad: "Casa de campo",
            direccionpropiedad: "Un lugar ideal para descansar de la ciudad",
             src:
            "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
            numhabitacion: 2,
            metrospropiedad: 170,
            valorpropiedad:0
        },
        {
            nombrepropiedad: "Casa de playa",
            direccionpropiedad: "Despierta tus días oyendo el oceano",
          src:
            "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
            numhabitacion: 2,
            metrospropiedad: 130,
            valorpropiedad:0
        }
    ]
//const [listaPropiedades,setlistaPropiedades]=useState(mockPropiedades) 


export const CrearPropiedadApi = async (PropiedadporCrear, rutlogin) => {
    const{nombrepropiedad,direccionpropiedad,comuna,numhabitacion,metrospropiedad,valorpropiedad}=PropiedadporCrear

        const resp = await fetch(`${process.env.REACT_APP_BASE_URL}/propiedades`,
            {
                method: 'post',
                body: JSON.stringify(
                    {
                        "folio": 1,
                        "nombrepropiedad": nombrepropiedad ,
                        "direccionpropiedad": direccionpropiedad,
                        "comunaid": comuna,
                        "numhabitacion": numhabitacion,
                        "metrospropiedad" :  metrospropiedad, 
                        "valorpropiedad" : valorpropiedad,
                        "src": 'https://i.ytimg.com/vi/yiOrvpii7BE/maxresdefault.jpg',
                        "lavanderia": 0,
                        "bicicletero": 0, 
                        "rutpropietarioid": rutlogin
                    }
                ),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
       
    
    mockPropiedades.push(
      {nombrepropiedad:nombrepropiedad,direccionpropiedad:direccionpropiedad, comuna:comuna,numhabitacion:numhabitacion,metrospropiedad:metrospropiedad,valorpropiedad:valorpropiedad}
    )
}

export const ListarpropiedadesApi=()=>{
   // console.log(mockPropiedades)
    return mockPropiedades;
}

/*
export const usersListV2 = async () => {
    const resp = await fetch(`${BASE_URL}/users`)
    const data = await resp.json();
    return data;
}*/

