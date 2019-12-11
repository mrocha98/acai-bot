import React from 'react';
import { useGlobalState, showModalCardapio } from '../../utils/global-state-modal-cardapio';
import {Button} from 'reactbulma';
import {itensCardapio} from '../../utils/mocks';
import './barra-superior.styles.scss';
import ModalCardapio from "../modal-cardapio/modal-cardapio.component";

/**
 * @author Matheus Rocha <matheus.silva@gsw.com.br>
 * @function BarraSuperior Componente que concentra as informações do Bot e um botão para ativar o ModalCardapio
 * @param {String} nome Nome do Bot
 * @param {String} status Se ele se encontra online ou offline
 * @param {String} fotoUrl Url para a foto do Bot
 * */
const BarraSuperior = ({nome, status, fotoUrl}) => {

    const [modalCardapio] = useGlobalState('modalCardapio');

    return (
        <header className="barra-superior">
            <div className="barra-superior__foto" style={{
                backgroundImage: `url(${fotoUrl})`
            }}/>
            <div className="barra-superior__info">
                <h1 className="barra-superior__nome">{nome}</h1>
                <h2 className="barra-superior__status">{status}</h2>
            </div>
            <Button className="barra-superior__modal-cardapio" onClick={showModalCardapio}>Ver cardápio</Button>
            <ModalCardapio className={modalCardapio} itens={itensCardapio}/>
        </header>
    )
};

export default BarraSuperior;