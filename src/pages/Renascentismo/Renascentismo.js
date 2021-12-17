import Menu from '../../components/Menu/Menu'
import Footer from '../../components/Footer/Footer'
import './renascimento.styles.css'


const Renascentismo =() =>{
    return(
        <>
            <Menu/>
            <section>
                <header>
                    <img className='img-capa' href='https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/AI6ZXKWK4BHJ7L67WHPPQY6MOQ.jpg' alt='A criação de Adão'/>
                    <h1 className='name-intro'>Renascentismo</h1>
                </header>
            </section>

            <section>
                <h3>O que é o Renascentismo?</h3>
                <div className='text-container'>

                    <p>O Renascentismo, também chamado de Renascença ou Renascimento foi um movimento artístico, cultural e científico que surgiu na Itália, no século XV e se expandiu para outras regiões da Europa, trazendo renovação nas áreas de filosofia, política, economia, cultura, artes, ciência, dentre outras</p>
                    <p>O movimento foi caracterizado por estabelecer princípios, métodos e formas artísticas da arte clássica da cultura greco-romana.</p>
                    <p>A visão teocêntrica que enxergava Deus como centro do universo estava dando lugar ao pensamento antropocêntrico, que percebia o homem como figura central do universo</p>
                    <p> Sendo então o desenho <strong>Homem Vitruviano</strong> de Leonardo Da Vinci, a sintetização do ideário renascentista humanista e clássico</p>
                </div>

                <h3>Características do Renascentismo</h3>
                <div className='text-container2'>

                    <p>Antropocentrismo</p>
                    <p>Racionalismo</p>
                    <p>Valorização da antiguidade clássica</p>
                    <p>Cientificismo</p>
                    <p>Individualismo</p>
                </div>
                <div className='homem-vitruviano'>
                    <img href='https://s2.glbimg.com/C-hO7PBKlE0z8SOZRFWF81G8dUo=/smart/e.glbimg.com/og/ed/f/original/2019/10/16/61950733_1048112612050521_9041491844828217521_n.jpg' alt='Homem Vitruviano'/>
                    <p>Homem Vitruviano-Leonardo Da Vinci</p>
                </div>
            </section>

            <Footer/>
        </>
    )
}

export default Renascentismo