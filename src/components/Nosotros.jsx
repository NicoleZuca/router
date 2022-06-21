import React from 'react'
import { Link } from 'react-router-dom'

const Nosotros = () => {

    //hicimos un state que simplemente va a tener datos null
    //una vez que se ejecuta el componente, vamos a usar el setEquipo, es decir que vamos a incorporar la información en el estado
    const [equipo, setEquipo] = React.useState([]) 

    React.useEffect(() => {
        //console.log('useEffect')
        //para ejecutar el método obtener datos
        obtenerDatos()
    }, [])//con los [] le indicamos que se ejecute una sola vez para evitar que se haga un búcle infinito

    const obtenerDatos = async () => {
        //Hace un llamado a esa URL y el fetch nos va a devolver un json que guardamos en la constante data
        const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')

        //transformamos la data con otro await a json y con esto obtenemos todo el array de objetos que está en la URL
        const users = await data.json()

        //console.log(users)
        //Para que muestre la información
        setEquipo(users.civilizations)
    }

    //La llamada a useEffect acepta una función como argumento. Esta función se ejecuta por defecto cuando el componente se renderiza por primera vez, y
    // después cada vez que el componente se actualice.
    React.useEffect(() => {
        //console.log('useEffect')
        document.title = 'useEffect'
    })

    return (  
        <div>
            <h1>Nosotros</h1>
            <ul>
                {
                    //hacemos un recorrido para mostrar la información
                    equipo.map(item => (
                        <li >
                            {/* hacer rutas dinámicas para cada uno de los elementos */}
                            <Link to={`/nosotros/${item.id}`}>
                                {item.name} - {item.expansion}                            
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
 
export default Nosotros;