import React, { Component } from 'react'
import { Container } from './styles'
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css'

import Products from '../../Components/Products'

export default class Main extends Component{

    render(){
        return(
            <div className='main'>
                <React.Fragment>
                    <Container>
                        <Row>
                            <Products/>
                        </Row>
                    </Container>
                </React.Fragment>
            </div>
        )
    }
}



