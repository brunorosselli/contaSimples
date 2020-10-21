import React, { Component } from 'react'
import {Table, Row, Col} from 'react-bootstrap'
import Extrato from '../../components/Extrato/index'
import NavBar from '../../components/NavBar/index'
import ResumoValores from "../../components/RusumoValores"
import GastosCartao from "../../components/GastosCartao"
import GastosForaCartao from "../../components/GastosForaCartao"

import {consultarResumo} from '../../services/Home/index'

let empresa = window.localStorage.getItem('empresa');

console.log(empresa)



class Home	extends	Component	{
    

    constructor(props){
        super(props);

        this.state = {
           
            empresaId: 0,
                nomeEmpresa: "EMPRESA UM S/A",
                cnpj: 0,
            
            dadosBancario: {
                banco: 0,
                bancoNome: "CONTA SIMPLES",
                agencia: 0,
                conta: 0,
                digitoConta: 0
    },
                saldo: 0
            
        }
        
    }

    

    componentDidMount(){

        consultarResumo().then(dados => this.setState(dados[empresa]))
        
    }




        

    render() {
        return (
        <div>
        {window.localStorage.setItem('saldo', this.state.saldo)}
        <NavBar></NavBar>   
        
        
            <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>Nome da Empresa: {this.state.nomeEmpresa}</th>
                        <th>CNPJ: {this.state.cnpj}</th>
                        <th>Número do Banco: {this.state.dadosBancario.banco}</th>
                        <th>Nome Banco: {this.state.dadosBancario.bancoNome}</th>
                        <th>Agência: {this.state.dadosBancario.agencia}</th>
                        <th>Conta: {this.state.dadosBancario.conta}</th>
                        <th>Digito da Conta: {this.state.dadosBancario.digitoConta}</th>
                        <th>Saldo: {this.state.saldo.toLocaleString("PT-BR", {style: "currency", currency : "BRL"})}</th>
                        </tr>
                    </thead>
                </Table>
            
                <Row>
            <Col><GastosForaCartao></GastosForaCartao></Col>
            <Col><GastosCartao></GastosCartao></Col>
            <Col><ResumoValores></ResumoValores></Col>
       </Row>
           
                <Extrato></Extrato>
        </div>
        )
    }
    
}

export default Home;

