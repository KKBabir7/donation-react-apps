import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUserAlt } from "react-icons/fa";
import React ,{useState,useEffect} from "react";
import { Link, NavLink } from 'react-router-dom';

import Img from '../allImage/img'

const Navegation=()=>{
    const [sticky, setSticky] = useState(false);
    const handleScroll = () => {
        setSticky(window.pageYOffset > 0);
      };
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
   
    
  return (
    <>
     	<Navbar   className={sticky? 'navstyle' : 'nabvar'} expand="lg" fixed="top">
			<Container>
               <Navbar.Brand className='logo' href="#home"><img  src={Img[2]} /></Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav  className="justify-content-end linknemnu" style={{ width: "100%" }}>
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/blog'>Blog</NavLink>
                            <NavLink to='/Start'>Start</NavLink>
                            <NavLink to='/log'>Log</NavLink>
                            <NavLink to='/sign'><FaUserAlt /> Regester</NavLink>
                          

                        </Nav>
                    </Navbar.Collapse>
		    </Container>
		</Navbar > 
    </>
  )
}
export default Navegation
