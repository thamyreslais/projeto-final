
import { useState, useEffect } from 'react/cjs/react.development'
import cities from '../../data/database'
import './cards.styles.css'

function Cards(){
    const [busca, setBusca] = useState('')
    const [filtro, setFiltro] = useState([])

    useEffect(()=>{
        setFiltro(
            cities.filter(cidade=>{
                return cidade.name.includes(busca)
            })
        )
    }, [cities, busca])

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
                        <div className='card-container'>
                            {filtro.map((city)=>

                                <ul className='city'key={city.id}>
                                    <li>
                                        <img className='city-image' src={city.image} alt={city.name}/>
                                        <h2>{city.name}</h2>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
            </section>
        </>
    )
}

export default Cards