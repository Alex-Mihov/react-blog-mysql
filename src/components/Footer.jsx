

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-section logo">
                    <img src="gino_logo.svg" alt="Logo" />
                </div>
                <div className="footer-section">
                    <h3>Azienda</h3>
                    <ul>
                        <li><a href="#">Chi siamo</a></li>
                        <li><a href="#">Servizi</a></li>
                        <li><a href="#">Lavora con noi</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Contatti</h3>
                    <p>Email: info@azienda.com</p>
                    <p>Telefono: +39 123 456 7890</p>
                </div>
                <div className="footer-section">
                    <h3>Privacy</h3>
                    <ul>
                        <li><a href="#">Termini e condizioni</a></li>
                        <li><a href="#">Informativa privacy</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Seguimi</h3>
                    <div className="social-icons">
                        <a href="#">🔵 Facebook</a>
                        <a href="#">🟣 Instagram</a>
                        <a href="#">🔷 LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}