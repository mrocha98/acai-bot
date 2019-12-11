import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import './input-mensagem.component.scss';
import ModelMensagem from "../../models/ModelMensagem";

/**
 * @author Matheus Rocha <matheus.silva@gsw.com.br>
 * @class InputMensagem Barra de input responsável por gerar uma Mensagem
 * @deprecated Sem uso desde que o chat da Azure foi incorporado no projeto
 * */
export default class InputMensagem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.enviaMensagem(this.state.value);
        this.setState({value: ''});
    }

    avisoEmojis = () => {
        Swal.fire({
                icon: 'error',
                title: 'Ooops...',
                text: 'Emojis estão indisponíveis no momento!',
            }
        );
    };

    enviaMensagem(conteudo) {
        if(conteudo) {
            const ultimoId = this.props.mensagens.map(msg => msg.id).length;
            const msg = new ModelMensagem(ultimoId, 'usuario', conteudo);
            this.props.mensagens.push(msg);

            console.log(this.props.mensagens);
        }
    }

    render() {
        return (
            <div className="formularioMensagem">
                    <button
                        className="button formularioMensagem__emoji"
                        onClick={this.avisoEmojis}>
                        <span role="img" aria-label="smile emoji">😀</span>
                    </button>
                    <input
                        className="input formularioMensagem__input"
                        name="texto"
                        onChange={this.handleChange}
                        placeholder="Inserir mensagem"
                        type="text"
                        value={this.state.value}
                    />
                    <button
                        className="button formularioMensagem__enviar"
                        onClick={this.handleSubmit}
                        type="text"
                        >
                        <FontAwesomeIcon icon={faPaperPlane} color={'white'}/>
                    </button>
            </div>
        )
    }
}