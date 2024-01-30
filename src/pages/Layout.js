import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import indexKep from '../kepek/indexKep.png';
import './Layout.css';

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
                                <NavDropdown.Item href="/public">Aktualitások</NavDropdown.Item>
                                <NavDropdown.Item href="/rendez">Növények</NavDropdown.Item>
                                <NavDropdown.Item href="/valaszt">Virágok</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/">Akciók</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/AboutUs">Rólunk</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <Container className="rightSide">
                    <Nav.Link href="/login">Bejelentkezés</Nav.Link>
                </Container>
            </Navbar>

            <aside id="asBal">
                <h2>Bal oldal</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus facere reprehenderit error, ratione nisi consectetur quaerat quae. Sapiente magni perferendis ullam debitis porro consequuntur delectus excepturi, a at saepe. Quia?
                    Fugit unde vero tempora eos temporibus iusto facilis mollitia cum assumenda adipisci neque minima aperiam quas, culpa, qui maxime ipsum accusantium quisquam, tempore laborum rem! Et quisquam quis aspernatur asperiores?
                    Ad, magnam consequuntur maxime temporibus tempore possimus quas deleniti vitae similique minima sint voluptate labore expedita minus libero corporis corrupti cum distinctio nemo totam reiciendis doloremque nulla. Iste, nobis libero!
                    Aliquid nam voluptatum pariatur consequuntur minus asperiores, aperiam laudantium natus ducimus consequatur laboriosam assumenda ipsam similique eaque suscipit repudiandae fugit illum. Non dolorum consequatur tempore tempora excepturi fuga eum quis.
                    Inventore, asperiores! Possimus corporis nihil, magni officia ratione delectus expedita recusandae. Minus quo sit nemo doloribus quisquam quas voluptate est nostrum eos, provident dolorum, aliquam incidunt et nulla, iure suscipit.
                </p>
            </aside>
            <article>
                {/* Ide kerül majd az útvonalak/linkek által meghatározott tartalom */}
                <Outlet />
            </article>
            <aside id="asJobb">
                <h2>Jobb oldal</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus facere reprehenderit error, ratione nisi consectetur quaerat quae. Sapiente magni perferendis ullam debitis porro consequuntur delectus excepturi, a at saepe. Quia?
                    Fugit unde vero tempora eos temporibus iusto facilis mollitia cum assumenda adipisci neque minima aperiam quas, culpa, qui maxime ipsum accusantium quisquam, tempore laborum rem! Et quisquam quis aspernatur asperiores?
                    Ad, magnam consequuntur maxime temporibus tempore possimus quas deleniti vitae similique minima sint voluptate labore expedita minus libero corporis corrupti cum distinctio nemo totam reiciendis doloremque nulla. Iste, nobis libero!
                    Aliquid nam voluptatum pariatur consequuntur minus asperiores, aperiam laudantium natus ducimus consequatur laboriosam assumenda ipsam similique eaque suscipit repudiandae fugit illum. Non dolorum consequatur tempore tempora excepturi fuga eum quis.
                    Inventore, asperiores! Possimus corporis nihil, magni officia ratione delectus expedita recusandae. Minus quo sit nemo doloribus quisquam quas voluptate est nostrum eos, provident dolorum, aliquam incidunt et nulla, iure suscipit.
                </p>
            </aside>
            <footer>Készítette: Dreilinger Vanessza Maja és Családi Alexandra</footer>
            <Outlet />
        </>
    );
};

export default Layout;
