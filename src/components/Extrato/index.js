import React, { Component } from 'react'
import { Container, Table, InputGroup, FormControl} from 'react-bootstrap'
import {consultarExtrato} from '../../services/Extrato/index'



class Extrato	extends	Component	{
    
    constructor(props){
        super(props);

        this.state = {
            //Array que recebe os Itens da API
            transacoes: [],
            //State Inicial da CheckBox
            check1: true 
        }


        //Muda o valor da CheckBox

        this.onCheckChange = this.onCheckChange.bind(this)
        
    }

    componentDidMount(){
        consultarExtrato().then(dados => this.setState({transacoes: dados}))  
    }
    
    
    //Metodo para Mudar o Valor da CheckBox

    onCheckChange(e){
        this.setState({
            [e.target.name]: e.target.checked
        })
    }
    
    render() {
        return (
         
        <Container>
            
            {
           
            //CheckBox
            
            }
                <br/>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Checkbox name="check1" checked={this.state.check1} onChange={this.onCheckChange} aria-label="Checkbox for following text input"/> 
                        </InputGroup.Prepend>
                        <FormControl aria-label="Text input with checkbox" value="Desmarque Para Cartões"/>
                    </InputGroup>
                <br/>
            {
            //Tabela com os dados
            }
            <Table class="table"> 
                <thead class="thead-dark" >
                    <tr class="bg-primary text-whit border-secondarye">
                    <th>Empresa ID</th>
                    <th>Data Transação</th>
                    <th>Valor</th>
                    <th>Final do Cartão</th>
                    <th>Tipo de Transação</th>
                    <th>Descrição da Transação</th>
                    <th>Estabelecimento</th>
                    </tr>
                </thead>
                <tbody>
            
                
                   { 
                    
                    //Chama o Array Transacoes e Faz um Map para listar os itens
                    this.state.transacoes.map((item, indice)  => {
                    
                    //Verifica o stado da CheckBox Se for Igual a True Mostra apenas os itens que não são Cartão Se for False Mostra os Cartões

                          if(item.credito === this.state.check1){
                            return (
                                <tr  key={indice}>
                                <td>{item.empresaId}</td>
                                <td>{item.dataTransacao}</td>
                                <td>{item.valor.toLocaleString("PT-BR", {style: "currency", currency : "BRL"})}</td>
                                <td>{item.finalCartao}</td>
                                <td>{item.tipoTransacao}</td>
                                <td>{item.descricaoTransacao}</td>
                                <td>{item.estabelecimento ? item.estabelecimento : "Sem Dados"}</td>
                                </tr>
                               )
                          }

                         })
 

                    }


                </tbody>
            </Table>
            <br/>
            
        </Container>
        )
    }
    
    
}

export default Extrato;

