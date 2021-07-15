
import {Component} from 'react'
import { Figure, Form, Button } from 'react-bootstrap'


//import CommentList from './component/CommentList'


class CommentArea extends Component {

 //   componentDidMount = async()=>{
        
   //     try {
     //       const response = await fetch(' https://striveschool-api.herokuapp.com/api/comments/' + this.props.bookData.asin ,{
       //         headers:{
           //         'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNzMzNGIzNTgxNzAwMTVjMjI3NWIiLCJpYXQiOjE2MjU3NDkxNzcsImV4cCI6MTYyNjk1ODc3N30.H4RZbFQaaj7QdwXtGHKnEQINp6zmhd54Eqt-fM0b15E"
         //       }
          //  })
            
           // const comments = await response.json()
            
        //} catch (error) {
          //  console.log(error)
        //}
       
    //}
    
  

    render(){
        console.log(this.props)
       return(
        <Figure>
            <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src={this.props.bookData.img}
            />
            <Figure.Caption>
                HALLO
            </Figure.Caption>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Control id="disabledTextInput" placeholder="Give Your feedback" />
                    <Button type="submit">Save</Button>
                </Form.Group>
            </Form>
       </Figure>

            
        )
    }

}
export default CommentArea