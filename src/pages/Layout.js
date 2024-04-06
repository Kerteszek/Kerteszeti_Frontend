import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import indexKep from '../kepek/indexKep.png';
import './Layout.css';
import useAuthContext from "../context/AuthContext";
import { Button } from "react-bootstrap";

import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

const Layout = () => {

    const { user, logout } = useAuthContext();
    console.log(user)
    return (
        <div className="row">
            <header className="col-md-12">
                <div className="rightSide"><p>Ásó, kapa,</p></div>
                <div id="indexkep">
                    <img id="indexKep" src={indexKep} alt="itt lesz egy kép" /></div>
                <div><p>harangvirág...</p></div>
            </header>

            <Navbar expand="lg" className="bg-body-tertiary col-md-12 nav">
                <Container>
                    <Navbar.Brand href="/"></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/main">Főoldal</Nav.Link>

                            <NavDropdown title="Webshop" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/webshop">Minden termék</NavDropdown.Item>
                                <NavDropdown.Item href="/public">Aktualitások</NavDropdown.Item>
                                <NavDropdown.Item href="/rendez">Növények</NavDropdown.Item>
                                <NavDropdown.Item href="/valaszt">Virágok</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/">Akciók</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/AboutUs">Rólunk</Nav.Link>
                            {user && (user.permission === 0 || user.permission === 1) ? (
                                <>
                                    <Nav.Link href="/Admin">Admin</Nav.Link>
                                </>
                            ) : (
                                <></>
                            )}
                        </Nav>
                        <Nav>
                            {user ? (
                                <>
                                    <NavDropdown title="Profilom" id="basic-nav-dropdown" drop="start">
                                        <h6>Helló {user?.name}!</h6>

                                        <NavDropdown.Item href="/adatlap">
                                            Adataim
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="/adatlap">Rendeléseim {user?.permission}</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item className="text-danger" onClick={logout}>
                                            Kijelentkezés
                                        </NavDropdown.Item>
                                    </NavDropdown>

                                </>
                            ) : (
                                <Container className="rightSide">
                                    <Nav.Link href="/login">Bejelentkezés</Nav.Link>
                                </Container>

                            )}
                            <Nav.Link href="/adatlap">   Kosár</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <aside id="asBal" className="col-md-2 col-sm-1">
                Részletes keresés
                <Form inline="true">
                    <Row>
                        <Col xs="auto">
                            <Form.Control
                                type="text"
                                placeholder="Search"
                                className=" mr-sm-2"
                            />
                        </Col>
                        <Col xs="auto">
                            <Button type="submit">Submit</Button>
                        </Col>
                    </Row>
                </Form>

            </aside>
            <article className="col-md-8 col-sm-10">
                {/* Ide kerül majd az útvonalak/linkek által meghatározott tartalom */}
                <Outlet />
            </article>
            <aside id="asJobb" className="col-md-2 col-sm-1">
                <Card.Img variant="top" className="reklam" src="kepek/banner.jpg" />
            </aside>
            <footer className="col-md-12">Készítette: Dreilinger Vanessza Maja és Családi Alexandra</footer>

        </div>
    );
};

export default Layout;


