import {URL_API} from '../Base/index' 

export function consultarExtrato(){
    return fetch(`${URL_API}/transacoes`).then(resultado => resultado.json());
  }