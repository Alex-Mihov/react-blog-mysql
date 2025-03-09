// Importa il metodo `createContext` da React, che permette di creare un contesto globale per l'applicazione
import { createContext } from "react";

// Crea il contesto globale chiamato `GlobalContext` utilizzando il metodo `createContext`
// `createContext` crea un oggetto con Provider e Consumer per la gestione dello stato globale
const GlobalContext = createContext()

// Esporta `GlobalContext` in modo che possa essere utilizzato in altre parti dell'applicazione
export default GlobalContext
