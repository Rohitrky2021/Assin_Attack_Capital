'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { User } from 'lucide-react'
import { useAuth } from '@/lib/auth'
import { ThemeToggle } from '@/components/theme-toggle'

export function Header() {
  const router = useRouter()
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
    router.push('/')
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
            Personal Blog
          </Link>
          <nav className="flex items-center space-x-4">
            <ul className="flex space-x-2 items-center">
              <li>
                <Button variant="ghost" asChild>
                  <Link href="/">Home</Link>
                </Button>
              </li>
              {user ? (
                <>
                  <li>
                    <Button variant="ghost" asChild>
                      <Link href="/dashboard">Dashboard</Link>
                    </Button>
                  </li>
                  <li>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/placeholder-avatar.jpg" alt={user.email} />
                            <AvatarFallback className="bg-primary/10">
                              <User className="h-4 w-4 text-primary" />
                            </AvatarFallback>
                          </Avatar>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-40">
                        <DropdownMenuItem onClick={handleLogout} className="text-red-500 focus:text-red-500">
                          Logout
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Button variant="ghost" asChild>
                      <Link href="/login">Login</Link>
                    </Button>
                  </li>
                  <li>
                    <Button variant="default" asChild>
                      <Link href="/signup">Sign Up</Link>
                    </Button>
                  </li>
                </>
              )}
            </ul>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}