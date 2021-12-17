
import { useState } from 'react/cjs/react.development'
import cities from '../../data/database.json'
import './cards.styles.css'

function Cards(){
    const [busca, setBusca] = useState('')

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
                            {cities.map((city)=>

                                <ul className='city'key={city.id}>
                                    <li>
                                        <img className='city-image' href={city.image} alt={city.name}/>
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