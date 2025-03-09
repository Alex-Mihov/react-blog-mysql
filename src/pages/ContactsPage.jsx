// Definizione di un componente funzionale chiamato ContactsPage
function ContactsPage() {
    return (
        <div className="contacts-container">
            {/* Sezione Contatti - Questa sezione contiene le informazioni di contatto */}
            <section className="contact-info">
                <h1>Contattami</h1> {/* Questo è l'intestazione della sezione di contatto */}
                <p>📧 Email: <a href="mailto:info@azienda.com">info@azienda.com</a></p> {/* Link per inviare una mail con mailto */}
                <p>📞 Telefono: <a href="tel:+391234567890">+39 123 456 7890</a></p> {/* Link per fare una telefonata con tel */}
            </section>

            {/* Form di Contatto - Questa sezione contiene il modulo di contatto */}
            <section className="contact-form">
                <h2>Scrivimi un Messaggio</h2> {/* Questo è l'intestazione del modulo di contatto */}
                <form> {/* Inizio del modulo */}
                    <input type="text" placeholder="Nome" required /> {/* Campo di testo per il nome dell'utente */}
                    <input type="email" placeholder="Email" required /> {/* Campo per l'email dell'utente */}
                    <textarea placeholder="Il tuo messaggio" required></textarea> {/* Area di testo per il messaggio */}
                    <button type="submit">Invia</button> {/* Bottone per inviare il modulo */}
                </form>
            </section>
        </div>
    );
}

// Esportazione del componente ContactsPage per essere utilizzato altrove
export default ContactsPage;
