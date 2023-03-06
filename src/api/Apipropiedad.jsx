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


export const CrearPropiedadApi = async (PropiedadporCrear) => {
    const resp = await fetch(`${process.env.REACT_APP_BASE_URL}/propiedades`);
    const data = await resp.json();
    console.log(data);

   
       
    const{nombrepropiedad,direccionpropiedad,comuna,numhabitacion,metrospropiedad,valorpropiedad}=PropiedadporCrear
    mockPropiedades.push(
      {nombrepropiedad:nombrepropiedad,direccionpropiedad:direccionpropiedad, comuna:comuna,numhabitacion:numhabitacion,metrospropiedad:metrospropiedad,valorpropiedad:valorpropiedad}
    )
    //console.log(PropiedadporCrear) 
    //console.log(mockPropiedades)
    //return mockPropiedades;
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

