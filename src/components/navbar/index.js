import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink, SearchBar, SearchButton } from './styles/navbar';

const NavLinks = ["Home", "Bedding", "Bath", "Bedroom", "Living", "Dining", "Outdoor", "Pillows"]

const NavBar = () => {
    return (
        <Navbar expand="xl" className="mb-3">
            <Container fluid>
                <Navbar.Brand href="#" style={{"fontFamily": "Sacramento, cursive", "fontSize":"46px","lineHeight":"46px"}}>Three Seaters<span style={{"fontSize":"14px"}}>&#127276;</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
                <Navbar.Offcanvas id="offcanvasNavbar-expand-md" aria-labelledby="offcanvasNavbarLabel-expand-md" placement="start">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel-expand-md"  style={{"fontFamily": "Sacramento, cursive","fontSize":"46px","lineHeight":"46px"}}>Three Seater<span style={{"fontSize":"14px"}}>&#127276;</span></Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-center flex-grow-1 pe-3">
                            {NavLinks.map((item, index) => (
                                <NavLink className="nav-link" href={`#action${index}`} key={`${item} link`}>{item.toUpperCase()}</NavLink>
                            ))}
                        </Nav>
                        <Nav className='justify-content-end'>
                        <NavLink href="#action" className="me-5 nav-link">LOGIN</NavLink>
                            <Form className="d-flex">
                                <SearchBar
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <SearchButton>Search</SearchButton>
                            </Form>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default NavBar;