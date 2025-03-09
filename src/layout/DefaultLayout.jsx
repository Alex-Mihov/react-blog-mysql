// Importa il componente 'Outlet' da 'react-router-dom' per il rendering dinamico delle route
import { Outlet } from "react-router-dom"

// Importa il componente Header, che probabilmente contiene la navigazione o il logo
import Header from "../components/Header"

// Importa il componente Footer, che contiene il piè di pagina della pagina
import Footer from "../components/Footer"

// Importa il componente Main, che si occupa di visualizzare il contenuto principale della pagina
import Main from "../components/Main"

// Componente DefaultLayout che viene esportato come predefinito
export default function DefaultLayout() {
    return (
        <>
            {/* Renderizza il componente Header, probabilmente per visualizzare l'intestazione */}
            <Header />

            {/* Renderizza il componente Main per visualizzare il contenuto principale */}
            <Main />

            {/* Renderizza il componente Footer, contenente il piè di pagina */}
            <Footer />
        </>
    )
}
