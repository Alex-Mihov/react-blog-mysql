// Importazione del componente DefaultLayout che definisce la struttura di layout di base dell'app
import DefaultLayout from "./layout/DefaultLayout"

// Importazione del GlobalContext che sarà utilizzato per fornire uno stato globale a tutta l'app
import GlobalContext from "./context/GlobalContext"

// Importazione degli hook React per gestire stato (useState) e ciclo di vita (useEffect)
import { useState, useEffect } from "react"

// Importazione dei componenti necessari per la gestione della navigazione
import { BrowserRouter, Route, Routes } from "react-router-dom"

// Importazione della libreria Axios per fare richieste HTTP
import axios from "axios"

// Importazione delle pagine che saranno visualizzate nelle diverse route
import HomePage from "./pages/HomePage"
import PostsPage from "./pages/PostsPage"
import AboutPage from "./pages/AboutPage"
import ContactsPage from "./pages/ContactsPage"


// Funzione principale del componente App
function App() {

  // Definizione dello stato "posts" per memorizzare i dati dei post, inizializzato come array vuoto
  const [posts, setPosts] = useState([])

  // Funzione per fare una richiesta HTTP e ottenere i post dal server
  function FetchPosts() {
    // Utilizzo di axios per fare una GET alla risorsa "http://localhost:3000/posts"
    axios.get("http://localhost:3000/posts")
      .then((res) => {
        // Aggiornamento dello stato "posts" con i dati ricevuti dalla risposta
        setPosts(res.data)
        // Log dei dati ricevuti per il debug
        // console.log(res);
      })
      .catch(err => console.log(err))  // In caso di errore nella richiesta, log dell'errore
  }

  // useEffect viene usato per chiamare la funzione FetchPosts una sola volta quando il componente viene montato
  useEffect(FetchPosts, [])

  // Ritorno del JSX che definisce la struttura dell'app
  return (
    <>
      {/* Contesto globale che fornisce il valore "posts" a tutti i componenti figli */}
      <GlobalContext.Provider value={{ posts }}>
        {/* Configurazione del router per gestire la navigazione tra le diverse pagine */}
        <BrowserRouter>
          <Routes>
            {/* Definizione di una route di layout che avvolge le altre route */}
            <Route element={<DefaultLayout />}>
              {/* Definizione della route principale che punta alla HomePage */}
              <Route index element={<HomePage />} />
              {/* Definizione della route per visualizzare la pagina dei post */}
              <Route path="/posts" element={<PostsPage />} />
              {/* Definizione della route per visualizzare la pagina "About" */}
              <Route path="/about" element={<AboutPage />} />
              {/* Definizione della route per visualizzare la pagina di contatti */}
              <Route path="/contacts" element={<ContactsPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  )
}

// Esportazione del componente App come default per essere utilizzato altrove nell'app
export default App
