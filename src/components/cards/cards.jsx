
import { useEffect, useState } from 'react/cjs/react.development'
import cities from '../../data/database.json'
import './cards.styles.css'

function Cards(){
    const [busca, setBusca] = useState('')
    const [filtro, setFiltro]= useState([])

    useEffect(() => {
        if (busca) {
            fetch
        }
    }, [])

    return(
        <>
            <section>
                    <div className='input-container'>
                        <input 
                            type='text'
                            placeholder='Nome da cidade'
                            value={busca}
                            onChange={(e)=>(setBusca(e.target.value))}
                        />
                                
                    </div>
                    <div>
                        <a className='card-container'>
                            {cities.map((city)=>

                                <ul className='city'key={city.id}>
                                    <li>
                                        <img className='city-image' src={city.image} alt={city.name}/>
                                        <h2>{city.name}</h2>
                                    </li>
                                </ul>
                            )}
                        </a>
                    </div>
            </section>
        </>
    )
}

export default Cards