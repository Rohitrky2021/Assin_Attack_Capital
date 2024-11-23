'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/lib/auth'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { CalendarIcon, User } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

interface Post {
  id: string
  title: string
  content: string
  author: {
    email: string
  }
  createdAt: string
}

export function PostsList() {
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { token, user } = useAuth()
  const { toast } = useToast()

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts?author=${user?.id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })

        if (!response.ok) {
          throw new Error('Failed to fetch posts')
        }

        const data = await response.json()
        setPosts(data)
      } catch (error) {
        toast({
          title: 'Error',
          description: 'Failed to fetch your posts',
          variant: 'destructive',
        })
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [token, user, toast])

  if (isLoading) {
    return <div>Loading posts...</div>
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Your Posts</h2>
      {posts.length === 0 ? (
        <Card>
          <CardContent className="pt-6">
            <p>You haven't created any posts yet.</p>
          </CardContent>
        </Card>
      ) : (
        posts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="/placeholder-avatar.jpg" alt={post.author.email} />
                    <AvatarFallback>
                      <User className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                  <span>{post.author.email}</span>
                  <span>•</span>
                  <span className="flex items-center">
                    <CalendarIcon className="mr-1 h-3 w-3" />
                    {new Date(post.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-3">{post.content}</p>
            </CardContent>
            <CardFooter>
              {/* Add edit and delete functionality here if needed */}
            </CardFooter>
          </Card>
        ))
      )}
    </div>
  )
}