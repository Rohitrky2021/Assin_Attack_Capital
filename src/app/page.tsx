import { PostCard } from '@/components/post-card'
import { Header } from '@/components/header'

async function getPosts() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'
    const res = await fetch(`${apiUrl}/posts`, {
      cache: 'no-store',
    })
    if (!res.ok) {
      return [] // Return empty array as fallback
    }
    return res.json()
  } catch (error) {
    console.error('Error fetching posts:', error)
    return [] // Return empty array on error
  }
}



export default async function Home() {
  const posts = await getPosts()

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-primary text-center">Latest Blog Posts</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.length > 0 ? (
            posts?.map((post?: any) => (
              <PostCard key={post._id} post={post} /> // Ensure _id is unique
            ))
          ) : (
            <p className="text-center col-span-full">No posts available at the moment.</p>
          )}
        </div>
      </div>
    </main>
  );
}
