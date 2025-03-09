
import { useContext } from "react"
import GlobalContext from "../context/GlobalContext"

import PostCard from "../components/PostCard"

export default function PostsPage() {

    const { posts } = useContext(GlobalContext)

    return (
        <>
            <h2>Posts</h2>

            <div>

                {
                    posts.map(post => <PostCard key={post.id} post={post} />)
                }

            </div>
        </>
    )
}
