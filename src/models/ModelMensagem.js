/**
 * @class ModelMensagem Define as regras de negócio para uma Mensagem
 * @deprecated Sem uso desde que o chat da Azure foi incorporado no projeto
 * @author Matheus Rocha <matheus.silva@gsw.com.br>
 **/
export default class ModelMensagem {

    constructor(id, enviadoPor, conteudo) {
        this.id = id;
        this.enviadoPor = enviadoPor;
        this.conteudo = conteudo;
        this.hora = new Date().toString().substring(16, 21);
    }
}