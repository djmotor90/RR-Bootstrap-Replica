import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import InputGroup from 'react-bootstrap/InputGroup';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container fluid>
        <Navbar.Brand style={{ margin: "5px 100px 0 20px" }} href="#home">
            <img src="https://d2guulkeunn7d8.cloudfront.net/assets/beetstrap/brand/instacart-logo-color-4db9d81ca0b7638befdc4bd331f64a2633df790c0b55ef627c99b1ba77af72b7.svg" alt="Brand Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <div className="d-flex w-100 justify-content-between">
                <Nav className="me-auto" navbarScroll>
                    {/* Your Nav links and dropdowns */}
                </Nav>
                <InputGroup className="flex-grow-1 me-5">
                
                <Form className="d-flex w-100">
                    <Form.Control type="search" placeholder="Search products and store" aria-label="Search products and store" size='lg' className="me-4 flex-grow-1 fa fa-search"/>
                    </Form> </InputGroup>
                    <Button variant="outline-success" className="me-4" style={{ whiteSpace: 'nowrap', padding: '0.375rem 0.75rem' }}>Log in</Button>
    <Button variant="success" style={{ whiteSpace: 'nowrap', padding: '0.375rem 0.75rem' }}>Sign up</Button>
               
            </div>
        </Navbar.Collapse>
    </Container>
</Navbar>

  );
}

export default NavScrollExample;



























// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'
// import Button from 'react-bootstrap/Button'


// function TopBar() {

//  return (   
//     <div>
//         <Navbar bg="light" expand="lg" >
//                 <Navbar.Brand style={{margin: "5px 0 0 20px"}} href="#home"><img src="https://d2guulkeunn7d8.cloudfront.net/assets/beetstrap/brand/instacart-logo-color-4db9d81ca0b7638befdc4bd331f64a2633df790c0b55ef627c99b1ba77af72b7.svg" /> </Navbar.Brand>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="mr-auto"> 
//                     </Nav>
//                     <Nav style={{padding: "24px 40px 20px 1350px", fontSize: "18px", lineHeight: "26px", fontWeight: "bolder", display: "flex" }} >
//                         <Nav.Link style={{color: "#343538"}} href="#LogIn">Log In</Nav.Link>
//                         <Button variant="success" style={{fontSize: "18px"}}>Sign Up</Button>{' '}
//                     </Nav>
//                 </Navbar.Collapse>
//         </Navbar>
// </div>
//  )}

// export default TopBar