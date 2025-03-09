// Funzione che definisce il componente AboutPage
function AboutPage() {
    return (
        <div className="about-container">
            {/* Sezione Introduzione - Presenta l'autore e una breve descrizione */}
            <section className="intro">
                {/* Titolo della sezione Introduzione */}
                <h1>Chi Sono</h1>
                {/* Paragrafo con una breve descrizione dell'autore */}
                <p>
                    Ciao! Sono <strong>Gino Rossi</strong>, un professionista nel settore
                    della tecnologia e del design. Mi occupo di creare soluzioni digitali innovative.
                </p>
            </section>

            {/* Sezione Esperienza - Descrive le competenze e le aree di esperienza */}
            <section className="experience">
                {/* Titolo della sezione Esperienza */}
                <h2>La Mia Esperienza</h2>
                {/* Elenco puntato delle competenze e aree di esperienza */}
                <ul>
                    <li>💻 Sviluppo Web & App</li>
                    <li>🎨 UI/UX Design</li>
                    <li>🚀 Digital Marketing</li>
                    <li>📊 Analisi & Strategia</li>
                </ul>
            </section>

            {/* Sezione Contatto - Invita gli utenti a mettersi in contatto */}
            <section className="contact">
                {/* Titolo della sezione di contatto */}
                <h2>Contattami</h2>
                {/* Paragrafo che invita gli utenti a scrivere */}
                <p>Se vuoi collaborare con me, scrivimi!</p>
                {/* Pulsante di call-to-action (CTA) che invita a scrivere */}
                <button className="cta-button">Scrivimi</button>
            </section>
        </div>
    );
}

// Esporta il componente per poterlo usare in altre parti dell'app
export default AboutPage;
