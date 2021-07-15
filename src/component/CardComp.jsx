
import {Component} from 'react'
import {Card, Badge} from 'react-bootstrap'
import CommentArea from './CommentArea'


class CardComp extends Component {

    state = {
        selectedBook : false
 
     }

     render() {
        return (
            <Card style={{ height: '416px'}} className="mt-3" key={this.props.item.asin}>
            <Card.Img style={{ height: '300px'}} variant="top" src={this.props.item.img} 
            onClick={
                ()=>{
                    this.setState({
                        selectedBook: !this.state.selectedBook
                    })
                }
            }/>
            <Card.Body>
                <Card.Title>{this.props.item.title} <Badge variant="warning">€ {this.props.item.price}</Badge> 
                </Card.Title>
        </Card.Body>
        {this.state.selectedBook &&<CommentArea bookData={this.props.item}/>}

        
        </Card>
)
}

}


export default CardComp