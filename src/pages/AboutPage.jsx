

function AboutPage() {
    return (
        <div className="about-container">
            {/* Sezione Introduzione */}
            <section className="intro">
                <h1>Chi Sono</h1>
                <p>
                    Ciao! Sono <strong>Gino Rossi</strong>, un professionista nel settore
                    della tecnologia e del design. Mi occupo di creare soluzioni digitali innovative.
                </p>
            </section>

            {/* Sezione Esperienza */}
            <section className="experience">
                <h2>La Mia Esperienza</h2>
                <ul>
                    <li>💻 Sviluppo Web & App</li>
                    <li>🎨 UI/UX Design</li>
                    <li>🚀 Digital Marketing</li>
                    <li>📊 Analisi & Strategia</li>
                </ul>
            </section>

            {/* Pulsante CTA */}
            <section className="contact">
                <h2>Contattami</h2>
                <p>Se vuoi collaborare con me, scrivimi!</p>
                <button className="cta-button">Scrivimi</button>
            </section>
        </div>
    );
}

export default AboutPage;
