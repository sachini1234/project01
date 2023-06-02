import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import logoimg from "../assets/img 3.png";

import "./styles/style.css";
export default class NavbarComp extends Component {
    render() {
        return (
            <div>
                <Navbar variant="dark" expand="sm" className="pt-0 pb-0 ps-sm-4">
                    <Navbar.Brand className="name ps-lg-4 ps-1 fs-5 fw-bold">
                        <img src={logoimg} alt="Logo" className="card-img mb-2 me-2"/>
                        AT DIGITAL
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="justify-content-sm-end text-sm-end justify-content-center text-center me-5">
                        <Nav className="mr-auto my-2 my-lg-0 fs-6 fw-bolder text-light">
                            <Nav.Link href="#home">SERVICES</Nav.Link>
                            <Nav.Link href="#features">ABOUT US</Nav.Link>
                            <Nav.Link href="#pricing">CONTACT US</Nav.Link>
                            <Nav.Link href="#pricing">CAREERS</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
