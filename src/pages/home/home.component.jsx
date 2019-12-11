import React, { StrictMode } from 'react';
import { GlobalStateProvider } from '../../utils/global-state-modal-cardapio';
import BarraSuperior from "../../components/barra-superior/barra-superior.component";
import {infosBarraSuperior} from '../../utils/mocks';
import Chat from "../../components/chat/chat.component";

/**
 * Página inicial (e principal) da aplicação
 * @author Matheus Rocha <matheus.silva@gsw.com.br>
 *
 */
const Home = () => {

    return (
        <StrictMode>
            <GlobalStateProvider>
                <BarraSuperior {...infosBarraSuperior} />
            </GlobalStateProvider>
            <Chat />
        </StrictMode>
    );
};

export default Home;