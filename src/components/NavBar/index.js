import React, { Component } from 'react'
import { Container, Navbar} from 'react-bootstrap'

class NavBar extends	Component	{
    
    render() {
        return (
  
                    <Navbar bg="info" >

                        <Navbar.Brand href="#home" variant="light">
                        <img
                            src="https://icon-library.com/images/bank-icon/bank-icon-4.jpg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                         Banco Conta Simples
                        </Navbar.Brand>

                    </Navbar>
            
       
        )
    }
    
}

export default NavBar;

