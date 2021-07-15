import { Form , Row ,Col, Container, Button} from 'react-bootstrap'

const Registration = () =>(
    <Container>
        <h1>Registration Form</h1>
    <Form className="my-4">
    <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
    <Form.Label column sm="2">
      FirstName:
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text" required minlength="2" placeholder="Firstname" />
      <Form.Text id="passwordHelpBlock" muted>
       At least 2 characters
     </Form.Text>
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
    <Form.Label column sm="2">
      Surname:
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text" required minlength="3" placeholder="Surname" />
      <Form.Text id="surnameHelpBlock" muted>
       At least 3 characters
     </Form.Text>
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
    <Form.Label column sm="2">
      Email:
    </Form.Label>
    <Col sm="10">
      <Form.Control type="email" required placeholder="Email" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Password:
    </Form.Label>
    <Col sm="10">
      <Form.Control type="password" required minlength="5" maxlength="8" placeholder="Password" />
      <Form.Text id="passwordHelpBlock" muted>
       Your password must be 8 characters long, 1 letters and 1 numbers, and
        must not contain spaces, special characters, or emoji.
     </Form.Text>
    </Col>
    
    
  
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintex">
    <Form.Label column sm="2">
      Conform Password:
    </Form.Label>
    <Col sm="10">
      <Form.Control type="password" required  minlength="5" maxlength="8" placeholder="Password" />
      <Form.Text id="passwordHelpBlock" muted>
       Same as above
     </Form.Text>
    </Col>
  </Form.Group>
  <Button variant="success" type="submit">
                            Register
</Button>
</Form>
</Container>

)
export default Registration