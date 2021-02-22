import React from 'react';
import { Dropdown, Nav, Navbar } from 'react-bootstrap'
import Logo from './../images/covid19.png'
import '../App.css'

const Navibar = () => (
    <Navbar bg="light" variant="light">
        <Nav>
            <Navbar.Brand href="/"><img src={Logo} width="30em" alt= "logo" id="_logo"></img></Navbar.Brand>
            <Nav.Item>
                <Nav.Link href="/about" id="media_title">About Us</Nav.Link>
            </Nav.Item>
            <Dropdown>
            <Dropdown.Toggle  id="dropdown-basic">
                Learn About Nurses
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="/statistics">Statistics of How Covid-19 Impacts Nurses</Dropdown.Item>
                <Dropdown.Item href="/effects">Effects of Covid-19 on Nurses and Why The Public Should Care</Dropdown.Item>
                <Dropdown.Item href="/howtohelp">How You Can Help Nurses</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            <Nav.Item>
                <Nav.Link href="/quiz" id="media_title">Take Quiz</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/contact" id="media_title">Contact Us</Nav.Link>
            </Nav.Item>
        </Nav>
    </Navbar>
)



export default Navibar;
