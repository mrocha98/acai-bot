/**
 * @author Matheus Rocha <matheus.silva@gsw.com.br>
 * @file urls Arquivo para centralizar as urls da Azure
 * */

export const urlAuthentication = 'https://directline.botframework.com/v3/directline/tokens/generate';
export const urlConversation = 'https://directline.botframework.com/v3/directline/conversations';
export const urlMessage = (idMessage) => `https://directline.botframework.com/v3/directline/conversations/${idMessage}/activities`;
export const urlResponse = (conversation, message) => `https://directline.botframework.com/v3/directline/conversations/${conversation}/activities?watermark=${message}`;