import React, { Component } from 'react'
import {Switch, Route, BrowserRouter, Redirect} from "react-router-dom"

//Tela Importadas 
import Login from "../src/View/Login/index"
import Home from "../src/View/Home/index"
import GastosCartao from "../src/components/GastosCartao/index"
import GastosForaCartao from "../src/components/GastosForaCartao/index"






class PrivateRoute extends React.Component{
    
    estaAutenticado = () =>{

        if(localStorage.getItem('TOKEN')){
            return true 
        }else{
            return false
        }
    } 

    render(){
        const {component: Component, ...props} = this.props

        if(this.estaAutenticado()){
            return <Component {...props}/>
        }else{
            return<Redirect to="/login"/>
        }
    }

}



class Routes extends React.Component{

    render(){

        return (
        <BrowserRouter >
            <Switch>
                <Route exact path="/" component ={Login} />  
                <PrivateRoute exact path="/home" component={Home} exact/>
                <PrivateRoute exact path="/gastoscartao" component={GastosCartao} exact/>
                <PrivateRoute exact path="/gastosforacartao" component={GastosForaCartao} exact/>
               
            </Switch>
        </BrowserRouter>
        )

    }

}


export default Routes;