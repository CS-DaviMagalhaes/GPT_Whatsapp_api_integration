import { botId } from './send.js';
import { phoneNbr } from './send.js';
import { bearerToken } from './send.js';
import { url } from './send.js';
var botId = botId;
var phoneNbr = phoneNbr;
var bearerToken = bearerToken;
var url = url + botId + '/messages';
var data = {
  messaging_product: 'whatsapp',
  to: phoneNbr,
  type: 'template',
  template: {
    name:'hello_world',
    language:{ code: 'en_US' }
  }
};
var postReq = {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer ' + bearerToken,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data),
  json: true
};
fetch(url, postReq)
  .then(data => {
    return data.json()
  })
  .then(res => {
    console.log(res)
  })
  .catch(error => console.log(error));