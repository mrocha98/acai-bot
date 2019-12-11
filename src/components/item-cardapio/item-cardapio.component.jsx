import React from 'react';
import formataPreco from "../../helpers/formata-preco";
import './item-cardapio.styles.scss';

/**
 * Componente responsável por renderizar um item do Cardápio
 * @author Matheus Rocha <matheus.silva@gsw.com.br>
 * @param {String} nome Nome do item/produto
 * @param {number} preco Preço do item/produto
 * */
const ItemCardapio = ({nome, preco}) => (
    <div className="item-cardapio">
        <span className="item-cardapio__nome">{nome}</span>
        <span className="item-cardapio__preco">R$ {formataPreco(preco)}</span>
    </div>
);

export default ItemCardapio;