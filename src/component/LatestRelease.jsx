import { Component} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import items from '../data/horror.json'

import CardComp from './CardComp'


class NewRelease extends Component{

    
    render(){
        return(
            <Container fluid> 
            <h2>Books Available</h2>
                <Row>
                {
                    items.map(item =>(
                        <Col xs={12} md={4} lg={3}>
                                                 
                        <CardComp item={item} />
                        </Col>
                            ))
                        }
                    
                </Row>
                
            </Container>
  
        )
    }
    
}
export default NewRelease
