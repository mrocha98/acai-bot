import {createGlobalState} from 'react-hooks-global-state';

const {GlobalStateProvider, setGlobalState, useGlobalState} = createGlobalState({
    modalCardapio: '',
});

/**
 * @author Matheus Rocha <matheus.silva@gsw.com.br>
 * @function showModalCardapio Aplica a classe 'show' no modal
 * */
export const showModalCardapio = () => {
    setGlobalState('modalCardapio', "show");
};

/**
 * @author Matheus Rocha <matheus.silva@gsw.com.br>
 * @function hideModalCardapio Remove a classe 'show' no modal
 * */
export const hideModalCardapio = event => {
    event.stopPropagation();
    setGlobalState('modalCardapio', "");
};

export {GlobalStateProvider, useGlobalState};
