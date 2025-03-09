// Definisce il componente HomePage come funzione di default
export default function HomePage() {
    // Inizia il ritorno dell'elemento JSX
    return (
        // Div principale che contiene l'intera pagina
        <div className="home-container">

            {/* Hero Section */}
            // Sezione della "hero", la parte principale in alto nella pagina
            <section className="hero">
                // Titolo principale, il nome o il brand dell'azienda
                <h1>In cucina con Gino</h1>

                // Descrizione breve dei servizi offerti
                <p>Soluzioni innovative per il tuo business.</p>

                // Bottone per chiamare all'azione, invita a scoprire di più
                <button className="cta-button">Scopri di più</button>
            </section>

            {/* Info Section */}
            // Sezione con informazioni sull'azienda
            <section className="info">
                // Titolo della sezione "Chi Siamo"
                <h2>Chi Siamo</h2>

                // Paragrafo che descrive l'azienda
                <p>
                    Siamo un team di esperti dedicati a offrire servizi di alta qualità.
                    La nostra missione è aiutarti a crescere con soluzioni digitali innovative.
                </p>
            </section>
        </div> // Chiusura del div principale
    ) // Fine del ritorno dell'elemento JSX
} // Fine della funzione HomePage
