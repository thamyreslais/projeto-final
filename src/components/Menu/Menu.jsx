import { Link } from 'react-router-dom'
import './menu.styles.css'

function Menu() {

    return(
        <>
            <div>
                 
                <ul className='navbar'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>

                    <li>
                        <Link to='/renascentismo'>Renascentismo</Link>
                    </li>

                    <li>
                        <Link to='/sobre'>Sobre</Link>
                    </li>

                </ul>
            </div>
        </>
    )
}

export default Menu