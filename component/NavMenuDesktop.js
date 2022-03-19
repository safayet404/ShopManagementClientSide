import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
class NavMenuDesktop extends Component {
    render() {
        return (


            <Navbar className="nav-bar sticky-top" bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand>
                        <img className="nav-logo" src="/navlogo.svg" alt=" " />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className=" me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">

                                <Link activeClassName="d-none" href="/">
                                    <div className="nav-item-div">
                                        <i className="fa mx-1 fa-home" />Dashboard
                                    </div>
                                </Link>
                            </Nav.Link>

                            <Nav.Link href="#action1">

                                <Link activeClassName="d-none" href="/Users">
                                    <div className="nav-item-div">
                                        <i className="fa mx-1 fa-user" />Users
                                    </div>
                                </Link>
                            </Nav.Link>

                            <Nav.Link href="#action1">

                                <Link activeClassName="d-none" href="/Category">
                                    <div className="nav-item-div">
                                        <i className="fa mx-1 fa-list-ul" />Category
                                    </div>
                                </Link>
                            </Nav.Link>

                            <Nav.Link href="#action1">

                                <Link activeClassName="d-none" href="/Product">
                                    <div className="nav-item-div">
                                        <i className="fa mx-1 fa-lock" />Product
                                    </div>
                                </Link>
                            </Nav.Link>

                            <Nav.Link href="#action1">

                                <Link activeClassName="d-none" href="/Transaction">
                                    <div className="nav-item-div">
                                        <i className="fa mx-1 fa-money-bill" />Transaction
                                    </div>
                                </Link>
                            </Nav.Link>

                            <Nav.Link href="#action1">

                                <Link activeClassName="d-none" href="/Report">
                                    <div className="nav-item-div">
                                        <i className="fa mx-1 fa-file-invoice" />Report
                                    </div>
                                </Link>
                            </Nav.Link>



                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>


        );
    }
}

export default NavMenuDesktop;