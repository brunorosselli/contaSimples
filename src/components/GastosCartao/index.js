import React, { Component, } from 'react'
import {Table } from 'react-bootstrap'

import {consultarExtrato} from '../../services/Extrato/index'
let saldo = window.localStorage.getItem('saldo');    

class GastosCartao	extends	Component	{
  
    
  constructor(props){
    super(props);
    this.state = {            
        transacoes: [], 
        soma: 0
    }   
    
}

    componentDidMount(){
        consultarExtrato().then(dados => this.setState({transacoes: dados}, () => this.calcularSoma(false)))  
        
    }

    
    calcularSoma(credito) {
      const soma = this.state.transacoes
        .reduce((a,b) => {
          if (b.credito === credito) {
            return a + b.valor
          }
          return a;
        }, 0);
      this.setState({soma});
    }

    render() {
        return (
          <Table striped bordered hover variant="dark">
          <tr class="text-center font-weight-bold">
          <td className={this.state.soma > saldo ? "text-danger" : "text-info" } > {"Total de Gastos Com Cartão de Crédito: " + this.state.soma.toLocaleString("PT-BR", {style: "currency", currency : "BRL"})}</td>
          </tr>
          </Table>
        )
    }
    
}

export default GastosCartao;


