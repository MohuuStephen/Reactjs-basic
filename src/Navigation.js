import 'bootstrap/dist/css/bootstrap.min.css'
import {Nav, Navbar, NavbarBrand} from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';


export let Homepage=()=>
{
    return(
       <>
          <Navbar bg='primary' expand='lg'>
              <NavbarBrand href='https://en.wikipedia.org/wiki/Pushpa:_The_Rise'>STUDENTDETAILS</NavbarBrand>
              <NavbarToggle aria-controls='#mynavbar'></NavbarToggle>
              <NavbarCollapse id='mynavbar'>
                  <Nav>
                     
                     <Nav.Link href='/list1'>LISTALL</Nav.Link>
                  </Nav>
              </NavbarCollapse>
          </Navbar>


       </>
    );
}