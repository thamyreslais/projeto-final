
import { FiSearch} from 'react-icons/fi'
import { useEffect, useState } from 'react/cjs/react.development'
import Image from '../../assets/home.svg'
import cities from '../../data/database.json'
import './cards.styles.css'

function Cards(){

    return(
        <>
            <section>
                <header className='header'>
                    <img className='img-busca' src={Image}/>
                    <div className='input-container'>
                        <input 
                            type='text'
                            placeholder='Nome da cidade'
                            onChange={(e)=>(e.target.value)}
                        />

                        <button 
                            type='submit' 
                            className='button-busca'
                            
                            
                        >
                            <FiSearch size={16} color='#000000'/>
                        </button>
                        
                    </div>
                </header>

                    <div>
                        <div className='card-container'>
                            {cities.map((city)=>

                                <div className='city'key={city.id}>
                                    <img className='city-image' src={city.image} alt={city.name}/>
                                    <h2>{city.name}</h2>
                                </div>
                            )}
                        </div>
                    </div>
            </section>
        </>
    )
}

export default Cards