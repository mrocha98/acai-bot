import React from 'react';
import {Box} from 'reactbulma';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import './mensagem.styles.scss';

/**
 * @author Matheus Rocha <matheus.silva@gsw.com.br>
 * @function aplicaClassName
 * @param {String} enviadoPor Determina qual regra CSS será aplicada na mensagem
 * Ex: 'bot' faz a mensagem ir para a esquerda e ter background white
 * @deprecated Sem uso desde que o chat da Azure foi incorporado no projeto
 * */
function aplicaClassName(enviadoPor) {
    let className = 'mensagem__box mensagem__box';
    if(enviadoPor === 'bot')
        className += '--bot';
    else if(enviadoPor === 'usuario')
        className += '--usuario';
    else
        throw new Error('tipo inválido');
    return className;
}

/**
 * @author Matheus Rocha <matheus.silva@gsw.com.br>
 * @param {Object} conteudo Conteúdo a ser renderizado
 * @param {String} enviadoPor Determina qual regra CSS será aplicada na mensagem
 * Ex: 'bot' faz a mensagem ir para a esquerda e ter background white
 * @param {Object} hora Hora em que a mensagem foi enviada
 * @deprecated Sem uso desde que o chat da Azure foi incorporado no projeto
 * */
const Mensagem = ({conteudo, enviadoPor, hora}) => {
    const BoxClassName = aplicaClassName(enviadoPor);
    return (
        <div className="mensagem">
            <Box className={BoxClassName}>
                {typeof conteudo === 'string' ? <p>{conteudo}</p> : {conteudo}}
                <p className="mensagem__hora">
                    {hora}
                    <span>   </span>
                    <FontAwesomeIcon icon={faCheck} color="#4aa4ed"/>
                </p>
            </Box>
        </div>
    )
};

export default Mensagem;