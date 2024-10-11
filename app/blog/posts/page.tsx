import { posts } from '/home/allison/my-app/app/lib/placeholder-data';
import Post from '/home/allison/my-app/app/ui/components/posts/Post';
import Link from 'next/link';

export default function Page() {
    return (
        <>
            <h1>Posts</h1>
            {posts.map((post) => <Post key={post.id} {...post} />)}
        </>)
}