import React, { Component } from 'react'

import {LoginService} from "../../services/LoginService"

import NavBar from "../../components/NavBar"

import './loginPage.css'

class Login	extends	Component	{
   
  
    fazerLogin	=	infosDoEvento	=>	{
        
        infosDoEvento.preventDefault();
         const	dadosDeLogin	=	{
                login:	this.refs.inputLogin.value,
                senha:	this.refs.inputSenha.value,
                empresa: this.refs.inputEmpresa.value
       
        };

        window.localStorage.setItem('empresa', dadosDeLogin.empresa);

        console.log(dadosDeLogin)
        LoginService.logar(dadosDeLogin)
        .then(()	=>	{
                this.props.history.push("/home");
        })
        .catch(err	=>	{
                console.error(`[Erro	${err.status}]`,	err.message);
        });
    }
        
    render() {
        return (
            
            <div>
            <NavBar></NavBar>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
                <div className="loginPage">
                      
                     
                    <div className="container">
                   
                 
                          
                            <form className="loginPage__form" action="/" onSubmit={this.fazerLogin}>
                                <br></br>

                                <h2>--------- Autenticação --------- </h2>

                                <br></br>

                                <div className="loginPage__inputWrap">
                                    <label className="loginPage__label" htmlFor="login">Login:</label> 
                                    <input ref="inputLogin" className="loginPage__input" type="text" id="login" name="senha"/>
                                </div>
                                <div className="loginPage__inputWrap">
                                    <label className="loginPage__label" htmlFor="senha">Senha:</label> 
                                    <input ref="inputSenha" className="loginPage__input" type="password" id="senha" name="senha"/>
                                </div>
                                <label className="loginPage__label" htmlFor="senha">Por favor, escolha o número do seu banco (Valores entre 0 e Etc..)</label> 
                                <div className="loginPage__inputWrap">
                                    <label className="loginPage__label" htmlFor="senha"></label> 
                                    <input ref="inputEmpresa" className="loginPage__input" type="text" name="empresa" defaultValue={0}  />
                                </div>
                                <div className="loginPage__inputWrap">
                                    <button className="loginPage__btnLogin" type="submit">
                                        Logar
                                    </button>
                                </div>
                            </form>
                   
                    </div>
                </div>
            </div>
        )
        
    }
    
}



export default Login;

