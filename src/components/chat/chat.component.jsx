import React from 'react';
import './chat.styles.scss';
import './autenticacao.scss';
import './scrollbar.scss';
import {DirectLine} from 'botframework-directlinejs';
import FullReactWebChat from 'botframework-webchat';
import Swal from "sweetalert2";
import ToastAutenticado from "../toast-autenticado/toast-autenticado.component";

/**
 * @author Matheus Rocha <matheus.silva@gsw.com.br>
 * @class Chat Componente de Chat da azure
 * */
class Chat extends React.Component {

    constructor(props) {
        super(props);
        this.directLine = new DirectLine({token: `${process.env.REACT_APP_KEY}`});
        this.state = {
            user: '',
            value: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    styleSet = window.WebChat.createStyleSet({
        bubbleBackground: '#FFF',
        bubbleFromUserBackground: '#e1ffc7',
        hideUploadButton: true,
        sendBoxBackground: 'White',
        sendBoxButtonColor: '#009a8e',
        sendBoxButtonColorOnHover: 'rgba(66,65,67,0.7)',
        timestampFormat: 'absolute', // 'absolute'
    });

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const {value} = this.state;
        if (value)
            this.setState({user: value});
        else
            Swal.fire({
                icon: 'error',
                text: 'Digite um nome válido!',
            });
    }

    render() {
        const {user, value} = this.state;
        return (
            <div className="chat">
                {
                    !user ?
                        <div className="container-validacao">
                            <div className="form-autenticacao box has-text-centered">
                                <div className="field">
                                    <label className="label title is-3">Entre com seu nome</label>
                                    <div className="control">
                                        <input className="input" type="text" value={value}
                                               onChange={this.handleChange}/>
                                    </div>
                                    <button className="form-autenticacao__button"
                                            onClick={this.handleSubmit}>Enviar
                                    </button>
                                </div>
                            </div>
                        </div>
                        :
                        (
                            <>
                                <ToastAutenticado nome={user}/>
                                <FullReactWebChat directLine={this.directLine} userID={user}
                                                  styleSet={this.styleSet}/>
                            </>
                        )
                }
            </div>
        );
    }
}

export default Chat;