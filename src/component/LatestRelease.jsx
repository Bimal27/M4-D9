import { Component} from 'react'
import { Card, ListGroup,ListGroupItem,Col, Container, Row , Badge} from 'react-bootstrap'
import items from '../data/horror.json'

class NewRelease extends Component{
    render(){
        return(
            <Container fluid> 
            <h2>Books Available</h2>
                <Row>
                {
                    items.map(item =>(
                        <Col xs={12} md={4} lg={3}>
                        <Card style={{ height: '416px'}} className="mt-3" key={item.asin}>
                            <Card.Img style={{ height: '300px'}} variant="top" src={item.img} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <div><Badge bg="warning" text="dark">€ {item.price}</Badge></div>
                           </Card.Body>
                        </Card>
                        </Col>
                            ))
                        }
                    
                </Row>
            </Container>
  
        )
    }
}
export default NewRelease
