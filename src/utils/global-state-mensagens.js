/**
 * @author Matheus Rocha <matheus.silva@gsw.com.br>
 * @deprecated Sem uso desde que o chat da Azure foi incorporado no projeto
 * */

import {createGlobalState} from 'react-hooks-global-state';
import {mensagens as mensagensMock} from "./mocks";

const {GlobalStateProvider, setGlobalState, useGlobalState} = createGlobalState({
    mensagens: mensagensMock
});

export const setMensagens = (element) => {
    setGlobalState('mensagens', element);
};

export {GlobalStateProvider, useGlobalState};