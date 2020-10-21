import {URL_API} from '../Base/index' 

export function consultarResumo(){
    return fetch(`${URL_API}/empresas`).then(resultado => resultado.json());
  }