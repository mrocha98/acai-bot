import React from 'react';
import './conversa.styles.scss';
import InputMensagem from "../input-mensagem/input-mensagem.component";
import Mensagem from "../mensagem/mensagem.component";
import {useGlobalState, GlobalStateProvider} from "../../utils/global-state-mensagens";

/**
 * @author Matheus Rocha <matheus.silva@gsw.com.br>
 * @function Conversa Componente que concentra as Mensagens e exibe o InputMensagem no final
 * @deprecated Sem uso desde que o chat da Azure foi incorporado no projeto
 * */
const Conversa = () => {

    const [mensagens] = useGlobalState('mensagens');

    return (
        <div className="conversa">
            <div className="conversa__mensagens">
                { mensagens.map(msg => (
                    <Mensagem
                        key={msg.id}
                        conteudo={msg.conteudo}
                        enviadoPor={msg.enviadoPor}
                        hora={msg.hora}
                    />
                )) }
            </div>
            <div className="conversa__input">
                <GlobalStateProvider>
                    <InputMensagem mensagens={mensagens}/>
                </GlobalStateProvider>
            </div>
        </div>
    );
};

export default Conversa;