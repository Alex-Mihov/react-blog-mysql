

function ContactsPage() {
    return (
        <div className="contacts-container">
            {/* Sezione Contatti */}
            <section className="contact-info">
                <h1>Contattami</h1>
                <p>📧 Email: <a href="mailto:info@azienda.com">info@azienda.com</a></p>
                <p>📞 Telefono: <a href="tel:+391234567890">+39 123 456 7890</a></p>
            </section>

            {/* Form di Contatto */}
            <section className="contact-form">
                <h2>Scrivimi un Messaggio</h2>
                <form>
                    <input type="text" placeholder="Nome" required />
                    <input type="email" placeholder="Email" required />
                    <textarea placeholder="Il tuo messaggio" required></textarea>
                    <button type="submit">Invia</button>
                </form>
            </section>
        </div>
    );
}

export default ContactsPage;

