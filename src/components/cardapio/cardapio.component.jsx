import React from 'react';
import { hideModalCardapio } from '../../utils/global-state-modal-cardapio';
import './cardapio.styles.scss';
import './scrollbal.scss';
import ItemCardapio from "../item-cardapio/item-cardapio.component";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";

/**
 * @author Matheus Rocha <matheus.silva@gsw.com.br>
 * @function Cardapio Componente que concentra as informações do Cardápio
 * @param {Object} itens Itens do Cardápio a serem renderizados
 * */
const Cardapio = ({itens}) => {

    return (
        <div className="cardapio">
            <div className="cardapio__banner">
                <img className="cardapio__imagem" alt="açaí"
                     src="https://blog.finamac.com/wp-content/uploads/2018/07/218564-voce-conhece-quais-os-beneficios-do-acai-para-saude-1280x640.jpg"/>
                <h1 className="cardapio__titulo">Cardápio</h1>
                <button className="cardapio__fechar" onClick={hideModalCardapio}>
                    <FontAwesomeIcon className="cardapio__icone-fechar" icon={faTimesCircle}/>
                </button>
            </div>
            <div className="cardapio__info">
                <h2 className="cardapio__tamanhos">Tamanhos</h2>
                <ul className="cardapio__itens">
                    {
                        itens.filter(item => item.tipo === 'tamanho').map(item => (
                            <ItemCardapio key={item.id}{...item} />
                        ))
                    }
                </ul>
                <br/>
                <h2 className="cardapio__adicionais">Adicionais</h2>
                <ul className="cardapio__itens">
                    {
                        itens.filter(item => item.tipo === 'adicional').map(item => (
                            <ItemCardapio key={item.id}{...item} />
                        ))
                    }
                </ul>
            </div>
        </div>
    )
};

export default Cardapio;