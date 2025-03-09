// Exporting the Footer component as the default export of the file
export default function Footer() {
    return (
        // Footer HTML element to wrap all the content within the footer section
        <footer>
            {/* Container div that wraps all the footer content */}
            <div className="container">

                {/* First footer section that holds the logo */}
                <div className="footer-section logo">
                    {/* Logo image with an alt text for accessibility */}
                    <img src="gino_logo.svg" alt="Logo" />
                </div>

                {/* Second footer section for the company information (Azienda) */}
                <div className="footer-section">
                    {/* Heading for this section */}
                    <h3>Azienda</h3>
                    {/* Unordered list of links related to the company */}
                    <ul>
                        <li><a href="#">Chi siamo</a></li> {/* Link to "Chi siamo" (About Us) */}
                        <li><a href="#">Servizi</a></li>   {/* Link to "Servizi" (Services) */}
                        <li><a href="#">Lavora con noi</a></li> {/* Link to "Lavora con noi" (Work with Us) */}
                    </ul>
                </div>

                {/* Third footer section for contact information */}
                <div className="footer-section">
                    <h3>Contatti</h3>  {/* Heading for this section */}
                    {/* Paragraphs displaying the contact information */}
                    <p>Email: info@azienda.com</p>   {/* Email address */}
                    <p>Telefono: +39 123 456 7890</p> {/* Phone number */}
                </div>

                {/* Fourth footer section for privacy-related links */}
                <div className="footer-section">
                    <h3>Privacy</h3>  {/* Heading for this section */}
                    {/* Unordered list of privacy-related links */}
                    <ul>
                        <li><a href="#">Termini e condizioni</a></li> {/* Link to "Termini e condizioni" (Terms and Conditions) */}
                        <li><a href="#">Informativa privacy</a></li>   {/* Link to "Informativa privacy" (Privacy Policy) */}
                    </ul>
                </div>

                {/* Fifth footer section for social media links */}
                <div className="footer-section">
                    <h3>Seguimi</h3>  {/* Heading for this section */}
                    {/* Social media icons (links) */}
                    <div className="social-icons">
                        <a href="#">🔵 Facebook</a>   {/* Facebook link */}
                        <a href="#">🟣 Instagram</a>   {/* Instagram link */}
                        <a href="#">🔷 LinkedIn</a>   {/* LinkedIn link */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
