import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Layout.css';
import indexKep from '../kepek/indexKep.png';

const Layout = () => {
    return (
        <>
            <header>
                <div className="rightSide"><p>Ásó, kapa,</p></div>
                <div id="indexkep">
                <img src={indexKep} alt="itt lesz egy kép" /></div>
                <div><p>harangvirág...</p></div>
            </header>




            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/"></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/main">Főoldal</Nav.Link>

                            <NavDropdown title="Webshop" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/public">Webshop</NavDropdown.Item>
                                <NavDropdown.Item href="/rendez">
                                    Rendez
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/valaszt">Választ</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/AboutUs">Rólunk</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <Container className="rightSide">
                    <Nav.Link href="/login">Bejelentkezés</Nav.Link>
                </Container>
            </Navbar>

            <aside id="asBal">Bal oldal</aside>
            <article>
                {/* Ide kerül majd az útvonalak/linkek által meghatározott tartalom */}
                <Outlet />
            </article>
            <aside id="asJobb">Jobb oldal</aside>
            <footer>Készítette: Dreilinger Vanessza Maja és Családi Alexandra</footer>
            <Outlet />
        </>
    );
};

export default Layout;
