import { posts } from '/home/allison/my-app/app/lib/placeholder-data.js';
import Post from '/home/allison/my-app/app/ui/components/posts/Post';
import { connectToDb } from '/home/allison/my-app/app/lib/data';

export default async function Page({ params }: { params: { id: string } }) {
    const post = posts.find((post) => post.id === params.id);
    const client = await connectToDb();
    return (
        <>
            {client && <p className='text-blue-500'>Connected to database</p>}
            <h1>Post</h1>
            {post && <Post {...post} />}
        </>)
}
