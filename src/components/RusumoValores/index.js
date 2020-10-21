import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import {consultarExtrato} from '../../services/Extrato/index'
            
let saldo = window.localStorage.getItem('saldo');

console.log("Saldo: " + saldo)
class ResumoValores	extends	Component	{
    
    constructor(props){
        super(props);

        this.state = {
            //Array que recebe os Itens da API
            transacoes: [],     
        }   
    }

    componentDidMount(){
        consultarExtrato().then(dados => this.setState({transacoes: dados}))  
    }

    
    
    render() {
        return (
            
        <div>
            {
            //Tabela com os dados
            }
           <Table striped bordered hover variant="dark">
            <tbody>
                { 
                    (() => {
                        var total = this.state.transacoes.reduce(getTotal, 0);

                        function getTotal(total, item) {
                            return total + (item.valor);
                        }

                    
                    return (
                        <tr class="text-center font-weight-bold"  key={Math.random()}>
                        <td className={total > saldo ? "text-danger" : "text-info" } > {"Total de Gastos: " + total.toLocaleString("PT-BR", {style: "currency", currency : "BRL"})}</td>
                        </tr>
                        )
                    })()
                }
            </tbody>
            </Table> 
        </div>
        )
    }
    
}

export default ResumoValores;