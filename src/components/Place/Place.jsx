
import cities from '../../data/database'


function Place(){
    return(
        <>
        <section>
            <div className="header-container">
                {cities.map((places) =>
                    <ul>
                        <li key={places.id}>
                            <img src={places.imageCity} alt={places.name}/>
                            <h1>{places.name}</h1>
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