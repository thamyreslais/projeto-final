import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './pages/Home/Home'
import Sobre from './pages/Sobre/Sobre'
import Renascentismo from "./pages/Renascentismo/Renascentismo";
import Local from "./pages/Local/Local";

function Rotas(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/sobre" component={Sobre}/>
                <Route path="/renascentismo" component={Renascentismo}/>
                <Route path="/local" component={Local}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Rotas