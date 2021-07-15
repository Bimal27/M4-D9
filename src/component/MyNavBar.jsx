import { Navbar, Nav ,Button} from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'

const MyNavBar = ()=>(
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
          <Link to="/"><Nav.Link href="#features">Home</Nav.Link></Link>
          <Nav.Link href="#pricing">About</Nav.Link>
          <Nav.Link href="#pricing">Browse</Nav.Link>
          <Link to="/registrations"> <Button className="ml-3" variant="success">Reservation</Button> </Link>
      </Nav>
  </Navbar.Collapse>
</Navbar>
)
export default withRouter (MyNavBar)