

export default function HomePage() {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero">
                <h1>In cucina con Gino</h1>
                <p>Soluzioni innovative per il tuo business.</p>
                <button className="cta-button">Scopri di più</button>
            </section>

            {/* Info Section */}
            <section className="info">
                <h2>Chi Siamo</h2>
                <p>
                    Siamo un team di esperti dedicati a offrire servizi di alta qualità.
                    La nostra missione è aiutarti a crescere con soluzioni digitali innovative.
                </p>
            </section>
        </div>
    )
}
