import Menu from '../../components/Menu/Menu'
import Cards from '../../components/cards/cards'
import Header from "../../components/Header/Header"
import Footer from '../../components/Footer/Footer'

import imageHome from '../../assets/home.svg'

const Home = () => {
    return(
        <>
            <Menu/>
            <Header image={imageHome}/>
            <Cards/>
            <Footer/>
        </>
    )
}

export default Home