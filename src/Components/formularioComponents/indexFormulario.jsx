import React, {useState} from "react"

export const Formulario = () =>{

    const[datos, setDatos] = useState({
        nombre:``,
        apellido:``
    })

    const handleImputChange = (event) =>{
        /* console.log(event.target.value) */
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos =(e)=>{
        e.preventDefault();
        console.log(datos.nombre + " " + datos.apellido);
    }

    return(
        <>
            <form onSubmit={enviarDatos}>
                <div>
                    <input 
                        type="text" 
                        placeholder="Ingrese Nombre" 
                        name="nombre" 
                        onChange={handleImputChange}
                        />
                </div>
                <div>
                    <input 
                        type="text" 
                        placeholder="Ingrese Apellido" 
                        name="apellido" 
                        onChange={handleImputChange}
                        />
                </div>
                <div>
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </>
    )
}