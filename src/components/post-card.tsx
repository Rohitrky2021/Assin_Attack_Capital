import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { CalendarIcon, User } from 'lucide-react'

interface Post {
  id: string
  title: string
  content: string
  author: {
    email: string
  }
  createdAt: string
}

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
      <CardHeader className="bg-primary/5 pb-2">
        <CardTitle className="text-xl font-semibold text-primary">{post.title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <p className="text-muted-foreground mb-4 line-clamp-3">{post.content}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center text-sm text-muted-foreground bg-secondary/10 py-3">
        <div className="flex items-center space-x-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src="/placeholder-avatar.jpg" alt={post.author.email} />
            <AvatarFallback className="bg-primary/10">
              <User className="h-4 w-4 text-primary" />
            </AvatarFallback>
          </Avatar>
          <span className="text-foreground/80">{post.author.email}</span>
        </div>
        <div className="flex items-center space-x-1">
          <CalendarIcon className="h-4 w-4 text-primary/60" />
          <span>{new Date(post.createdAt).toLocaleDateString()}</span>
        </div>
      </CardFooter>
    </Card>
  )
}