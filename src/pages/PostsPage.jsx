// Importa il hook 'useContext' da React, che consente di accedere ai dati nel contesto globale
import { useContext } from "react";

// Importa il contesto globale che è stato creato altrove nel progetto (GlobalContext)
import GlobalContext from "../context/GlobalContext";

// Importa il componente 'PostCard' che visualizzerà ogni post
import PostCard from "../components/PostCard";

// Funzione che rappresenta la pagina dei post
export default function PostsPage() {

    // Usa il hook 'useContext' per accedere ai dati del contesto globale, in particolare ai 'posts'
    const { posts } = useContext(GlobalContext);

    return (
        <>
            {/* Titolo della pagina */}
            <h2>Posts</h2>

            {/* Contenitore che conterrà la lista di PostCard */}
            <div>

                {
                    // Mappa l'array 'posts' e per ogni 'post', crea un componente 'PostCard' 
                    // Passando l'oggetto 'post' come prop e usando l'id del post come 'key' per ciascun elemento
                    posts.map(post => <PostCard key={post.id} post={post} />)
                }

            </div>
        </>
    )
}
