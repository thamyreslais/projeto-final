import Menu from "../Menu/Menu"
import cities from '../../data/database'
import Footer from "../Footer/Footer"

function Place(){
    return(
        <>
        <Menu/>
        <section>
            <div className="header-container">
                {cities.map((places) =>
                    <ul>
                        <li key={places.id[0]}>
                            <img src={places.imageCity[0]} alt={places.name[0]}/>
                            <h1>{places.name[0]}</h1>
                        </li>
                    </ul>
                )

                }
            </div>
        </section>
        <Footer/>
        </>
    )
}

export default Place