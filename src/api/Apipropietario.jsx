
export const CrearPropietarioApi = async (PropietarioporCrear) => {
    try {
        const { rutpropietario, nombrepropietario, apellidopropietario, direccionpropietario, comunapropietario, correopropietario, passwordpropietario } = PropietarioporCrear

        const resp = await fetch('https://backend-arriendo.up.railway.app/propietarios',
            {
                method: 'post',
                body: JSON.stringify(
                    {
                        "rutpropietario": rutpropietario,
                        "nombrepropietario": nombrepropietario,
                        "apellidopropietario": apellidopropietario,
                        "direccionpropietario": direccionpropietario,
                        "comunapropietario": comunapropietario,
                        "correopropietario": correopropietario,
                        "passwordpropietario": passwordpropietario
                    }
                ),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        // const data = await JSON.stringify(resp); 
        console.log('API PROPIETARIO')



        const Usuario = await fetch('https://backend-arriendo.up.railway.app/usuarios',
            {
                method: 'post',
                body: JSON.stringify(
                    {
                        "id": rutpropietario,
                        "tipo_usuario_id": 2,
                        "password": passwordpropietario
                    }
                ),
                headers: {
                    'Content-Type': 'application/json'
                }
            });


    } catch (error) {
        console.log(error)
    }

}
