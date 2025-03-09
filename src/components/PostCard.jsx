

export default function PostCard(props) {

    const { post } = props

    return (
        <>
            <div>
                <h4>{post.title}</h4>
                <p>{post.content}</p>
                <img src={post.image} alt={post.title} />
            </div>
        </>
    )
}
