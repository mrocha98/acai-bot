import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Home from "./pages/home/home.component";
import TesteIntegracao from "./pages/teste-integracao/teste-integracao.component";

/**
 * Componente responsável por gerenciar as rotas da aplicação
 * @author Matheus Rocha <matheus.silva@gsw.com.br>
 */
const App = () => {

    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/integracao" component={TesteIntegracao}/>
        </Switch>
    );
};

export default App;
