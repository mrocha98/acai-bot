import React from 'react';

import './teste-integracao.styles.css';
import axios from "axios";
import {urlAuthentication, urlConversation, urlMessage, urlResponse} from "../../services/urls";
import Swal from 'sweetalert2';

/**
 * Página para testar a comunicação com a API da Azure
 * @author Matheus Rocha <matheus.silva@gsw.com.br>
 */

export default class TesteIntegracao extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            botResponseId: [],
            conversationId: '',
            isAuthenticated: false,
            isLoading: false,
            responses: [],
            token: '',
        };
    }

    handleClick() {
        this.setState({isLoading: !this.state.isLoading})
    }

    autentica = async () => {
        this.handleClick();
        await axios.post(urlAuthentication, {}, {
            headers: {Authorization: `bearer ${process.env.REACT_APP_KEY}`}
        })
            .then(res => {
                this.setState({isAuthenticated: true, token: res.data.token});
                console.log("autenticação efetuada com sucesso");
            })
            .catch(err => console.log(`Erro ao autenticar!\n${err}`));
        this.handleClick();
    };

    inicia = async () => {
        this.handleClick();
        await axios.post(urlConversation, {}, {
            headers: {Authorization: `bearer ${process.env.REACT_APP_KEY}`}
        })
            .then(res => {
                this.setState({conversationId: res.data.conversationId});
                console.log("comunicação bem sucedida");
            })
            .catch(err => console.log(`Erro ao iniciar conversa!\n${err}`));
        this.handleClick();
    };

    enviaOi = async () => {
        this.handleClick();
        await axios.post(urlMessage(this.state.conversationId), {
            type: 'message',
            from: {
                id: 'id_fulano',
                name: "Fulano"
            },
            text: 'oi',
        }, {headers: {Authorization: `bearer ${process.env.REACT_APP_KEY}`}})
            .then(res => {
                const splitedData = res.data.id.split('|');
                this.setState({botResponseId: splitedData});
                console.log("oi enviado");
            })
            .catch(err => console.log(`Erro ao enviar oi!\n${err}`));
        this.handleClick();
    };

    recebeRespostas = async () => {
        this.handleClick();
        await axios.get(urlResponse(this.state.botResponseId[0], this.state.botResponseId[1]), {
            headers: {Authorization: `bearer ${process.env.REACT_APP_KEY}`},
        })
            .then(res => {
                let arr = [];
                res.data.activities.forEach(activity => arr.push(activity));
                console.log(arr);
                this.setState({responses: arr});
                this.state.responses.forEach(resp => {
                   Swal.fire({
                       text: resp.text,
                   });
                });
            });
        this.handleClick();
    };

    render() {
        return (
            <div>
                <h1>CHATBOT - Teste de integração</h1>
                <div className="secoes">
                    <section className="acoes">
                        <ol>
                            <li>
                                <button className={this.state.isLoading ? "button is-loading" : "button"}
                                        onClick={this.autentica}>Autentica
                                </button>
                            </li>
                            <li>
                                <button className={this.state.isLoading ? "button is-loading" : "button"}
                                        onClick={this.inicia}>Inicia conversa
                                </button>
                            </li>
                            <li>
                                <button className={this.state.isLoading ? "button is-loading" : "button"}
                                        onClick={this.enviaOi}>Enviar "oi"
                                </button>
                            </li>
                            <li>
                                <button className={this.state.isLoading ? "button is-loading" : "button"}
                                        onClick={this.recebeRespostas}>Receber Respostas
                                </button>
                            </li>
                        </ol>
                    </section>
                    <section className="respostas">
                        <p>Autenticado? {this.state.isAuthenticated ? <span>SIM</span> : <span>NÃO</span>}</p>
                        <p>Token recebido? {this.state.token ? <span>SIM</span> : <span>NÃO</span>}</p>
                        <p>ID da conversa recebido? {this.state.conversationId ? <span>SIM</span> :
                            <span>NÃO</span>}</p>
                        <p>ID da resposta recebido? {this.state.botResponseId.length > 0 ? <span>SIM</span> :
                            <span>NÃO</span>}</p>
                    </section>
                </div>
            </div>
        );
    }
}