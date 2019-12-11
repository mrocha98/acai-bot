import React from 'react';

import './modal-cardapio.styles.scss';
import Cardapio from "../cardapio/cardapio.component";

/**
 * @author Matheus Rocha <matheus.silva@gsw.com.br>
 * @function ModalCardapio Componente responsável por exibir o conteúdo do componente Cardápio em forma de modal
 * @param {string} className Nome de uma classe css que definirá a visibilidade do modal
 * @param {Object} itens Conjunto de objetos para serem renderizados no Cardápio
 * */
const ModalCardapio = ({className, itens}) => (
    <div className={`${className} modal`}>
        <Cardapio itens={itens}/>
    </div>
);

export default ModalCardapio;