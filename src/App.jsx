import { Link, Outlet } from "react-router-dom";
function App() {
    return (
        <>
            {/* menu */}
            <div className="menu container">
                <Link to="/">
                    <img src="logo.png" alt="logo da mvonline" height={100} />
                </Link>
                <div className="container menu_links" style={{ gap: "1rem",fontSize:'x-large' }}>
                    <Link to="/" style={{ textDecoration: "underline",color:'black' }}>
                        Home
                    </Link>
                    <Link to="/faq" style={{ textDecoration: "underline",color:'black' }}>
                        Faq
                    </Link>
                    <Link to="politica" style={{ textDecoration: "underline",color:'black' }}>
                        Política De Privacidade
                    </Link>
                    <Link to="/termos" style={{ textDecoration: "underline",color:'black' }}>
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
                    <p style={{textDecoration:'underline',color:'black'}}>mvonline@mvonline.com.br</p>
                </a>
                <Link to="/politica" style={{textDecoration:'underline',color:'black'}}>Política De Privacidade</Link>
                <p>&copy;Peter Kim 2022</p>
            </div>
        </>
    );
}

export default App;
