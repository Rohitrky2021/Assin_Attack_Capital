'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Header } from '@/components/header'
import { LoginForm } from '@/components/login-form'

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Header/>
      <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <LoginForm />
      </div>
    </main>
  )
}