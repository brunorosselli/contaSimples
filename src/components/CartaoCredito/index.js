import React, { Component } from 'react'
import NavBar from '../NavBar'
import {consultarExtrato} from '../../services/Extrato/index'
import { Container, Table, InputGroup, FormControl} from 'react-bootstrap'

class CartaoCredito	extends	Component	{
    
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
            //NavBar
            }
            <NavBar></NavBar>    
            {

            //CheckBox
            
            }
                <br/>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Checkbox name="check1" checked={this.state.check1} onChange={this.onCheckChange} aria-label="Checkbox for following text input"/> 
                        </InputGroup.Prepend>
                        <FormControl aria-label="Text input with checkbox" value="Marque Para Crédito ou Débito"/>
                    </InputGroup>
                <br/>
            {
            //Tabela com os dados
            }
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>Empresa ID</th>
                    <th>Data Transação</th>
                    <th>Valor</th>
                    <th>Final do Cartão</th>
                    <th>Tipo de Transação</th>
                    <th>Descrição da Transação</th>
                    <th>Estabelecimento</th>
                    <th>Crédito</th>
                    </tr>
                </thead>
                <tbody>
            
                
                   { 
                    
                    //Chama o Array Transacoes e Faz um Map para listar os itens
                    this.state.transacoes.map((item, indice)  => {
                    
                    //Verifica o stado da CheckBox Se for Igual a True Mostra apenas os itens que não são Cartão Se for False Mostra os Cartões

                          if(item.credito === this.state.check1){
                            return (
                                <tr key={indice}>
                                <td> {item.empresaId}</td>
                                <td>{item.dataTransacao}</td>
                                <td>{item.valor}</td>
                                <td>{item.finalCartao}</td>
                                <td>{item.tipoTransacao}</td>
                                <td>{item.descricaoTransacao}</td>
                                <td>{item.estabelecimento}</td>
                                <td>{item.credito}</td>
                                </tr>
                               )
                          }

                         })
 

                    }


                </tbody>
            </Table>
        </Container>
        )
    }
    
}

export default CartaoCredito;