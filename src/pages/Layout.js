import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
            {/* A publikus tartalom linkje */}
                        <Link to="/">Növények</Link>
                    </li>
                    <li>
            {/* Az admin oldal linkjetartalom linkje */}
                        <Link to="/admin">Admin felület</Link>
                    </li>
                </ul>
            </nav>
            <article>
            {/* Ide kerül majd az útvonalak/linkek által meghatározott tartalom */}
                <Outlet />
            </article>
        </>
    );
};

export default Layout;
