// Importa il componente NavLink da 'react-router-dom', che viene utilizzato per la navigazione tra le pagine in una Single Page Application (SPA)
import { NavLink } from "react-router-dom"

// Definisce un componente funzionale chiamato Header, che rappresenta la barra di navigazione del sito
export default function Header() {
    return (
        <>
            {/* Inizio del blocco <header>, che rappresenta l'intestazione della pagina */}
            <header>

                {/* Sezione logo */}
                <div className="logo">
                    {/* Immagine del logo del sito, il percorso è relativo alla cartella pubblica (../../public) */}
                    <img src="../../public/gino_logo.svg" alt="gino logo" />
                </div>

                {/* Sezione contenitore per i link di navigazione */}
                <div className="navlink-container">
                    {/* Link di navigazione che porta alla homepage */}
                    <NavLink className="navlink" to="/">
                        Home
                    </NavLink>
                    {/* Link di navigazione che porta alla pagina dei post */}
                    <NavLink className="navlink" to="/posts">
                        Posts
                    </NavLink>
                    {/* Link di navigazione che porta alla pagina 'About' */}
                    <NavLink className="navlink" to="/about">
                        About
                    </NavLink>
                    {/* Link di navigazione che porta alla pagina 'Contacts' */}
                    <NavLink className="navlink" to="/contacts">
                        Contacts
                    </NavLink>
                </div>

            </header>
            {/* Fine del blocco <header> */}
        </>
    )
}
