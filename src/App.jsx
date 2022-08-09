import { Link, Outlet } from "react-router-dom";
import React, { useState } from "react";
import {
    MDBContainer,
    MDBCollapse,
    MDBNavbar,
    MDBNavbarToggler,
    MDBIcon,
    MDBBtn,
} from "mdb-react-ui-kit";
function App() {
    const [showNavExternal, setShowNavExternal] = useState(false);
    return (
        <>
            {/* menu */}
            <div className="mobile-block fixed-top mt-5">
                <MDBNavbar fixed="top" light bgColor="light">
                    <MDBContainer fluid>
                        <MDBNavbarToggler
                            type="button"
                            data-target="#navbarToggleExternalContent"
                            aria-controls="navbarToggleExternalContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            onClick={() => setShowNavExternal(!showNavExternal)}
                        >
                            <MDBIcon icon="bars" fas />
                        </MDBNavbarToggler>
                    </MDBContainer>
                </MDBNavbar>
                <MDBCollapse show={showNavExternal}>
                    <div className="bg-light shadow-3 p-4">
                        <MDBBtn
                            block
                            className="border-bottom m-0"
                            color="link"
                        >
                            <Link
                                to="/"
                                style={{
                                    textDecoration: "underline",
                                    color: "black",
                                }}
                            >
                                Home
                            </Link>
                        </MDBBtn>
                        <MDBBtn
                            block
                            className="border-bottom m-0"
                            color="link"
                        >
                            <Link
                                to="/faq"
                                style={{
                                    textDecoration: "underline",
                                    color: "black",
                                }}
                            >
                                Faq
                            </Link>
                        </MDBBtn>
                        <MDBBtn
                            block
                            className="border-bottom m-0"
                            color="link"
                        >
                            <Link
                                to="politica"
                                style={{
                                    textDecoration: "underline",
                                    color: "black",
                                }}
                            >
                                Política De Privacidade
                            </Link>
                        </MDBBtn>
                        <MDBBtn
                            block
                            className="border-bottom m-0"
                            color="link"
                        >
                            <Link
                                to="/termos"
                                style={{
                                    textDecoration: "underline",
                                    color: "black",
                                }}
                            >
                                Termo De Uso
                            </Link>
                        </MDBBtn>
                    </div>
                </MDBCollapse>
            </div>

            <div className="menu container mt-5">
                <Link to="/">
                    <img src="logo.png" alt="logo da mvonline" height={100} />
                </Link>
                <div
                    className="container menu_links"
                    style={{ gap: "1rem", fontSize: "x-large" }}
                >
                    <Link
                        to="/"
                        style={{ textDecoration: "underline", color: "black" }}
                    >
                        Home
                    </Link>
                    <Link
                        to="/faq"
                        style={{ textDecoration: "underline", color: "black" }}
                    >
                        Faq
                    </Link>
                    <Link
                        to="politica"
                        style={{ textDecoration: "underline", color: "black" }}
                    >
                        Política De Privacidade
                    </Link>
                    <Link
                        to="/termos"
                        style={{ textDecoration: "underline", color: "black" }}
                    >
                        Termo De Uso
                    </Link>
                </div>
            </div>
            <div className="content_homepage">
                <Outlet></Outlet>
            </div>
            {/* floating buttons */}
            <div className="whatsapp">
                <a href="">
                    <img
                        src="whatsapp.png"
                        alt="link para o chat do whatsapp"
                        height={64}
                    />
                </a>
            </div>
            {/* footer */}
            <div className="footer container container_column">
                <a href="mailto:mvonline@mvonline.com.br">
                    <p style={{ textDecoration: "underline", color: "black" }}>
                        mvonline@mvonline.com.br
                    </p>
                </a>
                <Link
                    to="/politica"
                    style={{ textDecoration: "underline", color: "black" }}
                >
                    Política De Privacidade
                </Link>
                <p>&copy;Peter Kim 2022</p>
            </div>
        </>
    );
}

export default App;
