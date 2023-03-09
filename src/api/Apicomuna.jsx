import { useState, useContext } from "react";
import ContextOrigin from "../context/Context";

const { Context } = ContextOrigin;
const baseUrl = 'https://backend-arriendo.up.railway.app/comunas';

export const ListComunas = async () => {
    const { Comunas, setComunas } = useContext(Context);
try {
   
    const resp = await fetch(baseUrl);
    const data = await resp.json();
    setComunas(data);
    console.log(data);
} catch (error) {
    console.log(error)
}
    

}