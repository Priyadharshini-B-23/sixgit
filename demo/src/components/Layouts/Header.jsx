
import React,{useState} from 'react';
import "../../styles/HeaderStyle.css";
import { Navbar, Nav, Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Logo from "../Code/Images/backimage2.png";


function Header() {


  
  const [nav,SetNav]=useState(false);
  //Scroll navbar
  const changeValueOnScroll=()=>{
    const scrollValue=document?.documentElement?.scrollTop;
    scrollValue>100? SetNav(true) : SetNav(false);
  };

  window.addEventListener("scroll",changeValueOnScroll);





  return (
<header>
<Navbar collapseOnSelect expand="lg"  className={`${nav === true ? "sticky" : ""}`} >
  <Container>
    <Navbar.Brand href="home" >
     <Link to="/" className='logo' >
     <img src={Logo} alt="Logo" className='img-fluid' />
     </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" >
    <Nav className="ms-auto" >
    {/* <Nav.Link as={Link} to="/" >Home</Nav.Link>
    <Nav.Link as={Link} >About</Nav.Link>
    <Nav.Link as={Link} >Services</Nav.Link>
    <Nav.Link as={Link} >Contact</Nav.Link> */}
 







 
    <Nav.Link as={Link} to="/seekersignup">User Signup</Nav.Link>
    <Nav.Link as={Link} to="/seekerlogin">User Signin</Nav.Link>

    <Nav.Link as={Link} to="/providersignup">Provider Signup</Nav.Link>
    <Nav.Link as={Link} to="/providerlogin">Provider Signin</Nav.Link>





    
    {/* <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
    <Nav.Link as={Link} to="/">
      <div className='cart' >
       <i class="bi bi-bag fs-5" ></i>
       <em className='roundpoint'>2</em>
      </div>
      </Nav.Link>                       */}
    </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</header>     


  );
}

export default Header;



<Navbar collapseOnSelect expand="lg" >
  <Container>
    <Navbar.Brand  href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto" >
    <Nav.Link href="home"  >Home</Nav.Link>
    <Nav.Link href="features"  >Features</Nav.Link>
    <Nav.Link href="pricing"  >Pricing</Nav.Link>
    </Nav>
  </Container>
   </Navbar>









