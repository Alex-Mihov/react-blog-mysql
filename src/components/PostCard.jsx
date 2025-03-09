// Definisce una funzione componente chiamata PostCard che riceve 'props' come argomento.
export default function PostCard(props) {

    // Estrae l'oggetto 'post' dalle proprietà passate al componente.
    const { post } = props;

    return (
        <>
            {/* Inizia il blocco di codice che renderizza il contenuto del componente */}
            <div>
                {/* Mostra il titolo del post dentro un elemento h4 */}
                <h4>{post.title}</h4>
                {/* Mostra il contenuto del post dentro un paragrafo */}
                <p>{post.content}</p>
                {/* Mostra l'immagine del post con il 'src' che proviene dal campo 'image' dell'oggetto 'post' */}
                {/* L'attributo 'alt' è impostato sul titolo del post per la descrizione dell'immagine */}
                <img src={post.image} alt={post.title} />
            </div>
        </>
    );
}
