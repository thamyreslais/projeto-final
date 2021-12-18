
import cities from '../../data/database'
import './place.styles.css'


function Place(){


    return(
        <>
        <section>
            <div className="art-container">
                {cities.map((places) =>
                    <ul className='artes-container'>
                        <li className='artes' key={places.id}>
                            <h1>{places.name}</h1>
                            <img className="artes-foto" src={places.imageArt1} alt={places.nameArt1 }/>
                            <p>{places.nameArt1}</p>
                        
                        </li>
                        <li className='artes' key={places.id}>
                            <img className="artes-foto" src={places.imageArt2} alt={places.nameArt2}/>
                            <p>{places.nameArt2}</p>

                        </li>
                        <li className='artes' key={places.id}>
                            <img className="artes-foto" src={places.imageArt3} alt={places.nameArt3}/>
                            <p>{places.nameArt3}</p>

                        </li>
                        <li className='artes' key={places.id}>
                            <img className="artes-foto" src={places.imageArt4} alt={places.nameArt4}/>
                            <p>{places.nameArt4}</p>
                        </li>
                        
                    </ul>
                )

                }
            </div>
        </section>
        </>
    )
}

export default Place