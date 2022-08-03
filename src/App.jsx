import { Link, Outlet } from "react-router-dom";
function App() {
    return (
        <>
            {/* menu */}
            <div className="menu container">
                <Link to="/">
                    <img src="logo.svg" alt="logo da mvonline" height={100} />
                </Link>
                <Link to="/faq">Faq</Link>
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
                    <p>mvonline@mvonline.com.br</p>
                </a>
                <Link to="/politica">Política De Privacidade</Link>
                <p>&copy;Peter Kim 2022</p>
            </div>
        </>
    );
}

export default App;
