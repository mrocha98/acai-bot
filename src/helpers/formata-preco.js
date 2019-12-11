/**
 * @author Matheus Rocha <matheus.silva@gsw.com.br>
 * @function formataPreco Função para deixar o preço com dois dígitos depois da vírgula
 * @param {number} preco Preço a ser formatado
 * */
export default function formataPreco(preco) {
    const precoStr = preco.toString().replace('.', ',');
    const precoSplit = precoStr.split(',');
    if(precoSplit.length === 1)
        return precoStr.concat(',00');
    const inteiro = precoSplit[0];
    const decimal = precoSplit[1];
    if(decimal.length < 2)
        return inteiro.concat(',').concat(decimal).concat('0');
    return precoStr;
}