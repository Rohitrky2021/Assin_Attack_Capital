import { Header } from '@/components/header'
import { CreatePostForm } from '@/components/create-post-form'
import { PostsList } from '@/components/posts-list'

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-primary">Dashboard</h1>
        <div className="grid gap-8 md:grid-cols-2">
          <CreatePostForm />
          <PostsList />
        </div>
      </div>
    </main>
  )
}